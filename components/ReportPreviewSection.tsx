'use client';

import type { FC } from "react";
import { effects, gradients, radii } from "./theme";

type ReportPreviewSectionProps = {
  className?: string;
};

const bullets = [
  {
    label: "Communication Style",
    body: "You prefer direct, verbal affirmation over physical cues.",
    icon: (
      <svg
        aria-hidden
        viewBox="0 0 24 24"
        className="h-5 w-5 text-[#a78bfa]"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 4h16v12H5.17L4 17.17V4Z" />
        <path d="M8 9h8" />
        <path d="M8 13h5" />
      </svg>
    ),
  },
  {
    label: "Growth Area",
    body: "Experiment with initiating intimacy in low-stakes environments.",
    icon: (
      <svg
        aria-hidden
        viewBox="0 0 24 24"
        className="h-5 w-5 text-[#fe6839]"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 6v12" />
        <path d="M6 12h12" />
        <path d="M5 19h14" />
      </svg>
    ),
  },
  {
    label: "Locked Insight",
    body: "Upgrade to unlock advanced relationship dynamics.",
    disabled: true,
    icon: (
      <svg
        aria-hidden
        viewBox="0 0 24 24"
        className="h-5 w-5 text-white/60"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="11" width="18" height="9" rx="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
];

const ReportCard = () => {
  return (
    <div
      className={`relative w-full overflow-hidden ${radii.card} ${effects.cardBorder} bg-gradient-to-br from-[#1b1327] via-[#1a0f25] to-[#0f0a1c] ${effects.cardShadow}`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(60%_90%_at_20%_10%,rgba(254,104,57,0.15),transparent),radial-gradient(70%_100%_at_70%_50%,rgba(167,139,250,0.18),transparent)]" />
      <div className="relative grid gap-0 md:grid-cols-[1.1fr_1fr]">
        <div className="space-y-5 border-b border-white/10 px-6 py-6 md:border-b-0 md:border-r md:px-7 md:py-8">
          <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/70">
            <span className="rounded-full bg-white/10 px-2 py-1">Your Archetype</span>
          </div>
          <div className="space-y-3">
            <p className="font-serif text-2xl text-white sm:text-3xl">The Deep Connector</p>
            <p className="text-sm text-white/80">
              You thrive on emotional safety before physical intensity. Your arousal network is heavily tied to the
              “Trust & Verify” neural pathways.
            </p>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs text-white/70">
                <span>Emotional Resonance</span>
                <span>85% (High)</span>
              </div>
              <div className="h-2 rounded-full bg-white/10">
                <div className="h-2 w-[85%] rounded-full bg-gradient-to-r from-[#fe6839] to-[#fca27a]" />
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs text-white/70">
                <span>Spontaneous Desire</span>
                <span>45% (Moderate)</span>
              </div>
              <div className="h-2 rounded-full bg-white/10">
                <div className="h-2 w-[45%] rounded-full bg-gradient-to-r from-[#fca27a] to-[#fe6839]" />
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4 px-6 py-6 md:px-7 md:py-8">
          {bullets.map((item) => (
            <div
              key={item.label}
              className={`flex items-start gap-3 rounded-2xl bg-white/5 p-4 ${
                item.disabled ? "opacity-60" : "shadow-[0_10px_30px_rgba(0,0,0,0.25)]"
              }`}
            >
              <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-xl bg-[#21152f]">
                {item.icon}
              </div>
              <div className="space-y-1">
                <p className={`text-sm font-semibold text-white ${item.disabled ? "text-white/70" : ""}`}>
                  {item.label}
                </p>
                <p className="text-sm text-white/70">{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const ReportPreviewSection: FC<ReportPreviewSectionProps> = ({ className = "" }) => {
  return (
    <section
      className={`relative isolate overflow-hidden ${gradients.darkSection} px-4 py-16 sm:px-8 md:py-20 ${className}`}
      aria-labelledby="report-preview-heading"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(90%_80%_at_50%_0%,rgba(167,139,250,0.14),transparent),radial-gradient(60%_60%_at_80%_40%,rgba(254,104,57,0.12),transparent)]" />
      <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center gap-10 text-center">
        <div className="space-y-3">
          <h2
            id="report-preview-heading"
            className="font-serif text-3xl text-white sm:text-4xl md:text-5xl"
          >
            LoveIQ Gives You <span className={`bg-gradient-to-r ${gradients.brand} bg-clip-text text-transparent`}>Language.</span>
          </h2>
          <p className="max-w-3xl text-sm text-white/80 sm:text-base">
            Stop guessing. Get clarity, vocabulary, and an actionable roadmap designed for your personal growth.
          </p>
        </div>

        <ReportCard />
      </div>
    </section>
  );
};

export default ReportPreviewSection;
