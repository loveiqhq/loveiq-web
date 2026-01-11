"use client";

import type { FC } from "react";

// Helper to create character spans with animation delays
const AnimatedText: FC<{ text: string; baseDelay: number }> = ({ text, baseDelay }) => (
  <span className="inline-flex flex-wrap justify-center gap-[0.25em]">
    {text.split(" ").map((word, wordIndex) => (
      <span key={wordIndex} className="inline-flex whitespace-nowrap">
        {word.split("").map((char, charIndex) => {
          const delay = baseDelay + wordIndex * 150 + charIndex * 50;
          return (
            <span
              key={charIndex}
              className="char-anim"
              style={{ animationDelay: `${delay}ms` }}
            >
              {char}
            </span>
          );
        })}
      </span>
    ))}
  </span>
);

const CircleIcon: FC<{ color: string; icon: "user" | "bolt"; delay: number }> = ({ color, icon, delay }) => (
  <span
    className="char-anim relative inline-flex h-16 w-16 items-center justify-center rounded-full md:h-24 md:w-24"
    style={{
      border: `1px solid ${color}30`,
      backgroundColor: `${color}05`,
      boxShadow: `0 0 20px ${color}10`,
      animationDelay: `${delay}ms`,
      lineHeight: 0,
    }}
  >
    <span className="absolute inset-0 flex items-center justify-center">
      {icon === "user" ? (
        <svg aria-hidden viewBox="0 0 24 24" className="h-7 w-7 md:h-10 md:w-10" fill="none" stroke={color} strokeWidth="1.5">
          <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      ) : (
        <svg aria-hidden viewBox="0 0 24 24" className="h-7 w-7 md:h-10 md:w-10" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      )}
    </span>
  </span>
);

const HeroSection: FC = () => {
  return (
    <section id="hero" className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#0A0510] pb-20 pt-32 md:pb-32 md:pt-48">
      {/* Background Layer */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        {/* Dot Matrix Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:32px_32px] opacity-50 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_50%,#000_60%,transparent_100%)]" />
        {/* Central Breathing Glow */}
        <div className="absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full bg-[#2E0147] blur-[120px] mix-blend-screen" style={{ animationDuration: "8s" }} />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex w-full max-w-7xl flex-col items-center justify-center px-6 py-24 text-center">
        {/* Background Pulsing Gradient */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[500px] w-[600px] -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full bg-[#5b21b6] blur-[120px] mix-blend-screen" style={{ animationDuration: "8s" }} />

        {/* Heading */}
        <h1 className="mb-12 flex flex-col items-center gap-2 font-serif text-5xl font-medium leading-[1.1] tracking-tight text-white sm:text-4xl md:gap-4 md:text-7xl lg:text-[5.5rem]">
          {/* Line 1: "We exist to help" */}
          <div className="flex flex-wrap justify-center gap-[0.25em]">
            <AnimatedText text="We exist to help" baseDelay={50} />
          </div>

          {/* Line 2: Icon + "people better" + Icon */}
          <div className="mt-1 flex w-full flex-wrap items-center justify-center gap-4 md:mt-2 md:gap-8">
            <CircleIcon color="#a855f7" icon="user" delay={850} />
            <div className="flex flex-wrap justify-center gap-[0.25em]">
              <AnimatedText text="people better" baseDelay={950} />
            </div>
            <CircleIcon color="#FE6839" icon="bolt" delay={1600} />
          </div>

          {/* Line 3: "understand themselves." */}
          <div className="mt-1 flex flex-wrap justify-center gap-[0.25em] md:mt-2">
            <AnimatedText text="understand themselves." baseDelay={1700} />
          </div>
        </h1>

        {/* Subtext */}
        <p className="sensual-anim mx-auto max-w-4xl text-lg font-light leading-relaxed text-gray-400 md:text-xl" style={{ animationDelay: "2.8s" }}>
          We are a{" "}
          <strong className="font-bold text-white">science-led psychometric research and insights platform</strong>{" "}
          dedicated to reducing human suffering and supporting lasting happiness. We combine established scientific disciplines, practical wisdom, and modern technology to provide tools for{" "}
          <strong className="font-extrabold text-white">transforming self-understanding into personal growth.</strong>
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
