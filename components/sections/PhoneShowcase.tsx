"use client";

import { useEffect, useRef, useState } from "react";
import { Play, Volume2, VolumeX } from "lucide-react";

const VIDEO_SRC = "/wiyo-hero.mp4";
const POSTER_SRC = "/wiyo-hero-poster.jpg";

/**
 * 3D iPhone showcase playing the WIYO brand film.
 *
 * Desktop: the film autoplays muted and loops, with a tap-to-unmute control.
 * Mobile: nothing is fetched up front — a poster frame sits behind a play
 * control, and the first tap both loads and plays the film with sound. Keeping
 * play() inside the tap handler preserves the user-gesture chain that mobile
 * browsers require before allowing audio.
 */
export default function PhoneShowcase() {
  const phoneRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isBuffering, setIsBuffering] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const sync = () => setIsMobile(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  // Dropping to a mobile viewport hands control back to the play overlay, so
  // stop anything the desktop autoplay already started.
  useEffect(() => {
    const video = videoRef.current;
    if (!video || !isMobile || hasStarted) return;
    video.pause();
    video.currentTime = 0;
  }, [isMobile, hasStarted]);

  // Desktop only: pause the loop whenever the phone leaves the viewport.
  useEffect(() => {
    const video = videoRef.current;
    const phone = phoneRef.current;
    if (!video || !phone || isMobile) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.2 },
    );
    io.observe(phone);
    return () => io.disconnect();
  }, [isMobile]);

  function handlePlay() {
    const video = videoRef.current;
    if (!video) return;
    setHasStarted(true);
    setIsBuffering(true);
    video.muted = false;
    setIsMuted(false);
    video.play().catch(() => {
      // If audio playback is refused, fall back to a muted play.
      video.muted = true;
      setIsMuted(true);
      video.play().catch(() => {});
    });
  }

  function toggleMute() {
    const video = videoRef.current;
    if (!video) return;
    const next = !video.muted;
    video.muted = next;
    setIsMuted(next);
  }

  const showPlayOverlay = isMobile && !hasStarted;

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

            <video
              ref={videoRef}
              className="reel-video"
              src={VIDEO_SRC}
              poster={POSTER_SRC}
              muted
              loop
              playsInline
              autoPlay={!isMobile}
              preload={isMobile ? "none" : "auto"}
              onPlaying={() => setIsBuffering(false)}
              onWaiting={() => setIsBuffering(true)}
            />
            <div className="reel-overlay" aria-hidden />

            {/* Mobile: tap to fetch + play with sound */}
            {showPlayOverlay && (
              <button
                type="button"
                className="phone-play"
                onClick={handlePlay}
                aria-label="Play the WIYO film with sound"
              >
                <span className="phone-play__ring" aria-hidden />
                <span className="phone-play__btn" aria-hidden>
                  <Play size={26} strokeWidth={2} fill="currentColor" />
                </span>
                <span className="phone-play__label">
                  Watch the film
                  <span className="phone-play__meta">41s · with sound</span>
                </span>
              </button>
            )}

            {isBuffering && hasStarted && (
              <span className="phone-play__spinner" aria-label="Loading" />
            )}

            {!showPlayOverlay && (
              <button
                type="button"
                className="reel-mute"
                onClick={toggleMute}
                aria-label={isMuted ? "Unmute the film" : "Mute the film"}
              >
                {isMuted ? (
                  <VolumeX size={15} strokeWidth={1.8} />
                ) : (
                  <Volume2 size={15} strokeWidth={1.8} />
                )}
              </button>
            )}

            <div className="phone-gloss" aria-hidden />
          </div>
        </div>
      </div>
    </div>
  );
}
