import type { Metadata } from "next";
import Link from "next/link";
import BlogLayout from "@/components/blog/BlogLayout";
import { articleJsonLd } from "@/lib/seo";
import { getPost } from "@/lib/blog";

const post = getPost("whatsapp-real-estate-dubai-agents")!;

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
          In the UAE, WhatsApp isn't a channel. It's <em>the</em> channel.
          Roughly 90%+ of property buyer conversations happen there. And yet
          most Dubai agencies still manage WhatsApp from agents' personal
          phones — which means lost messages, no audit trail, and a buyer
          experience that depends entirely on whether an agent happens to be
          awake.
        </p>

        <h2>WhatsApp in the UAE — The Numbers</h2>
        <p>
          UAE smartphone penetration is over 95%. WhatsApp is the most-used
          messaging app across all age groups and nationalities. For
          property buyers — both residents and overseas investors — WhatsApp
          is where they expect to communicate with agents. Email is a
          fallback. Phone calls are increasingly seen as intrusive.
        </p>
        <p>
          If your agency is not professionally managing WhatsApp, you're
          losing deals to agencies that are.
        </p>

        <h2>Why a Personal Number Isn't Good Enough</h2>
        <p>
          The default setup — agents using their personal WhatsApp on their
          own number — fails on every dimension that matters for a real
          business:
        </p>
        <ul>
          <li>
            <strong>No audit trail.</strong> When a deal goes sideways, you
            have no record of what was promised.
          </li>
          <li>
            <strong>Lost messages when agents leave.</strong> The agent
            walks out with the buyer relationship in their phone.
          </li>
          <li>
            <strong>No team visibility.</strong> Managers have zero idea what's
            being discussed.
          </li>
          <li>
            <strong>No SLA enforcement.</strong> A buyer messages at 11pm and
            nobody knows whether they got a reply.
          </li>
          <li>
            <strong>Not professional.</strong> Buyers see a personal profile
            picture, not your brand.
          </li>
        </ul>

        <h2>WhatsApp Business API vs WhatsApp Business App</h2>
        <p>
          There are three tiers:
        </p>
        <ul>
          <li>
            <strong>Personal WhatsApp:</strong> the default for individuals.
            No business features.
          </li>
          <li>
            <strong>WhatsApp Business App:</strong> single-user app with
            quick replies and labels. Better than personal — but still
            single-user, no team inbox, no API integration.
          </li>
          <li>
            <strong>WhatsApp Business API:</strong> the official, enterprise
            grade. Shared team inbox. Audit trail. Programmable replies.
            Pre-approved templates. Real integration with your CRM.
          </li>
        </ul>
        <p>
          For any agency past one agent, the Business API is the only
          serious option. WIYO ships with this integrated — no separate
          subscription, no third-party middleware.
        </p>

        <h2>How to Manage a Team Inbox Professionally</h2>
        <p>
          A few principles separate teams that win on WhatsApp from teams
          that don't:
        </p>
        <ul>
          <li>
            <strong>One number for the brokerage.</strong> Buyers message
            your agency, not an individual phone.
          </li>
          <li>
            <strong>Shared inbox.</strong> Every message visible to the
            assigned agent, their manager, and on-call coverage.
          </li>
          <li>
            <strong>Pre-approved templates</strong> for first contact,
            viewing confirmations, follow-ups, offers — so quality is
            consistent across agents.
          </li>
          <li>
            <strong>AI-drafted replies</strong> based on the lead's history.
            Agent approves with one tap. Reply is on-brand, contextual, and
            fast.
          </li>
          <li>
            <strong>After-hours handling</strong> — auto-reply for late
            messages, AI-drafted morning queue for human review.
          </li>
          <li>
            <strong>Full sync to CRM.</strong> Every message lands in the
            lead's activity timeline automatically.
          </li>
        </ul>

        <h2>WIYO's Intelligent WhatsApp Module</h2>
        <p>
          WIYO connects to WhatsApp Business API and gives your brokerage a
          shared team inbox with AI drafting on every message. The AI reads
          the lead's full history — their inquiries, viewings, budget,
          preferred areas — and drafts a reply that fits their stage. Your
          agent reviews, edits if needed, and sends with one tap. Every
          message syncs to the CRM activity timeline. Managers see SLA
          compliance per agent. Buyers get instant, professional, on-brand
          responses.
        </p>
        <p>
          Critically: no hidden per-message API fees. The Business API costs
          you'd otherwise pay are bundled into reasonable plan limits, and
          we'll always tell you transparently before anything exceeds them.
        </p>

        <h2>Response Time Benchmarks in Dubai</h2>
        <p>
          We've seen WIYO brokerages cut average first-reply time on
          WhatsApp from 45 minutes to under 5 minutes within the first
          month. Buyer engagement rates climb. Viewings booked per inquiry
          climb. And the team stops feeling like they're drowning in
          messages — because the AI does the drafting, not them.
        </p>

        <p>
          If WhatsApp is the channel that decides your deals, it's worth
          treating it like one.{" "}
          <Link
            href="/whatsapp-crm-dubai"
            className="font-semibold hover:underline"
            style={{ color: "var(--text-accent)" }}
          >
            See the WhatsApp CRM page
          </Link>{" "}
          or{" "}
          <Link
            href="/#cta"
            className="font-semibold hover:underline"
            style={{ color: "var(--text-accent)" }}
          >
            book a demo
          </Link>{" "}
          to see the shared inbox live.
        </p>
      </BlogLayout>
    </>
  );
}
