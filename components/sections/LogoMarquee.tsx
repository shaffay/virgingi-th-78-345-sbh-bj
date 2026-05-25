"use client";

import Image from "next/image";
import { Reveal } from "../motion/Reveal";
import Divider from "../ui/Divider";
import { useTheme } from "../ThemeProvider";

interface LogoEntry {
  name: string;
  kind: "svg" | "wordmark";
  src?: string;
  /** Whether the SVG is a monochrome black icon that needs inverting in dark themes. */
  invertOnDark?: boolean;
  colorLight?: string;
  colorDark?: string;
}

const logos: LogoEntry[] = [
  { name: "Bayut", kind: "wordmark", colorLight: "#E51E32", colorDark: "#FF6478" },
  { name: "Property Finder", kind: "wordmark", colorLight: "#EF6A00", colorDark: "#FFB060" },
  { name: "Dubizzle", kind: "wordmark", colorLight: "#E51E32", colorDark: "#FF6478" },
  { name: "Meta", kind: "svg", src: "/logos/meta.svg" },
  { name: "Google", kind: "svg", src: "/logos/google.svg" },
  { name: "WhatsApp Business", kind: "svg", src: "/logos/whatsapp.svg" },
  { name: "JamesEdition", kind: "wordmark", colorLight: "#1A1A1A", colorDark: "#F4F4F5" },
  { name: "OpenAI GPT-4o", kind: "svg", src: "/logos/openai.svg", invertOnDark: true },
];

function LogoItem({ logo, isDark }: { logo: LogoEntry; isDark: boolean }) {
  if (logo.kind === "svg" && logo.src) {
    return (
      <div className="flex items-center gap-3 whitespace-nowrap opacity-80 hover:opacity-100 transition-opacity duration-300">
        <Image
          src={logo.src}
          alt={logo.name}
          width={26}
          height={26}
          className="h-7 w-7 object-contain"
          style={
            logo.invertOnDark && isDark
              ? { filter: "invert(1) brightness(1.1)" }
              : undefined
          }
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
        style={{ color: isDark ? logo.colorDark : logo.colorLight }}
      >
        {logo.name}
      </span>
    </div>
  );
}

export default function LogoMarquee() {
  const { theme } = useTheme();
  const isDark = theme !== "light";
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
            <LogoItem key={`${logo.name}-${i}`} logo={logo} isDark={isDark} />
          ))}
        </div>
      </div>
    </section>
  );
}
