import type { Metadata } from "next";
import Link from "next/link";
import BlogLayout from "@/components/blog/BlogLayout";
import { articleJsonLd } from "@/lib/seo";
import { getPost } from "@/lib/blog";

const post = getPost("bayut-property-finder-crm-integration-guide")!;

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
          The single most expensive operational mistake a Dubai brokerage can
          make is letting Bayut, Property Finder, and Dubizzle leads sit in
          an email inbox. By the time a manager forwards a lead to an agent,
          and the agent finally calls — your buyer has already spoken to
          three of your competitors.
        </p>
        <p>
          This guide walks through exactly how to connect Bayut, Property
          Finder, and Dubizzle to your CRM properly — using webhooks, with
          deduplication, and with a real 15-minute SLA on every lead.
        </p>

        <h2>Why Your Leads from Portals Are Getting Lost</h2>
        <p>
          The common setup looks like this: Bayut sends new leads to a shared
          email address. Property Finder sends them to a different inbox.
          Dubizzle is somewhere else entirely. Someone — usually a manager
          or an admin — manually forwards each one to whichever agent is
          available. The delay between submission and first contact is
          routinely 30 to 90 minutes.
        </p>
        <p>
          In Dubai's market, that's catastrophic. The Lead Response Management
          Study found contacting a lead within 5 minutes is 100x more
          effective than at 30 minutes. Buyers actively browse multiple
          agencies in parallel. First-mover wins.
        </p>

        <h2>Manual vs Webhook Integration — Why Webhooks Win</h2>
        <p>
          There are three ways to get portal leads into a CRM:
        </p>
        <ul>
          <li>
            <strong>Manual email forwarding:</strong> 30–60 minute delay.
            Human bottleneck. Leads lost when the forwarder is on leave.
          </li>
          <li>
            <strong>Zapier middleware:</strong> 5–10 minute delay. Monthly
            Zapier bill. Fragile — breaks when Bayut updates its form
            fields. Field-mapping nightmares.
          </li>
          <li>
            <strong>Native webhooks:</strong> sub-second delay. No middleware
            cost. Direct API connection. Survives portal schema changes.
          </li>
        </ul>
        <p>
          WIYO connects natively via webhooks to all three major UAE portals
          — and to Meta Lead Ads, Google Ads, Google Forms, JamesEdition,
          and Zapier (as a fallback for the long tail of sources).
        </p>

        <h2>Step-by-Step: Connecting Your Portals to WIYO</h2>
        <p>
          We've built the flow to be self-serve, but our team will walk you
          through it on a demo call if you'd prefer.
        </p>
        <ol>
          <li>
            <strong>Step 1:</strong> Add your Bayut, Property Finder, and
            Dubizzle account references in WIYO settings.
          </li>
          <li>
            <strong>Step 2:</strong> WIYO generates a unique webhook URL per
            portal, per workspace.
          </li>
          <li>
            <strong>Step 3:</strong> Paste each webhook URL into the portal's
            "lead delivery" or "API" settings. (For Bayut and PF this is
            usually in the agency admin panel; for Dubizzle it's in the
            agent settings.)
          </li>
          <li>
            <strong>Step 4:</strong> Submit a test lead. It should appear in
            your WIYO pipeline within 1–2 seconds.
          </li>
          <li>
            <strong>Step 5:</strong> Configure auto-assignment rules — by
            area, by language, by agent specialty, or round-robin.
          </li>
          <li>
            <strong>Step 6:</strong> Done. Every new lead now lands in your
            pipeline automatically with a 15-minute SLA timer running.
          </li>
        </ol>

        <h2>Lead Deduplication — Why It Matters</h2>
        <p>
          A common scenario: a buyer who's serious about, say, a 2BR
          apartment in Business Bay submits inquiries on Bayut, PF, and
          Dubizzle for the same listing — and maybe also clicks on your Meta
          ad. Without deduplication, that's four separate leads in your
          pipeline, assigned to four agents, all calling the buyer the same
          afternoon. It's a terrible buyer experience and an internal team
          fight.
        </p>
        <p>
          WIYO dedupes across all 11 sources on a 30-day rolling window. The
          match key combines phone number, email, and listing reference. The
          first lead keeps its original agent. Activity from all subsequent
          sources gets merged into one timeline. Your audit log shows
          exactly which sources sent the same buyer, so you know which
          channels are double-spending.
        </p>

        <h2>Response Time Statistics in UAE Property</h2>
        <p>
          The numbers are sobering. In published research across multiple
          markets, calling a lead within the first 5 minutes results in a
          contact rate roughly 100x higher than waiting 30 minutes. Within
          15 minutes, the contact rate is still 6x higher than at one hour.
        </p>
        <p>
          For Dubai specifically — where buyers are browsing 5–10 listings
          per portal session and clicking inquire on each — the first agent
          who picks up usually wins the relationship for the entire search.
        </p>

        <h2>WIYO's 15-Minute SLA Explained</h2>
        <p>
          When a new lead lands in your WIYO pipeline, a 15-minute timer
          starts. If no agent has logged a contact action (call, WhatsApp,
          or note) within that window, a red SLA alert fires on the lead
          card and a push notification goes to the assigned agent. After 30
          minutes, the alert escalates to the sales manager.
        </p>
        <p>
          This isn't a soft suggestion. It's a visible, public-to-the-team
          accountability layer. Most WIYO brokerages see SLA compliance hit
          90%+ within two weeks of activating it — and contact rates climb
          accordingly.
        </p>

        <p>
          Ready to plug your portals into a CRM that respects the
          15-minute rule?{" "}
          <Link
            href="/#cta"
            className="font-semibold hover:underline"
            style={{ color: "var(--text-accent)" }}
          >
            Book a live demo
          </Link>{" "}
          and we'll connect a test Bayut webhook during the call.
        </p>
      </BlogLayout>
    </>
  );
}
