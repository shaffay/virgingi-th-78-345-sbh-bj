"use client";

import { ArrowRight } from "lucide-react";
import Overline from "../ui/Overline";
import { Reveal, StaggerGroup, slideInVariant } from "../motion/Reveal";
import { motion } from "framer-motion";

export default function FinalCTA() {
  return (
    <section id="cta" className="section-y relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] rounded-full"
          style={{
            background:
              "radial-gradient(closest-side, rgba(var(--spotlight),0.28), transparent 70%)",
            filter: "blur(60px)",
            animation: "spotlight-pulse 4s ease-in-out infinite alternate",
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full"
          style={{
            background:
              "radial-gradient(closest-side, rgba(var(--spotlight),0.18), transparent)",
            filter: "blur(30px)",
          }}
        />
      </div>

      <div className="container-x relative">
        <StaggerGroup className="text-center max-w-[920px] mx-auto">
          <motion.div variants={slideInVariant}>
            <Overline>Last call</Overline>
          </motion.div>

          <motion.h2 variants={slideInVariant} className="h2 mt-7">
            This is what your competitors{" "}
            <span className="text-gradient">don't have yet.</span>
          </motion.h2>

          <motion.p
            variants={slideInVariant}
            className="body-lg mt-7 max-w-[640px] mx-auto"
          >
            And once 100 founders lock in — the price goes up. Forever.
          </motion.p>

          <motion.p
            variants={slideInVariant}
            className="mt-3 text-[20px] md:text-[24px] font-semibold tracking-tight text-text-primary"
          >
            Don't be the one who waited.
          </motion.p>

          <motion.div
            variants={slideInVariant}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a href="#pricing" className="btn-primary btn-primary-lg">
              Get Early Access — 60% Off
              <ArrowRight size={18} strokeWidth={1.8} />
            </a>
            <a href="#faq" className="btn-ghost">
              Read the FAQ
            </a>
          </motion.div>

          <motion.div
            variants={slideInVariant}
            className="mt-10 flex flex-wrap justify-center gap-3"
          >
            <span className="pill">
              <span className="dot" />
              14 of 100 spots left
            </span>
            <span className="pill">No charge until launch</span>
            <span className="pill">Cancel anytime</span>
          </motion.div>
        </StaggerGroup>
      </div>
    </section>
  );
}
