'use client';

import Image from "next/image";
import type { FC } from "react";
import { effects, gradients, radii } from "./theme";

type BenefitsSectionProps = {
  className?: string;
};

const benefits = [
  {
    title: "Instant Results",
    description: "No waiting. Receive your comprehensive analysis immediately after completing the survey.",
    icon: (
      <svg
        aria-hidden
        viewBox="0 0 24 24"
        className="h-5 w-5 text-[#fe6839]"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 6v6l3 3" />
        <circle cx="12" cy="12" r="9" />
      </svg>
    ),
  },
  {
    title: "Science-Backed",
    description:
      "Based on over +100 research & science-backed papers & books from the world’s leading therapists and researchers.",
    icon: (
      <svg
        aria-hidden
        viewBox="0 0 24 24"
        className="h-5 w-5 text-[#a78bfa]"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M6 4h12" />
        <path d="M6 20h12" />
        <path d="M6 4v8a6 6 0 0 0 6 6 6 6 0 0 0 6-6V4" />
      </svg>
    ),
  },
  {
    title: "100% Private",
    description:
      "Your data is anonymous. We prioritize your privacy and do not sell your personal information or link results to your identity.",
    icon: (
      <svg
        aria-hidden
        viewBox="0 0 24 24"
        className="h-5 w-5 text-[#fe6839]"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M6 10v-2a6 6 0 0 1 12 0v2" />
        <rect x="4" y="10" width="16" height="10" rx="2" />
      </svg>
    ),
  },
];

const avatars = [
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=80&q=80",
  "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=80&q=80",
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=80&q=80",
];

export const BenefitsSection: FC<BenefitsSectionProps> = ({ className = "" }) => {
  return (
    <section
      className={`relative isolate overflow-hidden ${gradients.darkSection} px-4 py-16 sm:px-8 md:py-20 ${className}`}
      aria-labelledby="benefits-heading"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_80%_at_20%_20%,rgba(167,139,250,0.12),transparent),radial-gradient(70%_70%_at_80%_50%,rgba(254,104,57,0.12),transparent)]" />
      <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center gap-10">
        <div className="grid w-full gap-5 md:grid-cols-3">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className={`flex h-full flex-col gap-3 ${radii.card} ${effects.cardBorder} bg-gradient-to-br from-[#1b1327] via-[#140c21] to-[#0f0a1c] ${effects.cardShadow} p-6 text-white`}
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/5 text-white">
                {benefit.icon}
              </div>
              <h3 className="text-lg font-semibold">{benefit.title}</h3>
              <p className="text-sm text-white/75">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center gap-4 text-center text-white">
          <div className="flex items-center gap-3">
            <div className="flex -space-x-3">
              {avatars.map((src, idx) => (
                <Image
                  key={src}
                  src={src}
                  alt={`User ${idx + 1}`}
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded-full border border-[#0f0a18] object-cover"
                />
              ))}
            </div>
            <span className="text-sm text-white/80">
              <strong className="font-semibold text-white">4.9/5</strong> Rating
            </span>
          </div>
          <p className="bg-gradient-to-r from-[#fe6839] via-[#a78bfa] to-[#e9d5ff] bg-clip-text text-center font-serif text-3xl text-transparent sm:text-4xl">
            30,000+ people have taken a first step to understand themselves.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
