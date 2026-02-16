import { describe, it, expect, vi, afterEach, beforeEach } from "vitest";

// Mock logger before importing ratelimit
vi.mock("../../lib/logger", () => ({
  default: {
    info: vi.fn(),
    warn: vi.fn(),
    error: vi.fn(),
  },
}));

// The ratelimit module reads env at the top level, so we must set env BEFORE import
process.env.SUPABASE_URL = "https://test.supabase.co";
process.env.SUPABASE_SERVICE_ROLE_KEY = "test-service-key";

import { checkRateLimit, checkCooldown } from "../../lib/ratelimit";

describe("checkRateLimit", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it("falls back to in-memory rate limiting on network error", async () => {
    vi.spyOn(globalThis, "fetch").mockRejectedValue(new Error("Network error"));

    const result = await checkRateLimit("1.2.3.4", {
      bucket: "test-net-error",
      limit: 5,
      windowMs: 60000,
    });

    expect(result.allowed).toBe(true);
    // In-memory fallback counts the current request (limit - 1)
    expect(result.remaining).toBe(4);
  });

  it("returns a valid resetAt date", async () => {
    vi.spyOn(globalThis, "fetch").mockRejectedValue(new Error("fail"));
    const before = Date.now();

    const result = await checkRateLimit("1.2.3.4", {
      bucket: "test-reset",
      limit: 5,
      windowMs: 60000,
    });

    expect(result.resetAt.getTime()).toBeGreaterThanOrEqual(before);
  });

  it("returns remaining minus one on error (in-memory fallback)", async () => {
    vi.spyOn(globalThis, "fetch").mockRejectedValue(new Error("fail"));

    const result = await checkRateLimit("192.168.1.1", {
      bucket: "contact-err",
      limit: 3,
      windowMs: 30000,
    });

    // In-memory fallback counts the current request (limit - 1)
    expect(result.allowed).toBe(true);
    expect(result.remaining).toBe(2);
  });
});

describe("checkCooldown", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it("fails open on fetch error", async () => {
    vi.spyOn(globalThis, "fetch").mockRejectedValue(new Error("Network error"));

    const result = await checkCooldown("test@example.com", "waitlist-email", 60000);
    expect(result.allowed).toBe(true);
    expect(result.retryAfterMs).toBe(0);
  });

  it("returns zero retryAfterMs on error", async () => {
    vi.spyOn(globalThis, "fetch").mockRejectedValue(new Error("fail"));

    const result = await checkCooldown("test@example.com", "waitlist-email", 60000);
    expect(result.retryAfterMs).toBe(0);
  });
});
