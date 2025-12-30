'use client';

import Link from "next/link";
import { useEffect, useState } from "react";
import BenefitsSection from "./BenefitsSection";
import ExplorationSection from "./ExplorationSection";
import HowItWorksSection from "./HowItWorksSection";
import LoveIQReportSection from "./LoveIQReportSection";
import ReportPreviewSection from "./ReportPreviewSection";
import TestimonialsSection from "./TestimonialsSection";
import ValuePropositionSection from "./ValuePropositionSection";
import WaitlistModal from "./WaitlistModal";

type IconProps = {
  className?: string;
};

const HeartIcon = ({ className }: IconProps) => (
  <svg
    aria-hidden
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" />
  </svg>
);

const SparklesIcon = ({ className }: IconProps) => (
  <svg
    aria-hidden
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z" />
    <path d="M20 2v4" />
    <path d="M22 4h-4" />
    <circle cx="4" cy="20" r="2" />
  </svg>
);

const FingerprintIcon = ({ className }: IconProps) => (
  <svg
    aria-hidden
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4" />
    <path d="M14 13.12c0 2.38 0 6.38-1 8.88" />
    <path d="M17.29 21.02c.12-.6.43-2.3.5-3.02" />
    <path d="M2 12a10 10 0 0 1 18-6" />
    <path d="M2 16h.01" />
    <path d="M21.8 16c.2-2 .131-5.354 0-6" />
    <path d="M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2" />
    <path d="M8.65 22c.21-.66.45-1.32.57-2" />
    <path d="M9 6.8a6 6 0 0 1 9 5.2v2" />
  </svg>
);

const FlameIcon = ({ className }: IconProps) => (
  <svg
    aria-hidden
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4" />
  </svg>
);

const SmileIcon = ({ className }: IconProps) => (
  <svg
    aria-hidden
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M8 14s1.5 2 4 2 4-2 4-2" />
    <line x1="9" x2="9.01" y1="9" y2="9" />
    <line x1="15" x2="15.01" y1="9" y2="9" />
  </svg>
);

const SunIcon = ({ className }: IconProps) => (
  <svg
    aria-hidden
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2" />
    <path d="M12 20v2" />
    <path d="m4.93 4.93 1.41 1.41" />
    <path d="m17.66 17.66 1.41 1.41" />
    <path d="M2 12h2" />
    <path d="M20 12h2" />
    <path d="m6.34 17.66-1.41 1.41" />
    <path d="m19.07 4.93-1.41 1.41" />
  </svg>
);

const trustStats = [
  { value: "100,000+", label: "people have taken the assessment" },
  { value: "92%", label: "say the report mirrors their reality" },
  { value: "20 minutes", label: "average completion time" },
];

const whyReasons = [
  {
    stat: "Only 20%",
    detail: "feel confident talking about sexual needs without fear or shame.",
  },
  {
    stat: "42% - 54%",
    detail: "of couples avoid hard conversations until conflict forces them.",
  },
  {
    stat: "< 50%",
    detail: "receive any language tools from school, therapy, or pop advice.",
  },
];

const audience = [
  {
    title: "Singles",
    description: "Understand patterns before your next connection and lead with clarity.",
  },
  {
    title: "Relationships",
    description: "Decode each other's needs and reduce friction before it becomes resentment.",
  },
  {
    title: "Couples Growth",
    description: "Create shared language around intimacy to deepen trust and excitement.",
  },
  {
    title: "Self-Dev Lovers",
    description: "Bridge the gap between what you feel and how you express it.",
  },
  {
    title: "Pros & Coaches",
    description: "Use a science-backed framework to guide clients through sensitive topics.",
  },
  {
    title: "Curious Minds",
    description: "Get an honest mirror that translates fuzzy feelings into next steps.",
  },
];

