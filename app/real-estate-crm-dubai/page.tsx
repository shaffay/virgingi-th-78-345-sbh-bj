import type { Metadata } from "next";
import SeoPageLayout from "@/components/seo/SeoPageLayout";
import { breadcrumbJsonLd } from "@/lib/seo";

const URL = "https://www.wiyo.ae/real-estate-crm-dubai";

export const metadata: Metadata = {
  title: "Real Estate CRM Dubai | WIYO — Built for Dubai Brokerages",
  description:
    "The best real estate CRM for Dubai agents and brokers. Native Bayut, Property Finder & Dubizzle integration. AI lead scoring, off-plan management, WhatsApp automation. From AED 2,650/month.",
  alternates: { canonical: URL },
  openGraph: {
    title: "Real Estate CRM Dubai | WIYO",
    description:
      "Native Bayut, Property Finder & Dubizzle integration. AI lead scoring, off-plan, WhatsApp. From AED 2,650/month.",
    url: URL,
    type: "website",
  },
};

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Real Estate CRM Dubai", href: "/real-estate-crm-dubai" },
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
        eyebrow="Real Estate CRM Dubai"
        breadcrumbs={breadcrumbs}
        h1={
          <>
            The Real Estate CRM Dubai's{" "}
            <span className="text-gradient">Top Agencies Actually Use.</span>
          </>
        }
        intro={
          <>
            WIYO is the only CRM built from the ground up in Dubai, for Dubai
            real estate. Native Bayut, Property Finder, and Dubizzle. Off-plan
            AI Match. Title Deed OCR. WhatsApp Business API. One platform.
            One login. From AED 2,650/month.
          </>
        }
        proofPoints={[
          "Bayut + Property Finder + Dubizzle, native webhooks",
          "GPT-4o Off-Plan Project Match in seconds",
          "Title Deed OCR auto-fills every DLD field",
          "WhatsApp Business API — shared, audited inbox",
        ]}
        cta={{ label: "Book a Dubai-Specific Demo", href: "/#cta" }}
        sections={[
          {
            heading: "Why Dubai Real Estate Needs a Specialist CRM",
            body: (
              <>
                <p>
                  Salesforce and Zoho were engineered for SaaS sales teams in
                  San Francisco. They don't know what a Title Deed is. They
                  have no concept of Oqood, escrow capture, or the 15-minute
                  response window that defines whether a Dubai buyer signs
                  with you — or signs with the next agent who picked up.
                </p>
                <p className="mt-4">
                  WIYO is the opposite. Every workflow, every integration,
                  every AI prompt was designed for how Dubai agencies actually
                  work. From Marina to Downtown to Palm Jumeirah — your
                  pipeline finally speaks your language.
                </p>
              </>
            ),
          },
          {
            heading: "Dubai-Specific Features Built In",
            body: (
              <p>
                These aren't add-ons or third-party integrations. They're core
                to WIYO — because they're core to how Dubai real estate works.
              </p>
            ),
            bullets: [
              "RERA-aware document workflows (passport, Emirates ID, Title Deed)",
              "DLD Title Deed OCR powered by GPT-4o Vision",
              "Oqood capture for off-plan reservations",
              "Multi-language buyer profiles (EN / AR / RU / CN)",
              "Dubai-specific lead source connectors (Bayut, PF, Dubizzle)",
              "JamesEdition integration for luxury Palm / Emirates Hills inventory",
            ],
          },
          {
            heading: "The Dubai Lead Sources WIYO Connects To",
            body: (
              <p>
                If a buyer is looking in Dubai, they're on one of these
                platforms. WIYO connects natively — no Zapier, no manual
                copy-paste, no CSV imports.
              </p>
            ),
            bullets: [
              "Bayut — real-time webhook into your pipeline",
              "Property Finder — real-time webhook into your pipeline",
              "Dubizzle — real-time webhook into your pipeline",
              "JamesEdition — luxury buyer metadata enrichment",
              "Meta Lead Ads — OAuth, Graph API enrichment",
              "Google Ads + Google Forms — OAuth, instant sync",
            ],
          },
          {
            heading: "How WIYO Handles Dubai's Off-Plan Market",
            body: (
              <p>
                Off-plan is the biggest commission segment in the Dubai
                market — and it's where most generic CRMs fall flat. WIYO's
                Off-Plan Pillar gives Dubai agencies a map view of every
                project in their catalogue, an AI that ranks projects against
                a buyer's brief in seconds, and a full reservation lifecycle
                from inquiry to Oqood-captured booking.
              </p>
            ),
            bullets: [
              "Project Catalogue: map + grid view of every off-plan project",
              "AI Project Match: GPT-4o ranks projects per buyer brief",
              "AI Compare: 2–4 projects side-by-side with verdict",
              "Reservation lifecycle: inquiry → holding → booked → completed",
              "Oqood + escrow document capture",
              "Command Center: live KPIs and commission projections",
            ],
          },
          {
            heading: "Pricing in AED. Transparent. No Hidden Costs.",
            body: (
              <p>
                Starter from AED 2,650/month for 5 agents. Pro at AED
                5,500/month for 15 agents (with Marketing Hub). Enterprise at
                AED 9,900/month for 50 agents. Solo agent plan at AED
                1,000/month. All AED. All inclusive. No per-lead fees, no
                hidden WhatsApp API charges.
              </p>
            ),
          },
        ]}
      />
    </>
  );
}
