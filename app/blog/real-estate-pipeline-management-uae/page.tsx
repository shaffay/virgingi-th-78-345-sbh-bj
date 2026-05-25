import type { Metadata } from "next";
import Link from "next/link";
import BlogLayout from "@/components/blog/BlogLayout";
import Figure from "@/components/blog/Figure";
import { articleJsonLd } from "@/lib/seo";
import { getPost } from "@/lib/blog";

const post = getPost("real-estate-pipeline-management-uae")!;

export const metadata: Metadata = {
  title: "Real Estate Pipeline Management UAE 2026 | WIYO Playbook",
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
  { id: "stages", text: "The 7 UAE deal stages" },
  { id: "why-stall", text: "Why pipelines stall" },
  { id: "setup", text: "Setting up your pipeline" },
  { id: "analytics", text: "Pipeline analytics" },
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
          Most UAE brokerages run their pipeline on WhatsApp threads and
          a spreadsheet someone updates on Sunday morning. That works
          when you have five leads. It collapses at fifty. A real
          pipeline gives your team — owner, manager, agent — the same
          view of where every deal is, every morning, every Monday.
        </p>

        <h2 id="stages">The 7 Deal Stages Every UAE Pipeline Needs</h2>
        <p>
          The UAE market has its own rhythm. Off-plan reservations,
          secondary inventory, multi-language buyers, NOC and Oqood
          paperwork. A generic three-stage pipeline doesn't capture any
          of that. The proven seven-stage flow is:
        </p>
        <ul>
          <li>
            <strong>New:</strong> lead has just arrived from Bayut, PF,
            Dubizzle, WhatsApp or walk-in. The 15-minute SLA timer
            starts immediately.
          </li>
          <li>
            <strong>Contacted:</strong> first call made or first WhatsApp
            sent. Lead acknowledged.
          </li>
          <li>
            <strong>Qualified:</strong> budget, area, unit type, timeline
            confirmed. The lead becomes an opportunity.
          </li>
          <li>
            <strong>Viewing:</strong> property visit scheduled or
            completed.
          </li>
          <li>
            <strong>Negotiating:</strong> offer in play, paperwork being
            drafted, NOC requested.
          </li>
          <li>
            <strong>Won:</strong> SPA signed or Oqood issued for
            off-plan.
          </li>
          <li>
            <strong>Lost:</strong> closed lost with a reason — the most
            important field for source ROI analysis.
          </li>
        </ul>

        <Figure
          src="https://images.unsplash.com/photo-1611926653458-09294b3142bf?auto=format&fit=crop&w=2000&q=80"
          alt="Kanban deal pipeline on a screen"
          caption="One board. Seven columns. Every team member sees the same truth."
        />

        <h2 id="why-stall">Why Most UAE Real Estate Pipelines Fail</h2>
        <p>
          The failure modes are predictable. We see the same five every
          time we onboard a brokerage:
        </p>
        <ul>
          <li>
            <strong>No SLA enforcement:</strong> leads pile up in
            &ldquo;New&rdquo; for hours, sometimes days, before anyone
            touches them.
          </li>
          <li>
            <strong>Wrong agent assignments:</strong> a luxury Marina
            buyer routed to an off-plan-only agent; a JLT inquiry routed
            to someone on holiday.
          </li>
          <li>
            <strong>No stage-transition triggers:</strong> when a lead
            moves to &ldquo;Negotiating&rdquo;, no NOC checklist
            launches automatically.
          </li>
          <li>
            <strong>Manager blindness:</strong> the manager only learns
            a deal is stuck when an agent forgets to mention it for two
            weeks.
          </li>
          <li>
            <strong>Lost without a reason:</strong> &ldquo;Lost&rdquo;
            deals leave no breadcrumbs about which portals or pitches
            actually convert.
          </li>
        </ul>

        <blockquote>
          Your pipeline is only as useful as the question it answers in
          ten seconds: which deals need attention today?
        </blockquote>

        <h2 id="setup">How to Set Up a Dubai Real Estate Pipeline in WIYO</h2>
        <p>
          The flow we recommend, in order:
        </p>
        <ul>
          <li>
            <strong>1. Connect lead sources:</strong> Bayut, Property
            Finder, Dubizzle webhooks. Meta + Google Ads via OAuth. Any
            custom landing page via the WIYO snippet.
          </li>
          <li>
            <strong>2. Set the 15-minute SLA:</strong> enable the red
            alert on any New lead older than fifteen minutes; escalation
            to the manager at thirty.
          </li>
          <li>
            <strong>3. Configure auto-assignment rules:</strong>
            round-robin within a team, or by area, language, or
            specialty.
          </li>
          <li>
            <strong>4. Switch on AI scoring:</strong> the score appears
            on the lead card the moment the lead arrives.
          </li>
          <li>
            <strong>5. Add stage-transition automations:</strong> NOC
            checklist on &ldquo;Negotiating&rdquo;, Oqood reminder on
            &ldquo;Won&rdquo; for off-plan, viewing reminder 24 hours
            ahead.
          </li>
          <li>
            <strong>6. Set lead-age colour coding:</strong> hot ( &lt; 2h),
            warm ( &lt; 24h), stale ( &gt; 24h). The board becomes
            self-policing.
          </li>
        </ul>

        <h2 id="analytics">Pipeline Analytics That Tell You Where Deals Die</h2>
        <p>
          A pipeline you can't measure is a pipeline you can't fix. The
          five reports every UAE manager should review weekly:
        </p>
        <ul>
          <li>
            <strong>Conversion by stage:</strong> what % of Qualified
            leads turn into Viewing, Viewing into Negotiating, etc.
          </li>
          <li>
            <strong>Time in stage:</strong> average days a deal sits at
            each step — the bottleneck reveals itself.
          </li>
          <li>
            <strong>Source ROI:</strong> revenue per AED spent on each
            portal or campaign.
          </li>
          <li>
            <strong>Agent performance:</strong> contact rate, viewings
            booked, offers produced — per agent, per month.
          </li>
          <li>
            <strong>Lost-reason breakdown:</strong> which reasons
            actually dominate — pricing, financing, competing offers,
            cold buyers.
          </li>
        </ul>

        <h2 id="faq">Frequently Asked Questions</h2>
        <h3>How many stages should a Dubai real estate pipeline have?</h3>
        <p>
          Seven. New, Contacted, Qualified, Viewing, Negotiating, Won,
          Lost. Fewer stages hide bottlenecks; more stages create
          friction.
        </p>
        <h3>What is SLA enforcement in a real estate CRM?</h3>
        <p>
          A timer that fires a visual alert when a lead has been in a
          stage longer than expected. In Dubai, the 15-minute SLA on
          &ldquo;New&rdquo; leads is the single highest-impact rule.
        </p>
        <h3>Can a CRM auto-assign leads in UAE real estate?</h3>
        <p>
          Yes. WIYO supports round-robin, by-area, by-language, and
          by-specialty assignment — set once, applied automatically.
        </p>

        <p>
          See the seven-stage pipeline live on a demo —{" "}
          <Link href="/#cta">book a 30-min call</Link>.
        </p>
      </BlogLayout>
    </>
  );
}
