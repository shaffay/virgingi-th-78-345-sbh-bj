"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Overline from "../ui/Overline";
import { Reveal } from "../motion/Reveal";

const faqs = [
  {
    q: "What exactly does WIYO do?",
    a: "WIYO is an all-in-one AI business operating system. Seven modules — WhatsApp engine, AI lead qualification (GPT-4o), live chat, smart templates, contact intelligence, marketing analytics, and a real-estate OS — working together to replace expensive CRMs and entire support teams. One platform, 24/7, zero extra staff.",
  },
  {
    q: "When does WIYO launch?",
    a: "WIYO launches in 2026. Founder waitlist members get private beta access first, with weekly cohorts as we open the platform. Public launch comes after the founder cohort is fully onboarded.",
  },
  {
    q: "How does the Founder discount work?",
    a: "The first 100 founders lock in a lifetime price that will never go up — even after public launch. Standard pricing will be significantly higher. Once 100 spots are filled, the founder rate disappears forever.",
  },
  {
    q: "Will I be charged now?",
    a: "No. Joining the waitlist is completely free. You'll only be charged when WIYO opens to your cohort, and only at the locked-in founder rate. Cancel anytime, no commitments.",
  },
  {
    q: "Is my Founder spot guaranteed?",
    a: "Spots are first-come, first-served. The moment 100 founders are confirmed, the price tier is closed permanently. We track positions transparently — you'll see your number when you join.",
  },
  {
    q: "Can I refer friends?",
    a: "Yes — and you should. Referrals move you up the priority list and unlock early-access perks. You'll get a unique referral link the moment you join.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="section-y relative">
      <div className="container-x">
        <div className="text-center max-w-[800px] mx-auto">
          <Reveal variant="fade">
            <Overline>Questions</Overline>
          </Reveal>
          <Reveal>
            <h2 className="h2 mt-6">
              Everything you need <span className="text-gradient">to know.</span>
            </h2>
          </Reveal>
          <Reveal variant="fade" delay={0.1}>
            <p className="body-lg mt-6 max-w-[640px] mx-auto">
              Still on the fence? We've answered the most common questions
              below. If you have others, reach out — we respond fast.
            </p>
          </Reveal>
        </div>

        <Reveal>
          <div className="mt-14 max-w-[820px] mx-auto flex flex-col gap-3">
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
                    <span
                      className={`text-[16px] md:text-[18px] font-medium tracking-tight transition-colors ${
                        isOpen ? "text-text-primary" : "text-text-primary"
                      }`}
                    >
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
