'use client';

import type { FC } from "react";
import { effects, gradients, radii } from "./theme";

type ExplorationSectionProps = {
  imageUrl?: string;
  className?: string;
};

const defaultImage =
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80";

const points = [
  {
    title: "Explore your inner landscape.",
    body: "Turn inward and map out the desires, boundaries, and emotions you’ve never fully named. LoveIQ guides you with thoughtful questions so you can give language to what you feel and want.",
  },
  {
    title: "Uncover your unique erotic signature.",
    body: "Discover patterns that belong only to you—no generic horoscopes here. Our science based quiz reveals how your mind, body, and heart connect so you can understand yourself on your own.",
  },
];

export const ExplorationSection: FC<ExplorationSectionProps> = ({
  imageUrl = defaultImage,
  className = "",
}) => {
  return (
    <section
      className={`relative isolate overflow-hidden ${gradients.darkSection} px-4 py-16 sm:px-8 md:py-20 ${className}`}
      aria-labelledby="exploration-heading"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(75%_75%_at_20%_20%,rgba(254,104,57,0.12),transparent),radial-gradient(60%_80%_at_80%_60%,rgba(167,139,250,0.18),transparent)]" />
      <div className="relative mx-auto flex w-full max-w-6xl flex-col-reverse items-center gap-10 lg:flex-row lg:items-center lg:gap-16">
        <div className="flex w-full max-w-xl flex-col gap-6 text-white">
          <h2
            id="exploration-heading"
            className="font-serif text-3xl leading-tight sm:text-4xl md:text-[40px]"
          >
            Embark on an exploration of your desires and connection.
          </h2>
          <div className="flex flex-col gap-5">
            {points.map((point) => (
              <div key={point.title} className="flex items-start gap-3">
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
                    <path d="M12 4c-3.5 0-6.5 2.7-6.5 6a6.5 6.5 0 0 0 5 6.3V21l2.5-1.5 2.5 1.5v-4.7a6.5 6.5 0 0 0 5-6.3c0-3.3-3-6-6.5-6Z" />
                  </svg>
                </span>
                <div className="space-y-1">
                  <p className="text-lg font-semibold">{point.title}</p>
                  <p className="text-sm text-white/75">{point.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          className={`w-full max-w-xl overflow-hidden ${radii.card} ${effects.cardBorder} bg-gradient-to-br from-white/5 via-white/0 to-white/5 ${effects.cardShadow}`}
        >
          <div
            className="aspect-[4/5] w-full bg-cover bg-center"
            style={{ backgroundImage: `url(${imageUrl})` }}
            role="img"
            aria-label="Abstract illustrated couple"
          />
        </div>
      </div>
    </section>
  );
};

export default ExplorationSection;
