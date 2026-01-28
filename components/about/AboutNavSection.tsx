"use client";

import { useState, useEffect, useRef } from "react";
import type { FC } from "react";
import Link from "next/link";
import { trackStartSurvey } from "../../lib/analytics";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Glossary", href: "/glossary" },
  { label: "Trust Zone", href: "/trust-zone" },
];

// Scroll threshold in pixels to prevent flickering on small scroll movements
const SCROLL_THRESHOLD = 15;
// Mobile breakpoint matching Tailwind's sm: (640px)
const MOBILE_BREAKPOINT = 640;

function useScrollDirection() {
  const [isHidden, setIsHidden] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const lastScrollY = useRef(0);
  const lastDirection = useRef<"up" | "down" | null>(null);

  useEffect(() => {
    // Check if mobile on mount and resize
    const checkMobile = () => {
      const mobile = window.innerWidth < MOBILE_BREAKPOINT;
      setIsMobile(mobile);
      if (!mobile) {
        setIsHidden(false);
      }
    };

    // Get scroll position - Lenis uses documentElement as scroll container
    const getScrollY = () => {
      return window.scrollY || document.documentElement.scrollTop;
    };

    checkMobile();
    lastScrollY.current = getScrollY();

    let ticking = false;

    const updateScrollDirection = () => {
      const scrollY = getScrollY();
      const mobile = window.innerWidth < MOBILE_BREAKPOINT;

      if (!mobile) {
        setIsHidden(false);
        lastScrollY.current = scrollY;
        ticking = false;
        return;
      }

      // Always show at top
      if (scrollY <= 0) {
        setIsHidden(false);
        lastScrollY.current = scrollY;
        ticking = false;
        return;
      }

      const diff = scrollY - lastScrollY.current;

      // Only update if we've scrolled past threshold
      if (Math.abs(diff) >= SCROLL_THRESHOLD) {
        const direction = diff > 0 ? "down" : "up";

        // Only update state if direction actually changed
        if (direction !== lastDirection.current) {
          lastDirection.current = direction;
          setIsHidden(direction === "down");
        }

        lastScrollY.current = scrollY;
      }

      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateScrollDirection);
        ticking = true;
      }
    };

    // Listen on window for scroll events (Lenis uses documentElement)
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", checkMobile, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  return { isHidden, isMobile };
}

const AboutNavSection: FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { isHidden, isMobile } = useScrollDirection();

  // Close menu when hiding navbar
  useEffect(() => {
    if (isHidden && menuOpen) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- intentional: sync menu state with scroll visibility
      setMenuOpen(false);
    }
  }, [isHidden, menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  // only apply hide transform on mobile
  const shouldHide = isHidden && isMobile;

  return (
    <header className={`pointer-events-none fixed inset-x-0 top-0 z-[120] px-4 sm:top-3 sm:z-40 nav-header ${shouldHide ? "nav-hidden" : ""}`}>
      <div className="content-shell">
        <div className="relative pointer-events-auto">
          <div className="pointer-events-none absolute inset-[-10px] rounded-[999px] bg-[radial-gradient(80%_120%_at_50%_50%,rgba(0,0,0,0.55),transparent_65%)] blur-3xl" />
          <nav className="relative mx-auto flex w-full max-w-[340px] items-center justify-between gap-3 rounded-[999px] bg-gradient-to-r from-[#1b0f2a] via-[#120a20] to-[#1b0f2a] px-3 py-2 shadow-[0_25px_80px_rgba(0,0,0,0.55)] backdrop-blur sm:max-w-[1200px] sm:gap-5 sm:pl-6 sm:pr-2 sm:py-[6px]">
            <div className="flex flex-1 items-center gap-2">
              <Link href="/" className="flex items-center gap-2">
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
              </Link>
            </div>

            <div className="hidden flex-1 items-center justify-center gap-3 lg:flex">
              {navLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-full px-3 py-2 text-sm font-semibold text-white/80 transition hover:bg-white/10 hover:text-white focus-visible-ring"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="flex flex-1 items-center justify-end gap-2 sm:gap-2">
              {navLinks.slice(0, 3).map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="hidden shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-full border border-white/15 bg-white/5 px-3 py-2 text-xs font-semibold text-white/85 shadow-[0_15px_40px_rgba(0,0,0,0.35)] transition hover:-translate-y-[2px] hover:border-white/25 hover:text-white focus-visible-ring sm:inline-flex lg:hidden"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/waitlist"
                className="group relative hidden shrink-0 items-center justify-center gap-2 overflow-hidden whitespace-nowrap rounded-full bg-gradient-brand px-3.5 py-2 text-[13px] font-semibold text-white shadow-pill transition hover:translate-y-[-2px] focus-visible-ring sm:inline-flex sm:px-6 sm:py-3 sm:text-sm"
                onClick={() => trackStartSurvey("nav")}
              >
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-white opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 translate-y-full bg-white/20 transition-transform duration-300 group-hover:translate-y-0"
                />
                <span className="pointer-events-none absolute inset-0 rounded-full bg-white/10 opacity-0 transition duration-300 group-hover:opacity-100" />
                <span className="pointer-events-none absolute inset-[-12%] rounded-full border border-white/15 mix-blend-screen opacity-70" />
                <span className="relative z-10 transition-colors duration-500 group-hover:text-black">Start survey now</span>
                <svg
                  aria-hidden
                  className="relative z-10 h-5 w-5 transition-colors duration-500 group-hover:text-black"
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
              <button
                type="button"
                className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white/80 shadow-[0_10px_20px_rgba(0,0,0,0.25)] transition hover:border-white/20 hover:text-white focus-visible-ring sm:hidden"
                aria-label="Toggle menu"
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen((prev) => !prev)}
              >
                {menuOpen ? (
                  <svg
                    aria-hidden
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>
                ) : (
                  <svg
                    aria-hidden
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 7h16" />
                    <path d="M4 12h16" />
                    <path d="M4 17h16" />
                  </svg>
                )}
              </button>
            </div>
          </nav>
          {menuOpen && (
            <div className="pointer-events-auto absolute left-0 right-0 top-[72px] mx-auto w-full max-w-[332px] rounded-[24px] border border-white/10 bg-[rgba(21,10,34,0.5)] px-2.5 py-7 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] backdrop-blur-xl sm:hidden animate-menu-slide-down">
              <div className="flex flex-col items-center gap-10">
                {navLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-base font-semibold text-white hover:text-white/80 focus-visible-ring"
                    onClick={closeMenu}
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  href="/waitlist"
                  className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-brand px-5 py-3 text-sm font-semibold text-white shadow-pill transition hover:translate-y-[-2px] focus-visible-ring"
                  onClick={() => {
                    trackStartSurvey("nav");
                    closeMenu();
                  }}
                >
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-0 bg-white opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0 translate-y-full bg-white/20 transition-transform duration-300 group-hover:translate-y-0"
                  />
                  <span className="pointer-events-none absolute inset-0 rounded-full bg-white/10 opacity-0 transition duration-300 group-hover:opacity-100" />
                  <span className="pointer-events-none absolute inset-[-12%] rounded-full border border-white/15 mix-blend-screen opacity-70" />
                  <span className="relative z-10 transition-colors duration-500 group-hover:text-black">Start survey now</span>
                  <svg
                    aria-hidden
                    className="relative z-10 h-5 w-5 transition-colors duration-500 group-hover:text-black"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default AboutNavSection;
