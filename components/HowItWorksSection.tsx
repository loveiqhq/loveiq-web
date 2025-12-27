'use client';

import Link from "next/link";
import type { FC } from "react";
import { effects, gradients, pills } from "./theme";

const steps = [
  {
    title: "Take the Assessment",
    step: "Step One",
    description:
      "We’ll guide you through eight key dimensions that shape your sexual life.",
    badge: "~10 Minutes",
    accent: "from-[#2c1c3d] to-[#1a0f28]",
    detail: "sliders",
  },
  {
    title: "Get a Unique Report",
    step: "Step Two",
    description: "Fully personalized report helping you uncover your sexuality in a new way.",
    badge: "Science grade",
    accent: "from-[#261c3c] to-[#1a1028]",
    detail: "radar",
  },
  {
    title: "Grow with Guidance",
    step: "Step Three",
    description: "Discover insights that spark real behavioral change for deeper fulfillment.",
    badge: "Life Changing",
    accent: "from-[#261c3c] to-[#1a1028]",
    detail: "cards",
  },
];

const brandMarks = ["Instagram", "Forbes", "Headspace", "Calm", "Calm"];

const iconMap: Record<string, JSX.Element> = {
  sliders: (
    <div className="flex w-full flex-col gap-2">
      {[["#fe6839", "w-10"], ["#a78bfa", "w-16"], ["#ffffff", "w-12"]].map(([color, width], idx) => (
        <div key={idx} className="flex items-center gap-2">
          <span className={`h-2 w-2 rounded-full`} style={{ backgroundColor: color as string }} />
          <span
            className={`h-2 rounded-full bg-white/20 ${width as string}`}
            style={{ boxShadow: `0 0 0 1px ${color as string}33 inset` }}
          />
        </div>
      ))}
    </div>
  ),
  radar: (
    <div className="relative mx-auto flex h-28 w-28 items-center justify-center">
      <div className="absolute h-full w-full rounded-full border border-[#a78bfa]/30" />
      <div className="absolute h-20 w-20 rounded-full border border-[#fe6839]/35" />
      <div className="absolute h-12 w-12 rounded-full border border-white/15" />
      <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#fe6839] to-[#a78bfa] shadow-lg shadow-[#fe6839]/30">
        <span className="text-sm font-semibold text-white">∞</span>
      </div>
    </div>
  ),
  cards: (
    <div className="flex flex-col gap-2">
      <div className="rounded-xl bg-white/5 p-3 shadow-inner shadow-black/20">
        <p className="text-[11px] font-semibold text-white">Understand Desire</p>
        <p className="text-[10px] text-white/70">And deepen bonds</p>
      </div>
      <div className="rounded-xl bg-gradient-to-r from-[#fe6839]/80 to-[#a78bfa]/70 p-3 shadow-lg shadow-[#fe6839]/25">
        <p className="text-[11px] font-semibold text-white">Finally...</p>
        <p className="text-[10px] text-white/90">Clarity & practice</p>
      </div>
    </div>
  ),
};

export const HowItWorksSection: FC = () => {
  return (
    <section
      id="how-it-works"
      className={`relative isolate overflow-hidden ${gradients.darkSection} px-4 py-16 sm:px-8 md:py-20`}
      aria-labelledby="how-it-works-heading"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_80%_at_50%_10%,rgba(167,139,250,0.08),transparent),radial-gradient(70%_70%_at_10%_50%,rgba(254,104,57,0.08),transparent),radial-gradient(60%_60%_at_90%_60%,rgba(167,139,250,0.06),transparent)]" />
      <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center gap-12">
        <div className="flex flex-col items-center gap-4 text-center">
          <h2
            id="how-it-works-heading"
            className="font-serif text-3xl text-white sm:text-4xl md:text-5xl"
          >
            How It Works
          </h2>
        </div>

        <div className="grid w-full gap-6 lg:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className={`relative flex h-full flex-col gap-4 rounded-3xl ${effects.cardBorder} bg-gradient-to-br ${step.accent} p-6 text-white ${effects.cardShadow}`}
            >
              {index < steps.length - 1 && (
                <span
                  aria-hidden
                  className="absolute right-[-18px] top-1/2 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-[#21152f] text-white/70 shadow-lg shadow-black/30 lg:flex"
                >
                  •
                </span>
              )}
              <div className="text-[11px] uppercase tracking-[0.14em] text-white/60">{step.step}</div>
              <h3 className="font-serif text-xl text-white sm:text-2xl">{step.title}</h3>
              <p className="text-sm text-white/75">{step.description}</p>
              <div className="flex-1" aria-hidden>
                {iconMap[step.detail]}
              </div>
              <div className={pills.outline}>{step.badge}</div>
            </div>
          ))}
        </div>

        <div className="flex w-full flex-col items-center gap-4 pt-4">
          <p className="bg-gradient-to-r from-white via-[#e9d5ff] to-[#a78bfa] bg-clip-text text-center text-xs font-semibold uppercase tracking-[0.24em] text-transparent sm:text-sm">
            Featured In & Trusted By
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/60 sm:gap-8 sm:text-base">
            {brandMarks.map((brand, idx) => (
              <span
                key={`${brand}-${idx}`}
                className="rounded-full border border-white/10 px-4 py-2 text-center uppercase tracking-wide text-white/60"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>

        <div className="flex w-full items-center justify-center">
          <Link
            href="/waitlist"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#fe6839] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#fe6839]/35 transition hover:-translate-y-0.5 hover:bg-[#ff7a4d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#fe6839]"
          >
            Start Survey Now
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
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
