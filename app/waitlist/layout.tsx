import type { Metadata } from "next";
import type { ReactNode } from "react";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.loveiq.org";

export const metadata: Metadata = {
  title: "Join the Waitlist | LoveIQ Early Access",
  description:
    "Sign up for LoveIQ Early Access and be among the first to take our science-backed sexual psychology assessment. Free, private, and psychologically safe.",
  alternates: {
    canonical: `${siteUrl}/waitlist`,
  },
};

export default function WaitlistLayout({ children }: { children: ReactNode }) {
  return children;
}
