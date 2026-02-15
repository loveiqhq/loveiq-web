/**
 * Persistent rate limiting using Supabase
 *
 * This module provides sliding-window rate limiting that persists across
 * server restarts and deployments, preventing abuse even during deployments.
 */

import logger from "./logger";

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

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
 * Check if a request should be rate limited using Supabase for persistence.
 * Uses a sliding window algorithm.
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
  const windowStart = now - config.windowMs;
  const resetAt = new Date(now + config.windowMs);

  // If Supabase is not configured, fall back to allowing the request
  // but log a warning. In production, this should be configured.
  if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
    logger.warn("[ratelimit] Supabase not configured, rate limiting disabled");
    return { allowed: true, remaining: config.limit, resetAt };
  }

  const compositeKey = `${config.bucket}:${key}`;

  try {
    // Call Supabase RPC function to atomically check and update rate limit
    // This uses a stored procedure for atomic operations
    const response = await fetch(`${SUPABASE_URL}/rest/v1/rpc/check_rate_limit`, {
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
    });

    if (!response.ok) {
      // If the RPC doesn't exist, fall back to simple table-based approach
      if (response.status === 404) {
        return checkRateLimitSimple(compositeKey, config, now);
      }
      logger.error({ status: response.status }, "[ratelimit] Supabase RPC failed");
      // Fail open with warning - don't block users if DB has issues
      return { allowed: true, remaining: config.limit, resetAt };
    }

    const result = await response.json();
    return {
      allowed: result.allowed ?? true,
      remaining: result.remaining ?? config.limit,
      resetAt: new Date(result.reset_at ?? resetAt),
    };
  } catch (err) {
    logger.error({ err }, "[ratelimit] Error checking rate limit");
    // Fail open with warning - don't block users if DB has issues
    return { allowed: true, remaining: config.limit, resetAt };
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
    const getResponse = await fetch(
      `${SUPABASE_URL}/rest/v1/rate_limits?key=eq.${encodeURIComponent(key)}&select=hits`,
      {
        headers: {
          apikey: SUPABASE_SERVICE_ROLE_KEY!,
          Authorization: `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
        },
        cache: "no-store",
      }
    );

    if (!getResponse.ok) {
      logger.error({ status: getResponse.status }, "[ratelimit] Failed to get rate limit");
      return { allowed: true, remaining: config.limit, resetAt };
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
    const upsertResponse = await fetch(`${SUPABASE_URL}/rest/v1/rate_limits`, {
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
    logger.error({ err }, "[ratelimit] Simple rate limit error");
    return { allowed: true, remaining: config.limit, resetAt };
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
    const getResponse = await fetch(
      `${SUPABASE_URL}/rest/v1/rate_limits?key=eq.${encodeURIComponent(compositeKey)}&select=updated_at`,
      {
        headers: {
          apikey: SUPABASE_SERVICE_ROLE_KEY,
          Authorization: `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
        },
        cache: "no-store",
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
    await fetch(`${SUPABASE_URL}/rest/v1/rate_limits`, {
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
