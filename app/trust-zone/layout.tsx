import type { Metadata } from "next";
import type { ReactNode } from "react";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.loveiq.org";

export const metadata: Metadata = {
  title: "Privacy | LoveIQ",
  description:
    "How LoveIQ protects your privacy, anonymity, and data with science-first safeguards. Learn about our encryption, anonymization, and data protection practices.",
  alternates: {
    canonical: `${siteUrl}/trust-zone`,
  },
};

export default function PrivacyLayout({ children }: { children: ReactNode }) {
  return children;
}
