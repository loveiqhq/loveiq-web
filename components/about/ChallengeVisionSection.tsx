"use client";

import type { FC } from "react";
import Image from "next/image";

const IconContainer: FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
    {children}
  </div>
);

const ZapIcon: FC = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.99999 13.9999C3.81076 14.0006 3.62522 13.9475 3.46495 13.8469C3.30467 13.7463 3.17623 13.6023 3.09454 13.4316C3.01286 13.2609 2.98129 13.0705 3.00349 12.8826C3.0257 12.6946 3.10077 12.5169 3.21999 12.3699L13.12 2.16992C13.1943 2.0842 13.2955 2.02628 13.407 2.00565C13.5185 1.98503 13.6337 2.00293 13.7337 2.05642C13.8337 2.10991 13.9126 2.19582 13.9573 2.30003C14.0021 2.40424 14.0101 2.52057 13.98 2.62992L12.06 8.64992C12.0034 8.80144 11.9844 8.96444 12.0046 9.12493C12.0248 9.28541 12.0837 9.4386 12.1761 9.57135C12.2685 9.70409 12.3918 9.81243 12.5353 9.88708C12.6788 9.96172 12.8382 10.0004 13 9.99992H20C20.1892 9.99927 20.3748 10.0523 20.535 10.1529C20.6953 10.2535 20.8238 10.3976 20.9054 10.5683C20.9871 10.739 21.0187 10.9293 20.9965 11.1173C20.9743 11.3052 20.8992 11.483 20.78 11.6299L10.88 21.8299C10.8057 21.9156 10.7045 21.9736 10.593 21.9942C10.4815 22.0148 10.3663 21.9969 10.2663 21.9434C10.1663 21.8899 10.0874 21.804 10.0427 21.6998C9.99791 21.5956 9.98991 21.4793 10.02 21.3699L11.94 15.3499C11.9966 15.1984 12.0156 15.0354 11.9954 14.8749C11.9752 14.7144 11.9163 14.5612 11.8239 14.4285C11.7315 14.2957 11.6082 14.1874 11.4647 14.1128C11.3212 14.0381 11.1617 13.9994 11 13.9999H3.99999Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
);

const GoalIcon: FC = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 13V2L20 6L12 10" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M20.5612 10.2219C21.0933 11.862 21.1431 13.6205 20.7046 15.2881C20.2661 16.9558 19.3578 18.4623 18.0877 19.6286C16.8177 20.7948 15.2393 21.5717 13.5404 21.8667C11.8415 22.1617 10.0936 21.9625 8.50473 21.2928C6.91581 20.623 5.55272 19.5109 4.57766 18.0888C3.60259 16.6666 3.05658 14.9943 3.00458 13.2708C2.95259 11.5473 3.3968 9.8451 4.28437 8.36677C5.17194 6.88844 6.46551 5.6962 8.01117 4.93188" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M8.00238 9.75C7.50129 10.417 7.17506 11.1988 7.05343 12.0242C6.93179 12.8496 7.01862 13.6922 7.30599 14.4754C7.59336 15.2587 8.07214 15.9575 8.69871 16.5084C9.32529 17.0592 10.0797 17.4445 10.8933 17.6292C11.7069 17.8138 12.5538 17.792 13.3567 17.5656C14.1597 17.3392 14.8933 16.9155 15.4906 16.3331C16.0879 15.7507 16.53 15.028 16.7766 14.231C17.0232 13.434 17.0664 12.588 16.9024 11.77" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
);

const EyeIcon: FC = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2.06202 12.3481C1.97868 12.1236 1.97868 11.8766 2.06202 11.6521C2.87372 9.68397 4.25153 8.00116 6.02079 6.81701C7.79004 5.63287 9.87106 5.00073 12 5.00073C14.129 5.00073 16.21 5.63287 17.9792 6.81701C19.7485 8.00116 21.1263 9.68397 21.938 11.6521C22.0214 11.8766 22.0214 12.1236 21.938 12.3481C21.1263 14.3163 19.7485 15.9991 17.9792 17.1832C16.21 18.3674 14.129 18.9995 12 18.9995C9.87106 18.9995 7.79004 18.3674 6.02079 17.1832C4.25153 15.9991 2.87372 14.3163 2.06202 12.3481Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
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
