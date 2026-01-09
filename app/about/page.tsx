import type { Metadata } from "next";
import AboutPage from "../../components/about/AboutPage";

export const metadata: Metadata = {
  title: "About LoveIQ | Science-led psychometric insights",
  description:
    "Learn how LoveIQ blends science, psychology, and technology to deliver transformative self-understanding through assessments, reports, and guided growth.",
};

export default function Page() {
  return <AboutPage />;
}
