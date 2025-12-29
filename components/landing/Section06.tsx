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
              href="/waitlist"
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
              <div className="h-11 w-11 overflow-hidden rounded-full border border-border shadow-soft">
                <img src="/a791b20c354705558e2dce132f88640a8b4f563a.jpg" alt="Alex M." className="h-full w-full object-cover" />
              </div>
              <div className="space-y-0.5 leading-tight text-text-secondary">
                <p className="italic">“The accuracy shocked me.”</p>
                <p className="text-[12px] font-semibold text-accent-orange">— Alex M.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          <div className="relative w-full max-w-xl overflow-hidden rounded-[24px] border border-border bg-card p-6 shadow-card backdrop-blur">
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

            <div className="absolute right-4 top-4 inline-flex items-center gap-3 rounded-2xl border border-[rgba(255,255,255,0.12)] bg-[#2b1a3a] px-4 py-3 text-sm shadow-[0_14px_40px_rgba(0,0,0,0.35)]">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#5b2a8a] text-white">
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
                  <p className="text-[12px] font-semibold text-white">Archetype Found</p>
                  <p className="text-[12px] text-[#9ca3af]">Deep Connector</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section06;
