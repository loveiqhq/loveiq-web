"use client";

import Image from "next/image";
import type { FC } from "react";
import { trackStartSurvey } from "../../lib/analytics";

const features = [
  {
    title: "Guided educational survey",
    description: "Built with psychology & relationship science.",
  },
  {
    title: "Deeply personalized interpretation",
    description: "Of your specific patterns and archetype.",
  },
  {
    title: "10+ detailed report sections",
    description: "Covering turn-ons, fears, strengths & growth paths.",
  },
  {
    title: "Tailored recommendations",
    description: "Curated books & courses for your archetype.",
  },
];

const Section06: FC = () => {
  return (
    <section className="section-shell relative overflow-hidden bg-[#0A0510] px-4 text-text-primary" aria-labelledby="report-heading">
      <div className="content-shell relative grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 id="report-heading" className="font-serif text-3xl leading-tight sm:text-4xl md:text-5xl">
              The LoveIQ Report
            </h2>
            <p className="text-lg leading-relaxed text-text-secondary sm:text-xl">
              LoveIQ helps you decode your desires, attachment patterns, emotional needs, and intimate dynamics so you can build
              relationships that feel aligned, exciting, and safe.
            </p>
          </div>

          <div className="space-y-5">
            {features.map((item) => (
              <div key={item.title} className="group flex gap-3">
                <div className="mt-1 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-white/5 text-accent-orange shadow-soft transition duration-300 ease-out group-hover:-translate-y-[2px] group-hover:scale-105 group-hover:bg-gradient-to-br group-hover:from-[#f26d4f] group-hover:via-[#ff9450] group-hover:to-[#f26d4f] group-hover:text-white">
                  <svg
                    aria-hidden
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12l5 5L20 7" />
                  </svg>
                </div>
                <div className="space-y-1">
                  <p className="text-lg font-semibold sm:text-xl">{item.title}</p>
                  <p className="text-sm text-text-secondary sm:text-base">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <a
              href="/waitlist"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-base font-semibold text-white shadow-pill transition hover:translate-y-[-2px] focus-visible-ring"
              onClick={() => trackStartSurvey("report_section")}
            >
              Start survey now
              <svg
                aria-hidden
                className="h-5 w-5"
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
            </a>
            <div className="flex items-center gap-3 text-sm text-white/70">
              <div className="h-11 w-11 overflow-hidden rounded-full border border-border shadow-soft">
                <Image
                  src="/a791b20c354705558e2dce132f88640a8b4f563a.jpg"
                  alt="Alex M."
                  width={44}
                  height={44}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="space-y-0.5 leading-tight text-text-secondary">
                <p className="italic">“The accuracy shocked me.”</p>
                <p className="text-[12px] font-semibold text-accent-orange">— Alex M.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative flex items-center justify-center group">
          <div
            className="absolute -right-4 top-6 bottom-6 hidden w-[320px] -rotate-12 rounded-[32px] bg-gradient-to-br from-[#5a2d8b] via-[#2f154e] to-[#f26d4f]/60 blur-[0.5px] transition-transform duration-700 ease-[cubic-bezier(0.2,0.8,0.2,1)] will-change-transform transform-gpu group-hover:-rotate-6 group-hover:translate-x-1 group-hover:translate-y-1 md:block"
            aria-hidden
          />

          <div className="relative w-full max-w-[360px] overflow-hidden rounded-[32px] border border-[#241631] bg-[#1d122a] shadow-[0_32px_110px_rgba(0,0,0,0.6)] transition-all duration-700 ease-[cubic-bezier(0.2,0.8,0.2,1)] transform-gpu will-change-transform group-hover:-translate-y-2 group-hover:shadow-[0_40px_120px_rgba(0,0,0,0.65)]">
            <div className="flex items-center justify-between gap-4 border-b border-[#241631] bg-black/15 px-5 py-4">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-[#fe6839]" aria-hidden />
                <span className="h-3 w-3 rounded-full bg-[#ffba5f]" aria-hidden />
                <span className="h-3 w-3 rounded-full bg-[#9c7dff]" aria-hidden />
              </div>
              <span className="h-1.5 w-14 rounded-full bg-white/12" aria-hidden />
            </div>

            <div className="relative px-5 pb-5 pt-5">
              <div
                className="pointer-events-none absolute -right-10 -bottom-6 h-44 w-44 rounded-full bg-gradient-to-br from-[#f26d4f]/50 via-[#f26d4f]/18 to-transparent blur-3xl opacity-80"
                aria-hidden
              />
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#2e1c38] text-[#fe6839] shadow-[0_16px_60px_rgba(0,0,0,0.35)]">
                    <svg
                      aria-hidden
                      viewBox="0 0 24 24"
                      className="h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M4 19.5A2.5 2.5 0 0 0 6.5 22h11a2.5 2.5 0 0 0 2.5-2.5v-15A2.5 2.5 0 0 0 17.5 2h-11A2.5 2.5 0 0 0 4 4.5Z" />
                      <path d="M8 7h8" />
                      <path d="M8 11h8" />
                      <path d="M8 15h6" />
                    </svg>
                  </div>
                  <div className="flex-1 space-y-2 text-white/18">
                    <div className="h-3 w-40 rounded-full bg-white/10" />
                    <div className="h-3 w-28 rounded-full bg-white/10" />
                  </div>
                </div>

                <div className="space-y-2 text-white/12">
                  <div className="h-3 w-full rounded-full bg-white/10" />
                  <div className="h-3 w-[94%] rounded-full bg-white/10" />
                  <div className="h-3 w-[88%] rounded-full bg-white/10" />
                  <div className="h-3 w-[78%] rounded-full bg-white/10" />
                </div>

                <div className="space-y-3 text-white/12">
                  <div className="h-3 w-[96%] rounded-full bg-white/10" />
                  <div className="h-3 w-[88%] rounded-full bg-white/10" />
                  <div className="h-3 w-[82%] rounded-full bg-white/10" />
                </div>

                <div className="space-y-4">
                  {[
                    { label: "Analysis Started", value: 0, tone: "from-[#421b6c] to-[#2d153f]", accent: "#f26d4f", icon: "search" },
                    { label: "Analysis Complete", value: 100, tone: "from-[#3c1c67] to-[#2f134c]", accent: "#ff9450", icon: "check" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center justify-between rounded-2xl border border-white/5 bg-gradient-to-br from-[#2f1c3d] to-[#24132d] px-4 py-3 text-sm font-semibold text-white/85 shadow-[0_18px_70px_rgba(0,0,0,0.45)]"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-[#4c2c7a] to-[#352052] text-white">
                          {item.icon === "search" ? (
                            <svg
                              aria-hidden
                              className="h-5 w-5"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <circle cx="11" cy="11" r="8" />
                              <path d="m21 21-4.3-4.3" />
                            </svg>
                          ) : (
                            <svg
                              aria-hidden
                              className="h-5 w-5"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <circle cx="12" cy="12" r="10" />
                              <path d="m9 12 2 2 4-4" />
                            </svg>
                          )}
                        </div>
                        <span>{item.label}</span>
                      </div>
                      <span className="text-right text-[13px] font-bold" style={{ color: item.accent }}>
                        {item.value}%
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="absolute right-[-24px] top-28 flex min-w-[230px] items-center gap-3 rounded-2xl border border-[#3b2a4d] bg-[#2b1c3b]/95 px-5 py-4 text-sm text-white shadow-[0_22px_90px_rgba(0,0,0,0.6)] backdrop-blur-sm transition duration-300 ease-out animate-float-delayed">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#5a2aa3] text-white shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
                <svg
                  aria-hidden
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="7" r="4" />
                  <path d="M5.5 21a6.5 6.5 0 0 1 13 0" />
                </svg>
              </div>
              <div className="leading-tight">
                <p className="text-[13px] font-semibold text-white">Archetype Found</p>
                <p className="text-[12px] text-white/70">Deep Connector</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section06;
