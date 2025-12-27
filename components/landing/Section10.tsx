import type { FC } from "react";

const stats = [
  {
    value: "Only 20%",
    description: "of adults say they are satisfied with their sex life.",
  },
  {
    value: "42% - 54%",
    description: "of women and men in long-term relationships report sexual dissatisfaction.",
  },
  {
    value: "< 50%",
    description: "Nearly two-thirds say their sex life shapes their happiness, yet less than half feel fulfilled.",
  },
];

const Section10: FC = () => {
  return (
    <section className="section-shell relative overflow-hidden bg-page px-4 text-text-primary" aria-labelledby="why-heading">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_30%,rgba(242,109,79,0.12),transparent_45%),radial-gradient(circle_at_80%_15%,rgba(124,88,255,0.14),transparent_45%),radial-gradient(circle_at_50%_85%,rgba(111,63,255,0.16),transparent_50%)]" />
        <div className="absolute inset-0 bg-noise opacity-16" />
      </div>

      <div className="content-shell relative flex flex-col items-center gap-12">
        <div className="space-y-4 text-center">
          <h2 id="why-heading" className="font-serif text-4xl leading-tight sm:text-5xl">
            Why we created <span className="text-[#9c7dff]">LoveIQ?</span>
          </h2>
          <p className="max-w-4xl text-base leading-relaxed text-text-secondary">
            Positive sexual well-being is highly linked to lower stress, anxiety, and depression, better cardiovascular health,
            and higher relationship satisfaction. Therefore we want to make sexuality something we can explore with curiosity,
            confidence, and care — not shame or confusion.
          </p>
        </div>

        <div className="grid w-full gap-6 md:grid-cols-3">
          {stats.map((item, idx) => (
            <div
              key={item.value}
              className="relative overflow-hidden rounded-[22px] border border-border bg-card p-6 text-center shadow-soft backdrop-blur"
            >
              <div className="pointer-events-none absolute inset-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(242,109,79,0.12),transparent_45%),radial-gradient(circle_at_80%_50%,rgba(124,88,255,0.12),transparent_45%)]" />
              </div>
              <div className="mb-6 flex items-center justify-center gap-2">
                <div className="h-2 w-2 rounded-full bg-white/30" />
                <div className="h-2 w-2 rounded-full bg-white/30" />
                <div className="h-2 w-2 rounded-full bg-white/30" />
              </div>
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-[#0f0a18] via-[#1a0d25] to-[#0f0a18] text-2xl font-semibold text-white">
                {idx === 0 && <span className="text-accent-orange">{item.value}</span>}
                {idx === 1 && (
                  <div className="space-y-1 leading-tight">
                    <span className="block text-lg">{item.value}</span>
                    <div className="flex items-center gap-2 text-[10px] font-semibold uppercase text-accent-purple">
                      <span className="inline-flex h-1.5 w-16 rounded-full bg-accent-purple" />
                    </div>
                  </div>
                )}
                {idx === 2 && <span className="text-accent-peach">{item.value}</span>}
              </div>
              <p className="text-sm leading-relaxed text-text-secondary">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section10;
