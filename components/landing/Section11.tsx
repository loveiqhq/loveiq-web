import type { FC } from "react";

const faqs = [
  "Is this a test or an ongoing journey?",
  "What exactly does this app do?",
  "How is my data used and protected?",
  "What kind of results will I receive?",
  "Who is this app for?",
  "Is it based on science?",
  "How accurate are the insights?",
  "Will I get recommendations or next steps?",
  "Is it anonymous?",
  "Can I talk to a professional or coach through the app?",
  "Is it free?",
  "How long does the first assessment take?",
  "Can I save progress, revisit results, or share with partner?",
];

const Section11: FC = () => {
  return (
    <section className="section-shell relative overflow-hidden bg-page px-4 text-text-primary" aria-labelledby="faq-heading">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_30%,rgba(242,109,79,0.12),transparent_45%),radial-gradient(circle_at_80%_15%,rgba(124,88,255,0.14),transparent_45%),radial-gradient(circle_at_50%_80%,rgba(111,63,255,0.12),transparent_55%)]" />
        <div className="absolute inset-0 bg-noise opacity-16" />
      </div>

      <div className="content-shell relative flex max-w-4xl flex-col items-center gap-8">
        <div className="flex items-center gap-2 rounded-full border border-border bg-white/5 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-text-secondary">
          FAQs
        </div>
        <div className="space-y-3 text-center">
          <h2 id="faq-heading" className="font-serif text-3xl leading-tight sm:text-4xl md:text-5xl">
            Curious Minds Ask. <span className="text-[#9c7dff]">We Answer.</span>
          </h2>
        </div>

        <div className="flex w-full flex-col gap-2">
          {faqs.map((question) => (
            <button
              key={question}
              type="button"
              className="flex w-full items-center justify-between rounded-xl border border-border bg-card px-4 py-3 text-left text-sm font-semibold text-text-secondary shadow-soft transition hover:border-white/20 hover:text-text-primary focus-visible-ring"
            >
              <span>{question}</span>
              <span className="flex h-6 w-6 items-center justify-center rounded-full border border-white/15 text-lg leading-none text-white/80">
                +
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section11;
