import type { FC } from "react";
import ScrollAnimator from "./ScrollAnimator";
import NavSection from "./NavSection";
import S01Hero from "./S01Hero";
import S02HowItWorks from "./S02HowItWorks";
import S03PerfectFor from "./S03PerfectFor";
import S04TrustedBy from "./S04TrustedBy";
import S05ValueFeatures from "./S05ValueFeatures";
import S06Archetypes from "./S06Archetypes";
import S07SampleProfile from "./S07SampleProfile";
import S08AcademicBoard from "./S08AcademicBoard";
import S09Report from "./S09Report";
import S10Pillars from "./S10Pillars";
import S11Testimonials from "./S11Testimonials";
import S12WhyWeCreated from "./S12WhyWeCreated";
import S13FAQ from "./S13FAQ";
import S14CTA from "./S14CTA";
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
      <S03PerfectFor />
      <div id="glossary">
        <S04TrustedBy />
      </div>
      <S05ValueFeatures />
      <S06Archetypes />
      <S07SampleProfile />
      <S08AcademicBoard />
      <S09Report />
      <S10Pillars />
      <S11Testimonials />
      <S12WhyWeCreated />
      <S13FAQ />
      <S14CTA />
      <FooterSection />
    </main>
  );
};

export default LandingPage;
