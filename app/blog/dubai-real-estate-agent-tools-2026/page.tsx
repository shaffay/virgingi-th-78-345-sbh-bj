import type { Metadata } from "next";
import Link from "next/link";
import BlogLayout from "@/components/blog/BlogLayout";
import Figure from "@/components/blog/Figure";
import { articleJsonLd } from "@/lib/seo";
import { getPost } from "@/lib/blog";

const post = getPost("dubai-real-estate-agent-tools-2026")!;

export const metadata: Metadata = {
  title: "Dubai Real Estate Agent Tools 2026 | Complete Tech Stack Guide",
  description: post.description,
  alternates: { canonical: `https://www.wiyo.ae/blog/${post.slug}` },
  openGraph: {
    title: post.title,
    description: post.description,
    url: `https://www.wiyo.ae/blog/${post.slug}`,
    type: "article",
    publishedTime: post.date,
    images: [post.coverImage],
  },
};

const toc = [
  { id: "old", text: "The old fragmented stack" },
  { id: "stack-2026", text: "The 2026 stack by category" },
  { id: "consolidated", text: "Why agencies are consolidating" },
  { id: "comparison", text: "Stack vs WIYO comparison" },
  { id: "faq", text: "FAQs" },
];

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd(post)) }}
      />
      <BlogLayout post={post} toc={toc}>
        <p>
          The average Dubai broker pays for six or more separate
          subscriptions every month. A Bayut lead pull, a Property
          Finder feed, a WhatsApp Business tool, a generic CRM, a
          marketing scheduler, a billing system. Each one solves part of
          the workflow; together, they leave the agent inside six
          dashboards before they make their first call. This is the
          guide to what's actually in a modern Dubai tech stack — and
          what's quietly being consolidated.
        </p>

        <h2 id="old">The Old Dubai Real Estate Tech Stack (And What It Costs You)</h2>
        <p>
          The fragmented model is what most UAE brokerages still run on.
          The monthly invoice looks roughly like this:
        </p>
        <ul>
          <li>
            <strong>Bayut listing subscription:</strong> AED 1,200–3,000/mo
            depending on tier.
          </li>
          <li>
            <strong>Property Finder subscription:</strong> AED 1,500–4,000/mo.
          </li>
          <li>
            <strong>WhatsApp Business middleware:</strong> AED
            400–800/mo, plus per-message API costs.
          </li>
          <li>
            <strong>Generic CRM (Zoho, HubSpot, Salesforce):</strong>{" "}
            AED 1,000–5,000/mo per workspace.
          </li>
          <li>
            <strong>Marketing scheduler (Hootsuite, Buffer):</strong>{" "}
            AED 300–800/mo.
          </li>
          <li>
            <strong>Invoicing or billing tool:</strong> AED 200–500/mo.
          </li>
        </ul>
        <p>
          That's six vendors, six dashboards, six support contacts,
          AED 5,000–14,000/month before you've added the AED 4,000 a
          week of agent admin time switching between them.
        </p>

        <Figure
          src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=2000&q=80"
          alt="Multiple devices on a desk showing different applications"
          caption="The fragmented stack — every tool added is another tab your team forgets to open"
        />

        <h2 id="stack-2026">The Complete Dubai Real Estate Tech Stack for 2026</h2>

        <h3>Lead Generation</h3>
        <p>
          Bayut, Property Finder, Dubizzle for portals. JamesEdition for
          luxury. Meta Lead Ads and Google Ads for paid acquisition. A
          well-tuned company website with embeddable lead forms.
        </p>

        <h3>CRM & Pipeline</h3>
        <p>
          A real-estate-native CRM with a seven-stage Kanban (New →
          Contacted → Qualified → Viewing → Negotiating → Won → Lost),
          15-minute SLA enforcement, and auto-assignment rules. This
          is the spine of the stack.
        </p>

        <h3>Portal Management</h3>
        <p>
          Native webhook ingestion from every portal. Source attribution
          on each lead so you know which platform actually closes.
          Deduplication across portals so the same buyer doesn't get
          worked by three agents.
        </p>

        <h3>Communication</h3>
        <p>
          WhatsApp Business API with a shared team inbox. Pre-approved
          message templates. AI-drafted first replies. Full conversation
          history synced to the CRM lead card.
        </p>

        <h3>Marketing</h3>
        <p>
          Multi-platform social scheduling (Meta, LinkedIn, TikTok). AI
          content generation in your brand voice. WhatsApp broadcast
          campaigns to segmented lead lists. Drip nurture sequences.
        </p>

        <h3>Off-Plan Management</h3>
        <p>
          Project catalogue with brochures, unit breakdowns,
          availability heatmaps. AI buyer-project matching against the
          live catalogue. Reservation lifecycle from inquiry to Oqood.
        </p>

        <h3>Analytics</h3>
        <p>
          Source ROI per AED spent. Agent performance scorecards. Time
          in stage. Lost-reason breakdowns. Weekly conversion reports.
        </p>

        <h2 id="consolidated">Why Top Dubai Agencies Are Consolidating</h2>
        <p>
          The shift across mid-market UAE brokerages in 2025–2026 has
          been clear: from six tools to one platform. The reason isn't
          ideological — it's measurable.
        </p>
        <ul>
          <li>
            <strong>Lower total spend:</strong> a consolidated platform
            costs AED 2,650–9,900/mo vs AED 5,000–14,000 for the
            fragmented stack.
          </li>
          <li>
            <strong>Fewer support contacts:</strong> one vendor relationship.
          </li>
          <li>
            <strong>Data flows freely:</strong> Bayut lead → CRM scoring
            → WhatsApp draft → pipeline stage transitions, all in one
            data model.
          </li>
          <li>
            <strong>Faster agent productivity:</strong> one login, one
            dashboard, fewer hours of admin per week.
          </li>
        </ul>

        <blockquote>
          The most valuable tool in 2026 isn't the slickest dashboard.
          It's the one your agents actually open every morning.
        </blockquote>

        <h2 id="comparison">Multi-Tool Stack vs WIYO Comparison</h2>
        <p>
          A typical mid-size Dubai brokerage at five agents — direct
          comparison:
        </p>
        <ul>
          <li>
            <strong>Bayut + PF + Dubizzle + Zoho + WhatsApp tool +
            Hootsuite + Invoicing:</strong> ~AED 7,500/mo combined,
            seven vendors, fragmented data.
          </li>
          <li>
            <strong>WIYO Starter:</strong> AED 2,650/mo, one vendor,
            unified data, native portal connectors, AI scoring,
            WhatsApp Business API, off-plan pillar, AED pricing.
          </li>
        </ul>
        <p>
          Same coverage. About AED 60,000 a year saved. Plus the time
          you reclaim from tab-switching.
        </p>

        <h2 id="faq">Frequently Asked Questions</h2>
        <h3>What tools does a Dubai real estate agent need in 2026?</h3>
        <p>
          At minimum: a UAE-native CRM with portal integration, a
          WhatsApp Business team inbox, AI lead scoring, an off-plan
          module if the agency sells projects, and analytics. A
          consolidated platform like WIYO covers all of that.
        </p>
        <h3>How much should a Dubai brokerage spend on tech per month?</h3>
        <p>
          Mid-market UAE agencies typically run AED 3,000–10,000/mo on
          combined PropTech. Consolidated platforms tend to be on the
          lower end of that range while delivering more functionality.
        </p>
        <h3>Should I replace my Bayut and Property Finder subscriptions?</h3>
        <p>
          No. Those are lead sources. The shift is to consolidate
          everything <em>after</em> the lead arrives — CRM, WhatsApp,
          marketing, analytics — into a single platform.
        </p>

        <p>
          Want to map your current stack against WIYO?{" "}
          <Link href="/#cta">Book a 30-min audit</Link> and we'll show
          you the cost-by-tool breakdown.
        </p>
      </BlogLayout>
    </>
  );
}
