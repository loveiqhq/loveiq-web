import Link from "next/link";
import type { FC } from "react";

const FooterSection: FC = () => {
  return (
    <footer
      className="relative overflow-hidden bg-linear-to-b from-[#0A0510] to-[#110518] px-4 pb-10 pt-12 text-text-primary"
      aria-labelledby="footer-heading"
    >
      <div className="content-shell relative flex flex-col gap-10">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="relative flex h-7 w-7 items-center justify-center overflow-hidden rounded-2xl bg-linear-to-br from-[#ff9450] via-[#fe6839] to-[#c36ddf] shadow-[0_8px_18px_rgba(0,0,0,0.28)]">
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
              <h2 id="footer-heading" className="font-serif text-xl font-semibold text-white">
                LoveIQ
              </h2>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-[#6B7280]">
              Democratizing sexual psychology. We translate complex research into actionable
              insights for everyday life.
            </p>
          </div>

          {/* Explore Column */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Explore</h3>
            <ul className="space-y-2 text-sm list-none p-0 m-0">
              <li>
                <Link
                  href="/"
                  className="text-[#6B7280] transition hover:text-white focus-visible-ring rounded-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-[#6B7280] transition hover:text-white focus-visible-ring rounded-sm"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/glossary"
                  className="text-[#6B7280] transition hover:text-white focus-visible-ring rounded-sm"
                >
                  Glossary
                </Link>
              </li>
              <li>
                <Link
                  href="/trust-zone"
                  className="text-[#6B7280] transition hover:text-white focus-visible-ring rounded-sm"
                >
                  Trust Center
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Company</h3>
            <div className="space-y-2 text-sm text-[#6B7280]">
              <p className="font-medium">Applied Psychometrics UG</p>
              <p>Hasenheide 62, 10967 Berlin</p>
              <p>hello@loveiq.org</p>
            </div>
          </div>

          {/* Legal Column */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Legal</h3>
            <ul className="space-y-2 text-sm list-none p-0 m-0">
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-[#6B7280] transition hover:text-white focus-visible-ring rounded-sm"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/cookies"
                  className="text-[#6B7280] transition hover:text-white focus-visible-ring rounded-sm"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/imprint"
                  className="text-[#6B7280] transition hover:text-white focus-visible-ring rounded-sm"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Imprint
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-and-conditions"
                  className="text-[#6B7280] transition hover:text-white focus-visible-ring rounded-sm"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-of-use"
                  className="text-[#6B7280] transition hover:text-white focus-visible-ring rounded-sm"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link
                  href="/digital-content-terms"
                  className="text-[#6B7280] transition hover:text-white focus-visible-ring rounded-sm"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Digital Content & Subscription Terms
                </Link>
              </li>
              <li>
                <Link
                  href="/medical-disclaimer"
                  className="text-[#6B7280] transition hover:text-white focus-visible-ring rounded-sm"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Medical & Psychological Disclaimer
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-6 text-xs text-text-muted">
          <p>© 2026 Applied Psychometrics UG. Designed & developed with ❤️.</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
