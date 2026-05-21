"use client";

import { useEffect, useRef, useState } from "react";

interface UseCountUpOptions {
  to: number;
  duration?: number;
  startWhen?: boolean;
}

export function useCountUp({ to, duration = 1800, startWhen = true }: UseCountUpOptions) {
  const [value, setValue] = useState(0);
  const startedRef = useRef(false);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (!startWhen || startedRef.current) return;
    startedRef.current = true;

    const start = performance.now();
    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOutCubic(progress);
      setValue(Math.floor(eased * to));
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        setValue(to);
      }
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [startWhen, to, duration]);

  return value;
}
