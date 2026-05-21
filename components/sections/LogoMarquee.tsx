"use client";

import { Reveal } from "../motion/Reveal";
import Divider from "../ui/Divider";

const logos = [
  { name: "Bayut", Icon: BayutIcon },
  { name: "Property Finder", Icon: PropertyFinderIcon },
  { name: "Dubizzle", Icon: DubizzleIcon },
  { name: "Meta", Icon: MetaIcon },
  { name: "Google", Icon: GoogleIcon },
  { name: "WhatsApp Business", Icon: WhatsAppIcon },
  { name: "JamesEdition", Icon: JamesEditionIcon },
  { name: "GPT-4o", Icon: OpenAIIcon },
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
        <div className="container-x text-center mb-10">
          <p className="text-[11.5px] uppercase tracking-[0.2em] text-text-muted font-medium mono">
            Connects to every platform UAE agents rely on
          </p>
          <p className="caption mt-3">
            11 native lead sources · Zero manual imports · All flowing into one
            pipeline
          </p>
        </div>
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

function BayutIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
      <path d="M3 11l9-7 9 7v9a2 2 0 0 1-2 2h-4v-7H10v7H5a2 2 0 0 1-2-2v-9z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
    </svg>
  );
}
function PropertyFinderIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
      <circle cx="11" cy="11" r="6" stroke="currentColor" strokeWidth="1.5" />
      <path d="M15.5 15.5L21 21" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M8 11h6M11 8v6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}
function DubizzleIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="6" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M7 10h10M7 14h6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
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
function GoogleIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
      <path d="M21.6 12.23c0-.78-.07-1.53-.2-2.25H12v4.26h5.4a4.6 4.6 0 0 1-2 3.03v2.5h3.23c1.9-1.74 2.97-4.3 2.97-7.54z" stroke="currentColor" strokeWidth="1.3" />
      <path d="M12 22c2.7 0 4.96-.9 6.62-2.43l-3.23-2.5c-.9.6-2.05.96-3.39.96-2.6 0-4.8-1.76-5.6-4.12H3.07v2.58A10 10 0 0 0 12 22z" stroke="currentColor" strokeWidth="1.3" />
      <path d="M6.4 13.91A6 6 0 0 1 6.08 12c0-.66.12-1.3.32-1.91V7.5H3.07A10 10 0 0 0 2 12c0 1.61.39 3.14 1.07 4.5L6.4 13.91z" stroke="currentColor" strokeWidth="1.3" />
      <path d="M12 5.97c1.47 0 2.79.5 3.83 1.5l2.87-2.87C16.96 2.99 14.7 2 12 2 8.13 2 4.8 4.22 3.07 7.5L6.4 10.09c.8-2.36 3-4.12 5.6-4.12z" stroke="currentColor" strokeWidth="1.3" />
    </svg>
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
function JamesEditionIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
      <path d="M3 8l9-5 9 5v8l-9 5-9-5V8z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M8 11l4 2 4-2M12 13v6" stroke="currentColor" strokeWidth="1.4" />
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
