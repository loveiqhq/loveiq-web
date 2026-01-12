'use client';

import type { FC } from "react";
import { effects, gradients, radii } from "./theme";

type LoveIQReportSectionProps = {
  className?: string;
};

const bullets = [
  {
    title: "Guided educational survey",
    description: "Built with psychology & relationship science.",
  },
  {
    title: "Deeply personalized interpretation",
    description: "Of your specific patterns and archetype.",
  },
  {
    title: "10+ detailed report sections",
    description: "Covering turn-ons, fears, strengths, and growth paths.",
  },
  {
    title: "Tailored recommendations",
    description: "Curated books & courses for your archetype.",
  },
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
        <div className="flex w-full max-w-xl flex-col gap-8 text-white">
          <div className="space-y-3">
            <h2
              id="loveiq-report-heading"
              className="font-serif text-[40px] leading-[1.05] tracking-[-0.03em] sm:text-[52px] md:text-[64px] md:leading-[1.05]"
            >
              The LoveIQ Report
            </h2>
            <p className="font-medium text-[18px] leading-[1.55] text-[#d1d5db] sm:text-[20px]">
              LoveIQ helps you decode your desires, attachment patterns, emotional needs, and intimate dynamics so you
              can build relationships that feel aligned, exciting, and safe.
            </p>
          </div>
          <ul className="space-y-5 text-white">
            {bullets.map((item) => (
              <li key={item.title} className="flex gap-3">
                <span className="mt-[2px] inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#fe6839]/20 text-[#fe6839]">
                  <svg
                    aria-hidden
                    viewBox="0 0 24 24"
                    className="h-[18px] w-[18px]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <div className="space-y-1">
                  <p className="font-serif text-[20px] font-semibold leading-[28px] text-white">{item.title}</p>
                  <p className="font-medium text-[14px] leading-5 text-[#9ca3af] sm:text-[16px] sm:leading-[20px]">
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:gap-4">
            <button
              type="button"
              className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-brand px-6 py-3 text-[16px] font-semibold leading-6 text-white shadow-pill transition hover:-translate-y-0.5 focus-visible-ring"
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
              <span className="relative z-10 transition-colors duration-500 group-hover:text-black">Start Survey Now</span>
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
            </button>
            <div className="text-left leading-tight text-white/80">
              <p className="font-serif text-[14px] italic leading-5 text-[#d1d5db]">“The accuracy shocked me.”</p>
              <p className="text-[12px] font-bold uppercase tracking-[0.03em] text-[#fe6839]">— Alex M.</p>
            </div>
          </div>
        </div>

        <div className="w-full max-w-xl">{mockCard}</div>
      </div>
    </section>
  );
};

export default LoveIQReportSection;
