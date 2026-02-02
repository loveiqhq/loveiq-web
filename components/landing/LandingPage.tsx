import type { FC } from "react";
import ScrollAnimator from "./ScrollAnimator";
import NavSection from "./NavSection";
import S01Hero from "./S01Hero";
import S02HowItWorks from "./S02HowItWorks";
import S03TrustedBy from "./S03TrustedBy";
import S04ValueFeatures from "./S04ValueFeatures";
import S05Archetypes from "./S05Archetypes";
import S06SampleProfile from "./S06SampleProfile";
// import S07AcademicBoard from "./S07AcademicBoard"; // Hidden temporarily
import S08Report from "./S08Report";
import S09Pillars from "./S09Pillars";
import S10Testimonials from "./S10Testimonials";
import S11PerfectFor from "./S11PerfectFor";
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
      <div id="glossary">
        <S03TrustedBy />
      </div>
      <S04ValueFeatures />
      <S05Archetypes />
      <S06SampleProfile />
      {/* <S07AcademicBoard /> */}
      <S08Report />
      <S09Pillars />
      <S10Testimonials />
      <S11PerfectFor />
      <S12WhyWeCreated />
      <S13FAQ />
      <S14CTA />
      <FooterSection />
    </main>
  );
};

export default LandingPage;
