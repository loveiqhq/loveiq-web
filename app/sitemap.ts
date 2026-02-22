import type { MetadataRoute } from "next";
import { getAllSlugs } from "@/data/glossary-data";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.loveiq.org";

const staticRoutes = [
  "/",
  "/about",
  "/glossary",
  "/waitlist",
  "/trust-zone",
  "/privacy-policy",
  "/terms-of-use",
  "/terms-and-conditions",
  "/medical-disclaimer",
  "/cookies",
  "/digital-content-terms",
  "/imprint",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const siteLastModified = new Date("2026-02-16");

  const staticEntries = staticRoutes.map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: siteLastModified,
  }));

  const glossaryEntries = getAllSlugs().map((slug) => ({
    url: `${siteUrl}/glossary/${slug}`,
    lastModified: siteLastModified,
  }));

  return [...staticEntries, ...glossaryEntries];
}
