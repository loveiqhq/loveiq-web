import Image from "next/image";
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

const ratingAvatars = ["/a791b20c354705558e2dce132f88640a8b4f563a.jpg", "/762ab2dcc4e38a7a2824b7a4f5174f2627a7eaae.png", "/2239bb32f51b4c83bfb647cee859127eae298678.jpg"];

const avatars = [
  { src: "/0caefb431b1f1926399c403cc0418e06f729df1c.jpg" },
  { src: "/fbc4c2241d9dc0e49b93289c9388c37e2de9be1b.jpg" },
  { src: "/People in Relationships.png" },
  { src: "/0f7ed5d44e1082e3707e71327b5df742609705a3.jpg" },
];

const Section08: FC = () => {
  return (
    <section className="section-shell relative overflow-hidden bg-[#0A0510] px-4 text-text-primary" aria-labelledby="stories-heading">
      <div className="content-shell relative flex flex-col items-center gap-10">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-text-secondary">
          <div className="flex -space-x-2">
            {ratingAvatars.map((src, idx) => (
              <div key={idx} className="h-7 w-7 overflow-hidden rounded-full border border-white/30 bg-white/10">
                <Image src={src} alt="Happy customer" width={28} height={28} className="h-full w-full object-cover" />
              </div>
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
              className="flex h-full flex-col rounded-[22px] border border-border bg-card p-6 shadow-card backdrop-blur transition-transform duration-500 ease-out transform-gpu hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
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
                <div className="h-11 w-11 overflow-hidden rounded-full border border-white/30 shadow-soft" aria-hidden>
                  <Image
                    src={avatars[idx]?.src ?? avatars[0].src}
                    alt={item.name}
                    width={44}
                    height={44}
                    className="h-full w-full object-cover"
                  />
                </div>
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
