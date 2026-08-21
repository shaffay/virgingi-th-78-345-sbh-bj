import type { Metadata } from "next";
import SeoPageLayout from "@/components/seo/SeoPageLayout";
import { breadcrumbJsonLd } from "@/lib/seo";
import { getPostsForPillar } from "@/lib/blog";

const URL = "https://www.wiyo.ae/whatsapp-crm-dubai";

export const metadata: Metadata = {
  title: "WhatsApp CRM for Dubai Real Estate | WIYO",
  description:
    "Manage all your buyer WhatsApp conversations in one professional inbox. AI-drafted replies, full CRM sync, team shared access. The WhatsApp CRM built for Dubai real estate agents.",
  alternates: { canonical: URL },
  openGraph: {
    title: "WhatsApp CRM for Dubai Real Estate | WIYO",
    description:
      "WhatsApp Business API. AI-drafted replies. Shared team inbox. Full CRM sync. Audit trail.",
    url: URL,
    type: "website",
  },
};

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "WhatsApp CRM Dubai", href: "/whatsapp-crm-dubai" },
];

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd(breadcrumbs)),
        }}
      />
      <SeoPageLayout
        eyebrow="WhatsApp CRM · Dubai Real Estate"
        breadcrumbs={breadcrumbs}
        relatedPosts={getPostsForPillar("/whatsapp-crm-dubai")}
        h1={
          <>
            Turn WhatsApp from a Chaos Tab{" "}
            <span className="text-gradient">into a Closing Machine.</span>
          </>
        }
        intro={
          <>
            WhatsApp is how Dubai does business. WIYO connects to WhatsApp
            Business API — giving your entire team a shared, managed,
            professional inbox with AI-drafted replies and full CRM sync. No
            more lost messages. No more personal phones.
          </>
        }
        proofPoints={[
          "WhatsApp Business API — official, compliant",
          "AI-assisted drafts from approved lead context",
          "Every message syncs to the lead's CRM timeline",
          "Shared team inbox — no personal phones",
        ]}
        cta={{ label: "See WhatsApp in Action", href: "/#cta" }}
        sections={[
          {
            heading: "The WhatsApp Problem in UAE Real Estate",
            body: (
              <>
                <p>
                  WhatsApp is a central buyer-conversation channel in the UAE.
                  Many agencies still manage messages from agents' personal
                  phones — which means: no audit trail, messages lost when
                  agents leave, no team visibility, no professionalism, and
                  zero way to enforce response SLAs.
                </p>
                <p className="mt-4">
                  And worse: when an agent is off, the buyer who messages
                  them at 11pm gets ghosted. By morning, they've already
                  signed with someone else.
                </p>
              </>
            ),
          },
          {
            heading: "WIYO's Intelligent WhatsApp — A Real Team Inbox",
            body: (
              <p>
                Built on the official WhatsApp Business API. Your agency owns
                one professional number. Every message — inbound and outbound
                — lands in a shared inbox visible to your whole team. AI
                drafts the reply based on the lead's history and stage. Your
                agent approves with one tap. The buyer gets an instant,
                on-brand response.
              </p>
            ),
            bullets: [
              "WhatsApp Business API — official, compliant",
              "Shared team inbox with role-based access",
              "AI drafts replies based on lead history and stage",
              "Pre-approved templates: viewing, follow-up, offer",
              "Full audit trail — who sent what, when, to whom",
              "Messages sync to the lead's CRM activity timeline",
            ],
          },
          {
            heading: "How Buyers Are Handled 24/7 — Without Hiring More Staff",
            body: (
              <p>
                When a buyer messages at 11pm, the AI Co-pilot drafts a
                professional response and queues it for your morning agent to
                approve. For common questions — "is this property still
                available?", "what's the price?" — the AI can be configured
                to send pre-approved auto-replies instantly, keeping the
                conversation warm until a human takes over.
              </p>
            ),
            bullets: [
              "After-hours auto-reply with pre-approved templates",
              "AI-drafted morning queue for human approval",
              "Instant FAQ responses for common buyer questions",
              "Escalation rules for high-intent buyers (book a viewing)",
              "Quiet hours — no buyer messages sent at unprofessional times",
              "Daily summary report: messages sent, response times, conversions",
            ],
          },
          {
            heading: "No Hidden Per-Message API Fees",
            body: (
              <p>
                Other "WhatsApp CRMs" hide the cost of every message inside
                their pricing. WIYO doesn't. WhatsApp API session messages
                are included in your plan within reasonable limits, and we'll
                tell you transparently before any costs apply.
              </p>
            ),
          },
        ]}
      />
    </>
  );
}
