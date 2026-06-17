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
    title: "The Best Real Estate CRM in Dubai for 2026: The Complete UAE Agent Guide",
    description:
      "Compare the 8 best real estate CRMs in Dubai for 2026. Native Bayut + Property Finder + Dubizzle, AI lead scoring, off-plan, WhatsApp — judged on what actually matters in UAE property.",
    keyword: "best real estate CRM Dubai",
    date: "2026-05-15",
    readingMins: 14,
    category: "CRM Buying Guide",
    coverImage:
      "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=2000&q=80",
    coverAlt: "Dubai Marina skyline at golden hour",
    accent: ["#7B5CF0", "#5B7CFA"],
    featured: true,
  },
  {
    slug: "real-estate-crm-software-uae",
    title: "Top 10 Real Estate CRM Software in UAE for 2026 — Ranked & Reviewed",
    description:
      "We ranked 10 real estate CRM platforms used across the UAE in 2026 — on UAE portal integrations, AI, pricing, and time-to-live. Find the right fit for your brokerage size.",
    keyword: "real estate CRM software UAE",
    date: "2026-05-10",
    readingMins: 12,
    category: "CRM Buying Guide",
    coverImage:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2000&q=80",
    coverAlt: "Modern office with team reviewing software dashboards",
    accent: ["#0EA5E9", "#6366F1"],
  },
  {
    slug: "bayut-property-finder-crm-integration-guide",
    title: "Bayut & Property Finder CRM Integration: How Dubai Agents Capture Every Lead in 2026",
    description:
      "Stop losing leads between Bayut, Property Finder and your CRM. The full playbook for native webhook integration, deduplication, and 15-minute SLA enforcement.",
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
    title: "Off-Plan Real Estate CRM Dubai: The Complete 2026 Guide for UAE Developers & Brokers",
    description:
      "Off-plan is Dubai's biggest commission segment. This guide breaks down what an off-plan CRM must do: project catalogues, AI matching, Oqood capture, payment plans.",
    keyword: "off-plan CRM Dubai",
    date: "2026-04-15",
    readingMins: 11,
    category: "Off-Plan",
    coverImage:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=2000&q=80",
    coverAlt: "Modern residential tower architecture",
    accent: ["#1D4ED8", "#22D3EE"],
  },
  {
    slug: "manage-real-estate-leads-dubai",
    title: "How to Manage Real Estate Leads in Dubai: The 2026 Agent Playbook",
    description:
      "A 5-step lead management system for Dubai agents drowning in Bayut, Property Finder and WhatsApp inquiries. Capture, score, respond, qualify, close.",
    keyword: "manage real estate leads Dubai",
    date: "2026-04-10",
    readingMins: 10,
    category: "Playbooks",
    coverImage:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=2000&q=80",
    coverAlt: "Sales team reviewing a leads pipeline on a whiteboard",
    accent: ["#F59E0B", "#EC4899"],
  },
  {
    slug: "real-estate-pipeline-management-uae",
    title: "Real Estate Pipeline Management UAE: How to Build a Deal Flow That Never Stalls",
    description:
      "The 7 deal stages every UAE pipeline needs, why most stall, and how to set up Kanban + SLA + analytics so your team sees the same truth every morning.",
    keyword: "real estate pipeline management UAE",
    date: "2026-04-09",
    readingMins: 9,
    category: "Pipeline & Operations",
    coverImage:
      "https://images.unsplash.com/photo-1611926653458-09294b3142bf?auto=format&fit=crop&w=2000&q=80",
    coverAlt: "Kanban pipeline view on a screen",
    accent: ["#10B981", "#0EA5E9"],
  },
  {
    slug: "whatsapp-real-estate-dubai-agents",
    title: "WhatsApp CRM for Real Estate UAE: The Complete 2026 Automation Guide",
    description:
      "WhatsApp is the UAE sales floor. The guide to running it professionally — Business API, shared inbox, AI drafts, broadcast and drip — without burning out agents.",
    keyword: "WhatsApp CRM real estate UAE",
    date: "2026-04-08",
    readingMins: 10,
    category: "WhatsApp",
    coverImage:
      "https://images.unsplash.com/photo-1611605698335-8b1569810432?auto=format&fit=crop&w=2000&q=80",
    coverAlt: "Smartphone screen showing messaging app",
    accent: ["#22C55E", "#16A34A"],
  },
  {
    slug: "15-minute-rule-dubai-real-estate-leads",
    title: "The 15-Minute Rule in Dubai Real Estate: Why Response Speed Wins More Deals Than Any Script",
    description:
      "78% of Dubai buyers sign with the first agent who responds. Here's the data, why Dubai is the hardest market to hit a 15-minute SLA, and how to enforce it.",
    keyword: "response time real estate leads Dubai",
    date: "2026-04-05",
    readingMins: 8,
    category: "Lead Response",
    coverImage:
      "https://images.unsplash.com/photo-1495364141860-b0d03eccd065?auto=format&fit=crop&w=2000&q=80",
    coverAlt: "Stopwatch on a dark background symbolising speed of response",
    accent: ["#EF4444", "#F97316"],
  },
  {
    slug: "ai-real-estate-crm-uae",
    title: "AI Lead Scoring for Real Estate Dubai: How GPT-4o Tells Your Agents Who to Call First",
    description:
      "Native GPT-4o lead scoring on every Dubai lead — 5-second briefs, intent scores, recommended actions, and drafted first messages. Practical guide for UAE brokerages.",
    keyword: "AI lead scoring real estate Dubai",
    date: "2026-04-01",
    readingMins: 12,
    category: "AI",
    coverImage:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=2000&q=80",
    coverAlt: "Abstract AI / neural network visualization",
    accent: ["#A855F7", "#EC4899"],
  },
  {
    slug: "close-more-property-deals-dubai",
    title: "How to Close More Property Deals in Dubai: 10 Proven Strategies for 2026",
    description:
      "Ten tested strategies UAE agents are using in 2026 to lift contact rate, viewing rate, and offer rate — from the 15-minute SLA to AI buyer-project matching.",
    keyword: "close property deals Dubai",
    date: "2026-03-28",
    readingMins: 11,
    category: "Playbooks",
    coverImage:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=2000&q=80",
    coverAlt: "Two professionals shaking hands closing a deal",
    accent: ["#F472B6", "#A855F7"],
  },
  {
    slug: "dubai-real-estate-agent-tools-2026",
    title: "Dubai Real Estate Agent Tools in 2026: The Complete Tech Stack for Top Brokers",
    description:
      "The old 6-tool stack vs the consolidated 2026 operating system. What every Dubai broker uses for lead gen, CRM, WhatsApp, off-plan, marketing — and what it costs.",
    keyword: "Dubai real estate agent tools 2026",
    date: "2026-03-22",
    readingMins: 11,
    category: "Tech Stack",
    coverImage:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=2000&q=80",
    coverAlt: "Multiple devices on a desk showing different software",
    accent: ["#6366F1", "#0EA5E9"],
  },
  {
    slug: "real-estate-crm-solo-agents-dubai",
    title: "Real Estate CRM for Solo Agents in Dubai: Is It Worth It in 2026?",
    description:
      "Solo Dubai agents have a real CRM choice in 2026. We unpack what a freelance agent actually needs, what to skip, and the AED 1,000/mo plans worth a look.",
    keyword: "CRM for solo real estate agents Dubai",
    date: "2026-03-18",
    readingMins: 7,
    category: "Solo Agents",
    coverImage:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=2000&q=80",
    coverAlt: "Independent professional working on a laptop in a modern café",
    accent: ["#0EA5E9", "#22D3EE"],
  },
  {
    slug: "real-estate-crm-vs-property-management-software-dubai",
    title: "Real Estate CRM vs Property Management Software: What Dubai Agents Actually Need",
    description:
      "The two are not the same. A clear breakdown of sales-focused CRM vs tenant-focused PMS — with a decision matrix by role for Dubai brokerages, landlords, and developers.",
    keyword: "real estate CRM vs property management software Dubai",
    date: "2026-03-12",
    readingMins: 8,
    category: "Buying Guide",
    coverImage:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80",
    coverAlt: "Residential building exterior at dusk",
    accent: ["#14B8A6", "#0EA5E9"],
  },
  {
    slug: "rera-aware-crm-dubai-real-estate",
    title: "RERA-Aware CRM for Dubai Real Estate: What Every UAE Broker Must Know in 2026",
    description:
      "RERA, DLD, Oqood — terms generic CRMs have never heard of. The guide to picking a CRM that actually understands Dubai's regulatory framework and audit needs.",
    keyword: "RERA CRM Dubai",
    date: "2026-03-06",
    readingMins: 10,
    category: "Compliance",
    coverImage:
      "https://images.unsplash.com/photo-1554469384-e58fac16e23a?auto=format&fit=crop&w=2000&q=80",
    coverAlt: "Documents and contracts on a desk with a pen",
    accent: ["#0891B2", "#7C3AED"],
  },
];

