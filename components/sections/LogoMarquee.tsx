"use client";

import { Reveal } from "../motion/Reveal";
import Divider from "../ui/Divider";

const logos = [
  { name: "WhatsApp", Icon: WhatsAppIcon },
  { name: "Instagram", Icon: InstagramIcon },
  { name: "Meta", Icon: MetaIcon },
  { name: "Facebook Ads", Icon: FacebookAdsIcon },
  { name: "OpenAI GPT-4o", Icon: OpenAIIcon },
];

export default function LogoMarquee() {
  const items = [...logos, ...logos];
  return (
    <section
      className="relative py-16"
      style={{ background: "var(--bg-elevated)" }}
    >
      <Divider className="absolute inset-x-0 top-0" />
      <Divider className="absolute inset-x-0 bottom-0" />

      <Reveal>
        <p className="text-center text-[11.5px] uppercase tracking-[0.2em] text-text-muted font-medium mb-10 mono">
          Seamlessly integrates with the tools you already use
        </p>
      </Reveal>

      <div
        className="relative w-full overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        }}
      >
        <div className="flex w-max gap-16 animate-marquee hover:[animation-play-state:paused]">
          {items.map((logo, i) => {
            const { Icon } = logo;
            return (
              <div
                key={i}
                className="flex items-center gap-3 text-text-secondary hover:text-text-primary transition-colors duration-300 whitespace-nowrap"
              >
                <Icon />
                <span className="text-[17px] font-semibold tracking-tight">
                  {logo.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 2a10 10 0 0 0-8.6 15.07L2 22l5.06-1.36A10 10 0 1 0 12 2zm5.42 14.16c-.23.65-1.34 1.23-1.85 1.27-.5.05-1.03.07-1.66-.1a15.18 15.18 0 0 1-1.5-.56 11.5 11.5 0 0 1-4.43-3.92c-.34-.45-.92-1.21-.92-2.3 0-1.1.58-1.64.78-1.87.2-.23.43-.29.58-.29h.41c.13 0 .31-.05.48.37l.7 1.7c.06.13.1.28.02.45-.09.18-.13.29-.27.44-.13.16-.28.35-.4.46-.13.13-.27.27-.12.53.16.27.73 1.2 1.57 1.95 1.07.95 1.97 1.25 2.25 1.39.28.13.44.11.6-.07.16-.18.7-.81.88-1.09.18-.27.36-.23.6-.14.25.1 1.6.75 1.88.88.28.13.46.2.53.31.07.12.07.7-.16 1.36z"
        fill="currentColor"
      />
    </svg>
  );
}
function InstagramIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  );
}
function MetaIcon() {
  return (
    <svg width="28" height="26" viewBox="0 0 30 28" fill="none">
      <path
        d="M3 18.5C3 12.5 6 8 10.5 8c2.6 0 4.4 1.5 6 3.6L19 14c1.2 1.6 2.3 3 3.8 3 1.4 0 2.2-1.1 2.2-2.7 0-1.7-1-3-2.4-3-1 0-1.8.6-2.7 1.7l-1.4 1.6c1.8-2.6 3.6-4.6 6.4-4.6 3.4 0 5.1 2.6 5.1 6.1 0 3.5-1.7 6.4-5 6.4-2.5 0-4.1-1.5-5.7-3.6L18 17c-1.2-1.6-2.2-3-3.7-3-1.2 0-2.3.9-3.4 2.7-1.5 2.6-2.4 4.7-4.7 4.7C4 21.4 3 19.9 3 18.5z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}
function FacebookAdsIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
      <path d="M12 2a10 10 0 0 1 1.6 19.87V14h2.4l.4-2.95H13.6V9.04c0-.85.27-1.43 1.52-1.43h1.62V5.06c-.28-.04-1.25-.12-2.38-.12-2.35 0-3.96 1.42-3.96 4.04v2.07H8v2.95h2.4v7.87A10 10 0 0 1 12 2z" fill="currentColor" />
    </svg>
  );
}
function OpenAIIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
      <path
        d="M21.55 10.05a5.4 5.4 0 0 0-.47-4.43 5.47 5.47 0 0 0-5.88-2.63A5.42 5.42 0 0 0 6 4.99a5.47 5.47 0 0 0-3.65 2.65 5.41 5.41 0 0 0 .67 6.31 5.4 5.4 0 0 0 .47 4.43 5.47 5.47 0 0 0 5.88 2.63 5.42 5.42 0 0 0 9.2-.83 5.47 5.47 0 0 0 3.65-2.65 5.41 5.41 0 0 0-.67-6.31zM13.06 20.4a4.04 4.04 0 0 1-2.6-.94l.13-.07 4.34-2.5a.71.71 0 0 0 .36-.62v-6.11l1.84 1.06a.07.07 0 0 1 .04.05v5.06a4.06 4.06 0 0 1-4.11 4.07z"
        stroke="currentColor"
        strokeWidth="1.2"
      />
    </svg>
  );
}
