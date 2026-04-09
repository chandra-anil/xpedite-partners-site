import type { MetadataRoute } from "next";
import { xdsTools } from "@/data/xds-tools";
import { industries } from "@/data/industries";

export default function sitemap(): MetadataRoute.Sitemap {
  const toolPages: MetadataRoute.Sitemap = xdsTools.map((tool) => ({
    url: `https://xpeditepartners.com.au/frameworks/${tool.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const industryPages: MetadataRoute.Sitemap = industries.map((ind) => ({
    url: `https://xpeditepartners.com.au/industries/${ind.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: "https://xpeditepartners.com.au",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://xpeditepartners.com.au/frameworks",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://xpeditepartners.com.au/path-to-value",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...toolPages,
    ...industryPages,
  ];
}
