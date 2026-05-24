export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  keyword: string;
  date: string;
  readingMins: number;
  category: string;
  /** Full-bleed cover image URL (Unsplash CDN). */
  coverImage: string;
  /** Short alt text describing the cover photo. */
  coverAlt: string;
  /** Hex gradient pair used as a fallback / accent under the photo. */
  accent: [string, string];
  /** Featured (1) shown as the lead card on the blog index. */
  featured?: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "best-real-estate-crm-dubai-2026",
    title: "The 7 Best Real Estate CRM Platforms for Dubai Agents in 2026 (Ranked)",
    description:
      "Honest, opinionated ranking of the top 7 CRMs for Dubai real estate agents in 2026 — judged on UAE portal integrations, off-plan support, WhatsApp, and AED pricing.",
    keyword: "best real estate CRM Dubai",
    date: "2026-05-01",
    readingMins: 11,
    category: "CRM Buying Guide",
    coverImage:
      "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=2000&q=80",
    coverAlt: "Dubai Marina skyline at golden hour",
    accent: ["#7B5CF0", "#5B7CFA"],
    featured: true,
  },
  {
    slug: "bayut-property-finder-crm-integration-guide",
    title: "How to Connect Bayut and Property Finder to Your CRM (2026 Guide)",
    description:
      "Step-by-step playbook for connecting Bayut, Property Finder, and Dubizzle leads into your CRM via webhooks — with deduplication and 15-minute SLA enforcement.",
    keyword: "Bayut Property Finder CRM integration",
    date: "2026-04-22",
    readingMins: 9,
    category: "Integrations",
    coverImage:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=2000&q=80",
    coverAlt: "Analytics dashboard on a laptop showing lead pipelines",
    accent: ["#FE6B6B", "#FFA64D"],
  },
  {
    slug: "off-plan-real-estate-crm-uae",
    title: "Why UAE Off-Plan Sales Teams Need a Specialist CRM in 2026",
    description:
      "Off-plan is the biggest commission segment in Dubai. Generic CRMs fail it. Here's what a specialist off-plan CRM must do — and how WIYO does it.",
    keyword: "off-plan CRM UAE",
    date: "2026-04-15",
    readingMins: 8,
    category: "Off-Plan",
    coverImage:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=2000&q=80",
    coverAlt: "Modern residential tower architecture",
    accent: ["#1D4ED8", "#22D3EE"],
  },
  {
    slug: "whatsapp-real-estate-dubai-agents",
    title: "How Dubai Real Estate Agents Should Be Using WhatsApp in 2026",
    description:
      "WhatsApp is how Dubai does business. Here's how professional brokerages should be running a shared, AI-augmented WhatsApp inbox — not personal phones.",
    keyword: "WhatsApp real estate Dubai",
    date: "2026-04-08",
    readingMins: 8,
    category: "WhatsApp",
    coverImage:
      "https://images.unsplash.com/photo-1611605698335-8b1569810432?auto=format&fit=crop&w=2000&q=80",
    coverAlt: "Smartphone screen showing messaging app",
    accent: ["#22C55E", "#16A34A"],
  },
  {
    slug: "ai-real-estate-crm-uae",
    title: "AI-Powered CRM for UAE Real Estate: What Agents Need to Know in 2026",
    description:
      "Practical guide to AI in UAE real estate — lead scoring, off-plan matching, Title Deed OCR, and where AI is going next in Dubai's property market.",
    keyword: "AI CRM UAE real estate",
    date: "2026-04-01",
    readingMins: 12,
    category: "AI",
    coverImage:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=2000&q=80",
    coverAlt: "Abstract AI / neural network visualization",
    accent: ["#A855F7", "#EC4899"],
  },
];

export function getPost(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}

export function getRelatedPosts(slug: string, limit = 3) {
  return blogPosts.filter((p) => p.slug !== slug).slice(0, limit);
}