export function getPost(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}

/**
 * Related posts for the "Continue reading" rail — same-category posts first,
 * then most-recent others, so every article links out to genuinely relevant
 * neighbours instead of always the three newest.
 */
export function getRelatedPosts(slug: string, limit = 3): BlogPost[] {
  const current = blogPosts.find((p) => p.slug === slug);
  const others = blogPosts.filter((p) => p.slug !== slug);
  if (!current) return others.slice(0, limit);
  const sameCategory = others.filter((p) => p.category === current.category);
  const rest = others.filter((p) => p.category !== current.category);
  return [...sameCategory, ...rest].slice(0, limit);
}

export interface PillarLink {
  href: string;
  label: string;
}

/** The landing page each blog category most directly supports (blog → pillar). */
const CATEGORY_PILLAR: Record<string, PillarLink> = {
  "CRM Buying Guide": { href: "/real-estate-crm-dubai", label: "Real Estate CRM in Dubai" },
  "Buying Guide": { href: "/uae-real-estate-crm", label: "UAE Real Estate CRM" },
  Integrations: { href: "/bayut-property-finder-crm", label: "Bayut + Property Finder CRM" },
  "Off-Plan": { href: "/off-plan-crm-uae", label: "Off-Plan CRM UAE" },
  WhatsApp: { href: "/whatsapp-crm-dubai", label: "WhatsApp CRM Dubai" },
  Playbooks: { href: "/real-estate-crm-dubai", label: "Real Estate CRM in Dubai" },
  "Pipeline & Operations": { href: "/off-plan-crm-uae", label: "Off-Plan CRM UAE" },
  "Lead Response": { href: "/bayut-property-finder-crm", label: "Bayut + Property Finder CRM" },
  AI: { href: "/uae-real-estate-crm", label: "UAE Real Estate CRM" },
  "Tech Stack": { href: "/uae-real-estate-crm", label: "UAE Real Estate CRM" },
  "Solo Agents": { href: "/real-estate-crm-dubai", label: "Real Estate CRM in Dubai" },
  Compliance: { href: "/uae-real-estate-crm", label: "UAE Real Estate CRM" },
};

