"use client";

import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { motion } from "framer-motion";
import Overline from "../ui/Overline";
import { Reveal, StaggerGroup, slideInVariant } from "../motion/Reveal";

const credentials = [
  "UAE Data Residency",
  "AED Pricing",
  "UAE Support Team",
  "UAE-first Roadmap",
];

function StoryVideo() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          // Try unmuted first; if the browser blocks (no user activation),
          // fall back to muted autoplay so the video still plays.
          video.muted = false;
          video
            .play()
            .then(() => setMuted(false))
            .catch(() => {
              video.muted = true;
              setMuted(true);
              video.play().catch(() => {});
            });
        } else {
          video.pause();
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  function toggleMute() {
    const video = videoRef.current;
    if (!video) return;
    const next = !video.muted;
    video.muted = next;
    setMuted(next);
    if (!next) {
      video.play().catch(() => {});
    }
  }

  return (
    <>
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        src="/wiyo-story.mp4"
        poster="/shaffay.jpg"
        muted
        loop
        playsInline
        preload="metadata"
        aria-label="The WIYO story — from chaos to clarity"
      />
      <button
        type="button"
        onClick={toggleMute}
        aria-label={muted ? "Unmute video" : "Mute video"}
        className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-md transition-all hover:scale-105 z-10"
        style={{
          background: "rgba(8,12,33,0.55)",
          border: "1px solid rgba(255,255,255,0.18)",
          color: "white",
        }}
      >
        {muted ? (
          <VolumeX size={16} strokeWidth={1.8} />
        ) : (
          <Volume2 size={16} strokeWidth={1.8} />
        )}
      </button>
    </>
  );
}

export default function FounderStory() {
  return (
    <section id="built-for-uae" className="section-y relative">
      <div className="container-x">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="relative aspect-[4/5] rounded-3xl overflow-hidden border"
              style={{
                borderColor: "var(--border-card)",
                background: "var(--bg-elevated)",
              }}
            >
              <StoryVideo />
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(to top, var(--bg-base) 0%, transparent 45%)",
                }}
              />
              <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col gap-1">
                <span
                  className="caption uppercase tracking-[0.2em] font-semibold"
                  style={{ color: "var(--text-accent)" }}
                >
                  Founder
                </span>
                <span className="text-[22px] font-semibold tracking-tight text-text-primary">
                  Shaffay Bajwa
                </span>
                <span className="caption">
                  Software Engineer · 5 Years in UAE
                </span>
              </div>
              <div
                className="absolute -bottom-20 -right-20 w-[280px] h-[280px] rounded-full pointer-events-none"
                style={{
                  background: "rgba(var(--spotlight),0.22)",
                  filter: "blur(100px)",
                }}
              />
            </motion.div>
          </div>

          <div className="lg:col-span-7">
            <Reveal variant="fade">
              <Overline>Built for the UAE</Overline>
            </Reveal>
            <Reveal>
              <h2 className="h2 mt-6 leading-[1.05]">
                Built in the UAE.{" "}
                <span className="text-gradient">For the UAE.</span> By Someone
                Who Lived It.
              </h2>
            </Reveal>

            <StaggerGroup className="mt-8 space-y-5 body-lg">
              <motion.p variants={slideInVariant}>
                WIYO was founded in Dubai by Shaffay Bajwa — a software
                engineer who spent five years watching UAE real estate
                agencies pay for tools that were never designed for them.
              </motion.p>
              <motion.p variants={slideInVariant}>
                Generic CRMs don't know what RERA is. They've never seen a DLD
                Title Deed. They have no idea how Bayut works, what Oqood
                means, or why a buyer from Russia behaves differently from
                one coming through JamesEdition.
              </motion.p>
              <motion.p
                variants={slideInVariant}
                className="text-text-primary font-medium"
              >
                WIYO was built with all of that baked in from day one.
              </motion.p>
              <motion.p variants={slideInVariant}>
                The workflows match how UAE agencies actually operate. The
                integrations are the portals UAE buyers actually use. The AI
                understands the UAE property market context.
              </motion.p>
              <motion.p variants={slideInVariant}>
                This isn't software adapted for the UAE.{" "}
                <span className="text-gradient font-medium">
                  This is software engineered for it.
                </span>
              </motion.p>
            </StaggerGroup>

            <Reveal variant="fade" delay={0.2}>
              <div className="mt-10 flex flex-wrap items-center gap-2">
                {credentials.map((p) => (
                  <span key={p} className="pill">
                    <span className="dot" />
                    {p}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
