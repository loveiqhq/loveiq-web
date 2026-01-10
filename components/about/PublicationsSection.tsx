"use client";

import type { FC } from "react";
import Link from "next/link";

const ArrowIcon: FC = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 17 17 7" />
    <path d="M7 7h10v10" />
  </svg>
);

const PublicationsSection: FC = () => {
  const publications = [
    {
      title: "Intimacy and sexual well-being in couples coping with sexual interest/arousal disorder",
      meta: "2025 • Harvard University",
    },
    {
      title: "The importance of perceived partner responsiveness in modern relationships",
      meta: "2025 • Stanford Psychology",
    },
    {
      title: "Digital Therapeutics: Bridging the gap between diagnosis and daily wellness",
      meta: "2024 • Journal of Digital Health",
    },
  ];

  return (
    <section id="publications" className="border-t border-white/5 bg-[#0A0510] px-6 py-24">
      <div className="mx-auto max-w-[896px] px-6">
        {/* Header with dividers */}
        <div className="mb-12 flex items-center gap-4">
          <div className="h-px flex-1 bg-white/10" aria-hidden />
          <h2 className="whitespace-nowrap font-serif text-2xl font-normal leading-[1.33] text-white">
            Latest Science &amp; Publications
          </h2>
          <div className="h-px flex-1 bg-white/10" aria-hidden />
        </div>

        {/* Publication cards */}
        <div className="flex flex-col gap-6">
          {publications.map((pub) => (
            <Link
              key={pub.title}
              href="#"
              className="group flex items-start justify-between gap-4 rounded-xl border border-white/5 bg-[#120B1C] p-6 transition-all hover:border-white/10 hover:bg-[#1a1025]"
            >
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-normal leading-[1.56] text-white">
                  {pub.title}
                </h3>
                <p className="text-xs font-normal leading-[1.33] text-[#6B7280]">
                  {pub.meta}
                </p>
              </div>
              <div className="shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                <ArrowIcon />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PublicationsSection;
