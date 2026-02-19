import { describe, it, expect, vi, beforeEach } from "vitest";

const mockFetchWithTimeout = vi.fn();
vi.mock("../../lib/fetch-with-timeout", () => ({
  fetchWithTimeout: (...args: unknown[]) => mockFetchWithTimeout(...args),
}));

import { GET } from "../../app/api/health/route";

describe("GET /api/health", () => {
  beforeEach(() => {
    vi.resetAllMocks();
    process.env.SUPABASE_URL = "https://test.supabase.co";
    process.env.SUPABASE_SERVICE_ROLE_KEY = "test-service-key";
    process.env.RESEND_API_KEY = "re_test";
  });

  it("returns 200 when all checks pass", async () => {
    mockFetchWithTimeout.mockResolvedValue({ ok: true, status: 200 });

    const res = await GET();
    expect(res.status).toBe(200);

    const json = await res.json();
    expect(json.ok).toBe(true);
    expect(json.checks.supabase).toBe("ok");
    expect(json.checks.resend).toBe("configured");
    expect(json.checks.env).toBe("ok");
  });

  it("returns 503 when Supabase returns non-ok status", async () => {
    mockFetchWithTimeout.mockResolvedValue({ ok: false, status: 503 });

    const res = await GET();
    expect(res.status).toBe(503);

    const json = await res.json();
    expect(json.ok).toBe(false);
    expect(json.checks.supabase).toBe("error");
  });

  it("returns 503 when Supabase ping throws", async () => {
    mockFetchWithTimeout.mockRejectedValue(new Error("Network error"));

    const res = await GET();
    expect(res.status).toBe(503);

    const json = await res.json();
    expect(json.checks.supabase).toBe("error");
  });

  it("returns 503 and lists missing env vars", async () => {
    delete process.env.RESEND_API_KEY;
    mockFetchWithTimeout.mockResolvedValue({ ok: true, status: 200 });

    const res = await GET();
    expect(res.status).toBe(503);

    const json = await res.json();
    expect(json.checks.env).toContain("RESEND_API_KEY");
    expect(json.checks.resend).toBe("unconfigured");
  });

  it("returns unconfigured supabase when SUPABASE_URL is absent", async () => {
    delete process.env.SUPABASE_URL;
    delete process.env.SUPABASE_SERVICE_ROLE_KEY;

    const res = await GET();
    expect(res.status).toBe(503);

    const json = await res.json();
    expect(json.checks.supabase).toBe("unconfigured");
  });
});
