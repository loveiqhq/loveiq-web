"use client";

import { useRef, useState, useEffect, useCallback, type FC } from "react";

interface Archetype {
  name: string;
  tagline: string;
  color: string;
  icon: React.ReactNode;
  coreMotivation: string;
  communication: string;
  attachment: string;
  initiation: string;
  powerOrientation: string;
  riskOrientation: "Low" | "Medium" | "High";
  typicalConfidence: "Low" | "Medium" | "High";
}

const archetypes: Archetype[] = [
  {
    name: "Spark Seeker",
    tagline: '"Let\'s find the spark—then turn it into a blaze."',
    color: "#ff6a3d",
    icon: (
      <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[60px] h-[60px]">
        <path d="M30 5L35 20H50L38 30L43 45L30 35L17 45L22 30L10 20H25L30 5Z" fill="currentColor" />
        <circle cx="30" cy="30" r="8" fill="currentColor" opacity="0.6" />
      </svg>
    ),
    coreMotivation: "Pleasure & play",
    communication: "Charming",
    attachment: "Avoidant/secure",
    initiation: "Active",
    powerOrientation: "Switch",
    riskOrientation: "High",
    typicalConfidence: "High",
  },
  {
    name: "Sensual Connector",
    tagline: '"Touch me with presence and meet me with heart."',
    color: "#e57373",
    icon: (
      <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[60px] h-[60px]">
        <path d="M30 52C30 52 8 36 8 22C8 14 14 8 22 8C26.5 8 30 11 30 11C30 11 33.5 8 38 8C46 8 52 14 52 22C52 36 30 52 30 52Z" fill="currentColor" />
        <path d="M20 28L28 36L40 24" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    coreMotivation: "Intimacy & bonding",
    communication: "Deliberate",
    attachment: "Anxious",
    initiation: "Responsive",
    powerOrientation: "Switch",
    riskOrientation: "Low",
    typicalConfidence: "Medium",
  },
  {
    name: "Relational Nurturer",
    tagline: '"Your comfort and pleasure matter—so do mine."',
    color: "#7fae9e",
    icon: (
      <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[60px] h-[60px]">
        <path d="M30 8C18 8 8 18 8 30C8 42 18 52 30 52C42 52 52 42 52 30C52 18 42 8 30 8Z" fill="currentColor" opacity="0.3" />
        <path d="M30 16C22 16 16 22 16 30C16 38 22 44 30 44C38 44 44 38 44 30C44 22 38 16 30 16Z" fill="currentColor" />
        <path d="M30 24V36M24 30H36" stroke="white" strokeWidth="3" strokeLinecap="round" />
      </svg>
    ),
    coreMotivation: "Healing",
    communication: "Gentle",
    attachment: "Secure",
    initiation: "Responsive",
    powerOrientation: "Submissive",
    riskOrientation: "Low",
    typicalConfidence: "Medium",
  },
];

const getRiskLevel = (level: "Low" | "Medium" | "High"): number => {
  switch (level) {
    case "Low":
      return 1;
    case "Medium":
      return 2;
    case "High":
      return 3;
  }
};

// Arrow icons
const ChevronLeft = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 12L6 8L10 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ChevronRight = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 12L10 8L6 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// Attribute icon components
const CommunicationIcon: FC<{ color: string }> = ({ color }) => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="1" y="3" width="14" height="10" rx="2" stroke={color} strokeWidth="1.5" fill="none" />
    <path d="M1 5L8 9L15 5" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const AttachmentIcon: FC<{ color: string }> = ({ color }) => (
  <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M8 13C8 13 1 8.5 1 4.5C1 2 3 0.5 5.5 0.5C7 0.5 8 1.5 8 1.5C8 1.5 9 0.5 10.5 0.5C13 0.5 15 2 15 4.5C15 8.5 8 13 8 13Z"
      stroke={color}
      strokeWidth="1.5"
      fill="none"
    />
  </svg>
);

const InitiationIcon: FC<{ color: string }> = ({ color }) => (
  <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 0.5L0.5 8H4L4 13.5L8.5 6H5V0.5Z" fill={color} />
  </svg>
);

const PowerIcon: FC<{ color: string }> = ({ color }) => (
  <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 7H5L7 2L9 12L11 7H17" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ArchetypeCard: FC<{ archetype: Archetype }> = ({ archetype }) => {
  const riskLevel = getRiskLevel(archetype.riskOrientation);
  const confidenceLevel = getRiskLevel(archetype.typicalConfidence);

  return (
    <div
      className="relative flex-shrink-0 w-[280px] sm:w-[320px] md:w-[360px] lg:w-[400px] bg-[#130b17] border-2 border-white/10 rounded-[20px] overflow-hidden px-5 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10"
    >
      {/* Header with icon and name */}
      <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-5">
        <div
          className="flex items-center justify-center w-[56px] h-[56px] sm:w-[64px] sm:h-[64px] lg:w-[72px] lg:h-[72px] rounded-xl"
          style={{ backgroundColor: archetype.color, color: "#0a0510" }}
        >
          <div className="w-[36px] h-[36px] sm:w-[40px] sm:h-[40px] lg:w-[44px] lg:h-[44px]">{archetype.icon}</div>
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-serif text-[20px] sm:text-[24px] lg:text-[28px] leading-tight text-white">{archetype.name}</h3>
          <p className="font-serif italic text-[13px] sm:text-[14px] lg:text-[16px] leading-relaxed text-[#9ca3af] mt-1 sm:mt-2">
            {archetype.tagline}
          </p>
        </div>
      </div>

      {/* Behavioral Tendencies */}
      <div className="py-3 sm:py-4">
        <p className="text-[12px] sm:text-[13px] lg:text-[14px] text-[#9ca3af] mb-3 sm:mb-4">Behavioral Tendencies:</p>

        {/* Core motivation box */}
        <div
          className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 rounded-xl mb-4 sm:mb-5"
          style={{ backgroundColor: "#130b17", border: `1px solid ${archetype.color}` }}
        >
          <div
            className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full"
            style={{ border: `1px solid ${archetype.color}` }}
          >
            <div
              className="flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded-full"
              style={{ border: `1px solid ${archetype.color}` }}
            >
              <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full" style={{ backgroundColor: archetype.color }} />
            </div>
          </div>
          <div>
            <p className="text-[10px] sm:text-[11px] lg:text-[12px] font-bold" style={{ color: archetype.color }}>
              Core motivation:
            </p>
            <p className="font-serif text-[16px] sm:text-[18px] lg:text-[20px] font-medium text-white">{archetype.coreMotivation}</p>
          </div>
        </div>

        {/* Attributes grid */}
        <div className="grid grid-cols-2 gap-x-4 sm:gap-x-6 lg:gap-x-8 gap-y-3 sm:gap-y-4">
          <div>
            <div className="flex items-center gap-1.5 mb-0.5 sm:mb-1">
              <CommunicationIcon color="#9ca3af" />
              <span className="text-[10px] sm:text-[11px] lg:text-[12px] text-[#9ca3af]">Communication</span>
            </div>
            <p className="font-serif text-[14px] sm:text-[16px] lg:text-[18px] font-medium text-white">{archetype.communication}</p>
          </div>
          <div>
            <div className="flex items-center gap-1.5 mb-0.5 sm:mb-1">
              <InitiationIcon color="#9ca3af" />
              <span className="text-[10px] sm:text-[11px] lg:text-[12px] text-[#9ca3af]">Initiation</span>
            </div>
            <p className="font-serif text-[14px] sm:text-[16px] lg:text-[18px] font-medium text-white">{archetype.initiation}</p>
          </div>
          <div>
            <div className="flex items-center gap-1.5 mb-0.5 sm:mb-1">
              <AttachmentIcon color="#9ca3af" />
              <span className="text-[10px] sm:text-[11px] lg:text-[12px] text-[#9ca3af]">Attachment</span>
            </div>
            <p className="font-serif text-[14px] sm:text-[16px] lg:text-[18px] font-medium text-white">{archetype.attachment}</p>
          </div>
          <div>
            <div className="flex items-center gap-1.5 mb-0.5 sm:mb-1">
              <PowerIcon color="#9ca3af" />
              <span className="text-[10px] sm:text-[11px] lg:text-[12px] text-[#9ca3af]">Power orientation</span>
            </div>
            <p className="font-serif text-[14px] sm:text-[16px] lg:text-[18px] font-medium text-white">{archetype.powerOrientation}</p>
          </div>
        </div>
      </div>

      {/* Progress bars */}
      <div className="space-y-3 sm:space-y-4 mt-3 sm:mt-4">
        <div>
          <div className="flex items-center justify-between mb-1.5 sm:mb-2">
            <span className="text-[10px] sm:text-[11px] lg:text-[12px] text-[#9ca3af]">Risk orientation</span>
            <span className="font-serif text-[12px] sm:text-[13px] lg:text-[14px] font-medium text-white">{archetype.riskOrientation}</span>
          </div>
          <div className="flex gap-[4px]">
            {[1, 2, 3].map((level) => (
              <div
                key={level}
                className="flex-1 h-[5px] sm:h-[6px] rounded-full"
                style={{ backgroundColor: level <= riskLevel ? archetype.color : "rgba(255,255,255,0.1)" }}
              />
            ))}
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between mb-1.5 sm:mb-2">
            <span className="text-[10px] sm:text-[11px] lg:text-[12px] text-[#9ca3af]">Typical confidence</span>
            <span className="font-serif text-[12px] sm:text-[13px] lg:text-[14px] font-medium text-white">{archetype.typicalConfidence}</span>
          </div>
          <div className="flex gap-[4px]">
            {[1, 2, 3].map((level) => (
              <div
                key={level}
                className="flex-1 h-[5px] sm:h-[6px] rounded-full"
                style={{ backgroundColor: level <= confidenceLevel ? archetype.color : "rgba(255,255,255,0.1)" }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const ArchetypesSection: FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const currentTranslateRef = useRef(0);
  const startTranslateRef = useRef(0);
  const animationRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number>(0);

  // Card dimensions based on screen size (matching the card widths + gap)
  const getCardWidth = useCallback(() => {
    if (typeof window === "undefined") return 416;
    if (window.innerWidth < 640) return 296; // 280px + 16px gap
    if (window.innerWidth < 768) return 340; // 320px + 20px gap
    if (window.innerWidth < 1024) return 384; // 360px + 24px gap
    return 424; // 400px + 24px gap
  }, []);

  const [cardWidth, setCardWidth] = useState(424);
  const totalWidth = cardWidth * archetypes.length;

  useEffect(() => {
    const handleResize = () => {
      setCardWidth(getCardWidth());
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [getCardWidth]);

  const updateActiveIndex = useCallback(() => {
    const position = Math.abs(currentTranslateRef.current);
    const index = Math.round(position / cardWidth) % archetypes.length;
    setActiveIndex(index);
  }, [cardWidth]);

  const animate = useCallback(
    (timestamp: number) => {
      if (!lastTimeRef.current) lastTimeRef.current = timestamp;
      const delta = timestamp - lastTimeRef.current;
      lastTimeRef.current = timestamp;

      if (!isPaused && !isDraggingRef.current) {
        currentTranslateRef.current -= delta * 0.025; // Speed: pixels per ms

        if (Math.abs(currentTranslateRef.current) >= totalWidth) {
          currentTranslateRef.current = currentTranslateRef.current + totalWidth;
        }

        if (carouselRef.current) {
          carouselRef.current.style.transform = `translateX(${currentTranslateRef.current}px)`;
        }

        updateActiveIndex();
      }

      animationRef.current = requestAnimationFrame(animate);
    },
    [isPaused, totalWidth, updateActiveIndex]
  );

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
    lastTimeRef.current = 0;
    updateActiveIndex();
  };

  const navigateToSlide = useCallback(
    (index: number) => {
      const targetPosition = -(index * cardWidth);
      currentTranslateRef.current = targetPosition;
      if (carouselRef.current) {
        carouselRef.current.style.transition = "transform 0.4s ease-out";
        carouselRef.current.style.transform = `translateX(${targetPosition}px)`;
        setTimeout(() => {
          if (carouselRef.current) {
            carouselRef.current.style.transition = "";
          }
        }, 400);
      }
      setActiveIndex(index);
      lastTimeRef.current = 0;
    },
    [cardWidth]
  );

  const handlePrevious = useCallback(() => {
    const newIndex = activeIndex <= 0 ? archetypes.length - 1 : activeIndex - 1;
    navigateToSlide(newIndex);
  }, [activeIndex, navigateToSlide]);

  const handleNext = useCallback(() => {
    const newIndex = activeIndex >= archetypes.length - 1 ? 0 : activeIndex + 1;
    navigateToSlide(newIndex);
  }, [activeIndex, navigateToSlide]);

  const handleDotClick = useCallback(
    (index: number) => {
      navigateToSlide(index);
    },
    [navigateToSlide]
  );

  return (
    <section className="relative overflow-hidden bg-[#0A0510] py-10 sm:py-16 lg:py-20 text-text-primary" aria-labelledby="archetypes-heading">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[616px] h-[594px] rounded-full bg-gradient-radial from-[#541475]/20 via-[#541475]/10 to-transparent blur-[100px]" aria-hidden />
      </div>

      {/* Header */}
      <div className="content-shell relative text-center mb-10 sm:mb-14 lg:mb-16 px-4">
        <h2 id="archetypes-heading" className="font-serif text-[36px] sm:text-[48px] lg:text-[64px] leading-tight text-white tracking-[-0.02em]">
          <span className="font-normal">Explore Our</span>{" "}
          <span className="font-medium italic bg-gradient-to-r from-[#fe6839] via-[#a78bfa] to-[#e9d5ff] bg-clip-text text-transparent">
            14 Archetypes
          </span>
        </h2>
        <p className="mt-6 sm:mt-8 text-[16px] sm:text-[18px] lg:text-[20px] leading-relaxed text-[#d1d5db] max-w-[1000px] mx-auto">
          <span className="font-extrabold text-white">No one is just a single archetype.</span> We all express a unique mix, shaped by context,
          history, and relationships. That&apos;s why our mission is to help you explore the archetypes that resonate most with you.
        </p>
      </div>

      {/* Carousel */}
      <div className="relative w-screen max-w-none left-1/2 -translate-x-1/2 overflow-hidden pb-4">
        <div
          className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-24 lg:w-32 bg-gradient-to-r from-[#0a0510] to-transparent z-10"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-24 lg:w-32 bg-gradient-to-l from-[#0a0510] to-transparent z-10"
          aria-hidden
        />

        <div
          ref={carouselRef}
          className="flex w-max cursor-grab active:cursor-grabbing select-none gap-4 sm:gap-5 lg:gap-6 px-4"
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
          {[...archetypes, ...archetypes].map((archetype, idx) => (
            <ArchetypeCard key={`${archetype.name}-${idx}`} archetype={archetype} />
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-4 sm:gap-6 mt-6 sm:mt-8 pb-4 sm:pb-8">
        <button
          onClick={handlePrevious}
          className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-[#1e102e] border border-white/10 shadow-sm transition-all duration-200 hover:bg-[#2a1840] hover:border-white/20 active:scale-95"
          aria-label="Previous archetype"
        >
          <ChevronLeft />
        </button>

        <div className="flex items-center gap-2">
          {archetypes.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === activeIndex ? "bg-[#fe6839]" : "bg-white/20 hover:bg-white/40"
              }`}
              aria-label={`Go to archetype ${index + 1}`}
              aria-current={index === activeIndex ? "true" : undefined}
            />
          ))}
        </div>

        <button
          onClick={handleNext}
          className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-[#1e102e] border border-white/10 shadow-sm transition-all duration-200 hover:bg-[#2a1840] hover:border-white/20 active:scale-95"
          aria-label="Next archetype"
        >
          <ChevronRight />
        </button>
      </div>
    </section>
  );
};

export default ArchetypesSection;
