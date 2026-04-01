import type { MetadataRoute } from "next";

const BASE_URL = "https://mzaliamine.portfolia.fr";

export default function sitemap(): MetadataRoute.Sitemap {
  const locales = ["fr", "en"];
  const projects = ["deviscan", "rhania", "portfolia"];

  const pages: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    pages.push({
      url: `${BASE_URL}/${locale}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    });

    for (const project of projects) {
      pages.push({
        url: `${BASE_URL}/${locale}/projets/${project}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.8,
      });
    }
  }

  return pages;
}
