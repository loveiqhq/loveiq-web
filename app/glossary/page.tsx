import type { Metadata } from "next";
import GlossaryPage from "../../components/glossary/GlossaryPage";

export const metadata: Metadata = {
  title: "Glossary | LoveIQ Psychology Terms & Concepts",
  description:
    "Your guide to the terminology of self-understanding. Decode the language of intimacy, psychology, and personal growth with LoveIQ's comprehensive glossary.",
};

export default function Page() {
  return <GlossaryPage />;
}
