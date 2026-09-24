import type { MetadataRoute } from "next";
import { providers } from "@/data/providers";
import { internetTypes } from "@/data/internetTypes";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(site.lastReviewedISO);
  const u = (path: string, priority: number, changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] = "weekly") => ({
    url: `${site.url}${path}`,
    lastModified,
    changeFrequency,
    priority,
  });
  return [
    u("/", 1),
    u("/internet-providers", 0.9),
    ...internetTypes.map((t) => u(`/internet/${t.slug}`, 0.85)),
    ...providers.map((p) => u(`/providers/${p.slug}`, 0.85)),
    u("/faqs", 0.6, "monthly"),
    u("/about", 0.4, "yearly"),
    u("/contact", 0.4, "yearly"),
    u("/privacy-policy", 0.2, "yearly"),
    u("/terms-and-conditions", 0.2, "yearly"),
    u("/disclaimer", 0.2, "yearly"),
  ];
}
