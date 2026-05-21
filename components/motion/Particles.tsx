"use client";

import { useMemo } from "react";

interface ParticlesProps {
  count?: number;
  className?: string;
}

export default function Particles({ count = 22, className = "" }: ParticlesProps) {
  const dots = useMemo(() => {
    return Array.from({ length: count }).map((_, i) => {
      const seed = (i + 1) * 9301 + 49297;
      const r1 = (seed % 233280) / 233280;
      const r2 = ((seed * 2.7) % 233280) / 233280;
      const r3 = ((seed * 5.3) % 233280) / 233280;
      const r4 = ((seed * 7.1) % 233280) / 233280;
      return {
        left: `${r2 * 100}%`,
        bottom: `${r1 * 60}%`,
        size: 1.5 + r3 * 2.5,
        delay: r4 * 10,
        duration: 10 + r3 * 10,
      };
    });
  }, [count]);

  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      {dots.map((d, i) => (
        <span
          key={i}
          style={{
            left: d.left,
            bottom: d.bottom,
            width: d.size,
            height: d.size,
            animationDelay: `${d.delay}s`,
            animationDuration: `${d.duration}s`,
            background: "rgba(var(--spotlight), 0.6)",
            boxShadow: "0 0 8px rgba(var(--spotlight), 0.6)",
          }}
          className="absolute rounded-full"
        >
          <span
            className="block w-full h-full rounded-full"
            style={{
              animation: `particle-drift ${d.duration}s linear infinite`,
              animationDelay: `${d.delay}s`,
            }}
          />
        </span>
      ))}
    </div>
  );
}
