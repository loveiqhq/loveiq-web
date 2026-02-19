import { describe, it, expect, vi, beforeEach } from "vitest";

// --- Mocks (must be before imports) ---

vi.mock("../../lib/logger", () => ({
  default: { info: vi.fn(), warn: vi.fn(), error: vi.fn() },
}));

const mockVerifyCsrf = vi.fn<() => Promise<boolean>>();
vi.mock("../../lib/csrf", () => ({
  verifyCsrfToken: (...args: unknown[]) => mockVerifyCsrf(...(args as [])),
}));

const mockCheckRateLimit = vi.fn();
const mockCheckCooldown = vi.fn();
const mockGetClientIp = vi.fn();
vi.mock("../../lib/ratelimit", () => ({
  checkRateLimit: (...args: unknown[]) => mockCheckRateLimit(...args),
  checkCooldown: (...args: unknown[]) => mockCheckCooldown(...args),
  getClientIp: (...args: unknown[]) => mockGetClientIp(...args),
}));

const mockFetchWithTimeout = vi.fn();
vi.mock("../../lib/fetch-with-timeout", () => ({
  fetchWithTimeout: (...args: unknown[]) => mockFetchWithTimeout(...args),
}));

const mockEmailSend = vi.fn();
vi.mock("resend", () => ({
  Resend: class {
    emails = { send: mockEmailSend };
  },
}));

vi.mock("../../lib/emails/waitlist", () => ({
  waitlistEmail: () => ({
    subject: "Test Subject",
    html: "<p>Test</p>",
    text: "Test",
  }),
}));

// Set env vars before importing the handler
process.env.SUPABASE_URL = "https://test.supabase.co";
process.env.SUPABASE_SERVICE_ROLE_KEY = "test-service-key";
process.env.RESEND_API_KEY = "re_test_key";

import { POST } from "../../app/api/waitlist/route";

// --- Helpers ---

