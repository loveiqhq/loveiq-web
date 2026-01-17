import type { Metadata } from "next";
import LegalNavSection from "../../components/legal/LegalNavSection";
import FooterSection from "../../components/landing/FooterSection";

export const metadata: Metadata = {
  title: "Cookie Policy | LoveIQ",
  description: "LoveIQ Cookie Policy - Information about cookies and tracking technologies we use.",
};

export default function CookiesPage() {
  return (
    <>
      <LegalNavSection />
      <main className="min-h-screen bg-page px-4 py-20">
        <article className="content-shell prose prose-invert mx-auto max-w-3xl">
          <h1 className="font-serif text-4xl font-bold text-white">Cookie Policy</h1>
          <p className="text-text-secondary">Content coming soon.</p>
        </article>
      </main>
      <FooterSection />
    </>
  );
}
