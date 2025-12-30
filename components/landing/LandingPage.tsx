"use client";

import type { FC } from "react";
import { useEffect } from "react";
import FooterSection from "./FooterSection";
import HeroSection from "./HeroSection";
import HowItWorksSection from "./HowItWorksSection";
import NavSection from "./NavSection";
import Section05 from "./Section05";
import Section06 from "./Section06";
import Section07 from "./Section07";
import Section08 from "./Section08";
import Section09 from "./Section09";
import Section10 from "./Section10";
import Section11 from "./Section11";
import Section12 from "./Section12";
import TrustedBySection from "./TrustedBySection";
import ValueFeaturesSection from "./ValueFeaturesSection";

const LandingPage: FC = () => {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const elements = Array.from(document.querySelectorAll<HTMLElement>(".animate-on-scroll"));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -10% 0px",
      },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="relative bg-page text-text-primary">
      <NavSection />
      <HeroSection />
      <div id="about">
        <HowItWorksSection />
      </div>
      <div id="glossary">
        <TrustedBySection />
      </div>
      <ValueFeaturesSection />
      <Section05 />
      <Section06 />
      <Section07 />
      <Section08 />
      <Section09 />
      <Section10 />
      <Section11 />
      <Section12 />
      <FooterSection />
    </main>
  );
};

export default LandingPage;
