"use client";

import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";
import Navbar from "../sections/Navbar";
import Footer from "../sections/Footer";
import Overline from "../ui/Overline";
import Spotlight from "../motion/Spotlight";
import Particles from "../motion/Particles";
import { Reveal, StaggerGroup, slideInVariant } from "../motion/Reveal";
import { motion } from "framer-motion";
import WhatsAppButton from "../cro/WhatsAppButton";
import MobileCTABar from "../cro/MobileCTABar";

import type { Breadcrumb } from "@/lib/seo";
import type { BlogPost } from "@/lib/blog";

export interface Section {
  heading: string;
  body: ReactNode;
  bullets?: string[];
}

export interface SeoPageLayoutProps {
  eyebrow: string;
  h1: ReactNode;
  intro: ReactNode;
  sections: Section[];
  cta: { label: string; href: string };
  breadcrumbs: Breadcrumb[];
  proofPoints?: string[];
  relatedPosts?: BlogPost[];
}

export default function SeoPageLayout({
  eyebrow,
  h1,
  intro,
  sections,
  cta,
  breadcrumbs,
  proofPoints,
  relatedPosts,
}: SeoPageLayoutProps) {
  return (
    <main className="relative">
      <Navbar />

      <Spotlight radius={700}>
        <section
          id="top"
          className="relative min-h-[80svh] flex items-center justify-center overflow-hidden pt-32 pb-20"
        >
          <div className="hero-glow" />
          <div className="grid-pattern" />
          <Particles count={20} />

          <div className="container-x relative z-10 text-center flex flex-col items-center">
            <nav className="caption mb-6 mono" aria-label="Breadcrumb">
              {breadcrumbs.map((b, i) => (
                <span key={b.name}>
                  {i > 0 && (
                    <span style={{ color: "var(--text-muted)" }}> / </span>
                  )}
                  {i === breadcrumbs.length - 1 ? (
                    <span style={{ color: "var(--text-accent)" }}>
                      {b.name}
                    </span>
                  ) : (
                    <Link
                      href={b.href}
                      className="hover:underline"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {b.name}
                    </Link>
                  )}
                </span>
              ))}
            </nav>

            <Overline>
              <span className="mono normal-case tracking-[0.12em]">
                {eyebrow}
              </span>
            </Overline>

            <h1 className="h1 max-w-[1000px] mt-8">{h1}</h1>

            <div className="body-lg max-w-[760px] mt-7 text-text-secondary">
              {intro}
            </div>

            <div className="mt-9 flex flex-col sm:flex-row items-center gap-4">
              <a href={cta.href} className="btn-primary btn-primary-lg">
                {cta.label}
                <ArrowRight size={17} strokeWidth={1.8} />
              </a>
              <Link href="/#features" className="btn-ghost">
                See All Features
              </Link>
            </div>

            {proofPoints && (
              <ul className="mt-10 grid sm:grid-cols-2 gap-x-8 gap-y-2.5 text-left max-w-[680px]">
                {proofPoints.map((p) => (
                  <li
                    key={p}
                    className="flex items-start gap-2.5 text-[14px] text-text-secondary"
                  >
                    <span
                      className="mt-0.5 w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{
                        background: "var(--cta-gradient)",
                        color: "white",
                      }}
                    >
                      <Check size={9} strokeWidth={3} />
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>
      </Spotlight>

      <section className="section-y relative">
        <div className="container-x max-w-[920px]">
          <StaggerGroup className="flex flex-col gap-14">
            {sections.map((s, i) => (
              <motion.article
                key={i}
                variants={slideInVariant}
                className="card p-8 md:p-12"
              >
                <h2 className="text-[26px] md:text-[32px] font-semibold tracking-tight leading-tight">
                  {s.heading}
                </h2>
                <div className="body-lg mt-5 text-text-secondary">{s.body}</div>
                {s.bullets && (
                  <ul className="mt-6 grid sm:grid-cols-2 gap-x-6 gap-y-3">
                    {s.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex items-start gap-3 text-[14.5px] text-text-secondary"
                      >
                        <span
                          className="mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                          style={{
                            background: "var(--cta-gradient)",
                            color: "white",
                            boxShadow:
                              "0 0 10px rgba(var(--spotlight),0.4)",
                          }}
                        >
                          <Check size={11} strokeWidth={3} />
                        </span>
                        {b}
                      </li>
                    ))}
                  </ul>
                )}
              </motion.article>
            ))}
          </StaggerGroup>

          <Reveal variant="fade">
            <div
              className="mt-16 rounded-2xl p-8 md:p-10 text-center"
              style={{
                background:
                  "linear-gradient(135deg, rgba(var(--spotlight),0.12), rgba(var(--spotlight),0.04))",
                border: "1px solid var(--border-card)",
              }}
            >
              <h2 className="text-[26px] md:text-[32px] font-semibold tracking-tight">
                Ready to see WIYO live?
              </h2>
              <p className="body-md mt-3 max-w-[520px] mx-auto">
                30-minute personalised demo. Live lead flow from your existing
                portals. Custom pricing for your agency size.
              </p>
              <a
                href={cta.href}
                className="btn-primary btn-primary-lg mt-7 inline-flex"
              >
                {cta.label}
                <ArrowRight size={17} strokeWidth={1.8} />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {relatedPosts && relatedPosts.length > 0 && (
        <section
          className="section-y relative"
          style={{ borderTop: "1px solid var(--border-subtle)" }}
        >
          <div className="container-x max-w-[920px]">
            <div className="flex items-baseline justify-between mb-8">
              <h2 className="text-[24px] md:text-[28px] font-semibold tracking-tight">
                Guides &amp; resources
              </h2>
              <Link
                href="/blog"
                className="caption mono hover:underline"
                style={{ color: "var(--text-accent)" }}
              >
                All articles →
              </Link>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {relatedPosts.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="card p-5 group hover:scale-[1.01] transition-transform"
                >
                  <span
                    className="caption uppercase tracking-[0.14em] font-semibold mono"
                    style={{ color: "var(--text-accent)" }}
                  >
                    {p.category}
                  </span>
                  <p className="mt-2.5 text-[15.5px] font-semibold leading-snug text-text-primary group-hover:opacity-90">
                    {p.title}
                  </p>
                  <p className="caption mt-2 mono">{p.readingMins} min read</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
      <WhatsAppButton />
      <MobileCTABar />
    </main>
  );
}

