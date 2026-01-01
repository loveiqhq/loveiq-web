"use client";

import type { FC } from "react";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { trackLearnMore, trackStartSurvey } from "../../lib/analytics";

const HeroSection: FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const targets = Array.from(section.querySelectorAll(".animate-on-scroll"));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.2 }
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="start"
      ref={sectionRef}
      className="section-shell relative -mt-2 flex min-h-screen items-center overflow-hidden bg-page text-text-primary sm:-mt-3"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <video
          className="absolute inset-0 hidden h-full w-full scale-105 object-cover opacity-35 md:block"
          src="/8060391-uhd_4096_2160_25fps.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050208]/70 via-[#0b0613]/75 to-[#0b0613]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_12%,rgba(255,255,255,0.05),transparent_36%),radial-gradient(circle_at_22%_38%,rgba(242,109,79,0.12),transparent_45%),radial-gradient(circle_at_78%_42%,rgba(156,125,255,0.12),transparent_45%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_12%,rgba(255,255,255,0.03),transparent)]" />
        <div
          className="absolute inset-0 opacity-55 mix-blend-screen motion-safe:animate-gradient-move"
          style={{
            backgroundImage:
              "linear-gradient(120deg, rgba(254,104,57,0.16), rgba(84,20,117,0.12), rgba(254,104,57,0.16))",
          }}
        />
        <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-b from-transparent via-[#0b0613]/70 to-[#0A0510]" />
        <div className="absolute inset-0 bg-noise opacity-20" />
        <div className="absolute -left-32 top-1/3 h-56 w-56 rounded-full bg-gradient-to-br from-[#fe6839]/20 to-transparent blur-3xl motion-safe:animate-orbit-left" />
        <div className="absolute -right-24 bottom-1/4 h-64 w-64 rounded-full bg-gradient-to-tr from-[#541475]/20 to-transparent blur-3xl motion-safe:animate-orbit-right" />
      </div>

      <div className="content-shell relative z-10 flex flex-col items-center px-4 text-center">
        <div className="animate-on-scroll mt-2 inline-flex items-center gap-2 rounded-full border border-border bg-white/5 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-text-secondary shadow-soft backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-accent-orange shadow-[0_0_0_6px_rgba(242,109,79,0.12)] animate-pulse-glow" aria-hidden />
          Science-backed methodology
        </div>

        <div className="mt-8 space-y-5">
          <h1 className="animate-on-scroll font-serif text-[40px] font-semibold leading-[1.04] tracking-[-0.6px] sm:text-[48px] md:text-[60px] lg:text-[72px] lg:leading-[72px] lg:tracking-[-1.4px]">
            Gain Insights Into Your
          </h1>
          <div className="animate-on-scroll relative inline-block">
            <span className="bg-gradient-to-r from-[#ff6a3a] via-[#cf5afb] to-[#7d88ff] bg-clip-text font-serif text-[72px] font-[500] italic leading-[72px] tracking-[-1.8px] text-transparent">
              Sexual Psychology
            </span>
            <span
              aria-hidden
              className="pointer-events-none absolute left-1/2 top-full mt-[10px] h-[3px] w-[560.23px] -translate-x-1/2 rounded-full bg-[#ff6a3a] opacity-30"
            />
          </div>
        </div>

        <p className="animate-on-scroll mt-8 max-w-3xl text-lg leading-relaxed text-text-secondary sm:text-xl">
          Built on 10+ years of research. A{" "}
          <strong className="font-semibold text-white">10-minute guided survey</strong> that uncovers the sexual patterns and archetype.
        </p>

        <div className="animate-on-scroll mt-12 flex flex-col items-center gap-4 sm:flex-row">
          <div className="relative rounded-full p-0 shadow-[0_28px_90px_rgba(254,104,57,0.28),0_14px_50px_rgba(0,0,0,0.45)]">
            <Link
              href="/waitlist"
              className="group relative inline-flex h-[58px] min-w-[220px] items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-brand px-10 text-[15px] font-semibold text-white shadow-pill transition hover:translate-y-[-2px] focus-visible-ring transition-colors duration-500"
              onClick={() => trackStartSurvey("hero")}
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
                className="relative z-10 h-5 w-5 transition-colors duration-500 group-hover:text-black"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Link>
          </div>
          <Link
            href="#about"
            className="inline-flex h-[58px] min-w-[190px] items-center justify-center rounded-full border border-white/30 bg-white/0 px-6 text-sm font-semibold text-white shadow-[0_25px_60px_rgba(0,0,0,0.35)] transition hover:-translate-y-[2px] focus-visible-ring"
            onClick={() => trackLearnMore("hero")}
          >
            Learn more
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
