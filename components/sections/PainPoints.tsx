"use client";

import { Clock, LayoutGrid, Sparkles, Inbox } from "lucide-react";
import { motion } from "framer-motion";
import Overline from "../ui/Overline";
import Spotlight from "../motion/Spotlight";
import { Reveal, StaggerGroup, slideInVariant } from "../motion/Reveal";

const items = [
  {
    n: "01",
    icon: Clock,
    title: "The 15-Minute Rule",
    body:
      "78% of buyers sign with the first agent who responds. In Dubai's market, that window is 15 minutes — not hours. WIYO's pipeline puts a red SLA alert on every lead that hasn't been contacted in 15 minutes. No lead goes cold on your watch.",
  },
  {
    n: "02",
    icon: LayoutGrid,
    title: "The Tool-Juggling Tax",
    body:
      "Your agents open Bayut. Then Property Finder. Then WhatsApp. Then your CRM. Then they update a spreadsheet. That's 45 minutes of admin before a single deal is worked. WIYO collapses all of it into one screen.",
  },
  {
    n: "03",
    icon: Sparkles,
    title: "Off-Plan is Won or Lost on Data",
    body:
      "When a buyer asks \"which project is best for me?\" — your agent shouldn't be guessing. WIYO's AI scans every off-plan project in your catalogue, scores it against the buyer's budget and brief, and tells your agent exactly what to pitch. In seconds.",
  },
  {
    n: "04",
    icon: Inbox,
    title: "Leads That Vanish Without a Trace",
    body:
      "Leads from Meta Ads land in one place. Property Finder leads in another. WhatsApp leads in a different chat. WIYO pulls from 11 sources — Bayut, Property Finder, Dubizzle, Meta, Google, JamesEdition, and more — and lands them all in one pipeline. Zero lead leakage.",
  },
];

export default function PainPoints() {
  return (
    <Spotlight radius={900}>
      <section className="section-y relative">
        <div className="container-x">
          <div className="text-center max-w-[860px] mx-auto">
            <Reveal variant="fade">
              <Overline>The Problem</Overline>
            </Reveal>
            <Reveal>
              <h2 className="h2 mt-6">
                UAE Real Estate Runs on{" "}
                <span className="text-gradient">6 Separate Tools.</span>
                <br className="hidden sm:block" /> That Ends Now.
              </h2>
            </Reveal>
            <Reveal variant="fade" delay={0.1}>
              <p className="body-lg mt-6 max-w-[720px] mx-auto">
                The average Dubai brokerage pays for Bayut leads, a Property
                Finder subscription, a WhatsApp tool, a CRM, a marketing
                platform, and something just to handle invoices. That's six
                passwords, six support teams, six monthly bills — and six
                places for your leads to fall through the cracks.{" "}
                <span className="text-text-primary font-medium">
                  WIYO replaces all of them.
                </span>
              </p>
            </Reveal>
          </div>

          <StaggerGroup className="mt-16 grid md:grid-cols-2 gap-5">
            {items.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  variants={slideInVariant}
                  className="card group flex flex-col gap-5 min-h-[260px]"
                >
                  <div className="flex items-start justify-between">
                    <div className="icon-square">
                      <Icon size={20} strokeWidth={1.6} />
                    </div>
                    <span
                      className="text-[44px] font-bold leading-none tracking-tight text-gradient mono"
                      style={{ fontFeatureSettings: '"tnum"' }}
                    >
                      {item.n}
                    </span>
                  </div>
                  <h3 className="text-[22px] md:text-[24px] font-semibold tracking-tight leading-tight">
                    {item.title}
                  </h3>
                  <p className="body-md">{item.body}</p>
                </motion.div>
              );
            })}
          </StaggerGroup>
        </div>
      </section>
    </Spotlight>
  );
}
