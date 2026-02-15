import { describe, it, expect } from "vitest";
import { z } from "zod";

// Copy of the waitlist schema from app/api/waitlist/route.ts
// Tested in isolation to avoid importing the full route handler
const waitlistSchema = z.object({
  email: z.string().email().max(320),
  source: z.string().max(120).optional(),
  firstName: z.string().max(80).optional().nullable(),
  website: z.string().max(0).optional().nullable(), // honeypot must be empty
});

describe("waitlist validation schema", () => {
  it("accepts valid input with all fields", () => {
    const result = waitlistSchema.safeParse({
      email: "user@example.com",
      source: "landing-page",
      firstName: "Alice",
      website: "",
    });
    expect(result.success).toBe(true);
  });

  it("accepts minimal valid input (email only)", () => {
    const result = waitlistSchema.safeParse({
      email: "user@example.com",
    });
    expect(result.success).toBe(true);
  });

  it("rejects missing email", () => {
    const result = waitlistSchema.safeParse({
      source: "landing",
    });
    expect(result.success).toBe(false);
  });

  it("rejects invalid email format", () => {
    const result = waitlistSchema.safeParse({
      email: "not-an-email",
    });
    expect(result.success).toBe(false);
  });

  it("rejects email exceeding max length", () => {
    const longEmail = "a".repeat(310) + "@example.com";
    const result = waitlistSchema.safeParse({
      email: longEmail,
    });
    expect(result.success).toBe(false);
  });

  it("accepts null firstName", () => {
    const result = waitlistSchema.safeParse({
      email: "user@example.com",
      firstName: null,
    });
    expect(result.success).toBe(true);
  });

  it("rejects firstName exceeding max length", () => {
    const result = waitlistSchema.safeParse({
      email: "user@example.com",
      firstName: "A".repeat(81),
    });
    expect(result.success).toBe(false);
  });

  it("rejects source exceeding max length", () => {
    const result = waitlistSchema.safeParse({
      email: "user@example.com",
      source: "x".repeat(121),
    });
    expect(result.success).toBe(false);
  });

  it("rejects non-empty honeypot field (website)", () => {
    const result = waitlistSchema.safeParse({
      email: "user@example.com",
      website: "http://spam.com",
    });
    expect(result.success).toBe(false);
  });

  it("accepts empty string honeypot field", () => {
    const result = waitlistSchema.safeParse({
      email: "user@example.com",
      website: "",
    });
    expect(result.success).toBe(true);
  });

  it("accepts null honeypot field", () => {
    const result = waitlistSchema.safeParse({
      email: "user@example.com",
      website: null,
    });
    expect(result.success).toBe(true);
  });

  it("accepts omitted optional fields", () => {
    const result = waitlistSchema.safeParse({
      email: "test@test.org",
    });
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.source).toBeUndefined();
      expect(result.data.firstName).toBeUndefined();
      expect(result.data.website).toBeUndefined();
    }
  });
});
