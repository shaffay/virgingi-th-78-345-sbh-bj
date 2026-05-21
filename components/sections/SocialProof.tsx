"use client";

import Overline from "../ui/Overline";
import StatCounter from "../motion/StatCounter";
import { Reveal } from "../motion/Reveal";

export default function SocialProof() {
  return (
    <section className="section-y relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden
      >
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full"
          style={{
            background:
              "radial-gradient(closest-side, rgba(var(--spotlight),0.18), transparent)",
            filter: "blur(40px)",
          }}
        />
      </div>
      <div className="container-x relative text-center">
        <Reveal variant="fade">
          <Overline>The Community</Overline>
        </Reveal>

        <Reveal>
          <h2 className="text-[clamp(80px,14vw,180px)] font-bold leading-[0.95] tracking-[-0.04em] text-gradient-shimmer mt-6 mono">
            <StatCounter to={5299} suffix="+" duration={2200} />
          </h2>
        </Reveal>

        <Reveal variant="fade" delay={0.2}>
          <p className="body-lg mt-6 max-w-[600px] mx-auto">
            Businesses already on the waitlist. Founders, agencies, real-estate
            teams, and operators — quietly getting ready.
          </p>
        </Reveal>

        <Reveal variant="fade" delay={0.4}>
          <p className="caption uppercase tracking-[0.2em] mt-3">
            And growing — every single day.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
