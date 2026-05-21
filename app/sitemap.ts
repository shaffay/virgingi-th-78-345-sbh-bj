import type { MetadataRoute } from "next";

const SITE = "https://www.wiyo.ae";
const now = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${SITE}/`, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${SITE}/real-estate-crm-dubai`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE}/uae-real-estate-crm`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE}/off-plan-crm-uae`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE}/bayut-property-finder-crm`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE}/whatsapp-crm-dubai`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${SITE}/blog/best-real-estate-crm-dubai-2026`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE}/blog/bayut-property-finder-crm-integration-guide`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE}/blog/off-plan-real-estate-crm-uae`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE}/blog/whatsapp-real-estate-dubai-agents`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE}/blog/ai-real-estate-crm-uae`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
  ];
}
