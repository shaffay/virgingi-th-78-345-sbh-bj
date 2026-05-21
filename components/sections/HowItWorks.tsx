"use client";

import { Plug, Brain, TrendingUp, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Overline from "../ui/Overline";
import { Reveal, StaggerGroup, slideInVariant } from "../motion/Reveal";

const steps = [
  {
    n: "01",
    icon: Plug,
    label: "Day 1",
    title: "Connect",
    headline: "Connect your lead sources.",
    body: "Plug in Bayut, Property Finder, Dubizzle, Meta Ads, and Google in under an hour. Every lead flows into your WIYO pipeline automatically from that moment forward.",
  },
  {
    n: "02",
    icon: Brain,
    label: "Day 1 onwards",
    title: "Close",
    headline: "Let AI do the heavy lifting.",
    body: "Every new lead is scored, summarised, and matched to the right off-plan project. Your agents know exactly who to call, what to say, and which property to pitch — before they even pick up the phone.",
  },
  {
    n: "03",
    icon: TrendingUp,
    label: "Month 1+",
    title: "Scale",
    headline: "See what your business is actually doing.",
    body: "Real-time dashboards show every agent's performance, every lead source's ROI, every deal in the pipeline. Add more agents, more modules, more sources — WIYO scales with you.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="section-y relative"
      style={{ background: "var(--bg-elevated)" }}
    >
      <div className="grid-pattern" />
      <div className="container-x relative">
        <div className="text-center max-w-[860px] mx-auto">
          <Reveal variant="fade">
            <Overline>How It Works</Overline>
          </Reveal>
          <Reveal>
            <h2 className="h2 mt-6">
              From Sign-Up to Closing —{" "}
              <span className="text-gradient">In Days, Not Months.</span>
            </h2>
          </Reveal>
          <Reveal variant="fade" delay={0.1}>
            <p className="body-lg mt-6 max-w-[680px] mx-auto">
              No consultants. No weeks of implementation. WIYO is designed to
              get your agency live the same day you sign up.
            </p>
          </Reveal>
        </div>

        <StaggerGroup className="mt-16 grid md:grid-cols-3 gap-5 items-stretch">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.n}
                variants={slideInVariant}
                className="card relative flex flex-col gap-5"
              >
                <div className="flex items-start justify-between">
                  <div className="icon-square">
                    <Icon size={20} strokeWidth={1.6} />
                  </div>
                  <span
                    className="text-[44px] font-bold leading-none tracking-tight text-gradient mono"
                    style={{ fontFeatureSettings: '"tnum"' }}
                  >
                    {step.n}
                  </span>
                </div>
                <div>
                  <span
                    className="caption uppercase tracking-[0.16em] font-semibold mono"
                    style={{ color: "var(--text-accent)" }}
                  >
                    {step.label} · {step.title}
                  </span>
                  <h3 className="mt-3 text-[22px] font-semibold tracking-tight leading-tight">
                    {step.headline}
                  </h3>
                  <p className="body-md mt-3">{step.body}</p>
                </div>
              </motion.div>
            );
          })}
        </StaggerGroup>

        <Reveal>
          <div
            className="mt-12 relative overflow-hidden rounded-3xl border p-8 md:p-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6"
            style={{
              borderColor: "var(--border-card)",
              background:
                "linear-gradient(135deg, rgba(var(--spotlight),0.12), rgba(var(--spotlight),0.04))",
            }}
          >
            <div
              className="absolute -top-32 -left-32 w-[420px] h-[420px] rounded-full pointer-events-none"
              style={{
                background: "rgba(var(--spotlight),0.18)",
                filter: "blur(120px)",
                animation: "glow-breathe 3s ease-in-out infinite alternate",
              }}
            />
            <div className="relative">
              <p className="text-[26px] md:text-[34px] font-semibold leading-tight tracking-tight">
                <span className="text-gradient">
                  Same-day onboarding. No consultants required.
                </span>
              </p>
              <p className="body-md mt-2">
                Most UAE agencies are live and running on WIYO within a single
                business day.
              </p>
            </div>
            <a
              href="#cta"
              className="btn-primary self-start md:self-auto relative"
            >
              Book a Live Demo
              <ArrowRight size={17} strokeWidth={1.8} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
