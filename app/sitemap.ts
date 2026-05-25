import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blog";

const SITE = "https://www.wiyo.ae";

/**
 * Multiple sitemaps generate a sitemap index automatically at /sitemap.xml,
 * with sub-sitemaps at /sitemap/{id}.xml — the structure Fortune-500 sites
 * use so search engines can crawl each content type on its own cadence.
 */
export async function generateSitemaps() {
  return [{ id: "pages" }, { id: "blog" }];
}

export default function sitemap({
  id,
}: {
  id: string;
}): MetadataRoute.Sitemap {
  const now = new Date();

  if (id === "pages") {
    return [
      // Tier 0 — home (highest priority, weekly refresh)
      {
        url: `${SITE}/`,
        lastModified: now,
        changeFrequency: "weekly",
        priority: 1.0,
      },
      // Tier 1 — money / pillar pages
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
      // Tier 3 — hubs
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
  }

  if (id === "blog") {
    const sorted = [...blogPosts].sort((a, b) =>
      a.date < b.date ? 1 : -1
    );
    return sorted.map((post) => ({
      url: `${SITE}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "monthly",
      priority: post.featured ? 0.8 : 0.7,
    }));
  }

  return [];
}
