'use client';

import type { FC } from "react";
import { effects, gradients, radii } from "./theme";

type ValuePropositionSectionProps = {
  imageUrl?: string;
  className?: string;
};

const defaultImage =
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80";

const bullets = [
  {
    title: "Struggling to explain?",
    description:
      "Desire is complex. Without the right words, needs go unmet and frustrations build silently.",
  },
  {
    title: "Tired of vague advice?",
    description:
      "Generic tips don't work for unique psychologies. You need insights tailored to your emotional blueprint.",
  },
];

export const ValuePropositionSection: FC<ValuePropositionSectionProps> = ({
  imageUrl = defaultImage,
  className = "",
}) => {
  return (
    <section
      className={`relative isolate overflow-hidden ${gradients.darkSection} px-4 py-16 sm:px-8 md:py-20 ${className}`}
      aria-labelledby="value-prop-heading"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(90%_70%_at_20%_30%,rgba(254,104,57,0.12),transparent),radial-gradient(70%_70%_at_80%_30%,rgba(167,139,250,0.16),transparent),radial-gradient(50%_50%_at_70%_70%,rgba(11,6,19,0.9),rgba(11,6,19,0.9))]" />
      <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center gap-10 lg:flex-row lg:items-center lg:gap-14">
        <div className="flex w-full max-w-xl flex-col gap-6 text-white order-1 lg:order-2">
          <h2
            id="value-prop-heading"
            className="font-serif text-3xl leading-tight sm:text-4xl md:text-[40px]"
          >
            Great intimacy requires a vocabulary most of us were never taught.
          </h2>

          <div className="flex flex-col gap-5">
            {bullets.map((bullet) => (
              <div key={bullet.title} className="flex items-start gap-3 rounded-2xl bg-white/0 p-2">
                <span className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-[#261c3c] text-[#a78bfa] shadow-inner shadow-black/30">
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
                    <path d="M4 7h16" />
                    <path d="M4 12h16" />
                    <path d="M4 17h16" />
                    <path d="M8 7v10" />
                  </svg>
                </span>
                <div className="space-y-1">
                  <p className="text-lg font-semibold">{bullet.title}</p>
                  <p className="text-sm text-white/75">{bullet.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          className={`w-full max-w-xl overflow-hidden order-2 lg:order-1 ${radii.card} ${effects.cardBorder} bg-gradient-to-br from-white/5 via-white/0 to-white/5 ${effects.cardShadow}`}
        >
          <div
            className="aspect-[4/5] w-full bg-cover bg-center"
            style={{ backgroundImage: `url(${imageUrl})` }}
            role="img"
            aria-label="Couple having a calm conversation"
          />
        </div>
      </div>
    </section>
  );
};

export default ValuePropositionSection;
