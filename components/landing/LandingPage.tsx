import type { FC } from "react";
import ScrollAnimator from "./ScrollAnimator";
import ArchetypesSection from "./ArchetypesSection";
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
  return (
    <main className="relative bg-page text-text-primary">
      <ScrollAnimator />
      <NavSection />
      <HeroSection />
      <div id="about">
        <HowItWorksSection />
      </div>
      <div id="glossary">
        <TrustedBySection />
      </div>
      <ValueFeaturesSection />
      <ArchetypesSection />
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
