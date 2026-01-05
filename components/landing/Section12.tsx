"use client";

import type { FC } from "react";
import { trackStartSurvey } from "../../lib/analytics";

const Section12: FC = () => {
  return (
    <section className="section-shell relative overflow-hidden bg-gradient-to-br from-[#1a0d25] via-[#0f0a18] to-[#2a1640] px-4 text-text-primary">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(242,109,79,0.12),transparent_45%),radial-gradient(circle_at_80%_30%,rgba(124,88,255,0.14),transparent_45%),radial-gradient(circle_at_50%_80%,rgba(111,63,255,0.16),transparent_50%)]" />
      <div className="pointer-events-none absolute inset-0 bg-noise opacity-12" />
      <div className="content-shell relative flex max-w-5xl flex-col items-center gap-8 text-center">
        <div className="space-y-3">
          <h3 className="font-serif text-4xl leading-tight sm:text-5xl md:text-6xl">
            Ready to understand your <br />
            <span className="inline-block text-[#f26d4f] underline decoration-[#f26d4f]/80 decoration-4 underline-offset-4">
              deepest self?
            </span>
          </h3>
          <p className="text-lg leading-relaxed text-white/85">
            Join 30,000+ others who have unlocked better relationships, clearer communication, and deeper confidence.
          </p>
        </div>

        <div className="flex flex-col items-center gap-4">
          <a
            href="/waitlist"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-br from-[#fe6839] via-[#ff7f3e] to-[#ff9450] px-8 py-3 text-base font-semibold text-white shadow-[0_18px_70px_rgba(254,104,57,0.4)] transition hover:translate-y-[-2px]"
            onClick={() => trackStartSurvey("footer")}
          >
            Start survey now
            <svg
              aria-hidden
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </a>
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/75">
            <svg aria-hidden className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 6v6l4 2" />
            </svg>
            <span>Takes 10 minutes</span>
            <span className="h-1 w-1 rounded-full bg-white/60" aria-hidden />
            <span>No account required</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section12;
