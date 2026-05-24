"use client";

import Image from "next/image";
import { Reveal } from "../motion/Reveal";
import Divider from "../ui/Divider";

interface LogoEntry {
  name: string;
  kind: "svg" | "wordmark";
  src?: string;
  color?: string;
}

const logos: LogoEntry[] = [
  { name: "Bayut", kind: "wordmark", color: "#E51E32" },
  { name: "Property Finder", kind: "wordmark", color: "#EF6A00" },
  { name: "Dubizzle", kind: "wordmark", color: "#E51E32" },
  { name: "Meta", kind: "svg", src: "/logos/meta.svg" },
  { name: "Google", kind: "svg", src: "/logos/google.svg" },
  { name: "WhatsApp Business", kind: "svg", src: "/logos/whatsapp.svg" },
  { name: "JamesEdition", kind: "wordmark", color: "#1A1A1A" },
  { name: "OpenAI GPT-4o", kind: "svg", src: "/logos/openai.svg" },
];

function LogoItem({ logo }: { logo: LogoEntry }) {
  if (logo.kind === "svg" && logo.src) {
    return (
      <div className="flex items-center gap-3 whitespace-nowrap opacity-80 hover:opacity-100 transition-opacity duration-300">
        <Image
          src={logo.src}
          alt={logo.name}
          width={26}
          height={26}
          className="h-7 w-7 object-contain"
        />
        <span className="text-[17px] font-semibold tracking-tight text-text-secondary">
          {logo.name}
        </span>
      </div>
    );
  }

  return (
    <div className="flex items-center whitespace-nowrap opacity-80 hover:opacity-100 transition-opacity duration-300">
      <span
        className="text-[20px] font-bold tracking-tight"
        style={{ color: logo.color }}
      >
        {logo.name}
      </span>
    </div>
  );
}

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
        <div className="flex w-max gap-14 animate-marquee hover:[animation-play-state:paused] items-center">
          {items.map((logo, i) => (
            <LogoItem key={`${logo.name}-${i}`} logo={logo} />
          ))}
        </div>
      </div>
    </section>
  );
}
