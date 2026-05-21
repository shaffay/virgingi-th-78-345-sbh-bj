"use client";

import {
  Check,
  ArrowRight,
  User,
  Users,
  Rocket,
  Building,
  type LucideIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import Overline from "../ui/Overline";
import { Reveal, StaggerGroup, slideInVariant } from "../motion/Reveal";

interface Plan {
  name: string;
  tag: string;
  icon: LucideIcon;
  price: string;
  originalPrice?: string;
  discount?: string;
  unit: string;
  description: string;
  features: string[];
  perfectFor: string;
  cta: string;
  highlight?: boolean;
  badge?: string;
}

const plans: Plan[] = [
  {
    name: "WIYO SOLO",
    tag: "Early-bird",
    icon: User,
    price: "AED 1,000",
    unit: "per month",
    description: "For the independent agent who wants a professional edge.",
    features: [
      "1 Agent Login",
      "Unlimited Leads",
      "Unlimited Listings & Inventory",
      "CRM Pipeline (all 7 stages)",
      "Off-Plan Project Access",
      "AI Lead Scoring & Co-pilot",
      "WhatsApp Activity Sync",
    ],
    perfectFor:
      "Freelance agents and solo operators in Dubai and across the UAE.",
    cta: "Start Solo",
  },
  {
    name: "WIYO STARTER",
    tag: "Most Common",
    icon: Users,
    price: "AED 2,650",
    originalPrice: "AED 3,500",
    unit: "per month",
    description: "For growing teams ready to replace the tools stack.",
    features: [
      "5 Agent Seats",
      "Unlimited Leads & Inventory",
      "Full CRM Pipeline + 15-min SLA",
      "11 Lead Source Connectors",
      "Off-Plan Pillar (AI Match + Compare)",
      "Intelligent WhatsApp Engine",
      "AI Co-pilot on every lead",
      "Listings with Title Deed OCR",
      "1 Team Workspace",
    ],
    perfectFor: "Small-to-mid Dubai and UAE brokerages (2–5 agents).",
    cta: "Book a Demo",
  },
  {
    name: "WIYO PRO",
    tag: "Best Value",
    icon: Rocket,
    price: "AED 5,500",
    originalPrice: "AED 7,500",
    discount: "−27% Limited Time",
    unit: "per month",
    description: "For established agencies scaling aggressively.",
    features: [
      "15 Agent Seats",
      "Everything in Starter, plus:",
      "Marketing Hub (broadcast, drip, social)",
      "AI Content Generation (brand voice)",
      "Advanced Campaign Routing",
      "Priority Support",
      "Team Performance Analytics",
    ],
    perfectFor:
      "Mid-to-large Dubai agencies with active marketing and 5–15 agents.",
    cta: "Book a Demo",
    highlight: true,
    badge: "Most Popular",
  },
  {
    name: "WIYO ENTERPRISE",
    tag: "For market leaders",
    icon: Building,
    price: "AED 9,900",
    originalPrice: "AED 15,000",
    discount: "−34%",
    unit: "per month",
    description: "For the agencies that dominate their market.",
    features: [
      "50 Agent Seats",
      "Everything in Pro, plus:",
      "Multi-team workspaces",
      "Dedicated Onboarding Manager",
      "Custom SLA agreements",
      "White-glove integration support",
      "API access",
    ],
    perfectFor:
      "Large brokerages and developer sales teams across Dubai, Abu Dhabi, and the UAE.",
    cta: "Talk to Sales",
  },
];

function PlanCard({ plan }: { plan: Plan }) {
  const Icon = plan.icon;
  return (
    <motion.div
      variants={slideInVariant}
      className={`relative flex flex-col ${
        plan.highlight ? "card-featured z-10" : "card"
      }`}
      style={plan.highlight ? { padding: "32px" } : undefined}
    >
      {plan.badge && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap">
          <span
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-pill text-white text-[10.5px] uppercase tracking-[0.18em] font-bold mono"
            style={{
              background: "var(--cta-gradient)",
              boxShadow: "0 0 24px rgba(var(--spotlight),0.55)",
            }}
          >
            {plan.badge}
          </span>
        </div>
      )}

      <div className="relative flex flex-col h-full">
        <div className="flex items-center gap-2.5">
          <span
            className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
            style={{
              background: plan.highlight
                ? "var(--cta-gradient)"
                : "var(--bg-subtle)",
              color: plan.highlight ? "white" : "var(--text-accent)",
              border: plan.highlight ? "none" : "1px solid var(--border-subtle)",
              boxShadow: plan.highlight
                ? "0 0 18px rgba(var(--spotlight),0.45)"
                : "none",
            }}
          >
            <Icon size={16} strokeWidth={1.8} />
          </span>
          <span
            className="caption uppercase tracking-[0.16em] font-semibold mono"
            style={{ color: "var(--text-muted)" }}
          >
            {plan.tag}
          </span>
        </div>

        <h3 className="mt-4 text-[20px] font-semibold tracking-tight text-text-primary">
          {plan.name}
        </h3>
        <p className="caption mt-1.5">{plan.description}</p>

        <div className="mt-5">
          {plan.originalPrice && (
            <div className="flex items-center gap-2 mb-1">
              <span
                className="text-[14px] line-through mono"
                style={{ color: "var(--text-muted)" }}
              >
                {plan.originalPrice}
              </span>
              {plan.discount && (
                <span
                  className="text-[10.5px] uppercase tracking-[0.14em] font-bold mono px-2 py-0.5 rounded-pill"
                  style={{
                    background: "rgba(var(--spotlight),0.15)",
                    color: "var(--text-accent)",
                    border: "1px solid rgba(var(--spotlight),0.3)",
                  }}
                >
                  {plan.discount}
                </span>
              )}
            </div>
          )}
          <div className="flex items-baseline gap-2">
            <span className="text-[32px] font-semibold tracking-tight text-text-primary">
              {plan.price}
            </span>
          </div>
          <p className="caption mt-1">{plan.unit}</p>
        </div>

        <div
          className="my-6 h-px"
          style={{ background: "var(--border-subtle)" }}
        />

        <ul className="flex flex-col gap-3 flex-1">
          {plan.features.map((f, j) => (
            <li
              key={j}
              className="flex items-start gap-3 text-[14px] text-text-primary"
            >
              <span
                className="mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                style={{
                  background: "var(--cta-gradient)",
                  color: "white",
                  boxShadow: "0 0 10px rgba(var(--spotlight),0.4)",
                }}
              >
                <Check size={11} strokeWidth={3} />
              </span>
              <span>{f}</span>
            </li>
          ))}
        </ul>

        <div
          className="mt-6 pt-5"
          style={{ borderTop: "1px solid var(--border-subtle)" }}
        >
          <p
            className="caption mb-5"
            style={{ color: "var(--text-muted)" }}
          >
            <span className="font-semibold" style={{ color: "var(--text-secondary)" }}>
              Perfect for:
            </span>{" "}
            {plan.perfectFor}
          </p>
          <a
            href="#cta"
            className={
              plan.highlight
                ? "btn-primary w-full justify-center"
                : "btn-ghost w-full justify-center"
            }
          >
            {plan.cta}
            <ArrowRight size={15} strokeWidth={1.8} />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Pricing() {
  return (
    <section id="pricing" className="section-y relative">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[500px] rounded-full"
          style={{
            background:
              "radial-gradient(closest-side, rgba(var(--spotlight),0.14), transparent)",
            filter: "blur(40px)",
          }}
        />
      </div>

      <div className="container-x relative">
        <div className="text-center max-w-[880px] mx-auto">
          <Reveal variant="fade">
            <Overline>Pricing</Overline>
          </Reveal>
          <Reveal>
            <h2 className="h2 mt-6">
              Transparent Pricing.{" "}
              <span className="text-gradient">
                Built for UAE Agencies of Every Size.
              </span>
            </h2>
          </Reveal>
          <Reveal variant="fade" delay={0.1}>
            <p className="body-lg mt-6 max-w-[680px] mx-auto">
              No hidden fees. No per-lead charges. No surprise API bills. Pay
              for your plan — and your entire team runs on WIYO.
            </p>
          </Reveal>
        </div>

        <StaggerGroup className="mt-16 grid md:grid-cols-2 xl:grid-cols-4 gap-5 items-stretch">
          {plans.map((plan) => (
            <PlanCard key={plan.name} plan={plan} />
          ))}
        </StaggerGroup>

        <Reveal variant="fade" delay={0.2}>
          <div
            className="mt-16 rounded-xl p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
            style={{
              background: "var(--bg-subtle)",
              border: "1px solid var(--border-subtle)",
            }}
          >
            <div>
              <div
                className="caption uppercase tracking-[0.18em] font-semibold mono"
                style={{ color: "var(--text-accent)" }}
              >
                Enterprise+
              </div>
              <h3 className="mt-2 text-[22px] font-semibold tracking-tight text-text-primary">
                Running 50+ agents, multiple offices, or a developer's in-house
                sales team?
              </h3>
              <p className="caption mt-2 max-w-[560px]">
                Talk to us about custom pricing, dedicated infrastructure, and
                white-label options.
              </p>
            </div>
            <a href="#cta" className="btn-primary whitespace-nowrap">
              Talk to Enterprise Sales
              <ArrowRight size={15} strokeWidth={1.8} />
            </a>
          </div>
        </Reveal>

        <Reveal variant="fade" delay={0.3}>
          <p
            className="mt-10 text-center text-[13px] mono"
            style={{ color: "var(--text-muted)" }}
          >
            All prices in AED · Billed monthly · No lock-in contracts · Cancel
            anytime · UAE VAT may apply
          </p>
        </Reveal>
      </div>
    </section>
  );
}
