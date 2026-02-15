import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.loveiq.org";

export default function sitemap(): MetadataRoute.Sitemap {
  const urls = ["/", "/waitlist"];

  return urls.map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
  }));
}