const DEFAULT_PILLAR: PillarLink = {
  href: "/uae-real-estate-crm",
  label: "UAE Real Estate CRM",
};

/** Best-matching landing page for a post's category. */
export function getPillarFor(category: string): PillarLink {
  return CATEGORY_PILLAR[category] ?? DEFAULT_PILLAR;
}

/** The blog categories most relevant to each landing page (pillar → blog). */
const PILLAR_CATEGORIES: Record<string, string[]> = {
  "/real-estate-crm-dubai": ["CRM Buying Guide", "Playbooks", "Solo Agents", "Lead Response"],
  "/uae-real-estate-crm": ["CRM Buying Guide", "Buying Guide", "AI", "Tech Stack", "Compliance"],
  "/off-plan-crm-uae": ["Off-Plan", "Pipeline & Operations"],
  "/bayut-property-finder-crm": ["Integrations", "Lead Response", "Playbooks"],
  "/whatsapp-crm-dubai": ["WhatsApp", "Lead Response"],
};

/**
 * Posts to surface from a landing page (landing → blog). Falls back to filling
 * with other recent posts so the section is always populated.
 */
export function getPostsForPillar(path: string, limit = 4): BlogPost[] {
  const categories = PILLAR_CATEGORIES[path];
  const matched = categories
    ? blogPosts.filter((p) => categories.includes(p.category))
    : [];
  if (matched.length >= limit) return matched.slice(0, limit);
  const fillers = blogPosts.filter(
    (p) => !matched.some((m) => m.slug === p.slug),
  );
  return [...matched, ...fillers].slice(0, limit);
}
