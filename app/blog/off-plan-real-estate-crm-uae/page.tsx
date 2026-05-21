import type { Metadata } from "next";
import Link from "next/link";
import BlogLayout from "@/components/blog/BlogLayout";
import { articleJsonLd } from "@/lib/seo";
import { getPost } from "@/lib/blog";

const post = getPost("off-plan-real-estate-crm-uae")!;

export const metadata: Metadata = {
  title: post.title,
  description: post.description,
  alternates: { canonical: `https://www.wiyo.ae/blog/${post.slug}` },
  openGraph: {
    title: post.title,
    description: post.description,
    url: `https://www.wiyo.ae/blog/${post.slug}`,
    type: "article",
    publishedTime: post.date,
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd(post)) }}
      />
      <BlogLayout post={post}>
        <p>
          Off-plan is the biggest commission opportunity in the UAE property
          market — and it's also where most generic CRMs fall flat. If your
          agency works off-plan and your CRM still treats every project like
          a single "deal," you're leaking commissions in places you can't
          see.
        </p>

        <h2>The Off-Plan Opportunity in Dubai</h2>
        <p>
          Dubai's pipeline of new projects keeps expanding. Developers offer
          4–6% commission per booking. Layered payment plans. Multiple unit
          types. Phase-by-phase availability. Reservation deadlines. Oqood
          paperwork. Escrow procedures. The mechanics are genuinely
          complicated — and a CRM that wasn't designed for them adds friction
          to every step.
        </p>

        <h2>Why Salesforce and Zoho Fail for Off-Plan</h2>
        <p>
          Generic CRMs model the world as accounts, contacts, and deals.
          That's fine for SaaS. For UAE off-plan, you need:
        </p>
        <ul>
          <li>
            <strong>Projects as first-class objects</strong> — with phases,
            unit types, availability per floor, brochures, location maps.
          </li>
          <li>
            <strong>Buyer-to-project matching</strong> — given a buyer's
            brief, which projects best fit?
          </li>
          <li>
            <strong>Reservation lifecycle</strong> — inquiry, holding,
            reserved, booked, completed, with stage-specific document
            requirements.
          </li>
          <li>
            <strong>Oqood + escrow capture</strong> — built in, audited, not
            a bolted-on file upload.
          </li>
          <li>
            <strong>Commission projection per project</strong> — so ownership
            can see expected revenue per developer.
          </li>
        </ul>
        <p>
          To get any of that from Salesforce or Zoho, you build it
          yourself — months of consultant time, custom objects, fragile
          automation, and a UI that doesn't quite fit what your agents
          actually do.
        </p>

        <h2>Key Features Every Off-Plan CRM Must Have</h2>
        <p>
          If you're evaluating a CRM and these aren't on the page within the
          first scroll, it isn't built for off-plan:
        </p>
        <ul>
          <li>Project catalogue with map view, grid view, availability board</li>
          <li>AI buyer-to-project match against your live catalogue</li>
          <li>Side-by-side AI comparison of 2–4 projects with verdict</li>
          <li>Reservation lifecycle with stage-specific document requirements</li>
          <li>Oqood + escrow capture</li>
          <li>Per-project commission projection</li>
          <li>Phase + unit availability heatmaps</li>
        </ul>

        <h2>How WIYO Was Built Specifically for This Segment</h2>
        <p>
          WIYO's Off-Plan Pillar is the flagship module — designed by
          interviewing Dubai off-plan sales managers about what actually
          slowed them down. The result has four surfaces:
        </p>
        <ul>
          <li>
            <strong>Project Catalogue:</strong> map + grid of every project,
            with brochures, unit breakdowns, price ranges, availability
            heatmaps.
          </li>
          <li>
            <strong>AI Project Match:</strong> feed a buyer's brief (budget,
            area, lifestyle, unit type). GPT-4o ranks every project in your
            catalogue, best fit first, with written reasoning.
          </li>
          <li>
            <strong>AI Compare:</strong> pick 2–4 projects. Get a side-by-side
            comparison table and an AI verdict on which fits the buyer best.
          </li>
          <li>
            <strong>Command Center:</strong> live KPIs across all projects —
            reservations in progress, commission pipeline, availability by
            project.
          </li>
        </ul>

        <h2>Real Workflow: From Inquiry to Completed Reservation</h2>
        <p>
          Here's how a typical off-plan deal moves through WIYO:
        </p>
        <ol>
          <li>
            <strong>Inquiry</strong> arrives from Bayut / Meta / walk-in.
            Auto-assigned. 15-min SLA running.
          </li>
          <li>
            <strong>Discovery call</strong> logged. Agent fills in buyer
            brief (budget, areas, unit type).
          </li>
          <li>
            <strong>AI Project Match</strong> generates a ranked list of
            projects from your catalogue.
          </li>
          <li>
            <strong>Agent picks 2–3 projects</strong> to pitch. AI Compare
            generates a verdict.
          </li>
          <li>
            <strong>Viewing scheduled</strong> for the chosen project.
            Calendar invite sent.
          </li>
          <li>
            <strong>Holding fee</strong> taken. Unit locked. Stage moves to
            Holding.
          </li>
          <li>
            <strong>Booking fee + Oqood</strong> captured. Stage moves to
            Reserved. Escrow documents stored.
          </li>
          <li>
            <strong>SPA signed.</strong> Stage moves to Booked. Commission
            projected.
          </li>
          <li>
            <strong>Handover.</strong> Stage moves to Completed. Commission
            disbursed.
          </li>
        </ol>

        <p>
          Want to see this in action with your own developer catalogue?{" "}
          <Link
            href="/off-plan-crm-uae"
            className="font-semibold hover:underline"
            style={{ color: "var(--text-accent)" }}
          >
            See the Off-Plan CRM page
          </Link>{" "}
          or{" "}
          <Link
            href="/#cta"
            className="font-semibold hover:underline"
            style={{ color: "var(--text-accent)" }}
          >
            book a demo
          </Link>{" "}
          and we'll match a real buyer brief against a sample catalogue
          during the call.
        </p>
      </BlogLayout>
    </>
  );
}
