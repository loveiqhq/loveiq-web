import type { Metadata } from "next";
import { notFound } from "next/navigation";
import GlossaryTermPage from "../../../components/glossary/GlossaryTermPage";
import { getTermBySlug, getAllSlugs } from "../../../lib/glossary-data";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const term = getTermBySlug(slug);

  if (!term) {
    return {
      title: "Term Not Found | LoveIQ Glossary",
    };
  }

  return {
    title: `${term.term} | LoveIQ Glossary`,
    description: term.definition,
    openGraph: {
      title: `${term.term} | LoveIQ Glossary`,
      description: term.definition,
      type: "article",
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const term = getTermBySlug(slug);

  if (!term) {
    notFound();
  }

  return <GlossaryTermPage term={term} />;
}
