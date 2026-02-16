import type { Metadata } from "next";
import AboutPage from "../../components/about/AboutPage";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.loveiq.org";

export const metadata: Metadata = {
  title: "About LoveIQ | Science-led psychometric insights",
  description:
    "Learn how LoveIQ blends science, psychology, and technology to deliver transformative self-understanding through assessments, reports, and guided growth.",
  alternates: {
    canonical: `${siteUrl}/about`,
  },
};

export default function Page() {
  return <AboutPage />;
}
