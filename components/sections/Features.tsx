"use client";

import { useState } from "react";
import Image from "next/image";
import {
  LayoutGrid,
  Building2,
  Magnet,
  MessageCircle,
  Home,
  Megaphone,
  Brain,
  ArrowRight,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Overline from "../ui/Overline";
import { Reveal } from "../motion/Reveal";

interface Module {
  id: string;
  icon: LucideIcon;
  badge?: string;
  title: string;
  headline: string;
  description: string;
  features: string[];
}

const modules: Module[] = [
  {
    id: "crm-pipeline",
    icon: LayoutGrid,
    title: "CRM & Leads Pipeline",
    headline: "Your Entire Pipeline, Visible in One Board",
    description:
      "Every lead from every source — Bayut, Property Finder, Meta Ads, WhatsApp walk-ins — on a single Kanban board with 7 deal stages: New · Contacted · Qualified · Viewing · Negotiating · Won · Lost. Red SLA alerts fire automatically. Lead cards colour-code by age. Every team member sees the same truth.",
    features: [
      "Full activity timeline: calls, WhatsApp, viewings, stage changes",
      "Buyer profile: budget, areas, unit types, language, nationality",
      "AI Co-pilot: lead score, 5-sec brief, next best action, draft message",
      "Task management with overdue flags and due dates",
      "Source trace: which campaign, which ad, which platform",
      "15-minute SLA enforcement with red alerts on cold leads",
    ],
  },
  {
    id: "off-plan",
    icon: Building2,
    badge: "Flagship",
    title: "Off-Plan Pillar",
    headline: "The Smartest Off-Plan Toolkit in the UAE",
    description:
      "Every off-plan project your brokerage sells, on one intelligent screen — map view, grid view, live availability board, and an AI that tells your agents exactly which project to pitch. Full reservation lifecycle from inquiry to completed.",
    features: [
      "Project Catalogue: map + grid, brochures, unit breakdown, prices",
      "AI Project Match: GPT-4o ranks projects against the buyer's brief",
      "AI Compare: 2–4 projects side-by-side with AI verdict",
      "Command Center: live KPIs, commission projections, availability",
      "Reservation lifecycle: inquiry → holding → reserved → booked",
      "Oqood + escrow capture, per-project document vault",
    ],
  },
  {
    id: "sourcing",
    icon: Magnet,
    title: "Lead Sourcing — 11 Connectors",
    headline: "Every Lead. Every Platform. One Inbox.",
    description:
      "If a buyer is looking in the UAE, they're on Bayut, Property Finder, or Dubizzle — running a Google search, seeing your Meta ad, or browsing JamesEdition. WIYO connects natively to all of them. Every lead is validated, normalized, and deduplicated before entering your pipeline.",
    features: [
      "Bayut webhook · Property Finder webhook · Dubizzle webhook",
      "Meta Lead Ads (auto-enriched via Graph API)",
      "Google Ads lead forms · Google Forms · Google Sheets sync",
      "JamesEdition luxury · Zapier · Custom Landing Pages",
      "Your Company Website (WordPress + Webflow plugin)",
      "30-day deduplication window — no duplicate contacts",
    ],
  },
  {
    id: "whatsapp",
    icon: MessageCircle,
    badge: "AI",
    title: "Intelligent WhatsApp",
    headline: "WhatsApp, Finally Working for Your Business",
    description:
      "WhatsApp is how Dubai does business. But most agencies manage it from a personal phone, miss messages when agents are off, and have zero record of what was said. WIYO connects to WhatsApp Business API — giving your entire team a shared, managed, professional inbox.",
    features: [
      "Every WhatsApp message syncs to the lead's activity timeline",
      "AI drafts the perfect reply based on lead history and stage",
      "Pre-approved templates: first contact, viewing, follow-up, offer",
      "No expensive per-message API fees hidden in your bill",
      "Full audit trail: who sent what, when, and to which lead",
      "One-tap approve and send from the CRM",
    ],
  },
  {
    id: "listings",
    icon: Home,
    badge: "AI",
    title: "Listings & Inventory",
    headline: "Add a Listing in Minutes, Not Hours",
    description:
      "Uploading a listing used to mean manually typing every detail from a Title Deed — one typo and your DLD submission bounces. WIYO's Add Listing wizard changes that with GPT-4o Vision and an AI-generated description engine.",
    features: [
      "Drop the Title Deed PDF — GPT-4o Vision auto-fills every DLD field",
      "Passport / Emirates ID OCR for RERA-compliant owner verification",
      "AI-generated titles + descriptions tuned to vibe (luxury, family, etc.)",
      "Live completion meter guides agents through all 9 steps",
      "Status pipeline: draft → active → sold",
      "Bulk upload for teams managing large portfolios",
    ],
  },
  {
    id: "marketing",
    icon: Megaphone,
    badge: "AI",
    title: "Marketing Hub",
    headline: "Your Agency's Marketing, Running on Autopilot",
    description:
      "Stop posting manually and hoping for the best. The WIYO Marketing Hub gives your team a professional broadcast and content engine — every new listing becomes a marketing opportunity automatically.",
    features: [
      "Schedule and publish across Meta, LinkedIn, and TikTok",
      "AI content generation with your agency's brand voice",
      "WhatsApp broadcast campaigns to segmented lead lists",
      "Drip sequences that nurture cold leads over days or weeks",
      "Content quality scoring before publish",
      "Team approval workflow: agents draft, managers approve",
    ],
  },
  {
    id: "ai-copilot",
    icon: Brain,
    badge: "GPT-4o",
    title: "AI Co-pilot",
    headline: "Every Agent Gets a Personal AI Strategist",
    description:
      "WIYO's AI Co-pilot is powered by GPT-4o and embedded directly in the platform — not a separate tab, not a chatbot, not an add-on. Native intelligence on every lead, every project, every action.",
    features: [
      "Lead Score (0–100) — is this buyer serious?",
      "5-Second Brief — everything an agent needs before calling",
      "Next Best Action — call, WhatsApp, viewing, or project pitch",
      "Draft Message — personalised per stage, channel, history",
      "Off-Plan AI Match — buyer brief vs your catalogue",
      "AI Compare — side-by-side project comparison with verdict",
    ],
  },
];

export default function Features() {
  const [active, setActive] = useState(0);
  const m = modules[active];
  const Icon = m.icon;

  return (
    <section id="features" className="section-y relative overflow-hidden">
      {/* Abstract light-field texture — pure atmosphere behind the modules */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <Image
          src="/ai-field.jpg"
          alt=""
          fill
          sizes="100vw"
          quality={65}
          className="object-cover"
          style={{
            opacity: 0.9,
            objectPosition: "center 40%",
            filter: "brightness(1.35) saturate(1.2)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, var(--bg-base) 0%, rgba(8,12,33,0.74) 20%, rgba(8,12,33,0.80) 70%, var(--bg-base) 100%)",
          }}
        />
      </div>

      <div className="container-x relative">
        <div className="text-center max-w-[880px] mx-auto">
          <Reveal variant="fade">
            <Overline>The Modules</Overline>
          </Reveal>
          <Reveal>
            <h2 className="h2 mt-6">
              Seven Engines.{" "}
              <span className="text-gradient">One Operating System.</span>
            </h2>
          </Reveal>
          <Reveal variant="fade" delay={0.1}>
            <p className="body-lg mt-6 max-w-[760px] mx-auto">
              Most CRMs are built for generic sales teams, then awkwardly
              adapted for real estate. WIYO was designed from day one for UAE
              property professionals.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid lg:grid-cols-12 gap-8 lg:gap-10">
          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-24 flex flex-col gap-1.5">
              {modules.map((mod, i) => {
                const ModIcon = mod.icon;
                const isActive = i === active;
                return (
                  <button
                    key={mod.id}
                    onClick={() => setActive(i)}
                    className={`relative w-full text-left flex items-center gap-3.5 px-4 py-3.5 rounded-lg transition-all duration-200 ease-pomelo ${
                      isActive
                        ? "text-text-primary"
                        : "text-text-secondary hover:text-text-primary"
                    }`}
                    style={
                      isActive
                        ? {
                            background: "rgba(var(--spotlight),0.1)",
                            borderLeft: "3px solid var(--accent-primary)",
                            paddingLeft: "13px",
                          }
                        : { borderLeft: "3px solid transparent" }
                    }
                  >
                    <span
                      className={`flex items-center justify-center w-9 h-9 rounded-lg flex-shrink-0 transition-all ${
                        isActive ? "icon-square" : ""
                      }`}
                      style={
                        !isActive
                          ? {
                              background: "var(--bg-elevated)",
                              border: "1px solid var(--border-subtle)",
                              color: "var(--text-secondary)",
                            }
                          : undefined
                      }
                    >
                      <ModIcon size={16} strokeWidth={1.6} />
                    </span>
                    <span className="flex-1 text-[14.5px] font-medium leading-tight">
                      {mod.title}
                    </span>
                    {mod.badge && (
                      <span
                        className="text-[9.5px] uppercase tracking-[0.12em] font-bold px-2 py-1 rounded-pill mono"
                        style={{
                          background: "rgba(var(--spotlight),0.15)",
                          color: "var(--text-accent)",
                          border: "1px solid rgba(var(--spotlight),0.3)",
                        }}
                      >
                        {mod.badge}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </aside>

          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={m.id}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.35, ease: [0, 0, 0.2, 1] }}
                className="card p-8 md:p-12"
              >
                <div className="flex items-start justify-between gap-4 mb-7">
                  <div className="icon-square icon-square-lg">
                    <Icon size={24} strokeWidth={1.6} />
                  </div>
                  {m.badge && (
                    <span
                      className="overline"
                      style={{
                        background: "rgba(var(--spotlight),0.1)",
                        borderColor: "rgba(var(--spotlight),0.3)",
                      }}
                    >
                      <Sparkles size={11} strokeWidth={1.8} />
                      {m.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-[28px] md:text-[34px] font-semibold tracking-tight leading-[1.05]">
                  {m.headline}
                </h3>
                <p className="body-lg mt-4">{m.description}</p>

                <div className="mt-8 grid sm:grid-cols-2 gap-x-6 gap-y-3">
                  {m.features.map((f, j) => (
                    <div
                      key={j}
                      className="flex items-start gap-3 text-[14.5px] leading-[1.55] text-text-secondary"
                    >
                      <ArrowRight
                        size={14}
                        strokeWidth={2}
                        className="mt-1.5 flex-shrink-0"
                        style={{ color: "var(--accent-soft)" }}
                      />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>

                <div
                  className="mt-10 rounded-2xl border p-1 overflow-hidden"
                  style={{ borderColor: "var(--border-subtle)" }}
                >
                  <div
                    className="rounded-xl p-6 md:p-8 relative overflow-hidden"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(var(--spotlight),0.1), rgba(var(--spotlight),0.02))",
                    }}
                  >
                    <div className="grid-pattern" />
                    <div className="relative flex items-center justify-between text-[13px] mono text-text-muted">
                      <span>● ● ●</span>
                      <span>wiyo · {m.id}</span>
                    </div>
                    <div className="relative mt-6 grid grid-cols-3 gap-3">
                      {[0, 1, 2].map((k) => (
                        <div
                          key={k}
                          className="h-20 rounded-lg"
                          style={{
                            background: "var(--bg-overlay)",
                            border: "1px solid var(--border-subtle)",
                          }}
                        />
                      ))}
                    </div>
                    <div
                      className="relative mt-4 h-2 rounded-pill overflow-hidden"
                      style={{ background: "var(--bg-overlay)" }}
                    >
                      <div
                        className="h-full rounded-pill"
                        style={{
                          width: "62%",
                          background: "var(--cta-gradient)",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
