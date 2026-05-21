import type { Metadata } from "next";
import SeoPageLayout from "@/components/seo/SeoPageLayout";
import { breadcrumbJsonLd } from "@/lib/seo";

const URL = "https://www.wiyo.ae/bayut-property-finder-crm";

export const metadata: Metadata = {
  title: "Bayut & Property Finder CRM Integration | WIYO",
  description:
    "WIYO connects your Bayut and Property Finder leads directly into your CRM pipeline. Real-time sync, no manual uploads, automatic deduplication. The best CRM for Bayut and Property Finder users in UAE.",
  alternates: { canonical: URL },
  openGraph: {
    title: "Bayut & Property Finder CRM Integration | WIYO",
    description:
      "Real-time webhook sync. No Zapier, no manual uploads. 11 lead sources, deduplicated, in one pipeline.",
    url: URL,
    type: "website",
  },
};

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Bayut & Property Finder CRM", href: "/bayut-property-finder-crm" },
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
        eyebrow="Bayut + Property Finder Integration"
        breadcrumbs={breadcrumbs}
        h1={
          <>
            Bayut + Property Finder Leads,{" "}
            <span className="text-gradient">Automatically in Your CRM.</span>
          </>
        }
        intro={
          <>
            Real-time webhooks. Zero manual uploads. Automatic deduplication
            across all 11 lead sources. The moment a buyer fills a form on
            Bayut, Property Finder, or Dubizzle — it's in your pipeline,
            scored, and assigned.
          </>
        }
        proofPoints={[
          "Bayut webhook — real-time, no polling",
          "Property Finder webhook — instant pipeline drop",
          "Dubizzle webhook — supported out of the box",
          "30-day deduplication window across all sources",
        ]}
        cta={{ label: "Connect Your Portals", href: "/#cta" }}
        sections={[
          {
            heading: "Why Manual Lead Management Kills Deals",
            body: (
              <>
                <p>
                  In Dubai's market, 78% of buyers sign with the first agent
                  who responds. The window is roughly 15 minutes. If your
                  Bayut leads land in an email inbox and a manager forwards
                  them to an agent who's currently on a viewing — your buyer
                  is already calling your competitor.
                </p>
                <p className="mt-4">
                  WIYO closes that gap to seconds. The moment a lead is
                  submitted on any portal, it's in your pipeline, scored by
                  AI, and assigned to the right agent — with a red SLA timer
                  ticking on the lead card.
                </p>
              </>
            ),
          },
          {
            heading: "Manual vs Webhook Integration — Why Webhooks Win",
            body: (
              <p>
                Some CRMs require Zapier middleware to pull Bayut leads.
                That's a 5–10 minute delay, plus a monthly Zapier bill, plus
                fragile flows that break when Bayut changes its form fields.
                WIYO connects directly via webhooks — sub-second sync, no
                middleware, no extra subscription.
              </p>
            ),
            bullets: [
              "Zapier flow: 5–10 minute delay, monthly bill, fragile",
              "Manual email forwarding: 30–60 minute delay, lost leads",
              "WIYO native webhook: sub-second delay, zero ongoing cost",
              "Direct API connection — survives portal form changes",
              "Automatic field mapping — no manual configuration",
              "Failure alerts if a portal stops sending leads",
            ],
          },
          {
            heading: "Step-by-Step: Connecting Your Portals",
            body: (
              <p>
                Most agencies are connected within an hour. We walk you
                through each portal — and our team handles the trickier
                webhook auth on Bayut and PF if you'd prefer.
              </p>
            ),
            bullets: [
              "Step 1: Add your Bayut, PF, Dubizzle account credentials",
              "Step 2: WIYO generates a unique webhook URL per portal",
              "Step 3: Paste the webhook into the portal's lead settings",
              "Step 4: Send a test lead — it lands in your pipeline live",
              "Step 5: Configure auto-assignment rules per source",
              "Step 6: Done. Every new lead flows in automatically",
            ],
          },
          {
            heading: "Lead Deduplication — Why It Matters",
            body: (
              <p>
                Without deduplication, the same buyer who submits inquiries
                on Bayut, PF, and Dubizzle for the same property ends up as
                three separate leads — assigned to three agents, all calling
                them. That's a terrible buyer experience and a fight in your
                team. WIYO dedupes across all 11 sources on a 30-day rolling
                window, by phone + email + property reference.
              </p>
            ),
            bullets: [
              "Match key: phone + email + listing reference",
              "30-day rolling window across all sources",
              "Original assignment preserved — first agent keeps the lead",
              "Activity from all sources merged into one timeline",
              "Audit log shows which sources sent the same buyer",
              "Optional manual merge for ambiguous matches",
            ],
          },
          {
            heading: "Response Time Statistics — The 15-Minute Rule",
            body: (
              <p>
                The Lead Response Management Study found that contacting a
                lead within 5 minutes is 100x more effective than contacting
                them at 30 minutes. In Dubai's market — where buyers are
                actively browsing multiple agencies in parallel — that effect
                is even stronger. WIYO's 15-minute SLA enforcement makes sure
                no lead sits cold.
              </p>
            ),
            bullets: [
              "Red SLA alert on every lead not contacted in 15 mins",
              "Auto-escalation to manager after 30 mins",
              "Per-agent SLA scorecard in the dashboard",
              "Lead age color coding: hot / warm / stale",
              "Push notifications to agents' phones",
              "Daily SLA compliance report to ownership",
            ],
          },
        ]}
      />
    </>
  );
}
