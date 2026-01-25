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
      <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <path d="M47.8354 28.9232C47.8354 27.9832 47.3079 27.1207 46.4679 26.6932C44.3179 25.5982 42.0154 24.5907 39.4354 23.6107C35.1704 21.9757 32.0629 18.8207 30.4479 14.4982C29.4804 11.8757 28.4854 9.5407 27.4079 7.3607C26.9854 6.5107 26.1154 5.9707 25.1679 5.9707C24.2204 5.9707 23.3454 6.5107 22.9279 7.3632C21.8529 9.5357 20.8604 11.8707 19.8929 14.4882C18.2779 18.8182 15.1679 21.9732 10.9104 23.6057C8.31543 24.5932 6.01043 25.6007 3.86793 26.6932C3.03043 27.1182 2.50293 27.9807 2.50293 28.9207C2.50293 29.8607 3.03043 30.7232 3.87043 31.1507C6.02543 32.2457 8.32793 33.2557 10.9029 34.2307C15.1679 35.8657 18.2754 39.0207 19.8904 43.3457C20.8629 45.9782 21.8554 48.3082 22.9279 50.4807C23.3504 51.3332 24.2179 51.8732 25.1679 51.8732C26.1179 51.8732 26.9879 51.3332 27.4079 50.4807C28.4854 48.3082 29.4779 45.9732 30.4429 43.3532C32.0604 39.0232 35.1729 35.8682 39.4254 34.2357C42.0104 33.2557 44.3129 32.2482 46.4679 31.1532C47.3079 30.7257 47.8354 29.8657 47.8354 28.9232Z" fill="currentColor"/>
        <path d="M42.7401 16.3541C43.3776 16.6791 44.0051 16.9466 44.6226 17.1816C45.1401 17.3816 45.5026 17.7516 45.6976 18.2691C45.9276 18.9016 46.1901 19.5316 46.5076 20.1766C46.9251 21.0316 47.7951 21.5766 48.7476 21.5766H48.7526C49.7026 21.5766 50.5726 21.0366 50.9926 20.1841C51.3101 19.5416 51.5701 18.9091 51.8026 18.2816C52.0026 17.7516 52.3651 17.3816 52.8726 17.1866C53.5001 16.9491 54.1251 16.6816 54.7626 16.3566C55.6026 15.9316 56.1301 15.0666 56.1301 14.1266C56.1301 13.1866 55.6001 12.3241 54.7601 11.8991C54.1251 11.5791 53.5001 11.3116 52.8801 11.0741C52.3651 10.8766 52.0026 10.5066 51.8051 9.98164C51.5701 9.34914 51.3101 8.71664 50.9901 8.07164C50.5701 7.22164 49.7001 6.68164 48.7501 6.68164H48.7451C47.7926 6.68164 46.9251 7.22414 46.5051 8.07914C46.1901 8.72164 45.9276 9.35414 45.7001 9.97414C45.5001 10.5041 45.1376 10.8741 44.6301 11.0691C44.0001 11.3091 43.3751 11.5741 42.7376 11.8991C41.8976 12.3241 41.3701 13.1866 41.3701 14.1266C41.3701 15.0666 41.8976 15.9291 42.7376 16.3541H42.7401Z" fill="currentColor"/>
        <path d="M56.1328 42.9616C55.3403 42.5591 54.5578 42.2241 53.7878 41.9341C52.9403 41.6091 52.3228 40.9791 52.0053 40.1241C51.7128 39.3341 51.3853 38.5441 50.9903 37.7441C50.5678 36.8916 49.6978 36.3516 48.7503 36.3516C47.7978 36.3516 46.9278 36.8941 46.5103 37.7491C46.1178 38.5491 45.7903 39.3366 45.5053 40.1116C45.1803 40.9791 44.5628 41.6091 43.7278 41.9291C42.9478 42.2241 42.1628 42.5591 41.3728 42.9641C40.5353 43.3916 40.0078 44.2516 40.0078 45.1916C40.0078 46.1316 40.5353 46.9916 41.3728 47.4191C42.1628 47.8216 42.9428 48.1541 43.7203 48.4516C44.5628 48.7741 45.1803 49.4016 45.5003 50.2591C45.7903 51.0466 46.1178 51.8366 46.5128 52.6341C46.9328 53.4866 47.8003 54.0266 48.7528 54.0291C49.7028 54.0291 50.5703 53.4916 50.9928 52.6391C51.3903 51.8391 51.7178 51.0491 52.0078 50.2666C52.3278 49.4016 52.9453 48.7741 53.7878 48.4516C54.5678 48.1541 55.3453 47.8241 56.1353 47.4216C56.9753 46.9941 57.5028 46.1316 57.5028 45.1916C57.5028 44.2516 56.9753 43.3891 56.1353 42.9616H56.1328Z" fill="currentColor"/>
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
      <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <g clipPath="url(#clip0_sensual)">
          <path d="M41.8225 44.5775C43.2875 46.0425 43.2875 48.4175 41.8225 49.88C40.3575 51.345 37.9825 51.345 36.52 49.88L24.935 38.295C23.9575 37.3175 22.375 37.3175 21.4 38.295C20.4225 39.2725 20.4225 40.855 21.4 41.83L31.9275 52.3575C33.3925 53.8225 33.3925 56.1975 31.9275 57.66C30.4625 59.125 28.0875 59.125 26.625 57.66L14.9425 45.9775C7.5525 38.7675 0 29.155 0 20C0 10.35 7.29 2.5 16.25 2.5C20.6825 2.5 24.0775 4.155 26.6625 5.9925L17.565 15.0125C15.91 16.665 15 18.865 15 21.2025C15 23.54 15.91 25.7375 17.56 27.3875C19.2125 29.0425 21.41 29.9525 23.75 29.9525C24.815 29.9525 25.8425 29.74 26.8125 29.38L41.825 44.58L41.8225 44.5775ZM36.0525 21.3125L30.8225 26.5075L46.0975 41.5525C47.5625 43.0175 49.9375 43.0175 51.4 41.5525C53.64 39.3125 51.7225 36.8325 51.7225 36.8325L36.0525 21.3125ZM43.6425 2.645C39.5575 2.67 35.6775 4.445 32.6875 7.23L21.095 18.745C19.63 20.21 19.63 22.585 21.095 24.0475C22.56 25.5125 24.935 25.5125 26.3975 24.0475L32.64 17.8475C34.59 15.91 37.735 15.91 39.6875 17.8475L55.4975 33.5425C58.475 28.7375 59.995 24.2375 59.995 20.145C59.995 10.495 52.6 2.645 43.64 2.645H43.6425Z" fill="currentColor"/>
        </g>
        <defs>
          <clipPath id="clip0_sensual">
            <rect width="60" height="60" fill="white"/>
          </clipPath>
        </defs>
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
      <svg viewBox="0 0 59 59" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <path d="M9.84886 1.96504C9.80235 0.861445 10.7092 -0.0447817 11.8128 0.00188468C23.9688 0.515918 29.1081 5.90859 29.4202 18.374L29.4496 18.3887C29.7571 5.91364 34.8942 0.516122 47.0571 0.00187878C48.1606 -0.0447806 49.0675 0.861445 49.021 1.96503C48.5251 13.7316 43.4729 18.931 31.8883 19.5455V24.5242C31.8883 25.8791 30.7899 26.9775 29.4349 26.9775C28.08 26.9775 26.9816 25.8791 26.9816 24.5242V19.5455C15.3969 18.931 10.3447 13.7316 9.84886 1.96504ZM57.5112 32.5233C56.233 30.7476 54.2654 29.6301 52.1064 29.4582C49.9597 29.2715 47.8376 30.0623 46.3876 31.5188L41.7017 35.8218V39.2578C41.7017 43.3201 38.3995 46.626 34.3416 46.626H22.0748V41.7139H34.3416C35.6959 41.7139 36.795 40.6136 36.795 39.2578V33.8896C36.795 32.7851 35.8996 31.8897 34.795 31.8897H21.6136C14.4081 31.8897 7.62948 34.7018 2.5314 39.8031L2.36725 39.9675C0.87577 41.4621 0.0356382 43.4858 0.030023 45.5972L-3.81437e-05 56.9009C-0.00298116 58.0076 0.893308 58.9062 1.99995 58.9062H27.7666C34.5036 58.9062 40.9584 56.4035 45.9411 51.8623L56.5347 42.1977C59.1598 39.5624 59.5818 35.4043 57.5112 32.5233Z" fill="currentColor"/>
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
          className="flex-shrink-0 flex items-center justify-center w-[52px] h-[52px] sm:w-[60px] sm:h-[60px] lg:w-[68px] lg:h-[68px] rounded-xl p-2 sm:p-2.5"
          style={{ backgroundColor: archetype.color, color: "#0a0510" }}
        >
          {archetype.icon}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-serif text-[18px] sm:text-[22px] lg:text-[26px] leading-tight text-white whitespace-nowrap">{archetype.name}</h3>
          <p className="font-serif italic text-[12px] sm:text-[13px] lg:text-[14px] leading-snug text-[#9ca3af] mt-1">
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
