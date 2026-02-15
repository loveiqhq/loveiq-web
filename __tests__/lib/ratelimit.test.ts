import { describe, it, expect } from "vitest";
import { getClientIp } from "../../lib/ratelimit";

function makeRequest(headers: Record<string, string> = {}): Request {
  return new Request("http://localhost/api/test", {
    headers: new Headers(headers),
  });
}

describe("getClientIp", () => {
  it("returns x-real-ip when present", () => {
    const req = makeRequest({ "x-real-ip": "1.2.3.4" });
    expect(getClientIp(req)).toBe("1.2.3.4");
  });

  it("prefers x-real-ip over x-forwarded-for", () => {
    const req = makeRequest({
      "x-real-ip": "1.1.1.1",
      "x-forwarded-for": "2.2.2.2, 3.3.3.3",
    });
    expect(getClientIp(req)).toBe("1.1.1.1");
  });

  it("returns first IP from x-forwarded-for when x-real-ip is absent", () => {
    const req = makeRequest({ "x-forwarded-for": "10.0.0.1, 10.0.0.2" });
    expect(getClientIp(req)).toBe("10.0.0.1");
  });

  it("handles single IP in x-forwarded-for", () => {
    const req = makeRequest({ "x-forwarded-for": "192.168.1.1" });
    expect(getClientIp(req)).toBe("192.168.1.1");
  });

  it("trims whitespace from x-forwarded-for IPs", () => {
    const req = makeRequest({ "x-forwarded-for": "  10.0.0.1 , 10.0.0.2" });
    expect(getClientIp(req)).toBe("10.0.0.1");
  });

  it("returns 'unknown' when no IP headers present", () => {
    const req = makeRequest();
    expect(getClientIp(req)).toBe("unknown");
  });

  it("returns 'unknown' when x-forwarded-for has invalid IP", () => {
    const req = makeRequest({ "x-forwarded-for": "not-an-ip" });
    expect(getClientIp(req)).toBe("unknown");
  });

  it("returns 'unknown' when x-forwarded-for has IP with octets > 255", () => {
    const req = makeRequest({ "x-forwarded-for": "999.999.999.999" });
    expect(getClientIp(req)).toBe("unknown");
  });

  it("accepts valid IPv6 addresses in x-forwarded-for", () => {
    const req = makeRequest({ "x-forwarded-for": "2001:db8::1" });
    expect(getClientIp(req)).toBe("2001:db8::1");
  });
});
