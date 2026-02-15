import type { MetadataRoute } from "next";
import { getAllSlugs } from "../lib/glossary-data";

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
  const staticEntries = staticRoutes.map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
  }));

  const glossaryEntries = getAllSlugs().map((slug) => ({
    url: `${siteUrl}/glossary/${slug}`,
    lastModified: new Date(),
  }));

  return [...staticEntries, ...glossaryEntries];
}
