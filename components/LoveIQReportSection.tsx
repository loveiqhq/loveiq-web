'use client';

import type { FC } from "react";
import { effects, gradients, radii } from "./theme";

type LoveIQReportSectionProps = {
  className?: string;
};

const bullets = [
  "Guided educational survey built with psychology & relationship science.",
  "Deeply personalized interpretation of your specific patterns and archetype.",
  "10+ detailed report sections covering turn-ons, fears, strengths, and growth paths.",
  "Tailored recommendations with curated books & courses for your archetype.",
];

const mockCard = (
  <div
    className={`relative w-full max-w-xl overflow-hidden ${radii.card} ${effects.cardBorder} bg-gradient-to-br from-[#1b1327] via-[#150d20] to-[#0f0a1c] ${effects.cardShadow}`}
  >
    <div className="absolute inset-0 bg-[radial-gradient(80%_80%_at_70%_20%,rgba(167,139,250,0.16),transparent),radial-gradient(70%_70%_at_30%_70%,rgba(254,104,57,0.16),transparent)]" />
    <div className="relative space-y-6 p-6 sm:p-7">
      <div className="flex items-center gap-2 text-xs text-white/70">
        <span className="h-2 w-2 rounded-full bg-[#fe6839]" />
        <span className="uppercase tracking-[0.16em]">Report</span>
      </div>
      <div className="space-y-2">
        <p className="font-serif text-2xl text-white sm:text-3xl">Analysis Started</p>
        <p className="text-sm text-white/75">We’re decoding your archetype and attachment patterns.</p>
      </div>
      <div className="space-y-4">
        <div className="flex items-center justify-between text-sm text-white/80">
          <span>Analysis Started</span>
          <span className="text-[#fe6839]">0%</span>
        </div>
        <div className="h-2 rounded-full bg-white/10">
          <div className="h-2 w-[12%] rounded-full bg-gradient-to-r from-[#fe6839] to-[#fca27a]" />
        </div>
        <div className="flex items-center justify-between text-sm text-white/80">
          <span>Analysis Complete</span>
          <span className="text-[#a78bfa]">100%</span>
        </div>
        <div className="h-2 rounded-full bg-white/10">
          <div className="h-2 w-full rounded-full bg-gradient-to-r from-[#a78bfa] to-[#e9d5ff]" />
        </div>
      </div>
      <div className="flex items-center gap-3 rounded-2xl bg-white/5 p-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#21152f] text-white">
          <svg
            aria-hidden
            viewBox="0 0 24 24"
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 6v12" />
            <path d="m6 12 6-6 6 6" />
          </svg>
        </div>
        <div className="space-y-1">
          <p className="text-sm font-semibold text-white">Archetype Found</p>
          <p className="text-xs text-white/75">Deep Connector</p>
        </div>
      </div>
    </div>
  </div>
);

export const LoveIQReportSection: FC<LoveIQReportSectionProps> = ({ className = "" }) => {
  return (
    <section
      className={`relative isolate overflow-hidden ${gradients.darkSection} px-4 py-16 sm:px-8 md:py-20 ${className}`}
      aria-labelledby="loveiq-report-heading"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_70%_at_20%_20%,rgba(254,104,57,0.12),transparent),radial-gradient(70%_80%_at_80%_50%,rgba(167,139,250,0.16),transparent)]" />
      <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-16">
        <div className="flex w-full max-w-xl flex-col gap-6 text-white">
          <div className="space-y-2">
            <h2 id="loveiq-report-heading" className="font-serif text-3xl sm:text-4xl md:text-[40px]">
              The LoveIQ Report
            </h2>
            <p className="text-sm text-white/80 sm:text-base">
              LoveIQ helps you decode your desires, attachment patterns, emotional needs, and intimate dynamics so you
              can build relationships that feel aligned, exciting, and safe.
            </p>
          </div>
          <ul className="space-y-3 text-sm text-white/80">
            {bullets.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#fe6839]/20 text-[#fe6839]">
                  <svg
                    aria-hidden
                    viewBox="0 0 24 24"
                    className="h-3.5 w-3.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-4 pt-2">
            <button
              type="button"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#fe6839] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#fe6839]/35 transition hover:-translate-y-0.5 hover:bg-[#ff7a4d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#fe6839]"
            >
              Start survey now
              <svg
                aria-hidden
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="m13 6 6 6-6 6" />
              </svg>
            </button>
            <div className="text-xs text-white/70">
              <p className="font-semibold text-white">“The accuracy shocked me.”</p>
              <p>— ALEX M.</p>
            </div>
          </div>
        </div>

        <div className="w-full max-w-xl">{mockCard}</div>
      </div>
    </section>
  );
};

export default LoveIQReportSection;
