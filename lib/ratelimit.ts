/**
 * Persistent rate limiting using Supabase with in-memory fallback.
 *
 * This module provides sliding-window rate limiting that persists across
 * server restarts and deployments, preventing abuse even during deployments.
 * When Supabase is unavailable, an in-memory fallback ensures rate limiting
 * still operates (per-instance only).
 */

import { fetchWithTimeout } from "./fetch-with-timeout";
import logger from "./logger";

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

/** Timeout for Supabase rate limit requests (ms) */
const RATELIMIT_TIMEOUT_MS = 3000;

interface RateLimitResult {
  allowed: boolean;
  remaining: number;
  resetAt: Date;
}

interface RateLimitConfig {
  /** Unique identifier for the rate limit bucket (e.g., "waitlist", "contact") */
  bucket: string;
  /** Maximum requests allowed in the window */
  limit: number;
  /** Time window in milliseconds */
  windowMs: number;
}

/**
 * In-memory rate limiter fallback.
 * Only effective per serverless instance but still better than no rate limiting.
 */
const memoryStore = new Map<string, number[]>();

function checkMemoryRateLimit(key: string, config: RateLimitConfig): RateLimitResult {
  const now = Date.now();
  const windowStart = now - config.windowMs;
  const resetAt = new Date(now + config.windowMs);

  const hits = memoryStore.get(key) ?? [];
  const validHits = hits.filter((t) => t > windowStart);

  if (validHits.length >= config.limit) {
    memoryStore.set(key, validHits);
    return {
      allowed: false,
      remaining: 0,
      resetAt: new Date(Math.min(...validHits) + config.windowMs),
    };
  }

  validHits.push(now);
  memoryStore.set(key, validHits);

  return {
    allowed: true,
    remaining: config.limit - validHits.length,
    resetAt,
  };
}

// Periodically clean up stale entries from memory store (every 5 minutes)
if (typeof setInterval !== "undefined") {
  setInterval(() => {
    const now = Date.now();
    memoryStore.forEach((hits, key) => {
      const valid = hits.filter((t) => t > now - 300_000); // Keep last 5 min
      if (valid.length === 0) {
        memoryStore.delete(key);
      } else {
        memoryStore.set(key, valid);
      }
    });
  }, 300_000);
}

/**
 * Check if a request should be rate limited using Supabase for persistence.
 * Uses a sliding window algorithm. Falls back to in-memory rate limiting
 * when Supabase is unavailable.
 *
 * @param key - The key to rate limit (typically IP address or email)
 * @param config - Rate limit configuration
 * @returns RateLimitResult indicating if request is allowed
 */
