import type { FC } from "react";
import Link from "next/link";

const NavSection: FC = () => {
  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-40 px-4 sm:top-3">
      <div className="content-shell">
        <div className="relative pointer-events-auto">
          <div className="pointer-events-none absolute inset-[-10px] rounded-[999px] bg-[radial-gradient(80%_120%_at_50%_50%,rgba(0,0,0,0.55),transparent_65%)] blur-3xl" />
          <nav className="relative mx-auto flex w-full max-w-[1200px] items-center justify-between gap-5 rounded-[999px] bg-gradient-to-r from-[#1b0f2a] via-[#120a20] to-[#1b0f2a] pl-6 pr-2 py-[6px] shadow-[0_25px_80px_rgba(0,0,0,0.55)] backdrop-blur">
            <div className="flex flex-1 items-center gap-3">
              <div className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-[#27142f] shadow-[0_12px_30px_rgba(0,0,0,0.38)] focus-visible-ring">
                <div className="absolute inset-0 bg-gradient-to-br from-[#a2232b] via-[#f05b38] to-[#b15cd3]" />
                <svg
                  aria-hidden
                  viewBox="0 0 16 16"
                  className="relative h-8 w-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M1.33331 6.33335C1.33334 4.81465 2.26961 3.45315 3.68772 2.90962C5.10583 2.36609 6.71224 2.75305 7.72731 3.88269C7.79791 3.95817 7.89663 4.00101 7.99998 4.00101C8.10333 4.00101 8.20205 3.95817 8.27265 3.88269C9.28473 2.74549 10.8951 2.35351 12.3166 2.89834C13.7381 3.44317 14.6739 4.81103 14.6666 6.33335C14.6666 7.86002 13.6666 9.00002 12.6666 10L9.00531 13.542C8.75402 13.8306 8.39084 13.9974 8.00817 13.9998C7.6255 14.0022 7.26024 13.8401 7.00531 13.5547L3.33331 10C2.33331 9.00002 1.33331 7.86669 1.33331 6.33335" />
                  <path d="M2.14667 8.66659H6.33333L6.66667 7.99992L8 10.9999L9.33333 6.33325L10.3333 8.66659H13.8467" />
                </svg>
              </div>
              <span className="font-serif text-xl font-semibold text-white">LoveIQ</span>
            </div>

            <div className="hidden flex-1 items-center justify-center gap-10 text-center text-sm font-semibold text-white/75 lg:flex">
              <Link href="#about" className="rounded-pill px-2 py-1 transition hover:text-white focus-visible-ring">
                About Us
              </Link>
              <Link href="#glossary" className="rounded-pill px-2 py-1 transition hover:text-white focus-visible-ring">
                Glossary
              </Link>
            </div>

            <div className="flex flex-1 justify-end">
              <Link
                href="/waitlist"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#ff6a3a] via-[#ff8f50] to-[#ff6a3a] px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_45px_rgba(254,104,57,0.35)] transition hover:translate-y-[-2px] focus-visible-ring"
              >
                Start Survey Now
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
