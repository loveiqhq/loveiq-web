import type { FC } from "react";

const testimonials = [
  {
    quote:
      "The results were more insightful than I expected. It connected dots between emotional triggers and communication styles I hadn’t noticed before. Solid UX, too.",
    name: "Noah, 29",
    title: "Software Engineer",
    stars: 5,
  },
  {
    quote:
      "The report was shockingly accurate. And the science behind it? Legit. I liked seeing the blend of emotional intelligence and cognitive behavior models.",
    name: "Amir, 41",
    title: "Product Manager",
    stars: 5,
  },
  {
    quote:
      "We took the quiz together and compared our results—it sparked one of the best conversations we’ve ever had. It helped us understand our emotional rhythm better.",
    name: "Chloe & Andre",
    title: "34 & 35",
    stars: 5,
  },
  {
    quote:
      "We thought it’d be just fun. Turns out, it opened a new level of communication in our relationship. Every couple should try this.",
    name: "Kim & Eli",
    title: "26 & 27",
    stars: 5,
  },
];

const avatars = [
  { color: "from-[#ff8a5a] to-[#f26d4f]" },
  { color: "from-[#7c6bff] to-[#c6b2ff]" },
  { color: "from-[#f7a85c] to-[#6f3fff]" },
  { color: "from-[#6f3fff] to-[#a65aff]" },
];

const Section08: FC = () => {
  return (
    <section className="section-shell relative overflow-hidden bg-page px-4 text-text-primary" aria-labelledby="stories-heading">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(242,109,79,0.12),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(124,88,255,0.14),transparent_45%),radial-gradient(circle_at_50%_80%,rgba(111,63,255,0.14),transparent_55%)]" />
        <div className="absolute inset-0 bg-noise opacity-16" />
      </div>

      <div className="content-shell relative flex flex-col items-center gap-10">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-text-secondary">
          <div className="flex -space-x-2">
            {[0, 1, 2].map((idx) => (
              <div
                key={idx}
                className={`h-7 w-7 rounded-full bg-gradient-to-br ${avatars[idx].color} border border-white/30`}
              />
            ))}
          </div>
          <span>4.9/5 Rating</span>
        </div>

        <div className="space-y-2 text-center">
          <h2 id="stories-heading" className="font-serif text-3xl leading-tight text-text-primary sm:text-4xl md:text-5xl">
            <span className="text-[#c36ddf]">30,000+</span> people have taken a
            <br />
            first step to understand their self.
          </h2>
        </div>

        <div className="grid w-full gap-6 md:grid-cols-2">
          {testimonials.map((item, idx) => (
            <div
              key={item.name}
              className="flex h-full flex-col rounded-[22px] border border-border bg-card p-6 shadow-card backdrop-blur"
            >
              <div className="mb-3 flex items-center gap-1 text-accent-orange" aria-label={`${item.stars} star rating`}>
                {Array.from({ length: item.stars }).map((_, i) => (
                  <svg
                    key={i}
                    aria-hidden
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="none"
                  >
                    <path d="M12 2.5 14.9 8l6.1.8-4.5 4.5 1.1 6.2-5.5-3-5.5 3 1-6.2-4.5-4.5 6.1-.8z" />
                  </svg>
                ))}
              </div>
              <p className="flex-1 text-sm leading-relaxed text-text-secondary">
                “{item.quote}”
              </p>
              <div className="mt-6 flex items-center gap-3 pt-4">
                <div className={`h-11 w-11 rounded-full bg-gradient-to-br ${avatars[idx].color} border border-white/30 shadow-soft`} aria-hidden />
                <div className="leading-tight">
                  <p className="text-sm font-semibold">{item.name}</p>
                  <p className="text-xs text-text-muted">{item.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section08;
