"use client";

import { Crown, Target, User, Megaphone, type LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import Overline from "../ui/Overline";
import { Reveal, StaggerGroup, slideInVariant } from "../motion/Reveal";

interface Role {
  icon: LucideIcon;
  role: string;
  headline: string;
  body: string;
}

const roles: Role[] = [
  {
    icon: Crown,
    role: "Agency Owner / Director",
    headline: "Visibility to decide with confidence.",
    body: "See every agent's performance in real time. Know which lead sources are delivering ROI. Track pipeline health, conversion rates, and revenue forecasts from a single dashboard. WIYO gives you the visibility to make every decision with confidence — not gut feel.",
  },
  {
    icon: Target,
    role: "Sales Manager",
    headline: "A team that runs itself.",
    body: "Assign leads instantly. Monitor SLA compliance across your team. Know which deals are hot, which are stalling, and where to focus today. No more chasing agents for updates. The pipeline tells you everything.",
  },
  {
    icon: User,
    role: "Sales Agent",
    headline: "Spend your time selling.",
    body: "Your morning starts with your personal pipeline — scored, prioritised, with AI-briefed notes on every lead. One tap to draft a WhatsApp. One click to match a buyer to the perfect off-plan project. Spend your time selling. WIYO handles the rest.",
  },
  {
    icon: Megaphone,
    role: "Marketing Manager",
    headline: "Campaigns that bring leads, not just likes.",
    body: "Publish across Meta, LinkedIn, and TikTok from one calendar. AI generates on-brand content for new listings and project launches in minutes. See which campaigns are bringing leads — not just likes.",
  },
];

export default function ForEveryRole() {
  return (
    <section
      id="for-every-role"
      className="section-y relative"
      style={{ background: "var(--bg-elevated)" }}
    >
      <div className="container-x relative">
        <div className="text-center max-w-[880px] mx-auto">
          <Reveal variant="fade">
            <Overline>For Every Role</Overline>
          </Reveal>
          <Reveal>
            <h2 className="h2 mt-6">
              Built for Every Person on{" "}
              <span className="text-gradient">Your Team.</span>
            </h2>
          </Reveal>
          <Reveal variant="fade" delay={0.1}>
            <p className="body-lg mt-6 max-w-[680px] mx-auto">
              Owners, managers, agents, marketers — WIYO gives each person the
              view they need, the actions they own, and the AI to back them up.
            </p>
          </Reveal>
        </div>

        <StaggerGroup className="mt-16 grid md:grid-cols-2 gap-5">
          {roles.map((r) => {
            const Icon = r.icon;
            return (
              <motion.div
                key={r.role}
                variants={slideInVariant}
                className="card flex flex-col gap-5"
              >
                <div className="flex items-center gap-3">
                  <div className="icon-square icon-square-lg">
                    <Icon size={22} strokeWidth={1.6} />
                  </div>
                  <span
                    className="caption uppercase tracking-[0.16em] font-semibold mono"
                    style={{ color: "var(--text-accent)" }}
                  >
                    {r.role}
                  </span>
                </div>
                <h3 className="text-[22px] md:text-[24px] font-semibold tracking-tight leading-tight">
                  {r.headline}
                </h3>
                <p className="body-md">{r.body}</p>
              </motion.div>
            );
          })}
        </StaggerGroup>
      </div>
    </section>
  );
}
