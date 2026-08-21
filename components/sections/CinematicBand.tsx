"use client";

import Image from "next/image";
import { Reveal } from "../motion/Reveal";
import Overline from "../ui/Overline";

/**
 * Full-bleed cinematic band — a visual breather between the long content
 * sections. Dubai at blue hour under brand-graded overlays, with the
 * platform's headline facts set over it.
 *
 * The figures repeat claims already made elsewhere on the page (lead sources,
 * response workflows and AI assistance) rather than introducing new ones.
 */
const FACTS = [
  { value: "11", label: "native lead sources" },
  { value: "15 min", label: "SLA enforcement" },
  { value: "AI", label: "assistance built in" },
  { value: "UAE", label: "market focus" },
];

export default function CinematicBand() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ minHeight: "clamp(520px, 62vw, 760px)" }}
      aria-labelledby="cinematic-band-heading"
    >
      {/* Backdrop */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/dubai-marina.jpg"
          alt="Dubai Marina skyline at blue hour"
          fill
          sizes="100vw"
          quality={80}
          className="object-cover"
          style={{
            objectPosition: "center 45%",
            filter: "brightness(1.45) saturate(1.15) contrast(1.05)",
          }}
        />
        {/* Blend the photo's top and bottom edges into the page background */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, var(--bg-base) 0%, transparent 24%, transparent 70%, var(--bg-base) 100%)",
          }}
        />
        {/* Readability wash — dense behind the copy on the left, clear on the
            right so the skyline stays visible */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(100deg, rgba(8,12,33,0.95) 0%, rgba(8,12,33,0.84) 34%, rgba(8,12,33,0.46) 62%, rgba(8,12,33,0.12) 82%, transparent 95%)",
          }}
        />
        {/* Violet brand tint */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(120deg, rgba(var(--spotlight),0.10), transparent 55%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="container-x relative z-10 py-24 md:py-32 flex flex-col justify-center min-h-[inherit]">
        <div className="max-w-[760px]">
          <Reveal variant="fade">
            <Overline>Built for the UAE</Overline>
          </Reveal>
          <Reveal>
            <h2 id="cinematic-band-heading" className="h2 mt-6">
              The market never sleeps.{" "}
              <span className="text-gradient">Neither does WIYO.</span>
            </h2>
          </Reveal>
          <Reveal variant="fade" delay={0.1}>
            <p className="body-lg mt-6 max-w-[560px]">
              From Marina to Downtown to the off-plan launches that sell out in a
              weekend — every lead, every listing and every deal lives in one
              system your whole team can see.
            </p>
          </Reveal>
        </div>

        <Reveal variant="fade" delay={0.2}>
          <dl className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-8 max-w-[900px]">
            {FACTS.map((f) => (
              <div key={f.label}>
                <dt className="sr-only">{f.label}</dt>
                <dd>
                  <span className="block text-[30px] md:text-[38px] font-semibold tracking-tight leading-none text-text-primary">
                    {f.value}
                  </span>
                  <span className="caption mono mt-2 block uppercase tracking-[0.16em]">
                    {f.label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
