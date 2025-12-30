import Image from "next/image";
import type { FC } from "react";

const personas = [
  {
    title: "Singles",
    description: "Gain self-awareness, attract healthier partners, and stop repeating old patterns.",
    image: "/images/carousel1.jpg",
    overlay: "from-[#1a0b2a]/85 via-[#0a0510]/35 to-transparent",
  },
  {
    title: "People in Relationships",
    description: "Decode each other’s needs and create more intimacy, ease, and connection.",
    image: "/images/carouselRelationships.png",
  },
  {
    title: "Couples Exploring Growth",
    description: "Strengthen communication, sexual alignment, and long-term compatibility.",
    image: "/images/CarouselCouple.png",
  },
  {
    title: "Self-Development Lovers",
    description: "Anyone obsessed with understanding their psychology, attachment style, and desire patterns.",
    image: "/images/carouselGrowth.png",
    overlay: "from-[#2e0147]/90 via-[#2e0147]/55 to-transparent",
  },
  {
    title: "Therapists & Coaches",
    description: "Use a structured psychometric tool to help clients articulate their emotional and sexual identity.",
    image: "/images/carouselTherapist.png",
  },
];

const Section09: FC = () => {
  return (
    <section className="section-shell relative overflow-hidden bg-[#0A0510] px-4 text-text-primary" aria-labelledby="audience-heading">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-1/2 h-[480px] w-[480px] -translate-y-1/2 rounded-full bg-[#541475]/12 blur-[110px]" aria-hidden />
      </div>

      <div className="content-shell relative flex flex-col items-center gap-8">
        <div className="absolute inset-0 -z-[1]">
          <div className="absolute left-0 top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-[#541475]/10 blur-[90px]" aria-hidden />
        </div>

        <div className="max-w-4xl space-y-4 text-center">
          <h2 id="audience-heading" className="font-serif text-4xl leading-tight text-white sm:text-5xl md:text-[52px] md:leading-[1.1]">
            Who Is This Perfect For <span className="bg-gradient-to-r from-[#fe6839] to-[#a78bfa] bg-clip-text text-transparent">?</span>
          </h2>
          <p className="text-base text-text-secondary sm:text-lg">
            Designed for everyone on the spectrum of relationship and self-discovery.
          </p>
        </div>
      </div>

      <div className="relative w-screen max-w-none left-1/2 -translate-x-1/2 overflow-hidden pb-12">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-24 bg-gradient-to-r from-[#0a0510] to-transparent" aria-hidden />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-24 bg-gradient-to-l from-[#0a0510] to-transparent" aria-hidden />

        <div className="flex w-max animate-scroll hover:[animation-play-state:paused]">
          {[...personas, ...personas].map((item, idx) => (
            <div
              key={`${item.title}-${idx}`}
              className="group relative m-3 h-[520px] w-[320px] overflow-hidden rounded-[32px] border border-white/5 bg-[#0f0a18] shadow-[0_20px_35px_rgba(0,0,0,0.55)] transition-transform duration-700 ease-out transform-gpu hover:-translate-y-3 hover:shadow-[0_28px_50px_rgba(0,0,0,0.65)] sm:w-[360px]"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(min-width: 640px) 360px, 90vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                priority={idx === 0}
              />
              <div
                className={`pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0a0510]/80 via-[#0a0510]/40 to-transparent ${item.overlay ?? ""}`}
                aria-hidden
              />
              <div
                className="pointer-events-none absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-t from-[#7c3aed]/55 via-[#a78bfa]/25 to-transparent opacity-0 blur-[4px] transition-opacity duration-500 group-hover:opacity-100"
                aria-hidden
              />
              <div className="absolute inset-x-0 bottom-0 p-6 pb-8 space-y-3 transition-all duration-500 group-hover:translate-y-[-4px]">
                <p className="font-serif text-2xl font-semibold text-white drop-shadow-md">{item.title}</p>
                {item.description && (
                  <div className="relative">
                    <div className="pointer-events-none absolute inset-x-[-8px] bottom-[-16px] top-auto h-16 rounded-b-2xl bg-[radial-gradient(circle_at_50%_100%,rgba(167,139,250,0.42),transparent_70%)] opacity-0 blur-md transition-opacity duration-400 group-hover:opacity-100" />
                    <p className="relative text-sm text-white/80 opacity-0 transition-opacity duration-400 group-hover:opacity-100">
                      {item.description}
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section09;
