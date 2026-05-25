import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blog";

const SITE = "https://www.wiyo.ae";

/**
 * Single combined sitemap served at /sitemap.xml.
 * For ~30 URLs a single sitemap is the right shape; the 50K-URL split
 * into sub-sitemaps only becomes useful beyond that scale.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = [
    // Tier 0 — home (highest priority)
    {
      url: `${SITE}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    // Tier 1 — pillar / money pages
    {
      url: `${SITE}/real-estate-crm-dubai`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${SITE}/uae-real-estate-crm`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${SITE}/off-plan-crm-uae`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    // Tier 2 — integration / feature pages
    {
      url: `${SITE}/bayut-property-finder-crm`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${SITE}/whatsapp-crm-dubai`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    // Tier 3 — content hubs
    {
      url: `${SITE}/blog`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${SITE}/sitemap`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.4,
    },
  ];

  const blogEntries: MetadataRoute.Sitemap = [...blogPosts]
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .map((post) => ({
      url: `${SITE}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "monthly",
      priority: post.featured ? 0.8 : 0.7,
    }));

  return [...staticEntries, ...blogEntries];
}
