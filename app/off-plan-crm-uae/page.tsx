import type { Metadata } from "next";
import SeoPageLayout from "@/components/seo/SeoPageLayout";
import { breadcrumbJsonLd } from "@/lib/seo";
import { getPostsForPillar } from "@/lib/blog";

const URL = "https://www.wiyo.ae/off-plan-crm-uae";

export const metadata: Metadata = {
  title: "Off-Plan CRM UAE | AI-Powered Off-Plan Sales Management | WIYO",
  description:
    "Manage your off-plan portfolio with AI. WIYO's Off-Plan Pillar gives Dubai agents AI project matching, live unit availability, reservation tracking, and Oqood capture. The only CRM built for off-plan.",
  alternates: { canonical: URL },
  openGraph: {
    title: "Off-Plan CRM UAE | WIYO",
    description:
      "AI project matching, live availability, reservation lifecycle, Oqood capture. The only CRM built for off-plan.",
    url: URL,
    type: "website",
  },
};

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Off-Plan CRM UAE", href: "/off-plan-crm-uae" },
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
        eyebrow="Off-Plan CRM UAE"
        breadcrumbs={breadcrumbs}
        relatedPosts={getPostsForPillar("/off-plan-crm-uae")}
        h1={
          <>
            The Only CRM Built for{" "}
            <span className="text-gradient">UAE Off-Plan Sales.</span>
          </>
        }
        intro={
          <>
            Map view, grid view, live availability board, and a GPT-4o AI that
            tells your agents exactly which project to pitch a buyer. Full
            reservation lifecycle — inquiry to completed — with Oqood and
            escrow capture built in.
          </>
        }
        proofPoints={[
          "AI Project Match in seconds (GPT-4o)",
          "AI Compare: 2–4 projects, side-by-side verdict",
          "Live availability board per project",
          "Oqood + escrow capture, document vault",
        ]}
        cta={{ label: "See Off-Plan Demo", href: "/#cta" }}
        sections={[
          {
            heading: "The Off-Plan Commission Opportunity",
            body: (
              <>
                <p>
                  Off-plan is the biggest commission segment in Dubai and
                  across the UAE. Developers pay 4–6% on every booking.
                  Multiple buyers per project. Layered handover schedules.
                  Reservation deadlines. Oqood paperwork. Escrow workflows.
                </p>
                <p className="mt-4">
                  And most CRMs treat all of this as a single "deal stage" —
                  which is why most CRMs fail off-plan teams. WIYO is built
                  around the off-plan workflow, not around it.
                </p>
              </>
            ),
          },
          {
            heading: "Why Salesforce and Zoho Fail for Off-Plan",
            body: (
              <p>
                Generic CRMs have no model for projects, units, availability,
                Oqood, or the buyer-to-project matching problem. You end up
                building 12 custom fields, 6 custom objects, and a Zapier
                graveyard — and it still doesn't work the way your agents
                think.
              </p>
            ),
            bullets: [
              "No native concept of off-plan projects vs secondary listings",
              "No AI to rank projects against a buyer brief",
              "No reservation lifecycle (holding / reserved / booked)",
              "No Oqood / escrow document capture",
              "No live availability board",
              "No commission projection per project",
            ],
          },
          {
            heading: "Key Features Every Off-Plan CRM Must Have",
            body: (
              <p>
                If your CRM is missing any of these, your agents are doing
                spreadsheet gymnastics to compensate — and your commissions
                are leaking.
              </p>
            ),
            bullets: [
              "Project catalogue with brochures and unit breakdown",
              "AI Project Match against buyer brief",
              "AI Compare with side-by-side verdict",
              "Reservation lifecycle and status pipeline",
              "Oqood + escrow document capture",
              "Per-project document vault",
              "Commission projection and KPI dashboard",
            ],
          },
          {
            heading: "Built Specifically for the Off-Plan Segment",
            body: (
              <p>
                WIYO's Off-Plan Pillar is the flagship module — not an
                afterthought. Every feature was designed by talking to Dubai
                off-plan sales managers and developers about what they
                actually need.
              </p>
            ),
            bullets: [
              "Map + grid view of every project in your catalogue",
              "Developer brochures, unit breakdowns, price ranges",
              "Availability heatmaps by floor and unit type",
              "GPT-4o ranks every project per buyer brief",
              "Side-by-side AI verdict on 2–4 chosen projects",
              "Command Center: live KPIs across all projects",
            ],
          },
          {
            heading: "From Inquiry to Completed — Full Lifecycle",
            body: (
              <p>
                Reservation isn't a single event. It's a sequence: buyer
                inquiry → unit holding → reservation confirmed → booking
                fee paid → Oqood issued → SPA signed → handover. WIYO tracks
                every stage with its own document requirements and SLA timers.
              </p>
            ),
            bullets: [
              "Stage 1: Inquiry from any source (Bayut, Meta, walk-in)",
              "Stage 2: Holding fee + temporary unit lock",
              "Stage 3: Reservation confirmed + booking documents",
              "Stage 4: Oqood issued + escrow captured",
              "Stage 5: SPA signed + handover schedule",
              "Stage 6: Completed + commission disbursed",
            ],
          },
        ]}
      />
    </>
  );
}
