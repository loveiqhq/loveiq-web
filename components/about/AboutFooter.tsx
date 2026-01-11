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
    {/* Background Watermark */}
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
      <span className="select-none font-serif text-[150px] font-extrabold leading-none text-black md:text-[250px]">
        LoveIQ
      </span>
    </div>

    <div className="content-shell relative z-10">
      <div className="flex flex-col gap-20 px-6">
        {/* Main Footer Content */}
        <div className="flex flex-col justify-between gap-10 md:flex-row">
          {/* Left: Logo & Description */}
          <div className="flex max-w-[384px] flex-col gap-6">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FE6839]">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 19s-7-4-7-9a4 4 0 0 1 7-2.5A4 4 0 0 1 19 10c0 5-7 9-7 9Z" fill="white" />
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
          <div className="flex gap-6">
            <Link href="/privacy" className="transition hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="transition hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default AboutFooter;
