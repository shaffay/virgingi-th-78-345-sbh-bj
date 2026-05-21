"use client";

import { BarChart3, MessageSquare, Building2, Briefcase, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Overline from "../ui/Overline";
import { Reveal, StaggerGroup, slideInVariant } from "../motion/Reveal";

const cards = [
  {
    icon: BarChart3,
    title: "Marketing Hub",
    body:
      "Instagram organic + Meta Ads in one unified command centre. Know what's working, what's wasting money, and where to double down.",
  },
  {
    icon: MessageSquare,
    title: "Intelligent WhatsApp",
    body:
      "The world's most-used messaging channel, powered by AI. Real-time inbox, smart templates, instant qualification — no expensive API fees.",
  },
  {
    icon: Building2,
    title: "Real Estate Operating System",
    body:
      "Built for agents, brokers, and developers in the UAE. Automate follow-ups, qualify buyers before they waste your time, close more with less.",
  },
  {
    icon: Briefcase,
    title: "The No-Employee Solution",
    body:
      "Why hire three people to do what one platform handles 24/7? WIYO replaces an entire ops team — and never takes a day off.",
  },
];

export default function Solution() {
  return (
    <section className="section-y relative" style={{ background: "var(--bg-elevated)" }}>
      <div className="grid-pattern" />
      <div className="container-x relative">
        <div className="text-center max-w-[860px] mx-auto">
          <Reveal variant="fade">
            <Overline>The Solution</Overline>
          </Reveal>
          <Reveal>
            <h2 className="h2 mt-6">
              <span>We built </span>
              <span className="text-gradient">the replacement.</span>
            </h2>
          </Reveal>
          <Reveal variant="fade" delay={0.1}>
            <p className="body-lg mt-7 max-w-[720px] mx-auto">
              No more bloated CRMs that cost a fortune and deliver nothing.
              <br className="hidden md:block" />
              No more armies of employees answering the same question a hundred
              times a day.
              <br className="hidden md:block" />
              No more leads going cold while you sleep.
            </p>
          </Reveal>
        </div>

        <StaggerGroup className="mt-16 grid md:grid-cols-2 gap-5">
          {cards.map((c, i) => {
            const Icon = c.icon;
            return (
              <motion.div
                key={i}
                variants={slideInVariant}
                className="card group p-8 md:p-10"
              >
                <div className="icon-square icon-square-lg mb-6">
                  <Icon size={22} strokeWidth={1.6} />
                </div>
                <h3 className="h3 leading-tight">{c.title}</h3>
                <p className="body-md mt-3">{c.body}</p>
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
              <p className="text-[28px] md:text-[36px] font-semibold leading-tight tracking-tight">
                <span className="text-gradient">It's time for humans to rest.</span>
              </p>
              <p className="body-md mt-2">
                Let the software do what the software was built for.
              </p>
            </div>
            <a href="#pricing" className="btn-primary self-start md:self-auto relative">
              I'm Ready — Join the List
              <ArrowRight size={17} strokeWidth={1.8} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
