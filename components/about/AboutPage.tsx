"use client";

import type { FC } from "react";
import NavSection from "../landing/NavSection";
import HeroSection from "./HeroSection";
import ChallengeVisionSection from "./ChallengeVisionSection";
import SolutionSection from "./SolutionSection";
import ProcessSection from "./ProcessSection";
import PublicationsSection from "./PublicationsSection";
import TeamSection from "./TeamSection";
import ContactSection from "./ContactSection";
import AboutFooter from "./AboutFooter";

const AboutPage: FC = () => {
  return (
    <main className="relative bg-[#0A0510] text-white">
      <NavSection />
      <div className="space-y-16 pt-28 sm:pt-32 md:space-y-20">
        <HeroSection />
        <ChallengeVisionSection />
        <SolutionSection />
        <ProcessSection />
        <PublicationsSection />
        <TeamSection />
        <ContactSection />
      </div>
      <AboutFooter />
    </main>
  );
};

export default AboutPage;
