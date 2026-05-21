import type { Metadata } from "next";
import Link from "next/link";
import BlogLayout from "@/components/blog/BlogLayout";
import { articleJsonLd } from "@/lib/seo";
import { getPost } from "@/lib/blog";

const post = getPost("ai-real-estate-crm-uae")!;

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
          Every CRM is suddenly "AI-powered." Half the time, that means a
          tacked-on chatbot. The other half, it means a paid add-on you
          forgot to enable. Genuine AI integration in a real estate CRM
          looks completely different — and for UAE agencies in 2026, it's
          the single biggest leverage opportunity available.
        </p>

        <h2>The AI Revolution in UAE Property Sales</h2>
        <p>
          The arrival of GPT-4o changed what's possible in a CRM. Three
          things matter for UAE real estate specifically:
        </p>
        <ul>
          <li>
            Models can now <strong>read</strong> a Title Deed PDF and
            extract every DLD field accurately.
          </li>
          <li>
            Models can <strong>reason</strong> about a buyer brief against a
            project catalogue with hundreds of options.
          </li>
          <li>
            Models can <strong>write</strong> a personalised WhatsApp reply
            in your agency's tone, on-brand, in seconds.
          </li>
        </ul>

        <h2>What AI Can — and Cannot — Do for Real Estate Agents</h2>
        <p>
          A useful frame: AI in 2026 is a fast junior associate. It can
          summarise, prioritise, draft, and match — at scale, in seconds.
          It cannot judge buyer intent the way a 10-year veteran can, and
          it cannot replace the relationship work. So the right design is
          AI doing the legwork while humans make the calls.
        </p>

        <h2>Lead Scoring: How It Works, Why It Matters</h2>
        <p>
          A WIYO lead score is a number from 0–100 representing how serious
          the AI thinks this buyer is. It's computed from observable
          signals: source quality (Bayut is different from a random Google
          form), buyer profile completeness (budget filled? area
          specified?), engagement (replies? viewings booked?), and
          historical patterns in your agency's data.
        </p>
        <p>
          The point isn't that the AI is always right. The point is that
          your agents always know which 5 leads on the board to call first
          today. That's the leverage.
        </p>

        <h2>AI Project Matching for Off-Plan — A Practical Example</h2>
        <p>
          A buyer says: "Budget AED 1.8M, want 2BR, prefer Business Bay or
          JLT, family-friendly building." Your off-plan catalogue has 80
          projects across Dubai. Manually ranking which 3 to pitch — well,
          most agents just pitch what's top of mind. Maybe what their
          manager mentioned last week.
        </p>
        <p>
          WIYO's AI Project Match feeds the buyer brief and the entire
          catalogue to GPT-4o. In 5 seconds, you get a ranked list:
          project A (89% match, here's why), project B (84%, here's why),
          project C (76%, here's why). Your agent has a sharp,
          AI-supported pitch ready before the buyer even arrives at the
          office.
        </p>

        <h2>Title Deed OCR — Saving Hours on Listing Admin</h2>
        <p>
          Uploading a secondary listing used to mean typing every DLD field
          from a paper or PDF Title Deed. Developer name, plot number,
          unit, BUA, area, floor — one typo and the upload to DLD bounces.
        </p>
        <p>
          WIYO's Title Deed OCR uses GPT-4o Vision. You drag the Title
          Deed PDF onto the wizard. The AI reads every field and auto-fills
          the listing form. You glance, confirm, and submit. What used to
          take 15 minutes now takes 60 seconds. Compounded across hundreds
          of listings, that's days of agent time per month given back to
          actually selling.
        </p>

        <h2>GPT-4o vs Older AI Tools — What's Different</h2>
        <p>
          GPT-4o is multimodal. It reads images, PDFs, voice, and text in
          one pass. It's faster than GPT-4 and substantially smarter than
          GPT-3.5. For real estate specifically, that means:
        </p>
        <ul>
          <li>Title Deed PDFs read accurately, including handwritten notes</li>
          <li>Property brochures parsed for unit breakdowns and prices</li>
          <li>Voice notes from WhatsApp summarised into pipeline updates</li>
          <li>Listing photos auto-tagged (kitchen, view, finish quality)</li>
        </ul>

        <h2>How WIYO Embeds AI Natively — Not as an Add-On</h2>
        <p>
          The biggest pattern WIYO breaks is the "AI sidebar." Most CRMs
          bolt AI on as a separate tab — a chatbot you sometimes open. WIYO
          is the opposite: AI runs invisibly on every lead, every message,
          every project. There's no "AI tab." There's a Lead Score on every
          card. A 5-second Brief at the top of every detail view. A Draft
          Message button on every WhatsApp thread. A Match Projects button
          on every off-plan lead.
        </p>
        <p>
          The intelligence is everywhere — and your agents don't have to
          remember to use it. It's just part of the workflow.
        </p>

        <h2>Where AI in UAE Real Estate Is Heading</h2>
        <p>
          Three trends to watch in 2026 and beyond:
        </p>
        <ul>
          <li>
            <strong>Voice-first agents.</strong> AI handling first contact
            via WhatsApp voice notes — qualifying buyers before a human
            ever joins the conversation.
          </li>
          <li>
            <strong>Predictive deal-close probability.</strong> Per-deal
            forecasts based on stage, engagement, and historical patterns.
          </li>
          <li>
            <strong>AI marketing director.</strong> The Marketing Hub
            generating, scheduling, and optimising campaigns across Meta /
            LinkedIn / TikTok with brand-voice consistency.
          </li>
        </ul>

        <p>
          WIYO is already shipping the first two of those.{" "}
          <Link
            href="/#features"
            className="font-semibold hover:underline"
            style={{ color: "var(--text-accent)" }}
          >
            See the full feature list
          </Link>{" "}
          or{" "}
          <Link
            href="/#cta"
            className="font-semibold hover:underline"
            style={{ color: "var(--text-accent)" }}
          >
            book a demo
          </Link>{" "}
          to see the AI Co-pilot live on real lead data.
        </p>
      </BlogLayout>
    </>
  );
}
