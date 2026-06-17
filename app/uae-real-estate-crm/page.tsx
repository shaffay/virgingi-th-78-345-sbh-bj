import type { Metadata } from "next";
import SeoPageLayout from "@/components/seo/SeoPageLayout";
import { breadcrumbJsonLd } from "@/lib/seo";
import { getPostsForPillar } from "@/lib/blog";

const URL = "https://www.wiyo.ae/uae-real-estate-crm";

export const metadata: Metadata = {
  title: "UAE Real Estate CRM | WIYO — CRM for Agents Across the Emirates",
  description:
    "WIYO is the leading AI-powered CRM for UAE real estate agencies. Works across Dubai, Abu Dhabi, Sharjah and all Emirates. Bayut, Property Finder integration. AED pricing. Book a free demo.",
  alternates: { canonical: URL },
  openGraph: {
    title: "UAE Real Estate CRM | WIYO",
    description:
      "AI-powered CRM for UAE real estate. Dubai, Abu Dhabi, Sharjah, RAK. Bayut + PF native. AED pricing.",
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
            UAE's First Real Estate{" "}
            <span className="text-gradient">Operating System.</span>
          </>
        }
        intro={
          <>
            Built for agencies across Dubai, Abu Dhabi, Sharjah, RAK, and the
            Emirates. UAE data residency. AED pricing. UAE support team.
            UAE-first product roadmap. Everything generic CRMs aren't.
          </>
        }
        proofPoints={[
          "UAE-based data hosting — your data stays in UAE",
          "AED pricing — no USD conversion surprises",
          "RERA + Oqood + Emirates ID OCR built in",
          "Live across Dubai, Abu Dhabi, Sharjah, RAK",
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
                  Finder dominate buyer discovery. WhatsApp is how 90% of
                  conversations happen. RERA, DLD, and Oqood are non-negotiable
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
              "DLD Title Deed OCR via GPT-4o Vision",
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
            heading: "UAE Data Residency — Your Data Stays Here",
            body: (
              <p>
                WIYO uses a strict multi-tenant architecture with data hosted
                in the UAE. Your brokerage's data is completely isolated from
                every other agency on the platform. You own your data. You can
                export it any time. We don't sell it. We don't share it.
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
