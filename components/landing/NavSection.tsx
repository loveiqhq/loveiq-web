"use client";

import type { FC } from "react";
import Link from "next/link";
import { trackStartSurvey } from "../../lib/analytics";

const navLinks = [{ label: "About", href: "/about" }];

const NavSection: FC = () => {
  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-40 px-4 sm:top-3">
      <div className="content-shell">
        <div className="relative pointer-events-auto">
          <div className="pointer-events-none absolute inset-[-10px] rounded-[999px] bg-[radial-gradient(80%_120%_at_50%_50%,rgba(0,0,0,0.55),transparent_65%)] blur-3xl" />
          <nav className="relative mx-auto flex w-full max-w-[1200px] items-center justify-between gap-5 rounded-[999px] bg-gradient-to-r from-[#1b0f2a] via-[#120a20] to-[#1b0f2a] pl-6 pr-2 py-[6px] shadow-[0_25px_80px_rgba(0,0,0,0.55)] backdrop-blur">
            <div className="flex flex-1 items-center gap-2.5">
              <div className="relative flex h-7 w-7 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-[#ff9450] via-[#fe6839] to-[#c36ddf] shadow-[0_8px_18px_rgba(0,0,0,0.28)] focus-visible-ring">
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
              <span className="font-serif text-xl font-semibold text-white">LoveIQ</span>
            </div>

            <div className="hidden flex-1 items-center justify-center gap-6 lg:flex">
              {navLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-full px-4 py-2 text-sm font-semibold text-white/80 transition hover:bg-white/10 hover:text-white focus-visible-ring"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="flex flex-1 items-center justify-end gap-3">
              <Link
                href="/about"
                className="inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold text-white/85 shadow-[0_15px_40px_rgba(0,0,0,0.35)] transition hover:-translate-y-[2px] hover:border-white/25 hover:text-white focus-visible-ring lg:hidden"
              >
                About
              </Link>
              <Link
                href="/waitlist"
                className="inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-gradient-to-r from-[#ff6a3a] via-[#ff8f50] to-[#ff6a3a] px-4 py-2 text-xs font-semibold text-white shadow-[0_18px_45px_rgba(254,104,57,0.35)] transition hover:translate-y-[-2px] focus-visible-ring sm:px-6 sm:py-3 sm:text-sm"
                onClick={() => trackStartSurvey("nav")}
              >
                Start survey now
                <svg
                  aria-hidden
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default NavSection;
