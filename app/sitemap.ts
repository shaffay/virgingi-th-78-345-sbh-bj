import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blog";

const SITE = "https://www.wiyo.ae";
const now = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries: MetadataRoute.Sitemap = [
    { url: `${SITE}/`, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${SITE}/real-estate-crm-dubai`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE}/uae-real-estate-crm`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE}/off-plan-crm-uae`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE}/bayut-property-finder-crm`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE}/whatsapp-crm-dubai`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
  ];

  const blogEntries: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${SITE}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly",
    priority: post.featured ? 0.8 : 0.7,
  }));

  return [...staticEntries, ...blogEntries];
}
