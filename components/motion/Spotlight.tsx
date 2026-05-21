"use client";

import { useEffect, useRef } from "react";

interface SpotlightProps {
  children: React.ReactNode;
  className?: string;
  /** Radius of the spotlight in px */
  radius?: number;
  /** Mount with intensity 1 (no hover required) */
  alwaysOn?: boolean;
}

export default function Spotlight({
  children,
  className = "",
  radius = 600,
  alwaysOn = false,
}: SpotlightProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--glow-radius", `${radius}px`);
    if (alwaysOn) el.style.setProperty("--glow-intensity", "1");

    let rafId = 0;
    let pendingX = 50;
    let pendingY = 50;
    let scheduled = false;

    function flush() {
      el!.style.setProperty("--glow-x", `${pendingX}%`);
      el!.style.setProperty("--glow-y", `${pendingY}%`);
      scheduled = false;
    }

    function onMove(e: PointerEvent) {
      const rect = el!.getBoundingClientRect();
      pendingX = ((e.clientX - rect.left) / rect.width) * 100;
      pendingY = ((e.clientY - rect.top) / rect.height) * 100;
      if (!scheduled) {
        scheduled = true;
        rafId = requestAnimationFrame(flush);
      }
    }
    function onEnter() {
      el!.style.setProperty("--glow-intensity", "1");
    }
    function onLeave() {
      if (!alwaysOn) el!.style.setProperty("--glow-intensity", "0");
    }

    el.addEventListener("pointermove", onMove, { passive: true });
    el.addEventListener("pointerenter", onEnter);
    el.addEventListener("pointerleave", onLeave);

    return () => {
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerenter", onEnter);
      el.removeEventListener("pointerleave", onLeave);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [radius, alwaysOn]);

  return (
    <div ref={ref} className={`spotlight-host ${className}`}>
      {children}
    </div>
  );
}
