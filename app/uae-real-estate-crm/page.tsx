import type { Metadata } from "next";
import SeoPageLayout from "@/components/seo/SeoPageLayout";
import { breadcrumbJsonLd } from "@/lib/seo";
import { getPostsForPillar } from "@/lib/blog";

const URL = "https://www.wiyo.ae/uae-real-estate-crm";

export const metadata: Metadata = {
  title: "UAE Real Estate CRM | WIYO — CRM for Agents Across the Emirates",
  description:
    "A UAE-focused real estate CRM for lead operations, team follow-up, property inventory, and off-plan sales workflows. AED pricing.",
  alternates: { canonical: URL },
  openGraph: {
    title: "UAE Real Estate CRM | WIYO",
    description:
      "A UAE-focused CRM for property leads, team pipelines, conversations, and inventory. AED pricing.",
    url: URL,
    type: "website",
  },
};

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "UAE Real Estate CRM", href: "/uae-real-estate-crm" },
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
        eyebrow="UAE Real Estate CRM"
        breadcrumbs={breadcrumbs}
        relatedPosts={getPostsForPillar("/uae-real-estate-crm")}
        h1={
          <>
            Real Estate CRM for{" "}
            <span className="text-gradient">Teams Across the UAE.</span>
          </>
        }
        intro={
          <>
            Built around the property-sales workflows used by agencies across
            Dubai, Abu Dhabi, Sharjah, Ras Al Khaimah, and the wider Emirates.
            AED pricing and a UAE-focused product roadmap.
          </>
        }
        proofPoints={[
          "Deployment and data terms confirmed during procurement",
          "AED pricing — no USD conversion surprises",
          "RERA + Oqood + Emirates ID OCR built in",
          "Workflows designed for multi-emirate teams",
        ]}
        cta={{ label: "Start UAE Trial", href: "/#cta" }}
        sections={[
          {
            heading: "The UAE Real Estate Landscape",
            body: (
              <>
                <p>
                  The UAE property market is unique in the world. Off-plan
                  represents a huge share of commissions. Bayut and Property
                  Finder are important buyer-discovery channels. WhatsApp is a
                  central conversation channel. RERA, DLD, and Oqood are important
                  compliance layers — not optional extras.
                </p>
                <p className="mt-4">
                  Generic CRMs built for US SaaS sales teams cannot handle any
                  of this natively. They were never designed for it. WIYO
                  was — from line one of code.
                </p>
              </>
            ),
          },
          {
            heading: "Features Built for UAE Compliance",
            body: (
              <p>
                Compliance shouldn't slow your team down. WIYO makes
                UAE-specific documents and workflows the fastest part of the
                day.
              </p>
            ),
            bullets: [
              "RERA-compliant document workflows",
              "Oqood capture for off-plan reservations",
              "Emirates ID OCR for owner verification",
              "Passport OCR for international buyers",
              "Title Deed field extraction for review",
              "Audit trail on every lead and document",
            ],
          },
          {
            heading: "Multi-Emirate Support",
            body: (
              <p>
                Whether your agency is based in Business Bay, Al Reem Island,
                Al Majaz, or RAK city — WIYO works for you. Multi-team
                workspaces let you run separate pipelines per office while
                rolling reporting up to ownership.
              </p>
            ),
            bullets: [
              "Dubai brokerage operations",
              "Abu Dhabi developer in-house sales teams",
              "Sharjah agency multi-office setups",
              "Ras Al Khaimah second-home / investment sales",
              "Pan-UAE branch management",
              "Multi-currency, multi-language buyer profiles",
            ],
          },
          {
            heading: "Data Handling and Deployment Review",
            body: (
              <p>
                Security, access controls, isolation, hosting location,
                subprocessors, export, and retention requirements are reviewed
                during procurement. Any specific residency or contractual
                commitment should be recorded in your agreement.
              </p>
            ),
          },
          {
            heading: "Pricing in AED — No USD Conversion Surprises",
            body: (
              <p>
                Every plan is priced in AED, billed monthly, with no lock-in
                contracts. UAE VAT may apply. Solo at AED 1,000/mo. Starter at
                AED 2,650/mo. Pro at AED 5,500/mo. Enterprise at AED
                9,900/mo. No surprise USD conversions on your invoice.
              </p>
            ),
          },
        ]}
      />
    </>
  );
}
