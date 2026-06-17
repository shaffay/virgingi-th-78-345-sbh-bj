"use client";

import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX, Heart, MessageCircle, Send } from "lucide-react";

interface Reel {
  src: string;
  handle: string;
  caption: string;
}

const REELS: Reel[] = [
  {
    src: "/reel-1.mp4",
    handle: "wiyo.ae",
    caption: "AI scores every lead the second it lands.",
  },
  {
    src: "/reel-2.mp4",
    handle: "wiyo.ae",
    caption: "From spreadsheet chaos to one live pipeline.",
  },
  {
    src: "/wiyo-story.mp4",
    handle: "wiyo.ae",
    caption: "Built in Dubai, for the way the UAE sells.",
  },
];

/**
 * 3D iPhone mockup playing a vertical reels feed. Scroll/swipe inside the phone
 * (or use the dots) to change reel; the visible reel autoplays muted, and a
 * speaker toggle enables audio on the active reel (user-gesture gated).
 */
export default function PhoneReels() {
  const phoneRef = useRef<HTMLDivElement | null>(null);
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const videoRefs = useRef<Array<HTMLVideoElement | null>>([]);
  const [active, setActive] = useState(0);
  const [muted, setMuted] = useState(true);
  const [phoneVisible, setPhoneVisible] = useState(true);

  // Active reel = whichever is snapped into view (derived from scroll position).
  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const h = scroller.clientHeight || 1;
        const idx = Math.round(scroller.scrollTop / h);
        setActive(Math.max(0, Math.min(REELS.length - 1, idx)));
      });
    };
    scroller.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      scroller.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  // Pause all reels when the phone scrolls out of the page viewport.
  useEffect(() => {
    const phone = phoneRef.current;
    if (!phone) return;
    const io = new IntersectionObserver(
      ([entry]) => setPhoneVisible(entry.isIntersecting),
      { threshold: 0.2 },
    );
    io.observe(phone);
    return () => io.disconnect();
  }, []);

  // Play only the active reel while the phone is visible; route audio to it.
  useEffect(() => {
    videoRefs.current.forEach((v, i) => {
      if (!v) return;
      v.muted = muted || i !== active;
      if (i === active && phoneVisible) {
        v.play().catch(() => {});
      } else {
        v.pause();
      }
    });
  }, [active, phoneVisible, muted]);

  function goTo(idx: number) {
    const scroller = scrollerRef.current;
    if (scroller) {
      scroller.scrollTo({ top: idx * scroller.clientHeight, behavior: "smooth" });
    }
  }

  return (
    <div className="phone-stage">
      <div className="phone-glow" aria-hidden />

      <div className="phone-3d">
        <div className="phone-frame" ref={phoneRef}>
          <span className="phone-btn phone-btn--action" aria-hidden />
          <span className="phone-btn phone-btn--volup" aria-hidden />
          <span className="phone-btn phone-btn--voldn" aria-hidden />
          <span className="phone-btn phone-btn--power" aria-hidden />

          <div className="phone-screen">
            <div className="dynamic-island" aria-hidden />

            <div
              ref={scrollerRef}
              className="reels-scroller"
              data-lenis-prevent
              role="group"
              aria-label="WIYO reels — scroll to change"
            >
              {REELS.map((reel, i) => (
                <div className="reel" data-reel data-index={i} key={reel.src}>
                  <video
                    ref={(el) => {
                      videoRefs.current[i] = el;
                    }}
                    src={reel.src}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload={i === 0 ? "auto" : "metadata"}
                    className="reel-video"
                  />
                  <div className="reel-overlay" aria-hidden />

                  <div className="reel-rail" aria-hidden>
                    <span className="reel-rail__btn">
                      <Heart size={18} strokeWidth={1.8} />
                      <span>4.2k</span>
                    </span>
                    <span className="reel-rail__btn">
                      <MessageCircle size={18} strokeWidth={1.8} />
                      <span>318</span>
                    </span>
                    <span className="reel-rail__btn">
                      <Send size={18} strokeWidth={1.8} />
                    </span>
                  </div>

                  <div className="reel-caption">
                    <span className="reel-handle">@{reel.handle}</span>
                    <p>{reel.caption}</p>
                  </div>
                </div>
              ))}
            </div>

            <button
              className="reel-mute"
              onClick={() => setMuted((m) => !m)}
              aria-label={muted ? "Unmute reel audio" : "Mute reel audio"}
            >
              {muted ? (
                <VolumeX size={15} strokeWidth={1.8} />
              ) : (
                <Volume2 size={15} strokeWidth={1.8} />
              )}
            </button>

            <div className="phone-gloss" aria-hidden />
          </div>
        </div>
      </div>

      <div className="reel-dots" role="tablist" aria-label="Choose reel">
        {REELS.map((reel, i) => (
          <button
            key={reel.src}
            role="tab"
            aria-selected={active === i}
            aria-label={`Reel ${i + 1} of ${REELS.length}`}
            className={`reel-dot ${active === i ? "is-active" : ""}`}
            onClick={() => goTo(i)}
          />
        ))}
      </div>
    </div>
  );
}
