"use client";

import { Clock, RefreshCw, DollarSign } from "lucide-react";
import { motion } from "framer-motion";
import Overline from "../ui/Overline";
import Spotlight from "../motion/Spotlight";
import { Reveal, StaggerGroup, slideInVariant } from "../motion/Reveal";

const items = [
  {
    n: "01",
    icon: Clock,
    title: "Leads go cold in minutes — you reply in hours.",
    body:
      "78% of customers buy from the first business that responds. Every minute you wait is a customer your competitor just won.",
  },
  {
    n: "02",
    icon: RefreshCw,
    title: "Your team is drowning in repetitive messages.",
    body:
      "Answering the same questions a hundred times a day. Burnt-out staff. Slow replies. Lost deals. There is a better way.",
  },
  {
    n: "03",
    icon: DollarSign,
    title: "You're leaving money on the table every single day.",
    body:
      "Without proactive follow-ups and 24/7 qualification, leads quietly slip away. You'll never even know which deals you lost.",
  },
];

export default function PainPoints() {
  return (
    <Spotlight radius={900}>
      <section className="section-y relative">
        <div className="container-x">
          <div className="text-center max-w-[820px] mx-auto">
            <Reveal variant="fade">
              <Overline>The Hard Truth</Overline>
            </Reveal>
            <Reveal>
              <h2 className="h2 mt-6">
                Your competitors are{" "}
                <span className="text-gradient">moving faster.</span> Are you?
              </h2>
            </Reveal>
            <Reveal variant="fade" delay={0.1}>
              <p className="body-lg mt-6 max-w-[640px] mx-auto">
                Every day without the right tools is another day your leads, your
                customers, and your revenue slip through the cracks.
              </p>
            </Reveal>
          </div>

          <StaggerGroup className="mt-16 grid md:grid-cols-3 gap-5">
            {items.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  variants={slideInVariant}
                  className="card group flex flex-col gap-6 min-h-[340px]"
                >
                  <div className="flex items-start justify-between">
                    <div className="icon-square">
                      <Icon size={20} strokeWidth={1.6} />
                    </div>
                    <span
                      className="text-[56px] font-bold leading-none tracking-tight text-gradient mono"
                      style={{ fontFeatureSettings: '"tnum"' }}
                    >
                      {item.n}
                    </span>
                  </div>
                  <h3 className="h3 leading-tight">{item.title}</h3>
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
