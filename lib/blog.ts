export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  keyword: string;
  date: string;
  readingMins: number;
  category: string;
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
  },
];

export function getPost(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}
