"use client";

import type { FC } from "react";
import Image from "next/image";

const IconContainer: FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
    {children}
  </div>
);

const ZapIcon: FC = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fe6839" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
  </svg>
);

const GoalIcon: FC = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);

const EyeIcon: FC = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const ChallengeVisionSection: FC = () => {
  const missionTags = ["Safe", "Private", "Non-judgmental"];

  return (
    <section id="challenge-vision" className="relative bg-[#0A0510] px-6 py-24">
      <div className="content-shell relative z-10">
        {/* Top row: Challenge + Mission */}
        <div className="grid gap-6 lg:grid-cols-[1.65fr_1fr]">
          {/* The Challenge Card */}
          <div
            className="relative overflow-hidden rounded-[32px] border border-white/10 p-12"
            style={{ backgroundImage: "linear-gradient(155deg, rgba(31, 16, 41, 1) 0%, rgba(10, 5, 16, 1) 100%)" }}
          >
            <div className="flex flex-col gap-6">
              <IconContainer>
                <ZapIcon />
              </IconContainer>
              <h3 className="font-serif text-[32px] font-normal leading-[1.125] text-white">
                The Challenge
              </h3>
              <p className="max-w-[629px] text-base leading-[1.8] text-[#9CA3AF]">
                <span className="text-white">Most people navigate personal growth guided by instinct, guesswork, or outdated knowledge. </span>
                Yet personal growth is the most influential force in our lives, shaping our happiness, mental health, general health, confidence, and sense of belonging.
              </p>
            </div>
          </div>

          {/* Our Mission Card */}
          <div
            className="relative overflow-hidden rounded-[32px] border border-white/10 p-12"
            style={{ backgroundImage: "linear-gradient(143deg, rgba(31, 16, 41, 1) 0%, rgba(10, 5, 16, 1) 100%)" }}
          >
            <div className="flex flex-col gap-6">
              <IconContainer>
                <GoalIcon />
              </IconContainer>
              <h3 className="font-serif text-[32px] font-normal leading-[1] text-white">
                Our Mission
              </h3>
              <p className="text-base leading-[1.4] text-[#9CA3AF]">
                <span className="text-white">To help people understand themselves </span>
                scientifically, emotionally, and experimentially. LoveIQ is designed to feel:
              </p>
              <div className="flex flex-wrap gap-2">
                {missionTags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-white/10 px-2 py-1 text-xs font-normal text-[#9CA3AF] shadow-[0_3px_10px_rgba(167,139,250,0.05)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom row: Our Vision */}
        <div
          className="mt-6 overflow-hidden rounded-[32px] border border-white/10 p-12"
          style={{ backgroundImage: "linear-gradient(163deg, rgba(31, 16, 41, 1) 0%, rgba(10, 5, 16, 1) 100%)" }}
        >
          <div className="flex flex-col items-center gap-12 lg:flex-row">
            {/* Left content */}
            <div className="flex flex-1 flex-col gap-6">
              <IconContainer>
                <EyeIcon />
              </IconContainer>
              <h3 className="font-serif text-[32px] font-medium leading-[1] text-white">
                Our Vision
              </h3>
              <p className="max-w-[540px] text-base leading-[1.625] text-[#9CA3AF]">
                <span className="text-white">Our vision is to become the world&apos;s most trusted platform for human self-understanding &amp; development to increase human happiness.</span>
                {" "}We start with sexuality, but our horizon extends toward mapping the entire emotional and psychological landscape — identity, attachment, love, and beyond.
              </p>
            </div>

            {/* Right image */}
            <div className="relative h-[250px] w-full overflow-hidden rounded-2xl border border-white/5 lg:w-[543px]">
              <Image
                src="/about/about-vision-bg.png"
                alt="Abstract gradient background"
                fill
                sizes="(min-width: 1024px) 543px, 100vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChallengeVisionSection;
