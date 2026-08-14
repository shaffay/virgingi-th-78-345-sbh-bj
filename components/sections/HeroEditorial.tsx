"use client";

import { useEffect, useState } from "react";
import { ArrowRight, ChevronDown, Sparkles } from "lucide-react";
import FilmShowcase from "./FilmShowcase";

/**
 * Editorial hero — WIYO dark violet brand. Text on the left (offset display
 * headline with an inline insight "eye" pill + an "Ask WIYO anything"
 * assistant pill), and a 3D iPhone playing a scrollable reels feed on the
 * right. Entrance animations are CSS-driven so the <h1> (LCP) renders without
 * waiting on hydration; the global reduced-motion cap makes them instant.
 */

function usePrefersReducedMotion(): boolean {
  const [reduce, setReduce] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduce(mq.matches);
    const onChange = () => setReduce(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return reduce;
}

function enter(animation: string, delay: number): React.CSSProperties {
  return { opacity: 0, animation: `${animation} ${delay}s both` };
}

export default function HeroEditorial() {
  const reduce = usePrefersReducedMotion();
  const [query, setQuery] = useState("");

  function handleAsk(e: React.FormEvent) {
    e.preventDefault();
    const q = query.trim();
    if (q) {
      try {
        sessionStorage.setItem("wiyo_intent", q);
      } catch {
        // sessionStorage can throw in private mode — non-critical.
      }
    }
    const cta = document.getElementById("cta");
    if (!cta) return;
    const focusField = () => {
      cta.querySelector<HTMLElement>("input, textarea")?.focus();
    };
    const lenis = typeof window !== "undefined" ? window.lenis : undefined;
    if (lenis) {
      lenis.scrollTo(cta, { offset: 0, onComplete: focusField });
    } else {
      cta.scrollIntoView({ behavior: reduce ? "auto" : "smooth" });
      window.setTimeout(focusField, reduce ? 0 : 600);
    }
  }

  return (
    <section
      id="top"
      className="relative min-h-screen min-h-[100svh] flex flex-col justify-center overflow-hidden"
      style={{
        paddingTop: "clamp(104px, calc(88px + 4vw), 156px)",
        paddingBottom: "clamp(56px, 7vw, 104px)",
      }}
    >
      <div className="hero-glow" />
      <div className="grid-pattern" />

      <div className="container-x relative z-10 w-full">
        <div className="grid grid-cols-12 items-center gap-y-14 lg:gap-x-8">
          {/* Left — copy */}
          <div className="col-span-12 lg:col-span-6 flex flex-col text-left">
            <div
              className="flex items-center gap-2.5"
              style={enter("fade-in-up 0.5s var(--ease-out)", 0.05)}
            >
              <span
                className="shrink-0 animate-[pulse-dot_2s_ease-in-out_infinite]"
                style={{
                  width: 7,
                  height: 7,
                  borderRadius: "50%",
                  background: "var(--cta-gradient)",
                  boxShadow: "0 0 12px rgba(var(--spotlight),0.7)",
                }}
              />
              <span className="mono text-[12px] tracking-[0.12em] text-text-accent">
                <span className="hidden sm:inline">
                  WIYO · The Real Estate Operating System for the UAE
                </span>
                <span className="sm:hidden">WIYO · Real Estate OS · UAE</span>
              </span>
            </div>

            <h1
              className="h1 mt-7 max-w-[16ch]"
              style={{
                fontSize: "clamp(2.3rem, 3.7vw, 3.6rem)",
                lineHeight: 1.04,
                ...enter("slide-in 0.8s var(--ease-spring)", 0.12),
              }}
            >
              <span className="text-text-primary">
                Every lead you{" "}
                <span className="whitespace-nowrap">
                  can{" "}
                  <span className="eye-pill" aria-hidden="true">
                    <span className="eye-pupil" />
                  </span>{" "}
                  see.
                </span>
              </span>
              <br />
              <span className="text-gradient">Every deal, one pipeline.</span>
            </h1>

            <p
              className="body-lg mt-6 max-w-[540px]"
              style={enter("fade-in-up 0.6s var(--ease-out)", 0.28)}
            >
              Capture every{" "}
              <span className="text-text-primary">
                Bayut, Property Finder &amp; WhatsApp
              </span>{" "}
              lead, score it with{" "}
              <span className="text-text-primary">GPT-4o</span>, and reply within{" "}
              <span className="text-text-primary">15 minutes</span> — off-plan and
              secondary inventory, AED-native and RERA-aware, with your{" "}
              <span className="text-text-primary">data resident in the UAE</span>.
            </p>

            <form
              onSubmit={handleAsk}
              role="search"
              aria-label="Ask WIYO"
              className="mt-9 w-full max-w-[480px]"
              style={enter("fade-in-up 0.6s var(--ease-out)", 0.4)}
            >
              <div className="ask-pill">
                <Sparkles
                  size={18}
                  strokeWidth={1.8}
                  className="text-text-accent shrink-0"
                  aria-hidden
                />
                <input
                  className="ask-pill__input"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  aria-label="Ask WIYO anything"
                  placeholder="Ask WIYO anything…"
                />
                <button
                  type="submit"
                  className="ask-pill__send"
                  aria-label="Ask WIYO"
                >
                  <ArrowRight size={18} strokeWidth={1.8} />
                </button>
              </div>
              <p className="caption mono mt-3 text-text-muted">
                AI assistant · books you a live demo
              </p>
            </form>

            <div
              className="mt-6 flex flex-wrap items-center gap-3 max-sm:flex-col"
              style={enter("fade-in-up 0.5s var(--ease-out)", 0.52)}
            >
              <a
                href="#cta"
                className="btn-primary btn-primary-lg max-sm:w-full max-sm:justify-center"
              >
                Book a Live Demo
                <ArrowRight size={17} strokeWidth={1.8} />
              </a>
              <a
                href="#features"
                className="btn-ghost max-sm:w-full max-sm:justify-center"
              >
                See how it works
                <ChevronDown size={16} strokeWidth={1.8} />
              </a>
            </div>
          </div>

          {/* Right — 3D iPhone reels */}
          <div
            className="col-span-12 lg:col-span-6 flex justify-center"
            style={enter("fade-in-up 0.7s var(--ease-spring)", 0.3)}
          >
            <FilmShowcase />
          </div>
        </div>
      </div>

      {/* Edge anchor (decorative, desktop only) */}
      <span
        className="mono uppercase tracking-[0.2em] text-text-muted z-20 hidden md:block"
        style={{
          position: "absolute",
          bottom: "clamp(18px,2.4vw,28px)",
          left: "clamp(20px,5vw,64px)",
          fontSize: 11,
          opacity: 0,
          animation: "fade-in 0.6s var(--ease-out) 0.95s both",
        }}
        aria-hidden
      >
        © 2026 — WIYO · real estate, unified.
      </span>
    </section>
  );
}
