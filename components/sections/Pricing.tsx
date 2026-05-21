"use client";

import { Check, X, Crown, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Overline from "../ui/Overline";
import { Reveal, StaggerGroup, slideInVariant } from "../motion/Reveal";

interface Plan {
  name: string;
  tag: string;
  highlight?: boolean;
  features: { label: string; included: boolean }[];
  cta: string;
}

const plans: Plan[] = [
  {
    name: "Free",
    tag: "For early explorers",
    features: [
      { label: "Limited platform access", included: true },
      { label: "Lifetime Price Lock", included: false },
      { label: "Priority Support", included: false },
      { label: "Exclusive Founder Badge", included: false },
      { label: "Early Beta Access", included: false },
      { label: "Direct Line to Founder", included: false },
    ],
    cta: "Join Waitlist",
  },
  {
    name: "Founder",
    tag: "Best value · Only 100 spots",
    highlight: true,
    features: [
      { label: "Full Platform Access", included: true },
      { label: "Lifetime Price Lock", included: true },
      { label: "Priority Support", included: true },
      { label: "Exclusive Founder Badge", included: true },
      { label: "Early Beta Access", included: true },
      { label: "Direct Line to Founder", included: true },
    ],
    cta: "Claim Founder Spot",
  },
  {
    name: "Standard",
    tag: "When we go public",
    features: [
      { label: "Full Platform Access", included: true },
      { label: "Lifetime Price Lock", included: false },
      { label: "Priority Support", included: true },
      { label: "Exclusive Founder Badge", included: false },
      { label: "Early Access", included: true },
      { label: "Direct Line to Founder", included: false },
    ],
    cta: "Join Waitlist",
  },
];

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
              Simple. Fair. <span className="text-gradient">Founder pricing.</span>
            </h2>
          </Reveal>
          <Reveal variant="fade" delay={0.1}>
            <p className="body-lg mt-6 max-w-[680px] mx-auto">
              Once 100 spots are gone, this price is gone forever.
              <br className="hidden sm:block" />
              There's no way back in at this rate. Ever.
            </p>
          </Reveal>
        </div>

        <StaggerGroup className="mt-16 grid md:grid-cols-3 gap-5 items-stretch">
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={slideInVariant}
              className={`relative flex flex-col ${
                plan.highlight ? "card-featured md:scale-[1.03] z-10" : "card"
              }`}
              style={
                plan.highlight
                  ? { padding: "32px" }
                  : undefined
              }
            >
              {plan.highlight && (
                <>
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span
                      className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-pill text-white text-[10.5px] uppercase tracking-[0.18em] font-bold mono"
                      style={{
                        background: "var(--cta-gradient)",
                        boxShadow: "0 0 28px rgba(var(--spotlight),0.6)",
                      }}
                    >
                      <Crown size={11} strokeWidth={2} />
                      Founder ✦
                    </span>
                  </div>
                  <div className="absolute inset-0 rounded-xl pointer-events-none overflow-hidden">
                    <div
                      className="absolute -top-24 -left-24 w-[300px] h-[300px] rounded-full"
                      style={{
                        background: "rgba(var(--spotlight),0.18)",
                        filter: "blur(100px)",
                      }}
                    />
                  </div>
                </>
              )}

              <div className="relative flex flex-col h-full">
                <div className="flex items-baseline justify-between">
                  <h3 className="text-[26px] font-semibold tracking-tight text-text-primary">
                    {plan.name}
                  </h3>
                  {plan.highlight && (
                    <span className="caption uppercase tracking-[0.15em] font-semibold mono" style={{ color: "var(--text-accent)" }}>
                      14 / 100 left
                    </span>
                  )}
                </div>
                <p className="caption mt-1">{plan.tag}</p>

                <div className="my-7 h-px" style={{ background: "var(--border-subtle)" }} />

                <ul className="flex flex-col gap-3 flex-1">
                  {plan.features.map((f, j) => (
                    <li
                      key={j}
                      className={`flex items-start gap-3 text-[14.5px] ${
                        f.included ? "text-text-primary" : "text-text-muted"
                      }`}
                    >
                      <span
                        className="mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                        style={
                          f.included
                            ? {
                                background: "var(--cta-gradient)",
                                color: "white",
                                boxShadow:
                                  "0 0 12px rgba(var(--spotlight),0.45)",
                              }
                            : {
                                background: "var(--bg-subtle)",
                                border: "1px solid var(--border-subtle)",
                                color: "var(--text-muted)",
                              }
                        }
                      >
                        {f.included ? (
                          <Check size={11} strokeWidth={3} />
                        ) : (
                          <X size={10} strokeWidth={2} />
                        )}
                      </span>
                      <span className={f.included ? "" : "line-through"}>
                        {f.label}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-9">
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
          ))}
        </StaggerGroup>

        <Reveal variant="fade" delay={0.3}>
          <p className="mt-12 text-center text-[14px] max-w-[600px] mx-auto text-gradient-shimmer mono">
            Once 100 spots are gone, this price is gone forever.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
