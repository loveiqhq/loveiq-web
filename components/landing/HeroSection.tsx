import type { FC } from "react";
import Link from "next/link";

const HeroSection: FC = () => {
  return (
    <section id="start" className="section-shell relative overflow-hidden bg-page px-4 text-text-primary">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,rgba(255,255,255,0.05),transparent_40%),radial-gradient(circle_at_20%_40%,rgba(242,109,79,0.12),transparent_45%),radial-gradient(circle_at_80%_45%,rgba(156,125,255,0.12),transparent_45%)]" />
        <div className="absolute inset-0 bg-noise opacity-25" />
      </div>

      <div className="content-shell relative flex flex-col items-center text-center">
        <div className="mb-10 inline-flex items-center gap-2 rounded-full border border-border bg-white/5 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-text-secondary shadow-soft backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-accent-orange" aria-hidden />
          Science-backed methodology
        </div>

        <div className="space-y-4">
          <h1 className="font-serif text-4xl leading-tight sm:text-5xl md:text-6xl lg:text-[64px]">
            Gain Insights Into Your
          </h1>
          <div className="relative inline-block">
            <span className="bg-gradient-to-r from-[#ff6a3a] via-[#cf5afb] to-[#7d88ff] bg-clip-text font-serif text-4xl leading-tight text-transparent sm:text-5xl md:text-6xl lg:text-[64px]">
              Sexual Psychology
            </span>
            <span
              aria-hidden
              className="pointer-events-none absolute inset-x-0 -bottom-3 h-[10px] rounded-full bg-gradient-to-r from-[#ff6a3a] via-[#cf5afb] to-[#7d88ff] blur-[0.5px]"
            />
          </div>
        </div>

        <p className="mt-8 max-w-3xl text-lg leading-relaxed text-text-secondary sm:text-xl">
          Built on 10+ years of research. A <strong className="font-semibold text-white">10-minute guided survey</strong> that uncovers the sexual
          patterns and archetype.
        </p>

        <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row">
          <div className="relative rounded-full border border-border bg-white/5 p-2 shadow-[0_25px_80px_rgba(254,104,57,0.25),0_10px_40px_rgba(0,0,0,0.45)] backdrop-blur">
            <Link
              href="#start"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-brand px-8 py-3 text-base font-semibold text-white shadow-pill transition hover:translate-y-[-2px] focus-visible-ring"
            >
              Start Survey Now
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
            </Link>
          </div>
          <Link
            href="#about"
            className="inline-flex h-[58px] min-w-[180px] items-center justify-center rounded-full bg-white/90 px-6 text-sm font-semibold text-[#0f0b18] shadow-soft transition hover:-translate-y-[2px] focus-visible-ring"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
