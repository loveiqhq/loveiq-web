'use client';

import Link from "next/link";
import { useRouter } from "next/navigation";
import type { FC } from "react";

type HeroSectionProps = {
  backgroundImageUrl?: string;
  className?: string;
};

const defaultBackground =
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80";

export const HeroSection: FC<HeroSectionProps> = ({
  backgroundImageUrl = defaultBackground,
  className = "",
}) => {
  const router = useRouter();

  return (
    <section
      className={`relative isolate min-h-screen overflow-hidden bg-black text-white ${className}`}
      aria-labelledby="hero-heading"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImageUrl})` }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-[#120c1e]/75 to-[#0a0613]/90" />
      <div className="absolute inset-0 bg-[radial-gradient(80%_70%_at_20%_20%,rgba(254,104,57,0.26),transparent),radial-gradient(70%_60%_at_80%_25%,rgba(167,139,250,0.28),transparent),radial-gradient(90%_80%_at_50%_80%,rgba(8,6,14,0.9),rgba(8,6,14,0.9))]" />
      <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-transparent to-black/35" />

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-6xl flex-col items-center gap-12 px-4 py-8 sm:px-8 md:px-10 lg:px-12">
        <header className="w-full">
          <nav
            aria-label="Primary"
            className="mx-auto flex w-full flex-col items-center gap-4 rounded-full border border-white/10 bg-[#21152f]/70 px-4 py-3 shadow-[0_15px_50px_rgba(0,0,0,0.35)] backdrop-blur md:flex-row md:gap-6 md:px-6"
          >
            <div className="flex w-full items-center justify-between gap-3 md:w-auto">
              <div className="flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-[#fe6839] via-[#f55c3a] to-[#a743ff] shadow-lg shadow-[#fe6839]/40">
                  <svg
                    aria-hidden
                    viewBox="0 0 24 24"
                    className="h-5 w-5 text-white"
                    fill="currentColor"
                  >
                    <path d="M12 21s-6.5-4.35-8.78-9.26C1.03 8.9 2.45 5 5.77 4.16 8 3.6 9.88 4.6 12 7.06 14.12 4.6 16 3.6 18.23 4.16c3.32.84 4.74 4.74 2.55 7.58C18.5 16.65 12 21 12 21Z" />
                  </svg>
                </div>
                <span className="text-base font-semibold text-white">LoveIQ</span>
              </div>
              <Link
                href="/waitlist"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gradient-brand px-4 py-2 text-sm font-semibold text-white shadow-pill transition hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0510] focus-visible:ring-white md:hidden"
              >
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-white opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 translate-y-full bg-white/20 transition-transform duration-300 group-hover:translate-y-0"
                />
                <span className="pointer-events-none absolute inset-0 rounded-full bg-white/10 opacity-0 transition duration-300 group-hover:opacity-100" />
                <span className="pointer-events-none absolute inset-[-12%] rounded-full border border-white/15 mix-blend-screen opacity-70" />
                <span className="relative z-10 transition-colors duration-500 group-hover:text-black">Start survey now</span>
              </Link>
            </div>

            <div className="flex w-full flex-wrap items-center justify-center gap-5 text-sm font-medium text-white/80 md:w-auto md:flex-1">
              <Link
                href="/about"
                className="transition hover:text-white focus-visible:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/60"
              >
                About Us
              </Link>
              <Link
                href="/glossary"
                className="transition hover:text-white focus-visible:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/60"
              >
                Glossary
              </Link>
            </div>

            <div className="hidden md:block">
              <Link
                href="/waitlist"
                className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-brand px-5 py-2 text-sm font-semibold text-white shadow-pill transition hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0510] focus-visible:ring-white"
              >
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-white opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 translate-y-full bg-white/20 transition-transform duration-300 group-hover:translate-y-0"
                />
                <span className="pointer-events-none absolute inset-0 rounded-full bg-white/10 opacity-0 transition duration-300 group-hover:opacity-100" />
                <span className="pointer-events-none absolute inset-[-12%] rounded-full border border-white/15 mix-blend-screen opacity-70" />
                <span className="relative z-10 transition-colors duration-500 group-hover:text-black">Start survey now</span>
                <svg
                  aria-hidden
                  className="relative z-10 h-4 w-4 transition-colors duration-500 group-hover:text-black"
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
          </nav>
        </header>

        <main className="flex w-full flex-1 items-center justify-center">
          <div className="mx-auto flex w-full max-w-4xl flex-col items-center gap-7 text-center sm:gap-8 md:gap-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-1.5 text-xs font-semibold text-white/80 shadow-[0_10px_40px_rgba(0,0,0,0.35)] backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-[#fe6839]" aria-hidden />
              <span>Science-backed methodology</span>
            </div>

            <h1
              id="hero-heading"
              className="flex flex-col gap-2 text-3xl font-semibold text-white sm:text-5xl md:text-6xl lg:text-7xl"
            >
              <span className="font-serif leading-tight">Gain Insights Into Your</span>
              <span className="relative mx-auto bg-gradient-to-r from-[#fe6839] via-[#a78bfa] to-[#e9d5ff] bg-clip-text font-serif text-transparent">
                Sexual Psychology
                <span className="absolute inset-x-0 -bottom-3 mx-auto block h-0.5 max-w-[260px] rounded-full bg-gradient-to-r from-[#fe6839] via-[#a78bfa] to-[#e9d5ff] opacity-70" aria-hidden />
              </span>
            </h1>

            <p className="max-w-2xl text-base text-white/80 sm:text-lg">
              Built on 10+ years of research. A{" "}
              <strong className="font-semibold text-white">10-minute guided survey</strong> that
              uncovers the sexual patterns and archetype.
            </p>

            <div className="flex w-full flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              <button
                type="button"
                onClick={() => router.push("/waitlist")}
                className="group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-brand px-7 py-3 text-sm font-semibold text-white shadow-pill transition hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0510] focus-visible:ring-white sm:w-auto"
              >
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-white opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 translate-y-full bg-white/20 transition-transform duration-300 group-hover:translate-y-0"
                />
                <span className="pointer-events-none absolute inset-0 rounded-full bg-white/10 opacity-0 transition duration-300 group-hover:opacity-100" />
                <span className="pointer-events-none absolute inset-[-12%] rounded-full border border-white/15 mix-blend-screen opacity-70" />
                <span className="relative z-10 transition-colors duration-500 group-hover:text-black">Start survey now</span>
                <svg
                  aria-hidden
                  className="relative z-10 h-4 w-4 transition-colors duration-500 group-hover:text-black"
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
              </button>
              <Link
                href="#how-it-works"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3 text-sm font-semibold text-white shadow-[0_10px_40px_rgba(0,0,0,0.25)] transition hover:-translate-y-0.5 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/60 sm:w-auto"
              >
                Learn more
              </Link>
            </div>
          </div>
        </main>
      </div>
    </section>
  );
};