function makeRequest(body: unknown = { email: "alice@example.com" }) {
  return new Request("http://localhost:3000/api/waitlist", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
}

function allowCsrf() {
  mockVerifyCsrf.mockResolvedValue(true);
}

function allowRateLimit() {
  mockCheckRateLimit.mockResolvedValue({
    allowed: true,
    remaining: 4,
    resetAt: new Date(Date.now() + 60000),
  });
}

function allowCooldown() {
  mockCheckCooldown.mockResolvedValue({ allowed: true, retryAfterMs: 0 });
}

function mockSupabaseNotFound() {
  mockFetchWithTimeout.mockResolvedValueOnce({
    ok: true,
    json: async () => [],
  });
}

function mockSupabaseInsertOk() {
  mockFetchWithTimeout.mockResolvedValueOnce({
    ok: true,
    json: async () => [{ id: "new-id" }],
  });
}

function mockSlackOk() {
  mockFetchWithTimeout.mockResolvedValueOnce({
    ok: true,
    status: 200,
    text: async () => "ok",
  });
}

// --- Tests ---

describe("POST /api/waitlist", () => {
  beforeEach(() => {
    vi.resetAllMocks();
    mockGetClientIp.mockReturnValue("1.2.3.4");
  });

  it("returns 403 when CSRF token is invalid", async () => {
    mockVerifyCsrf.mockResolvedValue(false);

    const res = await POST(makeRequest());
    expect(res.status).toBe(403);

    const json = await res.json();
    expect(json.error).toBe("Invalid request.");
  });

  it("returns 429 when rate limited", async () => {
    allowCsrf();
    mockCheckRateLimit.mockResolvedValue({
      allowed: false,
      remaining: 0,
      resetAt: new Date(Date.now() + 30000),
    });

    const res = await POST(makeRequest());
    expect(res.status).toBe(429);

    const json = await res.json();
    expect(json.error).toBe("Please try again later.");
    expect(res.headers.get("Retry-After")).toBeDefined();
  });

  it("returns 400 for invalid email", async () => {
    allowCsrf();
    allowRateLimit();

    const res = await POST(makeRequest({ email: "not-an-email" }));
    expect(res.status).toBe(400);

    const json = await res.json();
    expect(json.error).toBe("Invalid input");
  });

  it("returns 400 for missing body", async () => {
    allowCsrf();
    allowRateLimit();

    const req = new Request("http://localhost:3000/api/waitlist", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: "not json",
    });

    const res = await POST(req);
    expect(res.status).toBe(400);
  });

  it("returns 400 when honeypot field is filled", async () => {
    allowCsrf();
    allowRateLimit();

    const res = await POST(
      makeRequest({
        email: "alice@example.com",
        website: "http://spam.bot",
      })
    );
    expect(res.status).toBe(400);
  });

  it("returns 429 when email cooldown is active", async () => {
    allowCsrf();
    allowRateLimit();
    mockCheckCooldown.mockResolvedValue({
      allowed: false,
      retryAfterMs: 45000,
    });

    const res = await POST(makeRequest({ email: "alice@example.com" }));
    expect(res.status).toBe(429);

    const json = await res.json();
    expect(json.error).toBe("Please wait before retrying.");
  });

  it("returns success: true with already: true for existing email", async () => {
    allowCsrf();
    allowRateLimit();
    allowCooldown();

    mockFetchWithTimeout.mockResolvedValueOnce({
      ok: true,
      json: async () => [{ id: "existing-id" }],
    });

    const res = await POST(makeRequest({ email: "alice@example.com" }));
    expect(res.status).toBe(200);

    const json = await res.json();
    expect(json.success).toBe(true);
    expect(json.already).toBe(true);
  });

  it("returns 500 when Supabase existence check fails", async () => {
    allowCsrf();
    allowRateLimit();
    allowCooldown();

    mockFetchWithTimeout.mockResolvedValueOnce({
      ok: false,
      status: 500,
    });

    const res = await POST(makeRequest({ email: "alice@example.com" }));
    expect(res.status).toBe(500);

    const json = await res.json();
    expect(json.error).toBe("Unable to process request.");
  });

  it("returns 500 when Supabase insert fails", async () => {
    allowCsrf();
    allowRateLimit();
    allowCooldown();
    mockSupabaseNotFound();

    mockFetchWithTimeout.mockResolvedValueOnce({
      ok: false,
      status: 500,
    });

    const res = await POST(makeRequest({ email: "alice@example.com" }));
    expect(res.status).toBe(500);
  });

  it("returns success even when email sending fails (fire-and-forget)", async () => {
    // Email is sent asynchronously after the DB insert — a Resend failure must
    // not fail the request, because the signup is already persisted in the DB.
    allowCsrf();
    allowRateLimit();
    allowCooldown();
    mockSupabaseNotFound();
    mockSupabaseInsertOk();

    mockEmailSend.mockResolvedValue({ error: { message: "Send failed" } });

    const res = await POST(makeRequest({ email: "alice@example.com" }));
    expect(res.status).toBe(200);
  });

  it("returns success for full happy path", async () => {
    allowCsrf();
    allowRateLimit();
    allowCooldown();
    mockSupabaseNotFound();
    mockSupabaseInsertOk();
    mockEmailSend.mockResolvedValue({ error: null });

    const res = await POST(
      makeRequest({
        email: "Alice@Example.com",
        firstName: "Alice",
        source: "landing-page",
      })
    );
    expect(res.status).toBe(200);

    const json = await res.json();
    expect(json.success).toBe(true);
  });

  it("normalizes email to lowercase", async () => {
    allowCsrf();
    allowRateLimit();
    allowCooldown();
    mockSupabaseNotFound();
    mockSupabaseInsertOk();
    mockEmailSend.mockResolvedValue({ error: null });

    await POST(makeRequest({ email: "ALICE@EXAMPLE.COM" }));

    expect(mockCheckCooldown).toHaveBeenCalledWith(
      "alice@example.com",
      "waitlist-email",
      expect.any(Number)
    );
  });

  it("calls checkRateLimit with client IP", async () => {
    allowCsrf();
    mockGetClientIp.mockReturnValue("10.0.0.1");
    mockCheckRateLimit.mockResolvedValue({
      allowed: false,
      remaining: 0,
      resetAt: new Date(Date.now() + 60000),
    });

    await POST(makeRequest());

    expect(mockCheckRateLimit).toHaveBeenCalledWith(
      "10.0.0.1",
      expect.objectContaining({ bucket: "waitlist", limit: 5 })
    );
  });
});
