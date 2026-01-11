"use client";

import type { FC } from "react";
import { trackStartSurvey } from "../../lib/analytics";

const Section12: FC = () => {
  return (
    <section className="section-shell relative overflow-hidden bg-gradient-to-br from-[#1a0d25] via-[#0f0a18] to-[#2a1640] px-4 text-text-primary">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(242,109,79,0.12),transparent_45%),radial-gradient(circle_at_80%_30%,rgba(124,88,255,0.14),transparent_45%),radial-gradient(circle_at_50%_80%,rgba(111,63,255,0.16),transparent_50%)]" />
      <div className="pointer-events-none absolute inset-0 bg-noise opacity-12" />
      <div className="content-shell relative flex max-w-5xl flex-col items-center gap-8 text-center">
        <div className="space-y-8">
          <h3 className="font-serif text-[48px] leading-[1.05] font-semibold sm:text-[60px] md:text-[72px] md:leading-[1.05]">
            Ready to understand your{" "}
            <span className="relative inline-block -top-1 align-baseline italic text-[#FE6839]">
              deepest self?
              <div className="pointer-events-none mt-[2px]">
                <svg viewBox="0 0 320 16" fill="none" preserveAspectRatio="none" className="h-[14px] w-full">
                  <path
                    d="M6 6 C 110 18, 210 18, 314 6"
                    stroke="#FE6839"
                    strokeWidth="6"
                    strokeLinecap="round"
                    opacity="0.7"
                  />
                </svg>
              </div>
            </span>
          </h3>
          <p className="text-lg leading-relaxed text-white/85">
            Join 30,000+ others who have unlocked better relationships,
            <br />
            clearer communication, and deeper confidence.
          </p>
        </div>

        <div className="flex flex-col items-center gap-6">
          <a
            href="/waitlist"
            className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-brand px-8 py-3 text-base font-semibold text-white shadow-pill transition hover:translate-y-[-2px] focus-visible-ring"
            onClick={() => trackStartSurvey("footer")}
          >
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-white opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            />
            <div
              aria-hidden
              className="absolute inset-0 translate-y-full bg-white/20 transition-transform duration-300 group-hover:translate-y-0"
            />
            <span className="pointer-events-none absolute inset-0 rounded-full bg-white/10 opacity-0 transition duration-300 group-hover:opacity-100" />
            <span className="pointer-events-none absolute inset-[-12%] rounded-full border border-white/15 mix-blend-screen opacity-70" />
            <span className="relative z-10 transition-colors duration-500 group-hover:text-black">Start survey now</span>
            <svg
              aria-hidden
              className="relative z-10 h-5 w-5 transition-colors duration-500 group-hover:text-black"
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
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/75 sm:text-xs">
            <svg aria-hidden className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 6v6l4 2" />
            </svg>
            <span>Takes 10 minutes</span>
            <span className="h-1.5 w-1.5 rounded-full bg-white/60" aria-hidden />
            <span>No account required</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section12;
