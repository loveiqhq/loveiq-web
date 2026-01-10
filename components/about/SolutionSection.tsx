"use client";

import type { FC } from "react";

const ArrowButton: FC = () => (
  <div className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-4px_rgba(0,0,0,0.1)]">
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0a0510" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 17 17 7" />
      <path d="M7 7h10v10" />
    </svg>
  </div>
);

// Illustration for Educational Surveys - Form/Survey UI
const SurveyIllustration: FC = () => (
  <div className="relative flex h-full w-full items-center justify-center rounded-3xl bg-[#0a0510]" style={{ backgroundImage: "linear-gradient(143deg, rgba(46, 1, 71, 0.4) 0%, rgba(10, 5, 16, 1) 50%)" }}>
    <div className="w-[280px] overflow-hidden rounded-xl border border-white/10 bg-[#1a1025] p-5 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)]">
      {/* Header bars */}
      <div className="mb-3 flex items-center justify-between">
        <div className="h-2 w-16 rounded-full bg-[#fe6839]" />
        <div className="h-2 w-8 rounded-full bg-white/10" />
      </div>
      {/* Content bars */}
      <div className="mb-3 space-y-2">
        <div className="h-2 w-[180px] rounded-full bg-white/20" />
        <div className="h-2 w-[120px] rounded-full bg-white/10" />
      </div>
      {/* Radio options */}
      <div className="space-y-2">
        <div className="flex items-center gap-3 rounded-lg border border-white/5 bg-white/5 p-2">
          <div className="h-3 w-3 rounded-full border border-white/30" />
          <div className="h-1.5 w-[130px] rounded-full bg-white/20" />
        </div>
        <div className="flex items-center gap-3 rounded-lg border border-[#fe6839]/30 bg-[#fe6839]/10 p-2">
          <div className="h-3 w-3 rounded-full border-[3px] border-[#fe6839]" />
          <div className="h-1.5 w-[115px] rounded-full bg-white/30" />
        </div>
      </div>
      {/* Gradient overlay */}
      <div className="pointer-events-none absolute inset-0 rounded-xl" style={{ backgroundImage: "linear-gradient(210deg, rgba(255,255,255,0.05) 0%, transparent 100%)" }} />
    </div>
    <ArrowButton />
  </div>
);

// Illustration for Practical Reports - Chart UI
const ReportsIllustration: FC = () => (
  <div className="relative flex h-full w-full items-center justify-center rounded-3xl border border-white/5 bg-[#0a0510]" style={{ backgroundImage: "linear-gradient(217deg, rgba(254, 104, 57, 0.1) 0%, rgba(10, 5, 16, 1) 50%)" }}>
    <div className="w-[260px] overflow-hidden rounded-xl border border-white/10 bg-[#1a1025] p-5 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)]">
      {/* Header with icon */}
      <div className="mb-5 flex items-center gap-3 border-b border-white/5 pb-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#fe6839]/20">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fe6839" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 3v18h18" />
            <path d="m19 9-5 5-4-4-3 3" />
          </svg>
        </div>
        <div className="space-y-1">
          <div className="h-2 w-16 rounded-full bg-white/30" />
          <div className="h-1.5 w-10 rounded-full bg-white/10" />
        </div>
      </div>
      {/* Bar chart */}
      <div className="flex items-end justify-between gap-2 px-1">
        <div className="h-[26px] w-12 rounded-sm bg-white/5" />
        <div className="h-[38px] w-12 rounded-sm bg-white/10" />
        <div className="h-[51px] w-12 rounded-sm bg-gradient-to-t from-[#fe6839] to-[#fe8c68] shadow-[0_0_15px_rgba(254,104,57,0.3)]" />
        <div className="h-[32px] w-12 rounded-sm bg-white/5" />
      </div>
    </div>
    <ArrowButton />
  </div>
);

// Illustration for Guided Growth - Audio/Media Player UI
const GrowthIllustration: FC = () => (
  <div className="relative flex h-full w-full items-center justify-center rounded-3xl border border-white/5 bg-[#0a0510]" style={{ backgroundImage: "linear-gradient(180deg, rgba(46, 1, 71, 0) 0%, rgba(46, 1, 71, 0.6) 100%)" }}>
    <div className="w-[260px] overflow-hidden rounded-xl border border-white/10 bg-[#1a1025] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)]">
      {/* Video/Audio area */}
      <div className="relative flex h-[140px] items-center justify-center bg-[#050208]">
        {/* Waveform bars */}
        <div className="absolute bottom-3 flex items-end gap-1">
          <div className="h-4 w-1 rounded-full bg-white" />
          <div className="h-6 w-1 rounded-full bg-white" />
          <div className="h-3 w-1 rounded-full bg-white" />
          <div className="h-8 w-1 rounded-full bg-white" />
          <div className="h-5 w-1 rounded-full bg-white" />
        </div>
        {/* Play button */}
        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-sm">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="white" stroke="none">
            <polygon points="5 3 19 12 5 21 5 3" />
          </svg>
        </div>
      </div>
      {/* Progress area */}
      <div className="space-y-2 border-t border-white/5 p-3">
        <div className="h-2 w-[180px] rounded-full bg-white/20" />
        <div className="flex gap-2">
          <div className="h-1.5 w-8 rounded-full bg-[#fe6839]/50" />
          <div className="h-1.5 w-12 rounded-full bg-white/10" />
        </div>
      </div>
    </div>
    <ArrowButton />
  </div>
);

const SolutionSection: FC = () => {
  const solutions = [
    {
      title: "Educational Surveys",
      description: "Educational and guided surveys for psychometric assessments.",
      illustration: <SurveyIllustration />,
    },
    {
      title: "Practical Reports",
      description: "Science first and practical reports on psychometric conditions (non medical).",
      illustration: <ReportsIllustration />,
    },
    {
      title: "Guided Growth",
      description: "Tools, services, workshops and coaching to take insights into life changing actions.",
      illustration: <GrowthIllustration />,
    },
  ];

  return (
    <section id="solution" className="bg-[#0A0510] px-6 py-24">
      <div className="content-shell">
        {/* Header - Left aligned */}
        <div className="mb-12 space-y-6 px-14">
          <h2 className="font-serif text-[48px] font-normal leading-[1] text-white">
            Our Solution
          </h2>
          <p className="max-w-[672px] text-xl leading-[1.4] text-[#9CA3AF]">
            Complete tools to transform insights into life changing actions.
          </p>
        </div>

        {/* Cards */}
        <div className="flex flex-col gap-8 lg:flex-row lg:justify-center">
          {solutions.map((item) => (
            <div
              key={item.title}
              className="flex w-full flex-col gap-8 rounded-[32px] border border-white/5 bg-[#120B1C] p-3.5 lg:w-[389px]"
            >
              {/* Illustration area */}
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl">
                {item.illustration}
              </div>

              {/* Content */}
              <div className="space-y-3 px-3 pb-6">
                <h3 className="font-serif text-2xl font-normal leading-[1.33] text-white">
                  {item.title}
                </h3>
                <p className="text-base leading-[1.4] text-[#9CA3AF]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
