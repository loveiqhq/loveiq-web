import type { Metadata } from "next";
import TrustZonePage from "@/components/trust-zone/TrustZonePage";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.loveiq.org";

export const metadata: Metadata = {
  title: "Trust Zone | LoveIQ — Privacy, Security & Ethics",
  description:
    "Learn how LoveIQ protects your privacy with encryption, anonymity, and ethical data practices. Your most intimate reflections deserve the highest level of security.",
  alternates: {
    canonical: `${siteUrl}/trust-zone`,
  },
  openGraph: {
    title: "Trust Zone | LoveIQ — Privacy, Security & Ethics",
    description:
      "Learn how LoveIQ protects your privacy with encryption, anonymity, and ethical data practices.",
    url: `${siteUrl}/trust-zone`,
  },
};

export default function Page() {
  return <TrustZonePage />;
}