const floatingIcons = [
  { Icon: HeartIcon, className: "top-4 left-[6%] animate-float", tone: "text-[#fe6839]" },
  { Icon: SparklesIcon, className: "top-[28%] left-[11%] animate-float-delayed", tone: "text-[#a78bfa]" },
  { Icon: FingerprintIcon, className: "bottom-[14%] left-[12%] animate-float-reverse", tone: "text-white dark:text-white" },
  { Icon: FlameIcon, className: "top-2 right-[10%] animate-float", tone: "text-[#fe6839]" },
  { Icon: SmileIcon, className: "top-[32%] right-[6%] animate-float-delayed", tone: "text-[#a78bfa]" },
  { Icon: SunIcon, className: "bottom-[12%] right-[10%] animate-float", tone: "text-[#fca27a]" },
];

const FloatingIcon = ({ Icon, className, tone }: (typeof floatingIcons)[number]) => (
  <div
    className={`absolute hidden lg:flex h-14 w-14 items-center justify-center rounded-2xl bg-white/80 text-[#2E0147] shadow-lg shadow-[#541475]/15 backdrop-blur dark:bg-[#1f132f]/70 ${tone} ${className}`}
  >
    <Icon className="h-8 w-8" />
  </div>
);

const WhyWeCreatedSection = () => (
  <section id="blog" className="relative overflow-hidden bg-white px-4 py-20 text-[#2E0147] dark:bg-[#0a0613] dark:text-white sm:px-8">
    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_70%_at_20%_20%,rgba(254,104,57,0.08),transparent),radial-gradient(70%_70%_at_80%_50%,rgba(84,20,117,0.12),transparent)]" />
    <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-12 rounded-[32px] border border-white/50 bg-white/80 p-8 shadow-[0_20px_80px_rgba(0,0,0,0.08)] backdrop-blur dark:border-white/10 dark:bg-[#120b1c]/70 dark:shadow-[0_20px_80px_rgba(0,0,0,0.5)] sm:p-12">
      <div className="space-y-4 text-center">
        <p className="mx-auto inline-flex items-center rounded-full bg-[#FE6839]/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#fe6839]">
          Why We Created LoveIQ?
        </p>
        <h2 className="font-serif text-3xl tracking-tight sm:text-4xl md:text-5xl">Why We Created LoveIQ?</h2>
        <p className="mx-auto max-w-3xl text-base text-[#3b1f57]/80 dark:text-white/70">
          Intimacy is emotional, psychological, and physical. Most of us never got language for it. LoveIQ translates what you feel into words you can use with yourself and with partners.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {whyReasons.map((item) => (
          <div
            key={item.stat}
            className="flex h-full flex-col gap-3 rounded-3xl border border-[#f5e8ff] bg-white p-6 shadow-[0_14px_50px_rgba(84,20,117,0.08)] transition hover:-translate-y-1 hover:shadow-[0_18px_60px_rgba(84,20,117,0.12)] dark:border-white/10 dark:bg-[#1b1028] dark:shadow-[0_16px_60px_rgba(0,0,0,0.45)]"
          >
            <span className="text-3xl font-semibold text-[#fe6839]">{item.stat}</span>
            <p className="text-sm leading-relaxed text-[#3b1f57]/80 dark:text-white/75">{item.detail}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const AudienceSection = () => (
  <section id="sextypes" className="relative overflow-hidden bg-gradient-to-b from-white via-[#f7f2ff] to-white px-4 py-20 text-[#2E0147] dark:from-[#0b0613] dark:via-[#0f0a18] dark:to-[#0b0613] sm:px-8">
    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_70%_at_20%_30%,rgba(254,104,57,0.1),transparent),radial-gradient(70%_70%_at_80%_40%,rgba(84,20,117,0.14),transparent)]" />
    <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-10">
      <div className="space-y-4 text-center">
        <p className="mx-auto inline-flex items-center rounded-full bg-[#2E0147]/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#2E0147] dark:bg-white/10 dark:text-white">
          Who Is This Perfect For?
        </p>
        <h2 className="font-serif text-3xl tracking-tight sm:text-4xl md:text-5xl">Who Is This Perfect For?</h2>
        <p className="mx-auto max-w-3xl text-base text-[#3b1f57]/80 dark:text-white/70">
          Whether you are exploring alone or with someone, LoveIQ gives you vocabulary and direction that fits your stage.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {audience.map((item) => (
          <div
            key={item.title}
            className="flex h-full flex-col gap-3 rounded-3xl border border-white/60 bg-white/90 p-6 shadow-[0_14px_60px_rgba(84,20,117,0.08)] transition hover:-translate-y-1 hover:shadow-[0_20px_70px_rgba(84,20,117,0.14)] dark:border-white/10 dark:bg-[#150d21]/80 dark:shadow-[0_16px_60px_rgba(0,0,0,0.45)]"
          >
            <div className="inline-flex w-fit items-center rounded-full bg-[#FE6839]/10 px-3 py-1 text-xs font-semibold text-[#fe6839]">
              {item.title}
            </div>
            <p className="text-sm leading-relaxed text-[#3b1f57]/80 dark:text-white/75">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const FinalCTA = () => (
  <section id="start" className="relative overflow-hidden bg-[#2E0147] px-4 py-24 text-white sm:px-8">
    <div className="pointer-events-none absolute inset-0">
      <div className="absolute inset-0 bg-[radial-gradient(70%_70%_at_20%_20%,rgba(255,255,255,0.08),transparent),radial-gradient(70%_70%_at_80%_60%,rgba(254,104,57,0.14),transparent)]" />
      <div className="absolute inset-0 bg-noise opacity-10" />
      <div className="absolute -left-10 top-[-30%] h-[460px] w-[460px] rounded-full bg-[#FE6839]/30 blur-[120px]" />
      <div className="absolute -right-10 bottom-[-30%] h-[380px] w-[380px] rounded-full bg-[#a78bfa]/25 blur-[120px]" />
    </div>
    <div className="relative mx-auto flex w-full max-w-5xl flex-col items-center gap-8 text-center">
      <h2 className="font-serif text-4xl leading-tight tracking-tight sm:text-5xl md:text-6xl">Ready to understand your deepest self?</h2>
      <p className="max-w-3xl text-base text-white/80 sm:text-lg">
        Join thousands who have already taken the step. No account required, just honest questions and immediate insights.
      </p>
      <div className="flex flex-col items-center gap-4 sm:flex-row">
        <Link
          href="/waitlist"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-3 text-sm font-semibold text-[#2E0147] shadow-[0_14px_40px_rgba(0,0,0,0.2)] transition hover:-translate-y-0.5 hover:bg-[#f7e9ff]"
        >
          Take the Free Assessment
          <svg aria-hidden className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </Link>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">20 minutes - Science-backed - Private</p>
      </div>
    </div>
  </section>
);

const TrustSection = () => (
  <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#fdf7ff] to-white px-4 py-16 text-[#2E0147] dark:from-[#0a0613] dark:via-[#0f0a18] dark:to-[#0a0613] sm:px-8">
    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_70%_at_10%_20%,rgba(254,104,57,0.08),transparent),radial-gradient(70%_70%_at_90%_40%,rgba(84,20,117,0.1),transparent)]" />
    <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-10">
      <div className="space-y-4 text-center">
        <p className="mx-auto inline-flex items-center rounded-full bg-[#FE6839]/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#fe6839]">
          Trusted by the community
        </p>
        <h2 className="font-serif text-3xl tracking-tight sm:text-4xl md:text-5xl">100,000+ people have taken the first step to understand their sexual self.</h2>
        <p className="mx-auto max-w-3xl text-base text-[#3b1f57]/80 dark:text-white/70">
          Built on research, privacy-first, and designed to give you language that makes conversations easier.
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-3">
        {trustStats.map((item) => (
          <div
            key={item.value}
            className="flex h-full flex-col gap-2 rounded-3xl border border-white/70 bg-white/90 p-6 shadow-[0_14px_60px_rgba(84,20,117,0.08)] transition hover:-translate-y-1 hover:shadow-[0_18px_70px_rgba(84,20,117,0.12)] dark:border-white/10 dark:bg-[#150d21]/80 dark:shadow-[0_16px_60px_rgba(0,0,0,0.45)]"
          >
            <span className="text-3xl font-semibold text-[#fe6839]">{item.value}</span>
            <p className="text-sm leading-relaxed text-[#3b1f57]/80 dark:text-white/75">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Hero = ({
  isDark,
  onToggleTheme,
  onToggleMenu,
  onOpenWaitlist,
  menuOpen,
}: {
  isDark: boolean;
  onToggleTheme: () => void;
  onToggleMenu: () => void;
  onOpenWaitlist: () => void;
  menuOpen: boolean;
}) => (
  <header className="relative overflow-hidden bg-white pb-16 pt-32 text-[#2E0147] dark:bg-[#050208] dark:text-white sm:pb-24 sm:pt-36">
    <div className="pointer-events-none absolute inset-0">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(254,104,57,0.09),transparent_55%),radial-gradient(circle_at_80%_30%,rgba(84,20,117,0.1),transparent_50%),radial-gradient(circle_at_50%_80%,rgba(254,104,57,0.06),transparent_50%)]" />
      <div className="absolute -left-24 top-[-30%] h-[420px] w-[420px] rounded-full bg-[#FE6839]/20 blur-[130px]" />
      <div className="absolute -right-24 top-[10%] h-[380px] w-[380px] rounded-full bg-[#541475]/18 blur-[140px]" />
      <div className="absolute inset-0 bg-noise opacity-30" />
    </div>

    <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 sm:px-8">
      <nav className="fixed left-0 right-0 top-6 z-50 flex justify-center px-4 sm:px-6">
        <div className="flex w-full max-w-6xl items-center gap-4 rounded-full border border-white/70 bg-white/80 px-4 py-3 shadow-[0_18px_60px_rgba(84,20,117,0.12)] backdrop-blur dark:border-white/10 dark:bg-[#120b1c]/80 dark:shadow-[0_20px_70px_rgba(0,0,0,0.55)]">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-tr from-[#2E0147] to-[#FE6839] text-white shadow-lg shadow-[#FE6839]/25">
              <HeartIcon className="h-5 w-5" />
            </div>
            <span className="font-serif text-lg font-semibold">LoveIQ</span>
          </div>
          <div className="hidden flex-1 items-center justify-center gap-6 text-sm font-semibold text-[#541475]/80 dark:text-white/70 md:flex">
            <a className="transition hover:text-[#fe6839]" href="#about">
              About Us
            </a>
            <a className="transition hover:text-[#fe6839]" href="#features">
              Survey
            </a>
            <a className="transition hover:text-[#fe6839]" href="#sextypes">
              Sextypes
            </a>
            <a className="transition hover:text-[#fe6839]" href="#blog">
              Blog
            </a>
          </div>
          <div className="ml-auto flex items-center gap-2">
            <button
              type="button"
              onClick={onToggleTheme}
              aria-label="Toggle theme"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full text-[#541475]/80 transition hover:bg-[#541475]/5 dark:text-white dark:hover:bg-white/10"
            >
              {isDark ? (
                <SunIcon className="h-5 w-5" />
              ) : (
                <SparklesIcon className="h-5 w-5" />
              )}
            </button>
            <Link
              href="#start"
              className="hidden items-center rounded-full bg-[#fe6839] px-5 py-2 text-sm font-semibold text-white shadow-[0_12px_40px_rgba(254,104,57,0.35)] transition hover:-translate-y-0.5 hover:bg-[#ff7a4d] md:inline-flex"
            >
              Start Survey
            </Link>
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full text-[#541475]/80 transition hover:bg-[#541475]/5 dark:text-white dark:hover:bg-white/10 md:hidden"
              onClick={onToggleMenu}
              aria-label="Toggle navigation"
            >
              <svg aria-hidden className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="absolute top-20 left-4 right-4 flex flex-col gap-2 rounded-3xl border border-white/60 bg-white/90 p-4 shadow-2xl backdrop-blur dark:border-white/10 dark:bg-[#120b1c]/95 md:hidden">
            {[
              { href: "#about", label: "About Us" },
              { href: "#features", label: "Survey" },
              { href: "#sextypes", label: "Sextypes" },
              { href: "#blog", label: "Blog" },
              { href: "#start", label: "Start Survey" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-2xl px-4 py-3 text-center text-sm font-semibold text-[#2E0147] transition hover:bg-[#541475]/5 dark:text-white dark:hover:bg-white/10"
                onClick={onToggleMenu}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </nav>

      <div className="relative overflow-hidden rounded-[32px] border border-white/70 bg-white/90 p-8 shadow-[0_30px_120px_rgba(84,20,117,0.12)] backdrop-blur dark:border-white/10 dark:bg-[#120b1c]/80 dark:shadow-[0_30px_120px_rgba(0,0,0,0.55)] sm:p-12">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 rounded-[32px] bg-[radial-gradient(circle_at_50%_100%,rgba(254,104,57,0.1),transparent_65%)]" />
          <div className="absolute -left-12 -top-10 h-52 w-52 rounded-full bg-[#FE6839]/15 blur-[80px]" />
          <div className="absolute -right-20 top-12 h-60 w-60 rounded-full bg-[#a78bfa]/18 blur-[100px]" />
        </div>

        <div className="relative grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#fe6839]/30 bg-[#fe6839]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#fe6839]">
              Science-backed sexual psychology
              <span className="h-2 w-2 rounded-full bg-[#fe6839]" aria-hidden />
            </div>
            <div className="space-y-4">
              <h1 className="font-serif text-4xl leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">Insights Into Your Sexual Psychology</h1>
              <p className="max-w-2xl text-base text-[#3b1f57]/80 dark:text-white/75 sm:text-lg">
                Guided, research-driven assessment that translates your desires, fears, and patterns into a report you can actually use.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
              <Link
                href="/waitlist"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#fe6839] px-7 py-3 text-sm font-semibold text-white shadow-[0_14px_50px_rgba(254,104,57,0.35)] transition hover:-translate-y-0.5 hover:bg-[#ff7a4d]"
              >
                Take the Free Assessment
                <svg aria-hidden className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </Link>
              <button
                type="button"
                onClick={onOpenWaitlist}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#fe6839]/40 bg-white/0 px-7 py-3 text-sm font-semibold text-[#fe6839] shadow-[0_10px_40px_rgba(254,104,57,0.15)] transition hover:-translate-y-0.5 hover:border-[#fe6839] hover:bg-[#fe6839]/10"
              >
                Join the Waitlist
              </button>
            </div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#3b1f57]/70 dark:text-white/60">Takes 20 minutes - No account required</p>
            <div className="grid gap-4 sm:grid-cols-3">
              {trustStats.map((stat) => (
                <div key={stat.value} className="rounded-2xl border border-white/70 bg-white/80 p-4 text-sm shadow-sm dark:border-white/10 dark:bg-white/5">
                  <p className="text-xl font-semibold text-[#fe6839]">{stat.value}</p>
                  <p className="text-[#3b1f57]/80 dark:text-white/70">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto flex h-full w-full max-w-xl items-center justify-center">
            <div className="absolute inset-0 animate-spin-slow rounded-full border border-dashed border-[#541475]/15" />
            <div className="absolute inset-6 animate-spin-slow rounded-full border border-dashed border-[#fe6839]/15" style={{ animationDirection: "reverse" }} />
            {floatingIcons.map((item) => (
              <FloatingIcon key={item.className} {...item} />
            ))}
            <div className="relative w-full max-w-md overflow-hidden rounded-[28px] border border-white/70 bg-white/90 p-6 shadow-[0_18px_80px_rgba(84,20,117,0.12)] backdrop-blur dark:border-white/10 dark:bg-[#150d21]/80 dark:shadow-[0_24px_120px_rgba(0,0,0,0.6)]">
              <div className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#3b1f57]/70 dark:text-white/60">The Journey of Self Discovery</p>
                <h3 className="font-serif text-2xl">The Deep Connector</h3>
                <p className="text-sm text-[#3b1f57]/80 dark:text-white/70">One of the archetypes you can unlock. Balanced between emotional safety and playful spontaneity.</p>
              </div>
              <div className="mt-6 space-y-3">
                <div className="flex items-center justify-between text-xs text-[#3b1f57]/70 dark:text-white/60">
                  <span>Emotional Resonance</span>
                  <span>85%</span>
                </div>
                <div className="h-2 rounded-full bg-[#f5e8ff] dark:bg-white/10">
                  <div className="h-2 w-[85%] rounded-full bg-gradient-to-r from-[#fe6839] to-[#fca27a]" />
                </div>
                <div className="flex items-center justify-between text-xs text-[#3b1f57]/70 dark:text-white/60">
                  <span>Spontaneous Desire</span>
                  <span>45%</span>
                </div>
                <div className="h-2 rounded-full bg-[#f5e8ff] dark:bg-white/10">
                  <div className="h-2 w-[45%] rounded-full bg-gradient-to-r from-[#a78bfa] to-[#e9d5ff]" />
                </div>
              </div>
              <div className="mt-6 flex items-center justify-between rounded-2xl border border-[#f5e8ff] bg-white/70 p-4 text-sm text-[#3b1f57]/80 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-white/75">
                <div>
                  <p className="font-semibold text-[#2E0147] dark:text-white">Archetype Found</p>
                  <p>Deep Connector</p>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#fe6839]/10 text-[#fe6839]">
                  <FingerprintIcon className="h-5 w-5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
);

const LoveIQLandingPage = () => {
  const [isDark, setIsDark] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [waitlistOpen, setWaitlistOpen] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("color-theme");
    const preferred =
      stored === "dark" || (!stored && window.matchMedia("(prefers-color-scheme: dark)").matches);
    setIsDark(preferred);
  }, []);

  useEffect(() => {
    const html = document.documentElement;
    if (isDark) {
      html.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    } else {
      html.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
    }
  }, [isDark]);

  useEffect(() => {
    const handler = (evt: KeyboardEvent) => {
      if (evt.key === "Escape") {
        setMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <div className="relative min-h-screen bg-white text-[#2E0147] dark:bg-[#050208] dark:text-white">
      <div className="fixed inset-0 bg-noise opacity-30" aria-hidden />
      <Hero
        isDark={isDark}
        onToggleTheme={() => setIsDark((prev) => !prev)}
        onToggleMenu={() => setMenuOpen((prev) => !prev)}
        onOpenWaitlist={() => setWaitlistOpen(true)}
        menuOpen={menuOpen}
      />
      <main className="relative z-10">
        <TrustSection />
        <div id="about">
          <ValuePropositionSection />
        </div>
        <div id="features">
          <HowItWorksSection />
        </div>
        <ExplorationSection />
        <ReportPreviewSection />
        <WhyWeCreatedSection />
        <AudienceSection />
        <LoveIQReportSection />
        <BenefitsSection />
        <TestimonialsSection />
        <FinalCTA />
      </main>
      <WaitlistModal open={waitlistOpen} onClose={() => setWaitlistOpen(false)} />
    </div>
  );
};

export default LoveIQLandingPage;