export async function checkRateLimit(
  key: string,
  config: RateLimitConfig
): Promise<RateLimitResult> {
  const now = Date.now();
  const resetAt = new Date(now + config.windowMs);
  const compositeKey = `${config.bucket}:${key}`;

  // If Supabase is not configured, use in-memory fallback
  if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
    logger.warn("[ratelimit] Supabase not configured, using in-memory fallback");
    return checkMemoryRateLimit(compositeKey, config);
  }

  try {
    // Call Supabase RPC function to atomically check and update rate limit
    // This uses a stored procedure for atomic operations
    const response = await fetchWithTimeout(`${SUPABASE_URL}/rest/v1/rpc/check_rate_limit`, {
      method: "POST",
      headers: {
        apikey: SUPABASE_SERVICE_ROLE_KEY,
        Authorization: `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
        "Content-Type": "application/json",
        Prefer: "return=representation",
      },
      body: JSON.stringify({
        p_key: compositeKey,
        p_limit: config.limit,
        p_window_ms: config.windowMs,
        p_now: now,
      }),
      cache: "no-store",
      timeoutMs: RATELIMIT_TIMEOUT_MS,
    });

    if (!response.ok) {
      // If the RPC doesn't exist, fall back to simple table-based approach
      if (response.status === 404) {
        return checkRateLimitSimple(compositeKey, config, now);
      }
      logger.error(
        { status: response.status },
        "[ratelimit] Supabase RPC failed, using in-memory fallback"
      );
      return checkMemoryRateLimit(compositeKey, config);
    }

    const result = await response.json();
    return {
      allowed: result.allowed ?? true,
      remaining: result.remaining ?? config.limit,
      resetAt: new Date(result.reset_at ?? resetAt),
    };
  } catch (err) {
    logger.error({ err }, "[ratelimit] Error checking rate limit, using in-memory fallback");
    return checkMemoryRateLimit(compositeKey, config);
  }
}

/**
 * Simple table-based rate limiting fallback.
 * Uses a rate_limits table with key, hits (array of timestamps), updated_at.
 */
async function checkRateLimitSimple(
  key: string,
  config: RateLimitConfig,
  now: number
): Promise<RateLimitResult> {
  const windowStart = now - config.windowMs;
  const resetAt = new Date(now + config.windowMs);

  try {
    // Get existing rate limit record
    const getResponse = await fetchWithTimeout(
      `${SUPABASE_URL}/rest/v1/rate_limits?key=eq.${encodeURIComponent(key)}&select=hits`,
      {
        headers: {
          apikey: SUPABASE_SERVICE_ROLE_KEY!,
          Authorization: `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
        },
        cache: "no-store",
        timeoutMs: RATELIMIT_TIMEOUT_MS,
      }
    );

    if (!getResponse.ok) {
      logger.error(
        { status: getResponse.status },
        "[ratelimit] Failed to get rate limit, using in-memory fallback"
      );
      return checkMemoryRateLimit(key, config);
    }

    const records = (await getResponse.json()) as Array<{ hits: number[] }>;
    const existingHits = records[0]?.hits ?? [];

    // Filter hits within the current window
    const validHits = existingHits.filter((t: number) => t > windowStart);
    const hitCount = validHits.length;

    // Check if over limit
    if (hitCount >= config.limit) {
      return {
        allowed: false,
        remaining: 0,
        resetAt: new Date(Math.min(...validHits) + config.windowMs),
      };
    }

    // Add new hit
    const newHits = [...validHits, now];

    // Upsert the rate limit record
    const upsertResponse = await fetchWithTimeout(`${SUPABASE_URL}/rest/v1/rate_limits`, {
      method: "POST",
      headers: {
        apikey: SUPABASE_SERVICE_ROLE_KEY!,
        Authorization: `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
        "Content-Type": "application/json",
        Prefer: "resolution=merge-duplicates",
      },
      body: JSON.stringify({
        key,
        hits: newHits,
        updated_at: new Date(now).toISOString(),
      }),
      cache: "no-store",
      timeoutMs: RATELIMIT_TIMEOUT_MS,
    });

    if (!upsertResponse.ok) {
      logger.error({ status: upsertResponse.status }, "[ratelimit] Failed to upsert rate limit");
    }

    return {
      allowed: true,
      remaining: config.limit - newHits.length,
      resetAt,
    };
  } catch (err) {
    logger.error({ err }, "[ratelimit] Simple rate limit error, using in-memory fallback");
    return checkMemoryRateLimit(key, config);
  }
}

/**
 * Check cooldown for a specific key (e.g., email-based cooldown).
 * Simpler than rate limiting - just checks if enough time has passed.
 */
export async function checkCooldown(
  key: string,
  bucket: string,
  cooldownMs: number
): Promise<{ allowed: boolean; retryAfterMs: number }> {
  if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
    return { allowed: true, retryAfterMs: 0 };
  }

  const compositeKey = `cooldown:${bucket}:${key}`;
  const now = Date.now();

  try {
    const getResponse = await fetchWithTimeout(
      `${SUPABASE_URL}/rest/v1/rate_limits?key=eq.${encodeURIComponent(compositeKey)}&select=updated_at`,
      {
        headers: {
          apikey: SUPABASE_SERVICE_ROLE_KEY,
          Authorization: `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
        },
        cache: "no-store",
        timeoutMs: RATELIMIT_TIMEOUT_MS,
      }
    );

    if (!getResponse.ok) {
      return { allowed: true, retryAfterMs: 0 };
    }

    const records = (await getResponse.json()) as Array<{ updated_at: string }>;
    const lastHit = records[0]?.updated_at;

    if (lastHit) {
      const lastHitTime = new Date(lastHit).getTime();
      const elapsed = now - lastHitTime;
      if (elapsed < cooldownMs) {
        return { allowed: false, retryAfterMs: cooldownMs - elapsed };
      }
    }

    // Update cooldown timestamp
    await fetchWithTimeout(`${SUPABASE_URL}/rest/v1/rate_limits`, {
      method: "POST",
      headers: {
        apikey: SUPABASE_SERVICE_ROLE_KEY,
        Authorization: `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
        "Content-Type": "application/json",
        Prefer: "resolution=merge-duplicates",
      },
      body: JSON.stringify({
        key: compositeKey,
        hits: [],
        updated_at: new Date(now).toISOString(),
      }),
      cache: "no-store",
      timeoutMs: RATELIMIT_TIMEOUT_MS,
    });

    return { allowed: true, retryAfterMs: 0 };
  } catch (err) {
    logger.error({ err }, "[ratelimit] Cooldown check error");
    return { allowed: true, retryAfterMs: 0 };
  }
}

/**
 * Get client IP address from request headers.
 * Properly handles X-Forwarded-For from trusted proxies (Vercel).
 */
export function getClientIp(request: Request): string {
  // Vercel sets x-real-ip to the actual client IP
  const realIp = request.headers.get("x-real-ip");
  if (realIp) {
    return realIp;
  }

  // x-forwarded-for contains a comma-separated list of IPs
  // First IP is typically the client (when behind Vercel)
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    const firstIp = forwarded.split(",")[0]?.trim();
    if (firstIp && isValidIp(firstIp)) {
      return firstIp;
    }
  }

  return "unknown";
}

/**
 * Basic IP validation to prevent header spoofing with malformed data.
 */
function isValidIp(ip: string): boolean {
  // IPv4
  const ipv4Regex = /^(\d{1,3}\.){3}\d{1,3}$/;
  if (ipv4Regex.test(ip)) {
    const parts = ip.split(".").map(Number);
    return parts.every((part) => part >= 0 && part <= 255);
  }

  // IPv6 (simplified check)
  const ipv6Regex = /^([0-9a-fA-F]{0,4}:){2,7}[0-9a-fA-F]{0,4}$/;
  return ipv6Regex.test(ip);
}
