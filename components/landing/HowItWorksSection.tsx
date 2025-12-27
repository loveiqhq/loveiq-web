import type { FC } from "react";

const steps = [
  {
    step: "Step One",
    title: "Take the Assessment",
    description: "Eight guided dimensions that map how you experience intimacy, desire, and boundaries.",
    badge: "~10 Minutes",
  },
  {
    step: "Step Two",
    title: "Get a Unique Report",
    description: "Personalized insights uncover your sexual psychology and the archetype behind your patterns.",
    badge: "Science grade",
  },
  {
    step: "Step Three",
    title: "Grow with Guidance",
    description: "Use the insights to spark real behavioral change and deeper fulfillment with yourself or a partner.",
    badge: "Life Changing",
  },
];

const HowItWorksSection: FC = () => {
  return (
    <section className="section-shell relative overflow-hidden bg-page px-4 text-text-primary" aria-labelledby="how-it-works-heading">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[var(--gradient-surface)]" />
        <div className="absolute inset-0 bg-noise opacity-18" />
      </div>

      <div className="content-shell relative flex flex-col gap-10">
        <h2 id="how-it-works-heading" className="text-center font-serif text-3xl leading-tight sm:text-4xl">
          How It Works
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((item) => (
            <div
              key={item.title}
              className="relative flex h-full flex-col gap-5 overflow-hidden rounded-card border border-border bg-card p-6 shadow-card backdrop-blur"
            >
              <div className="pointer-events-none absolute inset-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(242,109,79,0.12),transparent_45%),radial-gradient(circle_at_80%_50%,rgba(124,88,255,0.12),transparent_45%)]" />
              </div>

              <div className="relative space-y-2">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-text-muted">{item.step}</p>
                <h3 className="font-serif text-lg sm:text-xl">{item.title}</h3>
                <p className="text-sm leading-relaxed text-text-secondary">{item.description}</p>
              </div>

              <div className="relative mt-auto flex items-center gap-3 rounded-full border border-border bg-white/5 px-4 py-2 text-[12px] font-semibold text-text-secondary">
                <span className="inline-flex h-2 w-2 rounded-full bg-accent-orange" aria-hidden />
                {item.badge}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
