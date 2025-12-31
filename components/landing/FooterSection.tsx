import Link from "next/link";
import type { FC } from "react";

const socials = [
  { label: "Newsletter", href: "/waitlist" },
  { label: "Community", href: "#sextypes" },
  { label: "Support", href: "mailto:hello@loveiq.com" },
  { label: "Press", href: "#about" },
];

const FooterSection: FC = () => {
  return (
    <footer className="relative overflow-hidden bg-[#050208] px-4 pb-10 pt-12 text-text-primary" aria-labelledby="footer-heading">
      <div className="content-shell relative flex flex-col gap-10">
        <div className="grid gap-8 md:grid-cols-[1.2fr_1fr_1fr]">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-brand text-white shadow-pill">
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
              <h2 id="footer-heading" className="font-serif text-2xl font-semibold">
                LoveIQ
              </h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-text-secondary">
              Democratizing sexual psychology. We translate complex research into actionable insights for everyday life.
            </p>
            <ul className="flex flex-wrap items-start gap-2 sm:gap-3 text-sm text-text-secondary">
              {socials.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="rounded-full border border-border bg-white/5 px-3 py-2 transition hover:border-white/30 hover:text-text-primary focus-visible-ring"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Platform</h3>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li>
                <Link href="/waitlist" className="transition hover:text-text-primary focus-visible-ring rounded">
                  Assessment
                </Link>
              </li>
              <li>
                <Link href="#about" className="transition hover:text-text-primary focus-visible-ring rounded">
                  Methodology
                </Link>
              </li>
              <li>
                <Link href="#sextypes" className="transition hover:text-text-primary focus-visible-ring rounded">
                  Sextypes
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="transition hover:text-text-primary focus-visible-ring rounded">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Company</h3>
            <div className="space-y-2 text-sm text-text-secondary">
              <p>LoveIQ UG i.G., Hasenheide 62, 10967 Berlin</p>
              <p>hello@loveiq.com</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-border pt-6 text-xs text-text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© 2025 LoveIQ Inc. Designed &amp; developed with care.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="transition hover:text-text-primary focus-visible-ring rounded">
              Privacy Policy
            </Link>
            <Link href="/terms" className="transition hover:text-text-primary focus-visible-ring rounded">
              Terms of Service
            </Link>
            <Link href="/cookies" className="transition hover:text-text-primary focus-visible-ring rounded">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
