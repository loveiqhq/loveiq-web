import type { Metadata } from "next";
import { notFound } from "next/navigation";
import GlossaryTermPage from "@/components/glossary/GlossaryTermPage";
import { getTermBySlug, getAllSlugs } from "@/lib/glossary-data";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.loveiq.org";

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
    alternates: {
      canonical: `${siteUrl}/glossary/${slug}`,
    },
    openGraph: {
      title: `${term.term} | LoveIQ Glossary`,
      description: term.definition,
      type: "article",
      images: [
        {
          url: `${siteUrl}/images/og-image.png`,
          width: 1200,
          height: 630,
          alt: `${term.term} - LoveIQ Glossary`,
        },
      ],
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
