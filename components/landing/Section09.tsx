import type { FC } from "react";

const personas = [
  { title: "Singles", accent: "from-[#5d7cff]/20 via-[#c36ddf]/10 to-transparent" },
  { title: "Partners & Couples", accent: "from-[#5d7cff]/15 via-[#f26d4f]/8 to-transparent" },
  { title: "Communication Builders", accent: "from-[#5d7cff]/15 via-[#f26d4f]/8 to-transparent" },
  { title: "Long-term Growth", accent: "from-[#f26d4f]/12 via-[#5d7cff]/15 to-transparent" },
];

const Section09: FC = () => {
  return (
    <section className="section-shell relative bg-page px-4 text-text-primary" aria-labelledby="audience-heading">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(242,109,79,0.12),transparent_40%),radial-gradient(circle_at_80%_15%,rgba(124,88,255,0.14),transparent_45%),radial-gradient(circle_at_50%_80%,rgba(111,63,255,0.12),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 bg-noise opacity-16" />

      <div className="content-shell relative flex flex-col items-center gap-10">
        <div className="space-y-3 text-center">
          <h2 id="audience-heading" className="font-serif text-4xl leading-tight sm:text-5xl md:text-5xl">
            Who is this perfect for <span className="text-[#9c7dff]">?</span>
          </h2>
          <p className="text-sm text-text-secondary sm:text-base">
            Designed for everyone on the spectrum of relationship and self-discovery.
          </p>
        </div>

        <div className="grid w-full gap-4 md:grid-cols-2 lg:grid-cols-4">
          {personas.map((item, idx) => (
            <div
              key={`${item.title}-${idx}`}
              className="relative overflow-hidden rounded-[22px] border border-border bg-card p-4 shadow-soft backdrop-blur"
            >
              <div className={`pointer-events-none absolute inset-0 bg-gradient-to-b ${item.accent}`} aria-hidden />
              <div className="flex h-full flex-col justify-end">
                <div className="flex-1" />
                <div className="space-y-2">
                  <p className="text-xl font-semibold text-text-primary">{item.title}</p>
                  <div className="h-1 w-12 rounded-full bg-white/10" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section09;
