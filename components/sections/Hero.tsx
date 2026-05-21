"use client";

import { ArrowRight, ChevronDown } from "lucide-react";
import Spotlight from "../motion/Spotlight";
import Particles from "../motion/Particles";
import Overline from "../ui/Overline";

export default function Hero() {
  return (
    <Spotlight radius={700}>
      <section
        id="top"
        className="relative min-h-[100svh] flex items-center justify-center overflow-hidden pt-28 pb-24"
      >
        {/* Layer 1: base solid (inherited) */}
        {/* Layer 2: radial spotlight + breathing glow */}
        <div className="hero-glow" />
        {/* Layer 3: grid pattern */}
        <div className="grid-pattern" />

        {/* Layer 4: floating card shapes */}
        <div
          aria-hidden
          className="floating-shape hidden md:block"
          style={{
            top: "12%",
            left: "6%",
            width: "180px",
            height: "230px",
            animationDelay: "0s",
            transform: "rotate(-8deg)",
          }}
        />
        <div
          aria-hidden
          className="floating-shape hidden md:block"
          style={{
            top: "18%",
            right: "7%",
            width: "200px",
            height: "260px",
            animationDelay: "-4s",
            transform: "rotate(6deg)",
          }}
        />
        <div
          aria-hidden
          className="floating-shape hidden lg:block"
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

        {/* Layer 5: particles */}
        <Particles count={26} />

        <div className="container-x relative z-10 text-center flex flex-col items-center">
          <div className="opacity-0 animate-[fade-in-up_0.35s_ease-out_both]">
            <Overline>
              <span className="mono normal-case tracking-[0.12em]">
                Launching Soon · Only 100 Founder Spots
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
            Business Communication.
            <br />
            <span className="text-gradient">Reimagined</span>{" "}
            <span>for Those Who Won't Settle.</span>
          </h1>

          <p
            className="body-lg max-w-[680px] mt-7 opacity-0"
            style={{
              animation: "fade-in-up 0.35s ease-out both",
              animationDelay: "0.45s",
            }}
          >
            Decades of traditional methods. Expensive CRMs with no clear ROI.
            Teams doing what software should handle. WIYO is here — so your
            people can finally rest, and your business never stops.
          </p>

          <div
            className="mt-7 opacity-0"
            style={{
              animation: "fade-in-up 0.35s ease-out both",
              animationDelay: "0.6s",
            }}
          >
            <span className="pill">
              <span className="dot" />
              <span className="mono text-[12.5px] tracking-[0.04em]">
                14 / 100 Founder spots remaining
              </span>
            </span>
          </div>

          <div
            className="mt-9 flex flex-col sm:flex-row items-center gap-4 opacity-0"
            style={{
              animation: "fade-in-up 0.35s ease-out both",
              animationDelay: "0.75s",
            }}
          >
            <a href="#pricing" className="btn-primary btn-primary-lg">
              Claim Your Founder Discount
              <ArrowRight size={17} strokeWidth={1.8} />
            </a>
            <a href="#features" className="btn-ghost">
              See What's Coming
              <ChevronDown size={16} strokeWidth={1.8} />
            </a>
          </div>

          <div
            className="mt-14 flex flex-wrap justify-center gap-3 opacity-0"
            style={{
              animation: "fade-in-up 0.35s ease-out both",
              animationDelay: "0.9s",
            }}
          >
            <span className="pill">
              <span className="dot" />
              Building in UAE 🇦🇪
            </span>
            <span className="pill">
              <span className="dot" />
              AI-Powered
            </span>
            <span className="pill">
              <span className="dot" />
              Launching 2026
            </span>
          </div>
        </div>

        {/* bleed bottom */}
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
          style={{ animation: "fade-in-up 0.35s ease-out both", animationDelay: "1.4s" }}
        >
          <span className="uppercase tracking-[0.2em] mb-2">Scroll</span>
          <ChevronDown size={14} className="animate-bounce" />
        </div>
      </section>
    </Spotlight>
  );
}
