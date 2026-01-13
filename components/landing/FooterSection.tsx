import Link from "next/link";
import type { FC } from "react";

const socials = [
  { label: "Newsletter", href: "/waitlist" },
  { label: "Community", href: "#sextypes" },
  { label: "Support", href: "mailto:hello@loveiq.org" },
  { label: "Press", href: "#about" },
];

const FooterSection: FC = () => {
  return (
    <footer className="relative overflow-hidden bg-[#050208] px-4 pb-10 pt-12 text-text-primary" aria-labelledby="footer-heading">
      <div className="content-shell relative flex flex-col gap-10">
        <div className="grid gap-8 md:grid-cols-[1.2fr_1fr_1fr]">
          <div className="space-y-4">
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
              <h2 id="footer-heading" className="font-serif text-xl font-semibold text-white">
                LoveIQ
              </h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-text-secondary">
              Democratizing sexual psychology. We translate complex research into actionable insights for everyday life.
            </p>
            <ul className="grid grid-cols-2 gap-x-3 gap-y-5 text-sm text-text-secondary list-none p-0 m-0 sm:flex sm:flex-wrap sm:items-start sm:gap-3">
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
              <p>Applied Psychometrics UG i.G., Hasenheide 62, 10967 Berlin</p>
              <p>hello@loveiq.org</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-border pt-6 text-xs text-text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Applied Psychometrics UG i.G. Designed &amp; developed with care.</p>
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
