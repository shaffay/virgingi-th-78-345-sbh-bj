import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blog";

const SITE = "https://www.wiyo.ae";

/**
 * Single source of truth for /sitemap.xml.
 *
 * Static marketing/landing pages are listed explicitly; blog posts are derived
 * from lib/blog so the sitemap can never drift out of sync as new posts ship.
 * A flat urlset (not a sitemap index) is correct well below Google's
 * 50,000-URL / 50 MB threshold.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${SITE}/`, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${SITE}/real-estate-crm-dubai`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE}/uae-real-estate-crm`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE}/off-plan-crm-uae`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE}/bayut-property-finder-crm`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE}/whatsapp-crm-dubai`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${SITE}/sitemap`, lastModified: now, changeFrequency: "monthly", priority: 0.3 },
    { url: `${SITE}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];

  const posts: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${SITE}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly",
    priority: post.featured ? 0.8 : 0.7,
  }));

  return [...staticPages, ...posts];
}
