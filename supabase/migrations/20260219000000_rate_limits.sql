-- Migration: rate_limits table + check_rate_limit RPC
--
-- Run this in Supabase SQL Editor BEFORE pushing the application code.
-- Without this, the rate limiter will return 404 → fail closed → all form
-- submissions return 429 (blocked).
--
-- The check_rate_limit function uses atomic SELECT ... FOR UPDATE to prevent
-- race conditions under concurrent load (replaces the old two-phase GET+POST).

-- ─── Table ────────────────────────────────────────────────────────────────────

CREATE TABLE IF NOT EXISTS rate_limits (
  key        TEXT        PRIMARY KEY,
  hits       BIGINT[]    NOT NULL DEFAULT '{}',
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Enable Row Level Security (service_role key bypasses RLS, so API routes are
-- unaffected; this prevents accidental exposure via the anon key)
ALTER TABLE rate_limits ENABLE ROW LEVEL SECURITY;

-- No public access — service_role only
-- (If you previously had policies, drop them before re-applying)
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies
    WHERE tablename = 'rate_limits' AND policyname = 'service_role_only'
  ) THEN
    EXECUTE 'CREATE POLICY service_role_only ON rate_limits USING (false)';
  END IF;
END
$$;

-- ─── RPC: check_rate_limit ────────────────────────────────────────────────────
--
-- Atomically checks and records a rate-limit hit using a sliding window.
-- Uses SELECT ... FOR UPDATE to serialize concurrent requests for the same key,
-- eliminating the race condition in the old two-phase GET+POST approach.
--
-- Parameters:
--   p_key       TEXT    — composite key, e.g. "waitlist:1.2.3.4"
--   p_limit     INTEGER — max requests allowed in the window
--   p_window_ms BIGINT  — window size in milliseconds
--   p_now       BIGINT  — current epoch time in milliseconds (from app)
--
-- Returns JSON: { allowed, remaining, reset_at }

CREATE OR REPLACE FUNCTION check_rate_limit(
  p_key       TEXT,
  p_limit     INTEGER,
  p_window_ms BIGINT,
  p_now       BIGINT
)
RETURNS JSON
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_window_start BIGINT;
  v_hits         BIGINT[];
  v_valid_hits   BIGINT[];
  v_hit_count    INTEGER;
  v_reset_at     TIMESTAMPTZ;
BEGIN
  v_window_start := p_now - p_window_ms;

  -- Ensure a row exists for this key (no-op if already present)
  INSERT INTO rate_limits (key, hits, updated_at)
  VALUES (p_key, ARRAY[]::BIGINT[], NOW())
  ON CONFLICT (key) DO NOTHING;

  -- Lock the row to serialize concurrent requests for the same key
  SELECT hits
  INTO   v_hits
  FROM   rate_limits
  WHERE  key = p_key
  FOR UPDATE;

  -- Keep only hits within the current sliding window
  SELECT COALESCE(ARRAY_AGG(h ORDER BY h), ARRAY[]::BIGINT[])
  INTO   v_valid_hits
  FROM   UNNEST(COALESCE(v_hits, ARRAY[]::BIGINT[])) AS h
  WHERE  h > v_window_start;

  v_hit_count := COALESCE(ARRAY_LENGTH(v_valid_hits, 1), 0);

  -- Over the limit — return blocked
  IF v_hit_count >= p_limit THEN
    -- Reset time is when the oldest valid hit ages out of the window
    v_reset_at := TO_TIMESTAMP((v_valid_hits[1] + p_window_ms) / 1000.0);

    RETURN JSON_BUILD_OBJECT(
      'allowed',   false,
      'remaining', 0,
      'reset_at',  v_reset_at
    );
  END IF;

  -- Under the limit — record the hit and persist cleaned hits only
  UPDATE rate_limits
  SET    hits       = v_valid_hits || p_now,
         updated_at = NOW()
  WHERE  key = p_key;

  v_reset_at := TO_TIMESTAMP((p_now + p_window_ms) / 1000.0);

  RETURN JSON_BUILD_OBJECT(
    'allowed',   true,
    'remaining', p_limit - v_hit_count - 1,
    'reset_at',  v_reset_at
  );
END;
$$;

-- Grant execute to service_role (used by the API) and anon (for RPC calls)
GRANT EXECUTE ON FUNCTION check_rate_limit(TEXT, INTEGER, BIGINT, BIGINT)
  TO service_role, anon, authenticated;
