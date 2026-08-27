import type { MetadataRoute } from "next";
import { xdsTools } from "@/data/xds-tools";
import { industries } from "@/data/industries";
import { aiReady } from "@/data/ai-ready";

export default function sitemap(): MetadataRoute.Sitemap {
  /*
   * The Reality Check routes exist and work whether or not the scorecard is
   * launched — but they are only advertised to search engines once it is. That
   * keeps `scorecardEnabled` as the single switch for the whole launch: the
   * CTAs on /ai-ready and the sitemap flip together, and there is no way to
   * half-launch it by forgetting one.
   */
  const realityCheckPages: MetadataRoute.Sitemap = aiReady.scorecardEnabled
    ? [
        {
          url: "https://xpeditepartners.com.au/ai-ready/reality-check",
          lastModified: new Date(),
          changeFrequency: "monthly" as const,
          priority: 0.9,
        },
        {
          url: "https://xpeditepartners.com.au/ai-ready/reality-check/methodology",
          lastModified: new Date(),
          changeFrequency: "monthly" as const,
          priority: 0.6,
        },
        {
          url: "https://xpeditepartners.com.au/ai-ready/reality-check/privacy",
          lastModified: new Date(),
          changeFrequency: "yearly" as const,
          priority: 0.3,
        },
      ]
    : [];

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
      url: "https://xpeditepartners.com.au/ai-ready",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
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
    ...realityCheckPages,
    ...toolPages,
    ...industryPages,
  ];
}
