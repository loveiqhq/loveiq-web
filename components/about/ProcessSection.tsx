"use client";

import type { FC } from "react";

// Icon components for the steps
const MicroscopeIcon: FC<{ className?: string }> = ({ className = "w-8 h-8" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 18h8" />
    <path d="M3 22h18" />
    <path d="M14 22a7 7 0 1 0 0-14h-1" />
    <path d="M9 14h2" />
    <path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z" />
    <path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3" />
  </svg>
);

const TransformIcon: FC<{ className?: string }> = ({ className = "w-8 h-8" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16.466 7.5C15.643 4.237 13.952 2 12 2 9.239 2 7 6.477 7 12s2.239 10 5 10c.342 0 .677-.069 1-.2" />
    <path d="m15.194 13.707 3.814 1.86-1.86 3.814" />
    <path d="M19 15.57c-1.804.885-4.274 1.43-7 1.43-5.523 0-10-2.239-10-5s4.477-5 10-5c4.838 0 8.873 1.718 9.8 4" />
  </svg>
);

const FileCheckIcon: FC<{ className?: string }> = ({ className = "w-8 h-8" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
    <polyline points="14 2 14 8 20 8" />
    <path d="m9 15 2 2 4-4" />
  </svg>
);

const ChartIcon: FC<{ className?: string }> = ({ className = "w-8 h-8" }) => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 4V25.3333C4 26.0406 4.28095 26.7189 4.78105 27.219C5.28115 27.719 5.95942 28 6.66667 28H28" stroke="#A78BFA" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M24 6.66663H21.3333C20.597 6.66663 20 7.26358 20 7.99996V21.3333C20 22.0697 20.597 22.6666 21.3333 22.6666H24C24.7364 22.6666 25.3333 22.0697 25.3333 21.3333V7.99996C25.3333 7.26358 24.7364 6.66663 24 6.66663Z" stroke="#A78BFA" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M13.3335 10.6666H10.6668C9.93045 10.6666 9.3335 11.2636 9.3335 12V21.3333C9.3335 22.0697 9.93045 22.6666 10.6668 22.6666H13.3335C14.0699 22.6666 14.6668 22.0697 14.6668 21.3333V12C14.6668 11.2636 14.0699 10.6666 13.3335 10.6666Z" stroke="#A78BFA" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
);

const FootprintsIcon: FC<{ className?: string }> = ({ className = "w-8 h-8" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z" />
    <path d="M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z" />
    <path d="M16 17h4" />
    <path d="M4 13h4" />
  </svg>
);

// Small icons for the orbital diagram
const SmallMicroscopeIcon: FC = () => (
  <svg className="h-[18px] w-[18px]" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 18h8" />
    <path d="M3 22h18" />
    <path d="M14 22a7 7 0 1 0 0-14h-1" />
    <path d="M9 14h2" />
    <path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z" />
  </svg>
);

const SmallTransformIcon: FC = () => (
  <svg className="h-[18px] w-[18px]" viewBox="0 0 24 24" fill="none" stroke="#fe6839" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16.466 7.5C15.643 4.237 13.952 2 12 2 9.239 2 7 6.477 7 12s2.239 10 5 10" />
    <path d="m15.194 13.707 3.814 1.86-1.86 3.814" />
    <path d="M19 15.57c-1.804.885-4.274 1.43-7 1.43-5.523 0-10-2.239-10-5s4.477-5 10-5c4.838 0 8.873 1.718 9.8 4" />
  </svg>
);

const SmallFileCheckIcon: FC = () => (
  <svg className="h-[18px] w-[18px]" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
    <polyline points="14 2 14 8 20 8" />
    <path d="m9 15 2 2 4-4" />
  </svg>
);

const SmallChartIcon: FC = () => (
  <svg className="h-[18px] w-[18px]" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M7 16V8" />
    <path d="M12 16v-5" />
    <path d="M17 16v-8" />
  </svg>
);

const SmallFootprintsIcon: FC = () => (
  <svg className="h-[18px] w-[18px]" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z" />
    <path d="M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z" />
  </svg>
);

const SmallSettingsIcon: FC = () => (
  <svg className="h-[18px] w-[18px]" viewBox="0 0 24 24" fill="none" stroke="#fe6839" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

// Orbital diagram component
const OrbitalDiagram: FC = () => (
  <div className="relative mx-auto h-[400px] w-[568px] max-w-full">
    {/* Gradient blur background */}
    <div
      className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
      style={{ backgroundImage: "linear-gradient(45deg, rgba(46, 1, 71, 0.3) 0%, rgba(254, 104, 57, 0.1) 100%)" }}
    />

    {/* Main circular container */}
    <div className="absolute left-1/2 top-1/2 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2">
      {/* Outer dashed circle */}
      <div className="absolute inset-0 rounded-full border border-dashed border-white/10" />
      {/* Inner dashed circle */}
      <div className="absolute inset-[60px] rounded-full border border-dashed border-white/5" />

      {/* Label pills */}
      <div className="absolute left-[5px] top-[36px] rounded-full border border-white/10 bg-gradient-to-b from-white/10 to-white/5 px-5 py-2.5 text-sm font-medium tracking-[0.35px] text-white shadow-[0_8px_32px_rgba(255,255,255,0.1)] backdrop-blur-sm">
        Research
      </div>
      <div className="absolute bottom-[34px] left-[24px] rounded-full border border-white/10 bg-gradient-to-b from-white/10 to-white/5 px-5 py-2.5 text-sm font-medium tracking-[0.35px] text-white shadow-[0_8px_32px_rgba(255,255,255,0.1)] backdrop-blur-sm">
        Knowledge
      </div>
      <div className="absolute right-[-50px] top-[168px] rounded-full border border-white/10 bg-gradient-to-b from-white/10 to-white/5 px-5 py-2.5 text-sm font-medium tracking-[0.35px] text-white shadow-[0_8px_32px_rgba(255,255,255,0.1)] backdrop-blur-sm">
        Insights
      </div>

      {/* Small icon circles - Purple */}
      <div className="absolute left-[187px] top-[44px] flex h-[38px] w-[38px] items-center justify-center rounded-full border border-[rgba(168,85,247,0.3)] bg-[rgba(168,85,247,0.2)] shadow-[0_0_10px_rgba(168,85,247,0.1)]">
        <SmallMicroscopeIcon />
      </div>
      <div className="absolute left-[-20px] top-[178px] flex h-[38px] w-[38px] items-center justify-center rounded-full border border-[rgba(168,85,247,0.3)] bg-[rgba(168,85,247,0.2)] shadow-[0_0_10px_rgba(168,85,247,0.1)]">
        <SmallFileCheckIcon />
      </div>
      <div className="absolute bottom-[28px] right-[48px] flex h-[38px] w-[38px] items-center justify-center rounded-full border border-[rgba(168,85,247,0.3)] bg-[rgba(168,85,247,0.2)] shadow-[0_0_10px_rgba(168,85,247,0.1)]">
        <SmallChartIcon />
      </div>
      <div className="absolute bottom-[118px] right-[52px] flex h-8 w-8 items-center justify-center rounded-full border border-[rgba(168,85,247,0.3)] bg-[rgba(168,85,247,0.2)] shadow-[0_0_10px_rgba(168,85,247,0.1)]">
        <SmallFootprintsIcon />
      </div>

      {/* Small icon circles - Orange */}
      <div className="absolute right-[78px] top-[8px] flex h-8 w-8 items-center justify-center rounded-full border border-[rgba(254,104,57,0.3)] bg-[rgba(254,104,57,0.2)] shadow-[0_0_10px_rgba(254,104,57,0.1)]">
        <SmallTransformIcon />
      </div>
      <div className="absolute left-[55px] top-[228px] flex h-8 w-8 items-center justify-center rounded-full border border-[rgba(254,104,57,0.3)] bg-[rgba(254,104,57,0.2)] shadow-[0_0_10px_rgba(254,104,57,0.1)]">
        <SmallSettingsIcon />
      </div>

      {/* Center element */}
      <div className="absolute left-1/2 top-1/2 flex h-[128px] w-[128px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-gradient-to-b from-[#1a1025] to-[#0a0510] shadow-[0_0_60px_rgba(46,1,71,0.5)]">
        <div className="relative flex items-center justify-center">
          {/* Brain/Insights icon */}
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.5 3H9C7.34425 3 6 4.34425 6 6V30C6 31.6557 7.34425 33 9 33H27C28.6557 33 30 31.6557 30 30V10.5L22.5 3" stroke="#A78BFA" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M21 3V9C21 10.6557 22.3443 12 24 12H30" stroke="#A78BFA" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M15 13.5H12" stroke="#A78BFA" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M24 19.5H12" stroke="#A78BFA" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M24 25.5H12" stroke="#A78BFA" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round" />
          </svg>          {/* Small badge */}
          <div className="absolute -bottom-2 -right-2 flex h-[26px] w-[26px] items-center justify-center rounded-full border border-[#a78bfa] bg-[#1a1025]">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.6668 9.33333C13.6602 8.36 14.6668 7.19333 14.6668 5.66667C14.6668 3.64298 13.0239 2 11.0002 2C9.82683 2 9.00016 2.33333 8.00016 3.33333C7.00016 2.33333 6.1735 2 5.00016 2C2.97512 2 1.3335 3.64162 1.3335 5.66667C1.3335 7.2 2.3335 8.36667 3.3335 9.33333L8.00016 14L12.6668 9.33333Z" fill="#A78BFA" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const ProcessSection: FC = () => {
  const steps = [
    {
      title: "Research",
      description: "We constantly process latest scientific research paper, books and practical wisdom.",
      icon: <MicroscopeIcon />,
    },
    {
      title: "Transformation",
      description: "We turn knowledge into simplified frameworks tailored to human needs and designed to be understood easily.",
      icon: <TransformIcon />,
    },
    {
      title: "Surveys",
      description: "We developed guided surveys across different disciplines designed for people to learn and reflect efficiently.",
      icon: <FileCheckIcon />,
    },
    {
      title: "Reports",
      description: "Fueled by our guided surveys we transform personal insights of users into highly informative reports that help humans to better understand themselves.",
      icon: <ChartIcon />,
    },
    {
      title: "Guided action steps",
      description: "Our tools & services help people take specific actions to change their lives to the better.",
      icon: <FootprintsIcon />,
    },
  ];

  return (
    <section id="process" className="bg-[#0A0510] px-6 py-24">
      <div className="content-shell flex flex-col gap-16 lg:flex-row lg:items-center lg:gap-16">
        {/* Left side - Heading + Orbital */}
        <div className="flex flex-col gap-14 lg:w-[568px]">
          {/* Heading */}
          <div className="space-y-10 px-2.5">
            <h2 className="font-serif text-[48px] font-normal leading-[1] tracking-[-1.2px] text-white">
              How We Work
            </h2>
            <p className="max-w-[512px] text-xl leading-[1.4] text-[#9CA3AF]">
              <span className="font-bold text-white">We work like a super-therapist and coach</span>{" "}
              that never stops learning by continuously consuming new research, books, and practical expertise to transform that knowledge into easy understandable, actionable, and personalized insights for our users.
            </p>
          </div>

          {/* Orbital diagram */}
          <OrbitalDiagram />
        </div>

        {/* Right side - Steps */}
        <div className="flex flex-col gap-7 lg:flex-1">
          {steps.map((step) => (
            <div key={step.title} className="flex gap-6">
              {/* Icon */}
              <div className="flex h-[60px] w-[60px] shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-[#1e102e] shadow-[0_1px_2px_rgba(0,0,0,0.05)]">
                {step.icon}
              </div>
              {/* Content */}
              <div className="space-y-2">
                <h3 className="font-serif text-[25px] font-normal leading-[1.28] tracking-[-0.6px] text-white">
                  {step.title}
                </h3>
                <p className="text-base font-light leading-[1.625] text-[#9CA3AF]">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
