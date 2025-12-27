import type { FC } from "react";

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
    <section className="section-shell relative overflow-hidden bg-page px-4 text-text-primary" aria-labelledby="report-heading">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_40%,rgba(242,109,79,0.12),transparent_45%),radial-gradient(circle_at_80%_20%,rgba(122,88,255,0.16),transparent_40%),radial-gradient(circle_at_70%_80%,rgba(111,63,255,0.18),transparent_45%)]" />
        <div className="absolute inset-0 bg-noise opacity-18" />
      </div>

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
              <div key={item.title} className="flex gap-3">
                <div className="mt-1 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-gradient-brand text-[#140c1e] shadow-soft">
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
              href="#start"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-base font-semibold text-white shadow-pill transition hover:translate-y-[-2px] focus-visible-ring"
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
            </a>
            <div className="flex items-center gap-3 text-sm text-white/70">
              <div className="h-11 w-11 rounded-full border border-border bg-gradient-brand shadow-soft" />
              <div className="space-y-0.5 leading-tight text-text-secondary">
                <p className="italic">“The accuracy shocked me.”</p>
                <p className="text-[12px] font-semibold text-accent-orange">— Alex M.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          <div className="absolute -left-10 -top-12 h-48 w-48 rounded-full bg-accent-orange/20 blur-[80px]" aria-hidden />
          <div className="absolute -right-8 bottom-10 h-56 w-56 rounded-full bg-accent-purple/20 blur-[90px]" aria-hidden />
          <div className="relative w-full max-w-xl overflow-hidden rounded-[24px] border border-border bg-card p-6 shadow-card backdrop-blur">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.08),transparent_35%),radial-gradient(circle_at_80%_40%,rgba(124,88,255,0.1),transparent_40%)] opacity-70" />
            <div className="relative space-y-6">
              <div className="flex items-center justify-between rounded-2xl bg-white/5 px-4 py-2 text-text-secondary">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-accent-orange" aria-hidden />
                  <span className="h-2 w-2 rounded-full bg-accent-peach" aria-hidden />
                  <span className="h-2 w-2 rounded-full bg-accent-purple" aria-hidden />
                </div>
                <div className="h-1.5 w-16 rounded-full bg-white/10" aria-hidden />
              </div>

              <div className="space-y-4 rounded-2xl border border-white/5 bg-white/5 p-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-brand text-[#150c1c]">
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
                      <path d="M20 22H4a2 2 0 0 1-2-2V6" />
                      <path d="M16 2v4" />
                      <path d="M8 2v4" />
                      <path d="M2 10h20" />
                      <path d="m9 16 2 2 4-4" />
                    </svg>
                  </div>
                  <div className="flex-1 space-y-2 text-text-secondary">
                    <p className="text-sm font-semibold">Analysis summary</p>
                    <p className="text-xs text-text-muted">Highlights key behaviors and emotional markers.</p>
                  </div>
                </div>
              </div>

              <div className="space-y-3 rounded-2xl border border-white/5 bg-white/5 p-4">
                {[
                  { label: "Analysis Started", value: 0, tone: "from-[#f26d4f] to-[#fbb25d]" },
                  { label: "Analysis Complete", value: 100, tone: "from-[#7c6bff] to-[#c6b2ff]" },
                    ].map((item) => (
                  <div key={item.label} className="rounded-xl bg-white/5 p-3">
                    <div className="flex items-center justify-between text-sm font-semibold text-text-secondary">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/8">
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
                            {item.value === 0 ? (
                              <>
                                <circle cx="12" cy="12" r="10" />
                                <path d="m12 8-4 4 4 4" />
                                <path d="m16 8-4 4 4 4" />
                              </>
                            ) : (
                              <>
                                <circle cx="12" cy="12" r="10" />
                              <path d="m9 12 2 2 4-4" />
                              </>
                            )}
                          </svg>
                        </div>
                        <span>{item.label}</span>
                      </div>
                      <span className="text-accent-peach">{item.value}%</span>
                    </div>
                    <div className="mt-3 h-2 rounded-full bg-white/5">
                      <div
                        className={`h-2 rounded-full bg-gradient-to-r ${item.tone}`}
                        style={{ width: `${item.value}%` }}
                        aria-hidden
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="absolute -right-8 top-16 w-52 rounded-2xl border border-border bg-panel p-4 text-sm shadow-soft">
              <div className="mb-2 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#7c6bff] to-[#c6b2ff] text-[#140c1e]">
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
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-text-muted">Archetype Found</p>
                  <p className="text-sm font-semibold text-text-primary">Deep Connector</p>
                </div>
              </div>
              <div className="h-2 w-full rounded-full bg-white/10" aria-hidden />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section06;
