import type { MetadataRoute } from "next";
import { SITE_URL } from "@/config/site";
import { SERVICE_PAGES_LIST } from "@/config/services-pages";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = "2026-10-27";

  return [
    {
      url: SITE_URL,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...SERVICE_PAGES_LIST.map((page) => ({
      url: `${SITE_URL}/${page.slug}`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    })),
  ];
}

