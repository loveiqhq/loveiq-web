import type { FC } from "react";
import Link from "next/link";

const NavSection: FC = () => {
  return (
    <header className="bg-page px-4 pb-4 pt-8">
      <div className="content-shell">
        <nav className="flex w-full items-center gap-6 rounded-full border border-border bg-[var(--color-panel)] px-6 py-3 shadow-card backdrop-blur">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-brand text-white shadow-pill focus-visible-ring">
              <svg
                aria-hidden
                viewBox="0 0 24 24"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" />
              </svg>
            </div>
            <span className="font-serif text-xl font-semibold text-text-primary">LoveIQ</span>
          </div>

          <div className="hidden flex-1 items-center justify-center gap-10 text-sm font-semibold text-text-muted lg:flex">
            <Link href="#about" className="transition hover:text-text-primary focus-visible-ring rounded-pill px-2 py-1">
              How it works
            </Link>
            <Link href="#glossary" className="transition hover:text-text-primary focus-visible-ring rounded-pill px-2 py-1">
              Proof & trust
            </Link>
            <Link href="#start" className="transition hover:text-text-primary focus-visible-ring rounded-pill px-2 py-1">
              Get started
            </Link>
          </div>

          <div className="flex flex-1 justify-end">
            <Link
              href="#start"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-semibold text-white shadow-pill transition hover:translate-y-[-2px] focus-visible-ring"
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
    </header>
  );
};

export default NavSection;
