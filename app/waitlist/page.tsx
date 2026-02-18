import type { Metadata } from "next";
import WaitlistPage from "@/components/waitlist/WaitlistPage";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.loveiq.org";

export const metadata: Metadata = {
  title: "Join the Waitlist | LoveIQ Early Access",
  description:
    "Be among the first to experience LoveIQ's science-backed sexual psychology assessment. Join the waitlist for early access, exclusive content, and a lifetime discount.",
  alternates: {
    canonical: `${siteUrl}/waitlist`,
  },
  openGraph: {
    title: "Join the Waitlist | LoveIQ Early Access",
    description:
      "Be among the first to experience LoveIQ's science-backed sexual psychology assessment. Join the waitlist for early access.",
    url: `${siteUrl}/waitlist`,
  },
};

export default function Page() {
  return <WaitlistPage />;
}
