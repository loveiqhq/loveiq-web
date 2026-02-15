import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";

// Must re-import in each test file to get fresh module state
let track: typeof import("../../lib/analytics").track;
let trackStartSurvey: typeof import("../../lib/analytics").trackStartSurvey;
let trackLearnMore: typeof import("../../lib/analytics").trackLearnMore;
let trackWaitlistSignup: typeof import("../../lib/analytics").trackWaitlistSignup;

describe("analytics", () => {
  const originalWindow = globalThis.window;

  beforeEach(async () => {
    // Dynamically import to reset module state
    vi.resetModules();
    const mod = await import("../../lib/analytics");
    track = mod.track;
    trackStartSurvey = mod.trackStartSurvey;
    trackLearnMore = mod.trackLearnMore;
    trackWaitlistSignup = mod.trackWaitlistSignup;
  });

  afterEach(() => {
    // Restore window
    if (originalWindow === undefined) {
      // @ts-expect-error - restoring undefined window for SSR test
      delete globalThis.window;
    }
  });

  describe("track", () => {
    it("does nothing when window is undefined (SSR safety)", () => {
      // @ts-expect-error - simulating SSR
      delete globalThis.window;
      // Should not throw
      expect(() => track("test_event")).not.toThrow();
    });

    it("does nothing when gtag is not available", () => {
      globalThis.window = { ...globalThis.window } as typeof globalThis.window;
      delete globalThis.window.gtag;
      expect(() => track("test_event")).not.toThrow();
    });

    it("calls window.gtag with event name", () => {
      const mockGtag = vi.fn();
      globalThis.window = { ...globalThis.window, gtag: mockGtag } as typeof globalThis.window;

      track("test_event");

      expect(mockGtag).toHaveBeenCalledWith("event", "test_event", undefined);
    });

    it("calls window.gtag with event name and params", () => {
      const mockGtag = vi.fn();
      globalThis.window = { ...globalThis.window, gtag: mockGtag } as typeof globalThis.window;

      track("test_event", { key: "value" });

      expect(mockGtag).toHaveBeenCalledWith("event", "test_event", { key: "value" });
    });
  });

  describe("trackStartSurvey", () => {
    it("fires cta_click with start_survey and location", () => {
      const mockGtag = vi.fn();
      globalThis.window = { ...globalThis.window, gtag: mockGtag } as typeof globalThis.window;

      trackStartSurvey("hero");

      expect(mockGtag).toHaveBeenCalledWith("event", "cta_click", {
        cta: "start_survey",
        location: "hero",
      });
    });

    it("passes nav location", () => {
      const mockGtag = vi.fn();
      globalThis.window = { ...globalThis.window, gtag: mockGtag } as typeof globalThis.window;

      trackStartSurvey("nav");

      expect(mockGtag).toHaveBeenCalledWith("event", "cta_click", {
        cta: "start_survey",
        location: "nav",
      });
    });
  });

  describe("trackLearnMore", () => {
    it("fires cta_click with learn_more and location", () => {
      const mockGtag = vi.fn();
      globalThis.window = { ...globalThis.window, gtag: mockGtag } as typeof globalThis.window;

      trackLearnMore("hero");

      expect(mockGtag).toHaveBeenCalledWith("event", "cta_click", {
        cta: "learn_more",
        location: "hero",
      });
    });
  });

  describe("trackWaitlistSignup", () => {
    it("fires waitlist_signup event with source", () => {
      const mockGtag = vi.fn();
      globalThis.window = { ...globalThis.window, gtag: mockGtag } as typeof globalThis.window;

      trackWaitlistSignup("landing-modal");

      expect(mockGtag).toHaveBeenCalledWith("event", "waitlist_signup", {
        method: "form",
        source: "landing-modal",
      });
    });
  });
});
