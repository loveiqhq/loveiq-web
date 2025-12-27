import type { FC } from "react";

const logos = [
  "Human Behavior Lab",
  "Clarity Wellness",
  "Mindful Daily",
  "Empathy Studio",
  "Relate Research",
  "Insight Collective",
];

const TrustedBySection: FC = () => {
  return (
    <section className="section-shell relative overflow-hidden bg-page px-4 text-text-primary" aria-labelledby="trusted-heading">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(242,109,79,0.1),transparent_45%),radial-gradient(circle_at_80%_20%,rgba(124,88,255,0.12),transparent_45%),radial-gradient(circle_at_50%_80%,rgba(111,63,255,0.12),transparent_50%)]" />
        <div className="absolute inset-0 bg-noise opacity-14" />
      </div>

      <div className="content-shell relative flex flex-col items-center gap-8 text-center">
        <p
          id="trusted-heading"
          className="bg-gradient-to-r from-[#ff8a5a] via-[#c36ddf] to-[#7c6bff] bg-clip-text text-sm font-semibold uppercase tracking-[0.22em] text-transparent"
        >
          Featured in & Trusted By
        </p>
        <div className="grid w-full grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {logos.map((logo) => (
            <div
              key={logo}
              className="flex h-16 items-center justify-center rounded-2xl border border-border bg-white/5 text-sm font-semibold text-text-secondary shadow-soft"
            >
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;
