"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Overline from "../ui/Overline";
import { Reveal } from "../motion/Reveal";

const faqs = [
  {
    q: "What exactly is WIYO and who is it built for?",
    a: "WIYO is a complete Real Estate Operating System built specifically for UAE property brokerages. It combines CRM, off-plan inventory management, lead sourcing from Bayut, Property Finder, Dubizzle and 8 more sources, WhatsApp automation, AI-powered lead scoring, marketing, and billing — in one platform. It's built for agencies of 1 to 50+ agents in Dubai and across the UAE.",
  },
  {
    q: "How is WIYO different from Salesforce, Zoho, or HubSpot?",
    a: "Generic CRMs are built for software sales teams. They don't know what a Title Deed is, they don't connect to Bayut or Property Finder, they have no concept of off-plan reservation lifecycle or Oqood. WIYO is purpose-built for UAE real estate — every feature, every integration, every workflow was designed for how Dubai agencies actually operate.",
  },
  {
    q: "Does WIYO connect to Bayut, Property Finder, and Dubizzle?",
    a: "Yes — all three, natively. Leads from Bayut, Property Finder, and Dubizzle flow directly into your WIYO pipeline in real time. No Zapier. No CSV uploads. No manual copy-paste.",
  },
  {
    q: "How does the AI work in WIYO?",
    a: "WIYO uses GPT-4o (OpenAI's most capable model) for five AI features: lead scoring, lead summaries, next-action recommendations, draft message generation, and off-plan project matching. The AI is built directly into the platform — it reads your actual lead data, your property catalogue, and the buyer's history to give relevant, actionable intelligence.",
  },
  {
    q: "What is the Title Deed OCR feature?",
    a: "When adding a secondary listing, you can drag and drop a Title Deed PDF onto the WIYO wizard. GPT-4o Vision reads the document — developer name, plot number, unit number, area, all DLD fields — and auto-fills your listing form. No manual typing. No errors. No rejected submissions.",
  },
  {
    q: "Can WIYO replace my WhatsApp tool?",
    a: "Yes. WIYO includes a full WhatsApp Business API integration. All inbound WhatsApp messages from your leads sync automatically to their CRM profile. AI drafts replies based on the lead's history. Your team approves and sends with one tap. It's a full shared team inbox — not a personal phone number.",
  },
  {
    q: "What is the 15-Minute SLA in WIYO?",
    a: "78% of buyers choose the first agent who responds. Research shows the window is roughly 15 minutes. WIYO's pipeline enforces a 15-minute SLA: if a new lead arrives and no agent has contacted them within 15 minutes, a red alert appears on the lead card in the Kanban board. This keeps your team accountable and your response times competitive.",
  },
  {
    q: "How does the Off-Plan AI Match work?",
    a: "In WIYO's Off-Plan Pillar, you select a lead and click \"AI Match.\" The system takes the buyer's brief — budget, preferred areas, unit type, lifestyle — and feeds it to GPT-4o along with every project in your catalogue. The AI ranks projects from best match to worst, with a written explanation for each. Your agents stop guessing. They pitch the right project, every time.",
  },
  {
    q: "Which cities and countries does WIYO work in?",
    a: "WIYO is optimised for the UAE market — Dubai, Abu Dhabi, Sharjah, Ras Al Khaimah, and across the Emirates. The platform supports multi-nationality leads, multi-language notes, and all UAE-specific requirements including RERA document handling and Oqood/DLD compliance workflows.",
  },
  {
    q: "Is my data safe? Where is it stored?",
    a: "WIYO uses a strict multi-tenant architecture — your agency's data is completely isolated from every other brokerage on the platform. Data is hosted in UAE-based infrastructure. You own your data. WIYO never sells or shares it.",
  },
  {
    q: "How quickly can we get started?",
    a: "Most agencies are fully onboarded the same day they sign up. Your agents get their logins, you connect your lead sources (we guide you through each one), and you're live. No weeks of implementation. No consultants required.",
  },
  {
    q: "Does WIYO support off-plan developers, not just brokers?",
    a: "Yes. WIYO's Enterprise plan is designed for developer in-house sales teams managing large project catalogues, multiple agents across sites, and high-volume reservation flows. Talk to our team for a custom demo.",
  },
  {
    q: "What is the Marketing Hub?",
    a: "The Marketing Hub lets your team plan, create, approve, and publish social content across Meta, LinkedIn, and TikTok — and send WhatsApp broadcast campaigns to segmented lead lists. AI generates on-brand content for new listings and project launches. Everything goes through a team approval workflow before it's published.",
  },
  {
    q: "Can I add modules as my agency grows?",
    a: "Yes. WIYO is modular. You start with the plan that fits your team today, and add the Marketing Hub, expanded agent seats, and enterprise features as you scale. No forced upgrades.",
  },
  {
    q: "What's included in Enterprise and how do I get a quote?",
    a: "Enterprise includes 50 agent seats, multi-team workspaces, a dedicated onboarding manager, custom SLA agreements, API access, and white-glove integration support. Contact us at hello@wiyo.ae or book a call through the website.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="section-y relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="container-x">
        <div className="text-center max-w-[820px] mx-auto">
          <Reveal variant="fade">
            <Overline>Frequently Asked</Overline>
          </Reveal>
          <Reveal>
            <h2 className="h2 mt-6">
              Everything UAE agencies want{" "}
              <span className="text-gradient">to know about WIYO.</span>
            </h2>
          </Reveal>
          <Reveal variant="fade" delay={0.1}>
            <p className="body-lg mt-6 max-w-[640px] mx-auto">
              Still have questions after reading? Reach the founder directly at{" "}
              <a
                href="mailto:hello@wiyo.ae"
                className="mono hover:underline"
                style={{ color: "var(--text-accent)" }}
              >
                hello@wiyo.ae
              </a>
              .
            </p>
          </Reveal>
        </div>

        <Reveal>
          <div className="mt-14 max-w-[860px] mx-auto flex flex-col gap-3">
            {faqs.map((item, i) => {
              const isOpen = open === i;
              return (
                <div
                  key={i}
                  className="rounded-lg overflow-hidden transition-colors duration-300 ease-spring"
                  style={{
                    border: isOpen
                      ? "1px solid var(--border-accent)"
                      : "1px solid var(--border-subtle)",
                    background: isOpen ? "var(--bg-elevated)" : "transparent",
                  }}
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="w-full text-left px-5 md:px-6 py-5 flex items-center justify-between gap-4 transition-colors"
                  >
                    <span className="text-[15.5px] md:text-[17px] font-medium tracking-tight text-text-primary">
                      {item.q}
                    </span>
                    <span
                      className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ease-spring"
                      style={{
                        border: isOpen
                          ? "1px solid var(--border-accent)"
                          : "1px solid var(--border-subtle)",
                        background: isOpen
                          ? "rgba(var(--spotlight),0.15)"
                          : "transparent",
                        color: isOpen
                          ? "var(--text-accent)"
                          : "var(--text-secondary)",
                        transform: isOpen ? "rotate(-180deg)" : "rotate(0deg)",
                      }}
                    >
                      <ChevronDown size={14} strokeWidth={1.8} />
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial="collapsed"
                        animate="open"
                        exit="collapsed"
                        variants={{
                          open: { height: "auto", opacity: 1 },
                          collapsed: { height: 0, opacity: 0 },
                        }}
                        transition={{
                          height: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
                          opacity: { duration: 0.25 },
                        }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 md:px-6 pb-6 -mt-1 body-md leading-[1.7]">
                          {item.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
