import type { FC } from "react";

const cards = [
  {
    title: "Instant Results",
    description: "No waiting. Receive your comprehensive analysis immediately after completing the survey.",
    tone: "from-[#ff8a5a] to-[#f26d4f]",
  },
  {
    title: "Science-Backed",
    description:
      "Based on over +100 research & science backed papers & books from the world’s leading therapists and researcher.",
    tone: "from-[#7c6bff] to-[#a7c1ff]",
  },
  {
    title: "100% Private",
    description:
      "Your data is anonymous. We prioritize your privacy and do not sell your personal information or link results to your identity.",
    tone: "from-[#f26d4f] to-[#ff9450]",
  },
];

const IconBolt = () => (
  <svg aria-hidden viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m13 2-7 12h6l-1 8 7-12h-6z" />
  </svg>
);

const IconScience = () => (
  <svg aria-hidden viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 11V7a4 4 0 1 1 8 0v4" />
    <rect width="18" height="12" x="3" y="11" rx="2" />
    <path d="M7 11V9" />
  </svg>
);

const IconPrivacy = () => (
  <svg aria-hidden viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m2 2 20 20" />
    <path d="M11.5 11.5a3 3 0 0 1 4 4" />
    <path d="M9.88 9.88a3 3 0 0 0-4 4" />
    <path d="M6.34 6.34C4.9 7.34 3.68 8.77 2.73 10.5a1 1 0 0 0 0 1C4.66 14.93 7.87 17 12 17c1.12 0 2.2-.17 3.21-.49" />
    <path d="M14.12 14.12A3 3 0 0 1 9.88 9.88" />
    <path d="M17.06 17.06A10.43 10.43 0 0 0 21.27 11.5a1 1 0 0 0 0-1 16 16 0 0 0-3.95-4.57" />
  </svg>
);

const icons = [IconBolt, IconScience, IconPrivacy];

const Section07: FC = () => {
  return (
    <section className="section-shell relative bg-[#0A0510] px-4 text-text-primary" aria-labelledby="pillars-heading">
      <div className="content-shell relative flex flex-col gap-6 lg:flex-row">
        {cards.map((card, idx) => {
          const Icon = icons[idx];
          return (
            <div
              key={card.title}
              className="flex flex-1 flex-col gap-4 rounded-[24px] border border-border bg-card p-6 shadow-soft backdrop-blur"
            >
              <div className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${card.tone} text-[#140c1e] shadow-[0_12px_40px_rgba(0,0,0,0.35)]`}>
                <Icon />
              </div>
              <div className="space-y-2">
                <h3 className="font-serif text-xl" id={idx === 0 ? "pillars-heading" : undefined}>
                  {card.title}
                </h3>
                <p className="text-sm leading-relaxed text-text-secondary">{card.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Section07;
