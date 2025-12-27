import type { FC } from "react";

const bullets = [
  {
    title: "Struggling to explain?",
    description:
      "Desire is complex. Without the right words, needs go unmet and frustrations build silently.",
    accent: "from-[#7c6bff] to-[#c6b2ff]",
  },
  {
    title: "Tired of vague advice?",
    description:
      "Generic tips don’t work for unique psychologies. You need insights tailored to your emotional blueprint.",
    accent: "from-[#f26d4f] to-[#fbb25d]",
  },
];

const ValueFeaturesSection: FC = () => {
  return (
    <section className="section-shell relative overflow-hidden bg-page px-4 text-text-primary" aria-labelledby="value-heading">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[var(--gradient-surface)]" />
        <div className="absolute inset-0 bg-noise opacity-16" />
      </div>

      <div className="content-shell relative grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
        <div className="relative overflow-hidden rounded-[24px] border border-border bg-gradient-brand p-1 shadow-card">
          <div className="rounded-[24px] bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.35),transparent_45%),radial-gradient(circle_at_80%_70%,rgba(255,255,255,0.35),transparent_50%),linear-gradient(180deg,rgba(255,255,255,0.15),rgba(255,255,255,0.05))] p-6 backdrop-blur">
            <div className="aspect-[3/4] w-full rounded-[20px] bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.18),transparent_45%),radial-gradient(circle_at_70%_60%,rgba(255,255,255,0.2),transparent_50%),linear-gradient(145deg,rgba(0,0,0,0.2),rgba(0,0,0,0.35))]" />
          </div>
        </div>

        <div className="relative space-y-6">
          <h2 id="value-heading" className="font-serif text-3xl leading-tight sm:text-4xl lg:text-[42px]">
            Great intimacy requires a vocabulary most of us were never taught.
          </h2>
          <div className="space-y-5">
            {bullets.map((item) => (
              <div key={item.title} className="flex gap-3 rounded-2xl border border-border bg-white/5 p-4 shadow-soft backdrop-blur">
                <div
                  className={`mt-1 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${item.accent} text-[#140c1e]`}
                  aria-hidden
                >
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
                    <path d="M12 20h.01" />
                    <path d="M12 14v.01" />
                    <path d="M12 10V4" />
                    <path d="M10 4h4" />
                  </svg>
                </div>
                <div className="space-y-1">
                  <p className="text-lg font-semibold">{item.title}</p>
                  <p className="text-sm leading-relaxed text-white/70">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueFeaturesSection;
