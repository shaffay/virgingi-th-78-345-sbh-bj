"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, ChevronDown, Sparkles } from "lucide-react";

/**
 * Editorial OS hero — a restrained, magazine-grade hero on WIYO's dark violet
 * brand: a full-bleed background video drowned under brand masks, an offset
 * 12-col display headline with an inline "insight eye" pill, and an
 * "Ask WIYO anything" assistant pill that routes to the demo form.
 *
 * Entrance animations are CSS-driven (no JS dependency) so the <h1> — the LCP
 * element — renders immediately and is not gated behind hydration. The global
 * prefers-reduced-motion cap makes every animation instant for those users.
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

/** Inline CSS entrance: starts hidden, animates in via an existing keyframe. */
function enter(animation: string, delay: number): React.CSSProperties {
  return { opacity: 0, animation: `${animation} ${delay}s both` };
}

export default function HeroEditorial() {
  const reduce = usePrefersReducedMotion();
  const [query, setQuery] = useState("");
  const sectionRef = useRef<HTMLElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Pause the decorative background video when off-screen (protects INP + battery).
  useEffect(() => {
    const video = videoRef.current;
    const section = sectionRef.current;
    if (!video || !section) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.05 },
    );
    io.observe(section);
    return () => io.disconnect();
  }, [reduce]);

  // The Ask pill is not a real search backend — it stores intent and routes the
  // visitor to the demo form. Uses the Lenis instance (exposed on window by
  // LenisProvider) so the programmatic scroll runs through Lenis's loop instead
  // of fighting it; falls back to native scroll when Lenis is absent.
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
      ref={sectionRef}
      className="relative min-h-screen min-h-[100svh] flex flex-col justify-center overflow-hidden"
      style={{
        paddingTop: "clamp(96px, calc(96px + 4vw), 168px)",
        paddingBottom: "clamp(72px, 9vw, 120px)",
      }}
    >
      {/* Background video + brand mask stack */}
      <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden>
        {!reduce ? (
          <video
            ref={videoRef}
            muted
            loop
            autoPlay
            playsInline
            tabIndex={-1}
            preload="metadata"
            className="hero-video-el absolute inset-0 w-full h-full object-cover"
            style={{
              objectPosition: "92% center",
              filter: "saturate(0.6) brightness(0.6) contrast(1.06)",
            }}
            onCanPlay={(e) => {
              e.currentTarget.style.opacity = "0.3";
            }}
          >
            <source src="/hero-card-2.webm" type="video/webm" />
            <source src="/hero-card-2.mp4" type="video/mp4" />
          </video>
        ) : (
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(60% 50% at 35% 40%, rgba(var(--spotlight),0.18), transparent 70%)",
            }}
          />
        )}
        <div className="hero-video-tint" />
        <div className="hero-video-wash" />
        <div className="hero-video-mask" />
      </div>

      <div className="hero-glow" />
      <div className="grid-pattern" />

      {/* Content */}
      <div className="container-x relative z-10 w-full">
        <div className="grid grid-cols-12 gap-x-6">
          <div className="col-span-12 md:col-span-10 lg:col-span-8 lg:col-start-1 flex flex-col text-left">
            {/* Overline */}
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

            {/* Headline */}
            <h1
              className="h1 mt-7 max-w-[22ch]"
              style={{
                fontSize: "clamp(2.4rem, 5vw, 4rem)",
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

            {/* Subhead */}
            <p
              className="body-lg mt-6 max-w-[600px]"
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

            {/* Ask WIYO pill */}
            <form
              onSubmit={handleAsk}
              role="search"
              aria-label="Ask WIYO"
              className="mt-9 w-full max-w-[520px]"
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

            {/* CTA row */}
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
        </div>
      </div>

      {/* Edge anchors (decorative, desktop only) */}
      <div
        className="lang-anchor z-20 hidden md:flex"
        style={{
          right: "clamp(12px,2vw,28px)",
          top: "50%",
          transform: "translateY(-50%)",
          opacity: 0,
          animation: "fade-in 0.6s var(--ease-out) 0.85s both",
        }}
        aria-hidden="true"
      >
        <span className="text-text-accent">EN</span>
        <span>·</span>
        <span className="text-text-muted">ع</span>
      </div>

      <span
        className="mono uppercase tracking-[0.2em] text-text-muted z-20 hidden md:block"
        style={{
          position: "absolute",
          bottom: "clamp(20px,3vw,32px)",
          left: "clamp(20px,5vw,64px)",
          fontSize: 11,
          opacity: 0,
          animation: "fade-in 0.6s var(--ease-out) 0.95s both",
        }}
        aria-hidden
      >
        © 2026 — WIYO
      </span>

      <span
        className="mono uppercase tracking-[0.2em] text-text-muted z-20 hidden md:block text-right"
        style={{
          position: "absolute",
          bottom: "clamp(20px,3vw,32px)",
          right: "clamp(20px,5vw,64px)",
          fontSize: 11,
          opacity: 0,
          animation: "fade-in 0.6s var(--ease-out) 1.05s both",
        }}
        aria-hidden
      >
        REAL ESTATE, UNIFIED.
      </span>
    </section>
  );
}
