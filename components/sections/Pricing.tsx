"use client";

import { Check, ArrowRight, Building2, Users, Sparkles, Megaphone, type LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import Overline from "../ui/Overline";
import { Reveal, StaggerGroup, slideInVariant } from "../motion/Reveal";

interface Plan {
  name: string;
  tag: string;
  icon: LucideIcon;
  price: string;
  unit: string;
  setupFee: string;
  features: string[];
  cta: string;
  highlight?: boolean;
}

const corePlans: Plan[] = [
  {
    name: "Company Base Account",
    tag: "Core Revenue Engine",
    icon: Building2,
    price: "AED 1,000",
    unit: "per company / month",
    setupFee: "+ AED 2,500 one-time setup",
    highlight: true,
    features: [
      "Full platform access for the agency",
      "WhatsApp AI automation included",
      "Unified Inbox across all channels",
      "Basic CRM and pipeline management",
    ],
    cta: "Get Started",
  },
  {
    name: "Agent Seat",
    tag: "Per-Agent License",
    icon: Users,
    price: "AED 100",
    unit: "per agent / month",
    setupFee: "+ AED 250 setup per seat",
    features: [
      "Individual agent login and pipeline",
      "Personal WhatsApp AI automation access",
      "Lead assignment and tracking",
      "Scales with every new hire",
    ],
    cta: "Add Seats",
  },
];

const addOnPlans: Plan[] = [
  {
    name: "Sourcing AI",
    tag: "Add-On",
    icon: Sparkles,
    price: "AED 800",
    unit: "per company / month",
    setupFee: "No setup fee",
    features: [
      "AI lead scoring and prioritization",
      "Property-to-buyer matching engine",
      "Predictive deal-close probability",
      "Advanced deduplication and enrichment",
      "Ideal for agencies with 10+ active leads daily",
    ],
    cta: "Add to Plan",
  },
  {
    name: "Marketing Hub",
    tag: "Add-On",
    icon: Megaphone,
    price: "AED 3,000",
    unit: "per company / month",
    setupFee: "No setup fee",
    features: [
      "AI content generation with brand voice",
      "Multi-platform post scheduling",
      "Content quality scoring before publish",
      "Team approval workflow",
      "Ideal for agencies running social media actively",
    ],
    cta: "Add to Plan",
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
      {plan.highlight && (
        <div className="absolute -top-3 left-6">
          <span
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-pill text-white text-[10px] uppercase tracking-[0.18em] font-bold mono"
            style={{
              background: "var(--cta-gradient)",
              boxShadow: "0 0 24px rgba(var(--spotlight),0.55)",
            }}
          >
            Recommended
          </span>
        </div>
      )}

      <div className="relative flex flex-col h-full">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2.5">
              <span
                className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{
                  background: plan.highlight
                    ? "var(--cta-gradient)"
                    : "var(--bg-subtle)",
                  color: plan.highlight ? "white" : "var(--text-accent)",
                  border: plan.highlight
                    ? "none"
                    : "1px solid var(--border-subtle)",
                  boxShadow: plan.highlight
                    ? "0 0 18px rgba(var(--spotlight),0.45)"
                    : "none",
                }}
              >
                <Icon size={17} strokeWidth={1.8} />
              </span>
              <span
                className="caption uppercase tracking-[0.16em] font-semibold mono"
                style={{ color: "var(--text-muted)" }}
              >
                {plan.tag}
              </span>
            </div>
            <h3 className="mt-4 text-[22px] font-semibold tracking-tight text-text-primary">
              {plan.name}
            </h3>
          </div>
        </div>

        <div className="mt-6">
          <div className="flex items-baseline gap-2">
            <span className="text-[36px] font-semibold tracking-tight text-text-primary">
              {plan.price}
            </span>
          </div>
          <p className="caption mt-1">{plan.unit}</p>
          <p
            className="caption mt-2 mono"
            style={{ color: "var(--text-muted)" }}
          >
            {plan.setupFee}
          </p>
        </div>

        <div
          className="my-7 h-px"
          style={{ background: "var(--border-subtle)" }}
        />

        <ul className="flex flex-col gap-3 flex-1">
          {plan.features.map((f, j) => (
            <li
              key={j}
              className="flex items-start gap-3 text-[14.5px] text-text-primary"
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

        <div className="mt-8">
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

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-4 mb-8">
      <div
        className="h-px flex-1"
        style={{ background: "var(--border-subtle)" }}
      />
      <span
        className="caption uppercase tracking-[0.22em] font-semibold mono"
        style={{ color: "var(--text-muted)" }}
      >
        {children}
      </span>
      <div
        className="h-px flex-1"
        style={{ background: "var(--border-subtle)" }}
      />
    </div>
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
        <div className="text-center max-w-[860px] mx-auto">
          <Reveal variant="fade">
            <Overline>Pricing</Overline>
          </Reveal>
          <Reveal>
            <h2 className="h2 mt-6">
              Built for scale.{" "}
              <span className="text-gradient">Priced for growth.</span>
            </h2>
          </Reveal>
          <Reveal variant="fade" delay={0.1}>
            <p className="body-lg mt-6 max-w-[680px] mx-auto">
              A modular platform — the core engine plus premium add-ons.
              <br className="hidden sm:block" />
              Pay only for what your agency actually needs.
            </p>
          </Reveal>
        </div>

        {/* Core Platform */}
        <div className="mt-20">
          <Reveal variant="fade">
            <SectionLabel>Core Platform</SectionLabel>
          </Reveal>
          <StaggerGroup className="grid md:grid-cols-2 gap-5 items-stretch">
            {corePlans.map((plan) => (
              <PlanCard key={plan.name} plan={plan} />
            ))}
          </StaggerGroup>
        </div>

        {/* Premium Add-Ons */}
        <div className="mt-20">
          <Reveal variant="fade">
            <SectionLabel>Premium Add-Ons</SectionLabel>
          </Reveal>
          <StaggerGroup className="grid md:grid-cols-2 gap-5 items-stretch">
            {addOnPlans.map((plan) => (
              <PlanCard key={plan.name} plan={plan} />
            ))}
          </StaggerGroup>
        </div>

        {/* Enterprise CTA */}
        <Reveal variant="fade" delay={0.2}>
          <div
            className="mt-20 rounded-xl p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
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
                Enterprise
              </div>
              <h3 className="mt-2 text-[22px] font-semibold tracking-tight text-text-primary">
                Running 50+ agents or multiple offices?
              </h3>
              <p className="caption mt-2 max-w-[520px]">
                Custom pricing, dedicated onboarding, SLAs, and white-glove
                integration with your existing stack.
              </p>
            </div>
            <a href="#cta" className="btn-primary whitespace-nowrap">
              Talk to Sales
              <ArrowRight size={15} strokeWidth={1.8} />
            </a>
          </div>
        </Reveal>

        <Reveal variant="fade" delay={0.3}>
          <p
            className="mt-10 text-center text-[13px] mono"
            style={{ color: "var(--text-muted)" }}
          >
            All prices in AED · Billed monthly · No long-term contracts
          </p>
        </Reveal>
      </div>
    </section>
  );
}
