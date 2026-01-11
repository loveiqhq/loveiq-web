"use client";

import type { FC } from "react";

const CircleIcon: FC<{ color: string; icon: "user" | "bolt" }> = ({ color, icon }) => (
  <span
    className="relative inline-flex h-24 w-24 items-center justify-center rounded-full bg-[rgba(167,139,250,0.05)]"
    style={{
      border: `1px solid rgba(255,255,255,0.1)`,
      boxShadow: `inset 0 0 0 3px ${color}80`,
    }}
  >
    {icon === "user" ? (
      <svg aria-hidden viewBox="0 0 24 24" className="h-10 w-10" fill="none" stroke={color} strokeWidth="1.5">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 20c0-4 4-6 8-6s8 2 8 6" />
      </svg>
    ) : (
      <svg aria-hidden viewBox="0 0 24 24" className="h-10 w-10" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    )}
  </span>
);

const HeroSection: FC = () => {
  return (
    <section id="hero" className="relative overflow-hidden bg-[#0A0510] pt-20 pb-0 px-0">
      {/* Blurred background element */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[565px] w-[546px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-b from-[#370961] to-[#7002ad] opacity-50 blur-[265px] mix-blend-screen" />

      <div className="content-shell relative z-10 flex min-h-[862px] flex-col items-center justify-center gap-20 px-6 py-0">
        {/* Heading */}
        <div className="flex flex-col items-center text-center">
          {/* Line 1: "We exists to help" */}
          <h1 className="font-serif text-[80px] font-medium leading-[104px] tracking-[-2.4px] text-white">
            We exists to help
          </h1>

          {/* Line 2: Icon + "people better" + Icon */}
          <div className="flex items-center justify-center gap-6">
            <CircleIcon color="#a78bfa" icon="user" />
            <span className="font-serif text-[80px] font-normal leading-[104px] tracking-[-2.4px] text-white">
              people better
            </span>
            <CircleIcon color="#fe6839" icon="bolt" />
          </div>

          {/* Line 3: "understand themselves." */}
          <h1 className="font-serif text-[80px] font-medium leading-[104px] tracking-[-2.4px] text-white">
            understand themselves.
          </h1>
        </div>

        {/* Description paragraph */}
        <p className="mx-auto max-w-[768px] text-center text-[20px] leading-[36.31px] text-[#9CA3AF]">
          We are a{" "}
          <strong className="font-bold text-white">science-led psychometric research and insights platform</strong>{" "}
          <span className="text-[#8b909d]">
            dedicated to reducing human suffering and supporting lasting happiness. We combine established scientific disciplines, practical wisdom, and modern technology to provide tools for
          </span>{" "}
          <strong className="font-extrabold text-white">transforming self-understanding into personal growth.</strong>
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
