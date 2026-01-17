"use client";

import type { FC, ReactNode } from "react";
import Link from "next/link";

type FooterLinkProps = {
  href: string;
  children: ReactNode;
};

const FooterLink: FC<FooterLinkProps> = ({ href, children }) => (
  <Link href={href} className="block leading-5 text-[#6B7280] transition hover:text-white">
    {children}
  </Link>
);

const AboutFooter: FC = () => (
  <footer className="relative overflow-hidden border-t border-white/5 bg-[#050208] pb-10 pt-20">
    <div className="content-shell relative z-10">
      <div className="flex flex-col gap-20 px-6">
        {/* Main Footer Content */}
        <div className="flex flex-col justify-between gap-10 md:flex-row">
          {/* Left: Logo & Description */}
          <div className="flex max-w-[384px] flex-col gap-6">
            <div className="flex items-center gap-2.5">
              <div className="relative flex h-7 w-7 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-[#ff9450] via-[#fe6839] to-[#c36ddf] shadow-[0_8px_18px_rgba(0,0,0,0.28)]">
                <svg
                  aria-hidden
                  viewBox="0 0 24 24"
                  className="relative h-3.5 w-3.5 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 19s-7-4-7-9a4 4 0 0 1 7-2.5A4 4 0 0 1 19 10c0 5-7 9-7 9Z" />
                </svg>
              </div>
              <span className="font-serif text-xl text-white">LoveIQ</span>
            </div>
            <p className="text-sm font-light leading-relaxed text-[#6B7280]">
              Science-led psychometric assessment and wellbeing. Making self-understanding mainstream.
            </p>
          </div>

          {/* Right: Link Columns */}
          <div className="flex gap-16">
            {/* Platform Column */}
            <div className="flex flex-col gap-6">
              <h4 className="font-serif text-sm font-bold text-white">Platform</h4>
              <div className="flex flex-col gap-3 text-sm font-light">
                <FooterLink href="/waitlist">Assessment</FooterLink>
                <FooterLink href="/#start">For Couples</FooterLink>
                <FooterLink href="/#about">Research</FooterLink>
              </div>
            </div>

            {/* Company Column */}
            <div className="flex flex-col gap-6">
              <h4 className="font-serif text-sm font-bold text-white">Company</h4>
              <div className="flex flex-col gap-3 text-sm font-light">
                <FooterLink href="/about">About</FooterLink>
                <FooterLink href="/careers">Careers</FooterLink>
                <FooterLink href="#contact">Contact</FooterLink>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col gap-4 border-t border-white/5 pt-8 text-xs text-[#4B5563] sm:flex-row sm:items-center sm:justify-between">
          <span>&copy; 2025 LoveIQ. All rights reserved.</span>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <Link href="/privacy" className="transition hover:text-white" target="_blank" rel="noreferrer noopener">Privacy Policy</Link>
            <Link href="/cookies" className="transition hover:text-white" target="_blank" rel="noreferrer noopener">Cookie Policy</Link>
            <Link href="/imprint" className="transition hover:text-white" target="_blank" rel="noreferrer noopener">Imprint</Link>
            <Link href="/terms-and-conditions" className="transition hover:text-white" target="_blank" rel="noreferrer noopener">Terms & Conditions</Link>
            <Link href="/terms-of-use" className="transition hover:text-white" target="_blank" rel="noreferrer noopener">Terms of Use</Link>
            <Link href="/digital-content-terms" className="transition hover:text-white" target="_blank" rel="noreferrer noopener">Digital Content & Subscription Terms</Link>
            <Link href="/medical-disclaimer" className="transition hover:text-white" target="_blank" rel="noreferrer noopener">Medical & Psychological Disclaimer</Link>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default AboutFooter;
