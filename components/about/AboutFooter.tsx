"use client";

import type { FC, ReactNode } from "react";
import Link from "next/link";

type FooterLinkProps = {
  href: string;
  children: ReactNode;
};

const FooterLink: FC<FooterLinkProps> = ({ href, children }) => (
  <Link href={href} className="transition hover:text-white">
    {children}
  </Link>
);

const AboutFooter: FC = () => (
  <footer className="bg-[#050208] px-4 py-16 text-white">
    <div className="content-shell space-y-10">
      <div className="flex flex-col gap-10 border-b border-white/10 pb-8 md:flex-row md:justify-between md:gap-12">
        <div className="space-y-4 md:max-w-md">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-brand text-white shadow-pill">
              <svg aria-hidden viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 19s-7-4-7-9a4 4 0 0 1 7-2.5A4 4 0 0 1 19 10c0 5-7 9-7 9Z" />
              </svg>
            </div>
            <span className="font-serif text-2xl font-semibold text-white">LoveIQ</span>
          </div>
          <p className="text-sm leading-relaxed text-[#6B7280]">
            Science-led psychometric assessment and wellbeing. Making self-understanding mainstream.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          <div className="space-y-4">
            <h4 className="font-serif text-sm font-semibold text-white">Platform</h4>
            <div className="space-y-2 text-sm text-[#6B7280]">
              <FooterLink href="/waitlist">Assessment</FooterLink>
              <FooterLink href="/#start">For Couples</FooterLink>
              <FooterLink href="/#about">Research</FooterLink>
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="font-serif text-sm font-semibold text-white">Company</h4>
            <div className="space-y-2 text-sm text-[#6B7280]">
              <FooterLink href="/about">About</FooterLink>
              <FooterLink href="/careers">Careers</FooterLink>
              <FooterLink href="#contact">Contact</FooterLink>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3 text-xs text-[#6B7280] sm:flex-row sm:items-center sm:justify-between">
        <span>&copy; 2026 LoveIQ. All rights reserved.</span>
        <div className="flex flex-wrap gap-4">
          <FooterLink href="/privacy">Privacy Policy</FooterLink>
          <FooterLink href="/terms">Terms of Service</FooterLink>
        </div>
      </div>
    </div>
  </footer>
);

export default AboutFooter;
