"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Overline from "../ui/Overline";
import { Reveal, StaggerGroup, slideInVariant } from "../motion/Reveal";

export default function FounderStory() {
  return (
    <section className="section-y relative">
      <div className="container-x">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="relative aspect-[4/5] rounded-3xl overflow-hidden border"
              style={{
                borderColor: "var(--border-card)",
                background: "var(--bg-elevated)",
              }}
            >
              <motion.div
                initial={{ clipPath: "inset(100% 0 0 0)" }}
                whileInView={{ clipPath: "inset(0% 0 0 0)" }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                className="absolute inset-0"
              >
                <Image
                  src="/shaffay.png"
                  alt="Shaffay Bajwa — Founder & CTO of WIYO"
                  fill
                  className="object-cover object-top"
                  sizes="(min-width: 1024px) 40vw, 100vw"
                />
              </motion.div>
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(to top, var(--bg-base) 0%, transparent 40%)",
                }}
              />
              <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col gap-1">
                <span className="caption uppercase tracking-[0.2em] font-semibold" style={{ color: "var(--text-accent)" }}>
                  Founder & CTO
                </span>
                <span className="text-[22px] font-semibold tracking-tight text-text-primary">
                  Shaffay Bajwa
                </span>
              </div>
              <div
                className="absolute -bottom-20 -right-20 w-[280px] h-[280px] rounded-full pointer-events-none"
                style={{
                  background: "rgba(var(--spotlight),0.22)",
                  filter: "blur(100px)",
                }}
              />
            </motion.div>
          </div>

          <div className="lg:col-span-7">
            <Reveal variant="fade">
              <Overline>The Founder</Overline>
            </Reveal>
            <Reveal>
              <h2 className="h2 mt-6 leading-[1.05]">
                <span>Five years in the UAE.</span>
                <br />
                <span className="text-gradient">One pattern I couldn't ignore.</span>
              </h2>
            </Reveal>

            <StaggerGroup className="mt-8 space-y-5 body-lg">
              <motion.p variants={slideInVariant}>
                And in those five years, I watched the same thing happen over and
                over again. Businesses paying for expensive CRMs that nobody knew
                how to use. Founders glued to their phones at midnight, answering
                questions a bot should have answered hours ago. Sales teams burning
                out, leads going cold, money quietly walking out the door.
              </motion.p>
              <motion.p variants={slideInVariant} className="text-text-primary font-medium">
                So I built WIYO.
              </motion.p>
              <motion.p variants={slideInVariant}>
                Not another bloated tool. Not another expensive license. A real
                operating system — built for the way businesses actually work in
                the UAE, and everywhere else.
              </motion.p>
            </StaggerGroup>

            <Reveal variant="fade" delay={0.2}>
              <div className="mt-10 flex flex-wrap items-center gap-2">
                {["Founder & CTO", "Software Engineer", "5 Years UAE", "Real Estate Tech"].map((p) => (
                  <span key={p} className="pill">
                    {p}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
