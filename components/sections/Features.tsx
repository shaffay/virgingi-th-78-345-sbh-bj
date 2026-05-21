"use client";

import { useState } from "react";
import {
  MessageCircle,
  Sparkles,
  Headphones,
  FileText,
  Users,
  BarChart3,
  Building2,
  ArrowRight,
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
  subtitle: string;
  features: string[];
}

const modules: Module[] = [
  {
    id: "whatsapp",
    icon: MessageCircle,
    title: "Intelligent WhatsApp Engine",
    subtitle: "Your always-on messaging command centre.",
    features: [
      "Real-time inbox — every WhatsApp message, instantly visible",
      "Send images, documents, audio, video, contact cards & polls",
      "Delivery receipts and read-status tracking per message",
      "Simple QR code connection — no expensive WhatsApp API fees",
      "Connection status always visible at a glance",
    ],
  },
  {
    id: "ai",
    icon: Sparkles,
    badge: "AI-Powered",
    title: "AI Lead Qualification Engine",
    subtitle: "Qualifies leads while you sleep. Powered by GPT-4o.",
    features: [
      "GPT-4o & GPT-4o Mini — choose your AI power level",
      "Custom AI personality — trained on your business, tone & rules",
      "Qualifies leads BEFORE a human ever speaks to them",
      "Runs 24/7 — never misses a hot lead, never takes a break",
      "Full conversation handover when a human is needed",
    ],
  },
  {
    id: "livechat",
    icon: Headphones,
    title: "Live Chat Command Centre",
    subtitle: "Every conversation, always in control.",
    features: [
      "Real-time live chat inbox — zero delay, fully synced",
      "Quick-send templates — reply perfectly in a single tap",
      "Full media sharing: images, audio, documents & video",
      "Complete chat history and message thread visibility",
      "Instant sound notifications for incoming messages",
    ],
  },
  {
    id: "templates",
    icon: FileText,
    title: "Smart Templates System",
    subtitle: "6 message types. Say more, type less, convert more.",
    features: [
      "6 template types: Message, Media, Audio, Poll, Attachment, Contact",
      "Dynamic variables: {{name}}, {{phone}}, {{date}}, {{company}}",
      "Quick reply buttons — guide contacts to the right response",
      "Up to 40 reusable templates per account",
      "One-click send from live chat or AI bot replies",
    ],
  },
  {
    id: "contacts",
    icon: Users,
    title: "Contact & Group Intelligence",
    subtitle: "Your entire audience, organised and segmented.",
    features: [
      "Full contact database with instant search and filtering",
      "Group management — segment your audience any way you want",
      "Import contacts in bulk — get running in minutes, not days",
      "Export your data anytime — your contacts are always yours",
      "Direct link from contacts into campaigns and live chat",
      "Built to scale — from 100 contacts to 100,000",
    ],
  },
  {
    id: "marketing",
    icon: BarChart3,
    title: "Marketing Intelligence Hub",
    subtitle: "Instagram + Meta Ads, unified.",
    features: [
      "Instagram analytics: followers, reach, impressions, profile views",
      "Per-post performance — likes, comments, saves, shares, views",
      "Reel tracking — plays, watch time, engagement rate",
      "AI content analysis — know what content wins and why",
      "Best day & hour to post — data-driven, not guesswork",
      "Meta Ads spend, ROAS, CTR, CPC, CPM in one place",
    ],
  },
  {
    id: "realestate",
    icon: Building2,
    title: "Real Estate Operating System",
    subtitle: "Built for UAE agents, brokers, developers.",
    features: [
      "Automate lead follow-ups across WhatsApp + Instagram",
      "Qualify buyers before they waste your agents' time",
      "Close more deals with fewer people on payroll",
      "Built-in templates tuned for Dubai property workflows",
    ],
  },
];

export default function Features() {
  const [active, setActive] = useState(0);
  const m = modules[active];
  const Icon = m.icon;

  return (
    <section id="features" className="section-y relative">
      <div className="container-x">
        <div className="text-center max-w-[860px] mx-auto">
          <Reveal variant="fade">
            <Overline>The Modules</Overline>
          </Reveal>
          <Reveal>
            <h2 className="h2 mt-6">
              Seven engines.{" "}
              <span className="text-gradient">One operating system.</span>
            </h2>
          </Reveal>
          <Reveal variant="fade" delay={0.1}>
            <p className="body-lg mt-6 max-w-[720px] mx-auto">
              Each module is built to replace a tool, a process, or a hire
              you'd otherwise need. Together, they run your business.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Sticky module nav */}
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
                      isActive ? "text-text-primary" : "text-text-secondary hover:text-text-primary"
                    }`}
                    style={
                      isActive
                        ? {
                            background: "rgba(var(--spotlight),0.1)",
                            borderLeft: "3px solid var(--accent-primary)",
                            paddingLeft: "13px",
                          }
                        : {
                            borderLeft: "3px solid transparent",
                          }
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
                        AI
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </aside>

          {/* Active panel */}
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
                  {m.title}
                </h3>
                <p className="body-lg mt-3">{m.subtitle}</p>

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

                {/* Decorative mock preview */}
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
