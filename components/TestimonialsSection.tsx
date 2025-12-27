'use client';

import Image from "next/image";
import type { FC } from "react";
import { effects, gradients, radii } from "./theme";

type TestimonialsSectionProps = {
  className?: string;
};

const testimonials = [
  {
    quote:
      "The results were more insightful than I expected. It connected dots between emotional triggers and communication styles I hadn’t noticed before. Solid UX, too.",
    name: "Noah, 29",
    role: "Software Engineer",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=80&q=80",
  },
  {
    quote:
      "The report was shockingly accurate. And the science behind it? Legit. I liked seeing the blend of emotional intelligence and cognitive behavior models.",
    name: "Amir, 41",
    role: "Product Manager",
    avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=80&q=80",
  },
  {
    quote:
      "We took the quiz together and compared our results—it sparked one of the best conversations we’ve ever had. It helped us understand our emotional rhythm better.",
    name: "Chloe & Andre",
    role: "34 & 35",
    avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=80&q=80",
  },
  {
    quote:
      "We thought it’d be just fun. Turns out, it opened a new level of communication in our relationship. Every couple should try this.",
    name: "Kim & Eli",
    role: "26 & 27",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=80&q=80",
  },
];

const Stars = () => (
  <div className="flex items-center gap-1 text-[#fe6839]">
    {Array.from({ length: 5 }).map((_, i) => (
      <svg key={i} aria-hidden viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
        <path d="m12 17.3-5.09 2.7 1-5.63-4.1-4 5.67-.82L12 4.5l2.52 5.05 5.67.82-4.1 4 1 5.63Z" />
      </svg>
    ))}
  </div>
);

export const TestimonialsSection: FC<TestimonialsSectionProps> = ({ className = "" }) => {
  return (
    <section
      className={`relative isolate overflow-hidden ${gradients.darkSection} px-4 py-16 sm:px-8 md:py-20 ${className}`}
      aria-labelledby="testimonials-heading"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_70%_at_20%_20%,rgba(167,139,250,0.12),transparent),radial-gradient(70%_70%_at_80%_60%,rgba(254,104,57,0.12),transparent)]" />
      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-8 text-white">
        <div className="flex flex-col gap-2 text-center">
          <h2 id="testimonials-heading" className="font-serif text-3xl sm:text-4xl">
            What people are saying
          </h2>
          <p className="text-sm text-white/75">
            Real insights from people who’ve taken the LoveIQ journey.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {testimonials.map((item) => (
            <figure
              key={item.name}
              className={`flex h-full flex-col gap-4 ${radii.card} ${effects.cardBorder} bg-gradient-to-br from-[#1b1327] via-[#140c21] to-[#0f0a1c] ${effects.cardShadow} p-6 text-left`}
            >
              <Stars />
              <blockquote className="text-sm text-white/85">{item.quote}</blockquote>
              <div className="mt-auto flex items-center gap-3 pt-2">
                <Image
                  src={item.avatar}
                  alt={item.name}
                  width={48}
                  height={48}
                  className="h-12 w-12 rounded-full border border-[#0f0a18] object-cover"
                />
                <figcaption className="text-sm">
                  <p className="font-semibold text-white">{item.name}</p>
                  <p className="text-white/70">{item.role}</p>
                </figcaption>
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
