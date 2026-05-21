"use client";

import Overline from "../ui/Overline";
import StatCounter from "../motion/StatCounter";
import { Reveal } from "../motion/Reveal";

const stats = [
  { value: 7, label: "Core Modules" },
  { value: 40, suffix: "+", label: "Built-in Capabilities" },
  { value: 24, display: "24/7", label: "Always Running" },
  { value: 0, label: "Extra Staff Needed" },
];

export default function PlatformStats() {
  return (
    <section className="section-y relative">
      <div className="container-x">
        <div className="text-center max-w-[860px] mx-auto">
          <Reveal variant="fade">
            <Overline>Inside WIYO</Overline>
          </Reveal>
          <Reveal>
            <h2 className="h2 mt-6">
              One platform. <span className="text-gradient">Infinite leverage.</span>
            </h2>
          </Reveal>
          <Reveal variant="fade" delay={0.1}>
            <p className="body-lg mt-6 max-w-[720px] mx-auto">
              WIYO isn't a single tool. It's 7 complete modules, 40+ capabilities,
              all working together — so your business operates at full capacity
              without an army of employees.
            </p>
          </Reveal>
        </div>

        <Reveal>
          <div
            className="mt-16 relative rounded-3xl overflow-hidden border"
            style={{
              borderColor: "var(--border-card)",
              background:
                "linear-gradient(180deg, var(--bg-elevated), var(--bg-base))",
            }}
          >
            <div className="absolute inset-0 pointer-events-none opacity-80">
              <div
                className="absolute -top-1/2 left-1/4 w-[500px] h-[500px] rounded-full"
                style={{
                  background: "rgba(var(--spotlight),0.18)",
                  filter: "blur(140px)",
                }}
              />
              <div
                className="absolute -bottom-1/2 right-1/4 w-[500px] h-[500px] rounded-full"
                style={{
                  background: "rgba(var(--spotlight),0.1)",
                  filter: "blur(140px)",
                }}
              />
            </div>

            <div className="relative grid grid-cols-2 md:grid-cols-4">
              {stats.map((s, i) => (
                <div
                  key={i}
                  className={`p-10 md:p-12 text-center ${
                    i < stats.length - 1 ? "md:border-r" : ""
                  } ${i < 2 ? "border-b md:border-b-0" : ""}`}
                  style={{ borderColor: "var(--border-subtle)" }}
                >
                  <div
                    className="text-[64px] md:text-[88px] font-bold leading-none tracking-tight text-gradient mono"
                    style={{ fontFeatureSettings: '"tnum"' }}
                  >
                    {s.display ? (
                      <span>{s.display}</span>
                    ) : (
                      <StatCounter to={s.value} suffix={s.suffix} />
                    )}
                  </div>
                  <p className="mt-4 caption uppercase tracking-[0.18em] font-semibold">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
