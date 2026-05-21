"use client";

import { Quote } from "lucide-react";
import { motion } from "framer-motion";
import Overline from "../ui/Overline";
import { Reveal, StaggerGroup, slideInVariant } from "../motion/Reveal";

const testimonials = [
  {
    quote:
      "Finally a CRM that actually knows how Dubai real estate works. Bayut and Property Finder leads in one place, AI that tells my agents what to do next — this is what we've been waiting for.",
    role: "Real Estate Agency",
    location: "Dubai Marina",
  },
  {
    quote:
      "We used to juggle five tools and still lose leads. WIYO consolidated everything and the 15-minute SLA has genuinely changed how our team operates.",
    role: "Property Broker",
    location: "Downtown Dubai",
  },
  {
    quote:
      "The off-plan AI match is a game-changer. When a buyer asks which project is right for them, my agents have an AI-backed answer in 10 seconds.",
    role: "Agency Director",
    location: "Dubai",
  },
];

export default function SocialProof() {
  return (
    <section
      id="testimonials"
      className="section-y relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[700px] rounded-full"
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
            <Overline>Testimonials</Overline>
          </Reveal>
          <Reveal>
            <h2 className="h2 mt-6">
              What UAE Real Estate{" "}
              <span className="text-gradient">Professionals Are Saying.</span>
            </h2>
          </Reveal>
          <Reveal variant="fade" delay={0.1}>
            <p className="body-lg mt-6 max-w-[680px] mx-auto">
              From solo agents to established Dubai brokerages — built by
              people who understand the UAE market.
            </p>
          </Reveal>
        </div>

        <StaggerGroup className="mt-16 grid md:grid-cols-3 gap-5 items-stretch">
          {testimonials.map((t, i) => (
            <motion.figure
              key={i}
              variants={slideInVariant}
              className="card flex flex-col gap-6"
            >
              <Quote
                size={28}
                strokeWidth={1.4}
                style={{ color: "var(--text-accent)" }}
              />
              <blockquote className="text-[16px] md:text-[17px] leading-[1.6] text-text-primary flex-1">
                "{t.quote}"
              </blockquote>
              <figcaption
                className="pt-5"
                style={{ borderTop: "1px solid var(--border-subtle)" }}
              >
                <p className="text-[14.5px] font-semibold text-text-primary">
                  — {t.role}
                </p>
                <p className="caption mt-1">{t.location}</p>
              </figcaption>
            </motion.figure>
          ))}
        </StaggerGroup>

        <Reveal variant="fade" delay={0.3}>
          <p
            className="mt-10 text-center text-[13px] mono"
            style={{ color: "var(--text-muted)" }}
          >
            Trusted by UAE real estate professionals · Live and active across
            the Emirates
          </p>
        </Reveal>
      </div>
    </section>
  );
}
