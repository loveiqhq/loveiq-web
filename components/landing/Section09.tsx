"use client";

import Image from "next/image";
import { useRef, useState, useEffect, useCallback, type FC } from "react";

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
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const currentTranslateRef = useRef(0);
  const startTranslateRef = useRef(0);
  const animationRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number>(0);
  const cardWidth = 366; // card width + margin
  const totalWidth = cardWidth * personas.length;

  const animate = useCallback((timestamp: number) => {
    if (!lastTimeRef.current) lastTimeRef.current = timestamp;
    const delta = timestamp - lastTimeRef.current;
    lastTimeRef.current = timestamp;

    if (!isPaused && !isDraggingRef.current) {
      currentTranslateRef.current -= delta * 0.03; // Speed: pixels per ms

      // Reset to beginning when we've scrolled past the first set
      if (Math.abs(currentTranslateRef.current) >= totalWidth) {
        currentTranslateRef.current = currentTranslateRef.current + totalWidth;
      }

      if (carouselRef.current) {
        carouselRef.current.style.transform = `translateX(${currentTranslateRef.current}px)`;
      }
    }

    animationRef.current = requestAnimationFrame(animate);
  }, [isPaused, totalWidth]);

  useEffect(() => {
    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [animate]);

  const handleDragStart = (clientX: number) => {
    isDraggingRef.current = true;
    startXRef.current = clientX;
    startTranslateRef.current = currentTranslateRef.current;
  };

  const handleDragMove = (clientX: number) => {
    if (!isDraggingRef.current) return;
    const diff = clientX - startXRef.current;
    currentTranslateRef.current = startTranslateRef.current + diff;

    // Keep within bounds (wrap around)
    if (currentTranslateRef.current > 0) {
      currentTranslateRef.current = -totalWidth + currentTranslateRef.current;
    } else if (Math.abs(currentTranslateRef.current) >= totalWidth) {
      currentTranslateRef.current = currentTranslateRef.current + totalWidth;
    }

    if (carouselRef.current) {
      carouselRef.current.style.transform = `translateX(${currentTranslateRef.current}px)`;
    }
  };

  const handleDragEnd = () => {
    isDraggingRef.current = false;
    lastTimeRef.current = 0; // Reset to avoid jump
  };

  return (
    <section className="section-shell relative overflow-hidden bg-[#0A0510] px-4 text-text-primary" aria-labelledby="audience-heading">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-1/2 h-[480px] w-[480px] -translate-y-1/2 rounded-full bg-[#541475]/12 blur-[110px]" aria-hidden />
      </div>

      <div className="content-shell relative flex flex-col items-center gap-8">
        <div className="absolute inset-0 -z-[1]">
          <div className="absolute left-0 top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-[#541475]/10 blur-[90px]" aria-hidden />
        </div>

        <div className="max-w-4xl space-y-5 text-center sm:space-y-6">
          <h2 id="audience-heading" className="font-serif text-4xl leading-tight text-white sm:text-5xl md:text-[52px] md:leading-[1.1]">
            <span className="block sm:inline">Who Is This</span>{" "}
            <span className="block sm:inline">
              Perfect For<span className="bg-gradient-to-r from-[#fe6839] to-[#a78bfa] bg-clip-text text-transparent">?</span>
            </span>
          </h2>
          <p className="text-base leading-relaxed text-text-secondary sm:text-lg sm:leading-relaxed">
            <span className="block sm:inline">Designed for everyone on the spectrum</span>{" "}
            <span className="block sm:inline">of relationship and self-discovery.</span>
          </p>
        </div>
      </div>

      <div className="relative w-screen max-w-none left-1/2 -translate-x-1/2 overflow-hidden pb-12 mt-8 sm:mt-10">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-24 bg-gradient-to-r from-[#0a0510] to-transparent z-10" aria-hidden />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-24 bg-gradient-to-l from-[#0a0510] to-transparent z-10" aria-hidden />

        <div
          ref={carouselRef}
          className="flex w-max cursor-grab active:cursor-grabbing select-none"
          onMouseDown={(e) => {
            e.preventDefault();
            handleDragStart(e.clientX);
          }}
          onMouseMove={(e) => handleDragMove(e.clientX)}
          onMouseUp={handleDragEnd}
          onMouseLeave={() => {
            handleDragEnd();
            setIsPaused(false);
          }}
          onTouchStart={(e) => handleDragStart(e.touches[0].clientX)}
          onTouchMove={(e) => handleDragMove(e.touches[0].clientX)}
          onTouchEnd={handleDragEnd}
          onMouseEnter={() => setIsPaused(true)}
        >
          {[...personas, ...personas].map((item, idx) => (
            <div
              key={`${item.title}-${idx}`}
              className="group relative m-3 h-[520px] w-[320px] overflow-hidden rounded-[32px] shadow-[0_20px_35px_rgba(0,0,0,0.55)] transition-transform duration-700 ease-out transform-gpu hover:-translate-y-3 hover:shadow-[0_28px_50px_rgba(0,0,0,0.65)] sm:w-[360px]"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(min-width: 640px) 360px, 90vw"
                className={`object-cover transition-transform duration-700 ${
                  item.image === "/images/CarouselCouple.png" ? "scale-[1.05] group-hover:scale-[1.1]" : "group-hover:scale-[1.04]"
                }`}
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
