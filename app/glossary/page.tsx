import type { Metadata } from "next";
import GlossaryPage from "../../components/glossary/GlossaryPage";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.loveiq.org";

export const metadata: Metadata = {
  title: "Glossary | LoveIQ Psychology Terms & Concepts",
  description:
    "Your guide to the terminology of self-understanding. Decode the language of intimacy, psychology, and personal growth with LoveIQ's comprehensive glossary.",
  alternates: {
    canonical: `${siteUrl}/glossary`,
  },
};

export default function Page() {
  return <GlossaryPage />;
}
