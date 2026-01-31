import type { FC } from "react";
import ScrollAnimator from "./ScrollAnimator";
import NavSection from "./NavSection";
import S01Hero from "./S01Hero";
import S02HowItWorks from "./S02HowItWorks";
import S03TrustedBy from "./S03TrustedBy";
import S04ValueFeatures from "./S04ValueFeatures";
import S05Archetypes from "./S05Archetypes";
import S06SampleProfile from "./S06SampleProfile";
import S07Report from "./S07Report";
import S08Pillars from "./S08Pillars";
import S09Testimonials from "./S09Testimonials";
import S10PerfectFor from "./S10PerfectFor";
import S11WhyWeCreated from "./S11WhyWeCreated";
import S12FAQ from "./S12FAQ";
import S13CTA from "./S13CTA";
import FooterSection from "./FooterSection";

const LandingPage: FC = () => {
  return (
    <main className="relative bg-page text-text-primary">
      <ScrollAnimator />
      <NavSection />
      <S01Hero />
      <div id="about">
        <S02HowItWorks />
      </div>
      <div id="glossary">
        <S03TrustedBy />
      </div>
      <S04ValueFeatures />
      <S05Archetypes />
      <S06SampleProfile />
      <S07Report />
      <S08Pillars />
      <S09Testimonials />
      <S10PerfectFor />
      <S11WhyWeCreated />
      <S12FAQ />
      <S13CTA />
      <FooterSection />
    </main>
  );
};

export default LandingPage;
