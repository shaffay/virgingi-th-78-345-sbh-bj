"use client";

import { useEffect, useRef, useState } from "react";
import { Play, Volume2, VolumeX } from "lucide-react";

const VIDEO_SRC = "/wiyo-film.mp4";
const POSTER_SRC = "/wiyo-film-poster.jpg";
const DURATION_LABEL = "37s";

/**
 * Cinematic monolith — the WIYO film floats free in the hero as a tilted
 * glass panel: a rotating light beam traces its border, viewfinder brackets
 * frame it, and a faint floor reflection grounds it. No device chrome.
 *
 * Desktop: autoplays muted, pauses off-screen, tap-to-unmute.
 * Mobile: fetches nothing up front — a poster sits under a glowing play
 * control and the first tap loads + plays with sound. play() stays inside
 * the tap handler to preserve the user-gesture chain audio requires.
 */
export default function FilmShowcase() {
  const panelRef = useRef<HTMLDivElement | null>(null);
  const parallaxRef = useRef<HTMLDivElement | null>(null);
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

  // Scroll parallax — the panel drifts a little slower than the copy beside
  // it, which reads as depth. Transform-only and rAF-throttled, and it only
  // moves while the page is actually scrolling, so playback stays smooth.
  useEffect(() => {
    const el = parallaxRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const maxShift = isMobile ? 26 : 56;
    let frame = 0;
    let queued = false;

    const update = () => {
      queued = false;
      const rect = el.getBoundingClientRect();
      const viewport = window.innerHeight || 1;
      // -1 (below the fold) → 0 (centred) → 1 (scrolled past)
      const progress = (rect.top + rect.height / 2 - viewport / 2) / viewport;
      const shift = Math.max(-1, Math.min(1, -progress)) * maxShift;
      el.style.transform = `translate3d(0, ${shift.toFixed(2)}px, 0)`;
    };

    const onScroll = () => {
      if (queued) return;
      queued = true;
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    };
  }, [isMobile]);

  // Dropping to a mobile viewport hands control back to the play overlay.
  useEffect(() => {
    const video = videoRef.current;
    if (!video || !isMobile || hasStarted) return;
    video.pause();
    video.currentTime = 0;
  }, [isMobile, hasStarted]);

  // Desktop: pause the loop whenever the panel leaves the viewport.
  useEffect(() => {
    const video = videoRef.current;
    const panel = panelRef.current;
    if (!video || !panel || isMobile) return;
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
    io.observe(panel);
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
    <div className="film-stage">
      <div className="film-ambient" aria-hidden />

      <span className="film-side hidden lg:block" aria-hidden>
        WIYO — THE FILM · MMXXVI
      </span>

      <div className="film-parallax" ref={parallaxRef}>
        <div className="film-reflect">
          <div className="film-tilt" ref={panelRef}>
          <span className="film-corner film-corner--tl" aria-hidden />
          <span className="film-corner film-corner--tr" aria-hidden />
          <span className="film-corner film-corner--bl" aria-hidden />
          <span className="film-corner film-corner--br" aria-hidden />

          <div className="film-border">
            <div className="film-panel">
              <video
                ref={videoRef}
                className="film-video"
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
              <div className="film-overlay" aria-hidden />

              {showPlayOverlay && (
                <button
                  type="button"
                  className="film-play"
                  onClick={handlePlay}
                  aria-label="Play the WIYO film with sound"
                >
                  <span className="film-play__ring" aria-hidden />
                  <span className="film-play__btn" aria-hidden>
                    <Play size={26} strokeWidth={2} fill="currentColor" />
                  </span>
                  <span className="film-play__label">
                    Watch the film
                    <span className="film-play__meta">
                      {DURATION_LABEL} · with sound
                    </span>
                  </span>
                </button>
              )}

              {isBuffering && hasStarted && (
                <span className="film-spinner" aria-label="Loading" />
              )}

              {!showPlayOverlay && (
                <>
                  <button
                    type="button"
                    className="film-mute"
                    onClick={toggleMute}
                    aria-label={isMuted ? "Unmute the film" : "Mute the film"}
                  >
                    {isMuted ? (
                      <VolumeX size={15} strokeWidth={1.8} />
                    ) : (
                      <Volume2 size={15} strokeWidth={1.8} />
                    )}
                  </button>
                  <span className="film-chip">
                    <span className="film-chip__dot" aria-hidden />
                    The WIYO film
                  </span>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
