import type { Metadata } from "next";
import Link from "next/link";
import BlogLayout from "@/components/blog/BlogLayout";
import Figure from "@/components/blog/Figure";
import { articleJsonLd } from "@/lib/seo";
import { getPost } from "@/lib/blog";

const post = getPost("15-minute-rule-dubai-real-estate-leads")!;

export const metadata: Metadata = {
  title: "The 15-Minute Rule in Dubai Real Estate | WIYO SLA Enforcement",
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
  { id: "science", text: "The science behind 15 minutes" },
  { id: "why-hard", text: "Why Dubai is the hardest market" },
  { id: "outcomes", text: "What changes when you enforce it" },
  { id: "implementing", text: "Implementing the SLA in WIYO" },
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
          Buyers often contact several agencies in the same search session. In Dubai,
          that window is roughly fifteen minutes. Past that point, your
          competitor has already returned the call. This one number — 15
          — is the single highest-leverage rule in UAE real estate sales.
        </p>

        <h2 id="science">The Science Behind the 15-Minute Rule</h2>
        <p>
          The classic MIT and InsideSales research across more than a
          decade of B2B and B2C lead data found something consistent:
          contact rate drops roughly 10x after the first five minutes,
          and 100x after thirty. The qualification rate — leads who turn
          into genuine opportunities — falls even faster.
        </p>
        <p>
          The Dubai property market amplifies all of that. A buyer
          browsing Bayut at 8pm is not committing to your agency. They
          are inquiring on five listings at once. The first agent who
          calls — within minutes, not hours — captures the entire
          conversation for the rest of their search.
        </p>

        <Figure
          src="https://images.unsplash.com/photo-1495364141860-b0d03eccd065?auto=format&fit=crop&w=2000&q=80"
          alt="A wall clock and timer showing the importance of speed"
          caption="The fifteen-minute window is not a guideline. It's a competitive moat."
        />

        <h2 id="why-hard">Why Dubai Is the Hardest Market to Meet the 15-Minute Standard</h2>
        <p>
          Other markets have one or two lead sources. Dubai has more
          inbound surfaces than almost anywhere on the planet. Bayut.
          Property Finder. Dubizzle. JamesEdition for luxury. Meta Ads.
          Google Ads. Direct WhatsApp. Walk-ins. A typical agent checks
          five inboxes before they pick up the phone.
        </p>
        <ul>
          <li>
            <strong>Multiple portals:</strong> three major property
            portals and several niche ones.
          </li>
          <li>
            <strong>WhatsApp overload:</strong> 50–200 active chats per
            agent at any time, many on personal phones.
          </li>
          <li>
            <strong>Tab-switching tax:</strong> 45 minutes of admin
            before the first call gets made.
          </li>
          <li>
            <strong>Off-hours leads:</strong> a third of Dubai inquiries
            arrive after 8pm or on weekends.
          </li>
          <li>
            <strong>Multi-language buyer base:</strong> Arabic, English,
            Russian, Mandarin, French — the wrong-language reply costs
            the lead.
          </li>
        </ul>

        <blockquote>
          Other markets reward better closing. Dubai rewards faster
          responding. The closing comes after.
        </blockquote>

        <h2 id="outcomes">What Happens When You Implement 15-Minute SLA in Your Agency</h2>
        <p>
          The transformation is consistent across the brokerages we've
          watched switch on SLA enforcement. The numbers move quickly
          because the underlying behaviour change is small — agents
          simply react to a visible timer.
        </p>
        <ul>
          <li>
            <strong>Contact rate climbs from ~35% to 70%+</strong> within
            two weeks.
          </li>
          <li>
            <strong>Viewings booked per inquiry roughly doubles</strong>{" "}
            in the same window.
          </li>
          <li>
            <strong>Portal rankings improve</strong> — Bayut and PF reward
            fast-responding agencies with better visibility on listings.
          </li>
          <li>
            <strong>Team morale lifts</strong> — agents stop drowning in
            old leads and start working a fresh top-of-pipeline.
          </li>
        </ul>

        <h2 id="implementing">How to Implement 15-Minute SLA Enforcement With WIYO</h2>
        <p>
          The mechanics are simple, and the work is mostly one-time
          configuration:
        </p>
        <ul>
          <li>
            <strong>Connect every lead source natively:</strong> Bayut,
            PF, Dubizzle, Meta, Google, WhatsApp. Every new lead arrives
            in the WIYO pipeline within a second.
          </li>
          <li>
            <strong>Switch on the red SLA alert:</strong> any New lead
            untouched past 15 minutes turns red on the Kanban card.
          </li>
          <li>
            <strong>Push notifications to the assigned agent's phone:</strong>{" "}
            an unmissable signal to act.
          </li>
          <li>
            <strong>Manager escalation at 30 minutes:</strong> if the
            agent is unreachable, the lead bubbles to the manager.
          </li>
          <li>
            <strong>Daily SLA report:</strong> ownership sees a single
            number — % of leads contacted within 15 minutes — every day.
          </li>
        </ul>

        <h2 id="faq">Frequently Asked Questions</h2>
        <h3>What is the 15-minute rule in Dubai real estate?</h3>
        <p>
          A response-time standard: contact every new lead within 15
          minutes of arrival. Research shows the contact rate drops
          sharply after this window. Most top UAE agencies enforce it as
          a hard SLA inside their CRM.
        </p>
        <h3>How do I respond to Bayut leads in 15 minutes?</h3>
        <p>
          Native webhook ingestion into a CRM, automatic agent
          assignment, AI-drafted first message ready in one tap, and a
          red alert if no contact is logged inside the window. WIYO
          ships this out of the box.
        </p>
        <h3>What if the lead arrives at 11pm?</h3>
        <p>
          An after-hours auto-reply via WhatsApp acknowledges the buyer
          immediately and queues the message for human review in the
          morning. The 15-minute clock pauses outside agreed hours so
          your team isn't penalised for the buyer's schedule.
        </p>

        <p>
          See the SLA enforcement live —{" "}
          <Link href="/#cta">book a quick WIYO demo</Link> and we'll
          show it in your own pipeline.
        </p>
      </BlogLayout>
    </>
  );
}
