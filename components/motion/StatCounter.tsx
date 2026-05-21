"use client";

import { useEffect, useRef, useState } from "react";
import { useCountUp } from "@/lib/useCountUp";

interface StatCounterProps {
  to: number;
  suffix?: string;
  prefix?: string;
  className?: string;
  duration?: number;
  display?: string;
}

export default function StatCounter({
  to,
  suffix = "",
  prefix = "",
  className,
  duration,
  display,
}: StatCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setInView(true);
            obs.disconnect();
          }
        });
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const value = useCountUp({ to, duration, startWhen: inView });

  return (
    <span ref={ref} className={className}>
      {display ?? `${prefix}${value.toLocaleString()}${suffix}`}
    </span>
  );
}
