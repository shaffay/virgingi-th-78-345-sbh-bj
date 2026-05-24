"use client";

import { ArrowRight, ChevronDown, Check } from "lucide-react";
import Spotlight from "../motion/Spotlight";
import Particles from "../motion/Particles";
import Overline from "../ui/Overline";

const proofPoints = [
  "Bayut + Property Finder + Dubizzle, connected natively",
  "GPT-4o AI built in — not bolted on",
  "Off-plan & secondary inventory in one view",
  "Built in UAE 🇦🇪 · Data stays in UAE 🇦🇪",
];

const trustBadges = [
  "Dubai Real Estate",
  "UAE-Built",
  "GPT-4o Powered",
  "RERA-Aware",
  "WhatsApp API Certified",
];

export default function Hero() {
  return (
    <Spotlight radius={700}>
      <section
        id="top"
        className="relative min-h-[100svh] flex items-center justify-center overflow-hidden pt-28 pb-24"
      >
        <div className="hero-glow" />
        <div className="grid-pattern" />

        <HeroVideoCard
          style={{
            top: "12%",
            left: "6%",
            width: "180px",
            height: "230px",
            animationDelay: "0s",
            transform: "rotate(-8deg)",
          }}
        />
        <HeroVideoCard
          style={{
            top: "18%",
            right: "7%",
            width: "200px",
            height: "260px",
            animationDelay: "-4s",
            transform: "rotate(6deg)",
          }}
        />
        <HeroVideoCard
          lgOnly
          style={{
            bottom: "10%",
            right: "12%",
            width: "140px",
            height: "180px",
            animationDelay: "-2s",
            transform: "rotate(-4deg)",
            opacity: 0.6,
          }}
        />

        <Particles count={26} />

        <div className="container-x relative z-10 text-center flex flex-col items-center">
          <div className="opacity-0 animate-[fade-in-up_0.35s_ease-out_both]">
            <Overline>
              <span className="mono normal-case tracking-[0.12em]">
                The Real Estate Operating System · UAE
              </span>
            </Overline>
          </div>

          <h1
            className="h1 max-w-[1100px] mt-8 opacity-0"
            style={{
              animation: "slide-in 2s cubic-bezier(.16,1,.3,1) both",
              animationDelay: "0.15s",
            }}
          >
            The Real Estate Operating System
            <br />
            <span className="text-gradient">Built for the UAE.</span>
          </h1>

          <p
            className="body-lg max-w-[760px] mt-7 opacity-0"
            style={{
              animation: "fade-in-up 0.35s ease-out both",
              animationDelay: "0.45s",
            }}
          >
            Stop juggling Bayut, Property Finder, WhatsApp, your CRM, and your
            marketing tools as five separate bills. WIYO is one login, one
            platform, one source of truth — powered by AI that never sleeps.
          </p>

          <div
            className="mt-9 flex flex-col sm:flex-row items-center gap-4 opacity-0"
            style={{
              animation: "fade-in-up 0.35s ease-out both",
              animationDelay: "0.6s",
            }}
          >
            <a href="#cta" className="btn-primary btn-primary-lg">
              Book a Live Demo
              <ArrowRight size={17} strokeWidth={1.8} />
            </a>
            <a href="#features" className="btn-ghost">
              See How It Works
              <ChevronDown size={16} strokeWidth={1.8} />
            </a>
          </div>

          <ul
            className="mt-10 grid sm:grid-cols-2 gap-x-8 gap-y-2.5 text-left max-w-[700px] opacity-0"
            style={{
              animation: "fade-in-up 0.35s ease-out both",
              animationDelay: "0.75s",
            }}
          >
            {proofPoints.map((p) => (
              <li
                key={p}
                className="flex items-start gap-2.5 text-[14px] text-text-secondary"
              >
                <span
                  className="mt-0.5 w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{
                    background: "var(--cta-gradient)",
                    color: "white",
                    boxShadow: "0 0 10px rgba(var(--spotlight),0.4)",
                  }}
                >
                  <Check size={9} strokeWidth={3} />
                </span>
                {p}
              </li>
            ))}
          </ul>

          <div
            className="mt-12 flex flex-wrap justify-center gap-2 opacity-0"
            style={{
              animation: "fade-in-up 0.35s ease-out both",
              animationDelay: "0.9s",
            }}
          >
            {trustBadges.map((b) => (
              <span key={b} className="pill">
                <span className="dot" />
                {b}
              </span>
            ))}
          </div>
        </div>

        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-24 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, transparent, var(--bg-base))",
          }}
        />

        <div
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center text-text-muted text-[11px] opacity-0"
          style={{
            animation: "fade-in-up 0.35s ease-out both",
            animationDelay: "1.4s",
          }}
        >
          <span className="uppercase tracking-[0.2em] mb-2">Scroll</span>
          <ChevronDown size={14} className="animate-bounce" />
        </div>
      </section>
    </Spotlight>
  );
}

function HeroVideoCard({
  style,
  lgOnly,
}: {
  style: React.CSSProperties;
  lgOnly?: boolean;
}) {
  return (
    <div
      aria-hidden
      className={`floating-shape overflow-hidden ${
        lgOnly ? "hidden lg:block" : "hidden md:block"
      }`}
      style={style}
    >
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/wiyo-story.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(135deg, rgba(var(--spotlight),0.18), rgba(var(--spotlight),0.04))",
        }}
      />
    </div>
  );
}
