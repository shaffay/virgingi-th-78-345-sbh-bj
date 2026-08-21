"use client";

import Overline from "../ui/Overline";
import StatCounter from "../motion/StatCounter";
import { Reveal } from "../motion/Reveal";

const stats = [
  { value: 7, label: "Core Modules", sub: "One operating system" },
  { value: 11, label: "Native Lead Sources", sub: "Bayut, PF, Meta, Google & more" },
  { value: 15, display: "15 min", label: "SLA Enforcement", sub: "No lead goes cold" },
  { value: 2650, display: "AED 2,650", label: "Starting Price", sub: "Per month, all inclusive" },
  { value: 4, display: "AI", label: "Assistance", sub: "Embedded in workflows" },
  { value: 0, display: "UAE 🇦🇪", label: "Where We're Built", sub: "And where your data stays" },
];

export default function PlatformStats() {
  return (
    <section className="section-y relative">
      <div className="container-x">
        <div className="text-center max-w-[880px] mx-auto">
          <Reveal variant="fade">
            <Overline>By The Numbers</Overline>
          </Reveal>
          <Reveal>
            <h2 className="h2 mt-6">
              One platform.{" "}
              <span className="text-gradient">Infinite leverage.</span>
            </h2>
          </Reveal>
          <Reveal variant="fade" delay={0.1}>
            <p className="body-lg mt-6 max-w-[720px] mx-auto">
              WIYO isn't a single tool. It's seven engines, eleven native lead
              sources, and a real-time SLA — all running together for UAE real
              estate agencies.
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

            <div className="relative grid grid-cols-2 md:grid-cols-3">
              {stats.map((s, i) => {
                const isLastCol = (i + 1) % 3 === 0;
                const isLastRow = i >= stats.length - 3;
                return (
                  <div
                    key={i}
                    className="p-8 md:p-10 text-center"
                    style={{
                      borderRight: !isLastCol
                        ? "1px solid var(--border-subtle)"
                        : "none",
                      borderBottom: !isLastRow
                        ? "1px solid var(--border-subtle)"
                        : "none",
                    }}
                  >
                    <div
                      className="text-[40px] md:text-[56px] font-bold leading-none tracking-tight text-gradient mono"
                      style={{ fontFeatureSettings: '"tnum"' }}
                    >
                      {s.display ? (
                        <span>{s.display}</span>
                      ) : (
                        <StatCounter to={s.value} />
                      )}
                    </div>
                    <p className="mt-4 caption uppercase tracking-[0.16em] font-semibold">
                      {s.label}
                    </p>
                    <p className="mt-2 text-[12.5px] text-text-muted">
                      {s.sub}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
