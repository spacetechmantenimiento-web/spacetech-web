import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.spacetech.com.mx",
      lastModified: new Date("2026-09-17"),
      changeFrequency: "monthly",
      priority: 1
    }
  ];
}
