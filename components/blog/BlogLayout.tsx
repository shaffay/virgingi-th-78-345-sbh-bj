"use client";

import { ReactNode, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, Clock, ChevronRight, ArrowUpRight } from "lucide-react";
import Navbar from "../sections/Navbar";
import Footer from "../sections/Footer";
import { Reveal } from "../motion/Reveal";
import WhatsAppButton from "../cro/WhatsAppButton";
import MobileCTABar from "../cro/MobileCTABar";
import { blogPosts, type BlogPost } from "@/lib/blog";

interface TocItem {
  id: string;
  text: string;
}

interface Props {
  post: BlogPost;
  toc?: TocItem[];
  children: ReactNode;
}

export default function BlogLayout({ post, toc, children }: Props) {
  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);
  const [progress, setProgress] = useState(0);
  const [activeId, setActiveId] = useState<string | null>(toc?.[0]?.id ?? null);

  useEffect(() => {
    function onScroll() {
      const article = document.getElementById("article-body");
      if (!article) return;
      const top = article.getBoundingClientRect().top;
      const height = article.scrollHeight;
      const winH = window.innerHeight;
      const total = height - winH;
      const passed = Math.max(0, -top);
      const ratio = total > 0 ? Math.min(1, passed / total) : 0;
      setProgress(ratio);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!toc || toc.length === 0) return;
    const observers: IntersectionObserver[] = [];
    toc.forEach((item) => {
      const el = document.getElementById(item.id);
      if (!el) return;
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) setActiveId(item.id);
          });
        },
        { rootMargin: "-30% 0px -55% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, [toc]);

  return (
    <main className="relative">
      <Navbar />

      {/* Reading progress bar */}
      <div
        aria-hidden
        className="fixed top-0 left-0 right-0 z-40 h-[3px] origin-left"
        style={{
          background: "var(--cta-gradient)",
          transform: `scaleX(${progress})`,
          transformOrigin: "left",
          transition: "transform 0.1s ease-out",
        }}
      />

      {/* HERO */}
      <header className="relative pt-28 pb-12 overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(closest-side at 70% 20%, ${post.accent[0]}28, transparent 60%), radial-gradient(closest-side at 20% 80%, ${post.accent[1]}22, transparent 60%)`,
          }}
        />
        <div className="container-x relative max-w-[1100px]">
          <nav className="caption mono mb-8 flex flex-wrap items-center gap-x-2 gap-y-1" aria-label="Breadcrumb">
            <Link href="/" className="hover:underline" style={{ color: "var(--text-secondary)" }}>
              Home
            </Link>
            <ChevronRight size={11} strokeWidth={1.8} style={{ color: "var(--text-muted)" }} />
            <Link href="/blog" className="hover:underline" style={{ color: "var(--text-secondary)" }}>
              Blog
            </Link>
            <ChevronRight size={11} strokeWidth={1.8} style={{ color: "var(--text-muted)" }} />
            <span style={{ color: "var(--text-accent)" }}>{post.category}</span>
          </nav>

          <span
            className="caption uppercase tracking-[0.18em] font-semibold mono px-3 py-1.5 rounded-pill"
            style={{
              background: "rgba(var(--spotlight),0.12)",
              color: "var(--text-accent)",
              border: "1px solid rgba(var(--spotlight),0.25)",
            }}
          >
            {post.category}
          </span>

          <h1 className="h1 mt-6 leading-[1.05] max-w-[920px]">{post.title}</h1>

          <p className="body-lg mt-7 max-w-[720px]">{post.description}</p>

          <div className="mt-8 flex flex-wrap items-center gap-4 caption mono">
            <span className="flex items-center gap-2">
              <span
                className="w-7 h-7 rounded-full flex items-center justify-center"
                style={{
                  background: "var(--cta-gradient)",
                  color: "white",
                  fontWeight: 700,
                  fontSize: 11,
                }}
              >
                SB
              </span>
              <span style={{ color: "var(--text-secondary)" }}>
                Shaffay Bajwa, Founder
              </span>
            </span>
            <span style={{ color: "var(--text-muted)" }}>·</span>
            <span className="flex items-center gap-1.5">
              <Calendar size={13} strokeWidth={1.6} />
              {new Date(post.date).toLocaleDateString("en-AE", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
            <span style={{ color: "var(--text-muted)" }}>·</span>
            <span className="flex items-center gap-1.5">
              <Clock size={13} strokeWidth={1.6} />
              {post.readingMins} min read
            </span>
          </div>
        </div>
      </header>

      {/* COVER IMAGE */}
      <Reveal variant="fade">
        <div className="container-x max-w-[1180px]">
          <div
            className="relative overflow-hidden rounded-3xl border aspect-[21/9] sm:aspect-[16/7]"
            style={{
              borderColor: "var(--border-card)",
              background: `linear-gradient(135deg, ${post.accent[0]}, ${post.accent[1]})`,
            }}
          >
            <Image
              src={post.coverImage}
              alt={post.coverAlt}
              fill
              priority
              sizes="(min-width: 1024px) 1180px, 100vw"
              className="object-cover"
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(to bottom, transparent 60%, rgba(0,0,0,0.35))",
              }}
            />
          </div>
        </div>
      </Reveal>

      {/* BODY + TOC */}
      <section id="article-body" className="py-16 lg:py-20">
        <div className="container-x max-w-[1180px]">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14">
            <article className="lg:col-span-8">
              <div className="prose-wiyo">{children}</div>

              {/* AUTHOR BIO */}
              <div
                className="mt-16 rounded-2xl p-7 md:p-8 flex flex-col sm:flex-row gap-5"
                style={{
                  background: "var(--bg-elevated)",
                  border: "1px solid var(--border-card)",
                }}
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold"
                  style={{
                    background: "var(--cta-gradient)",
                    fontSize: 18,
                    boxShadow: "0 0 18px rgba(var(--spotlight),0.45)",
                  }}
                >
                  SB
                </div>
                <div>
                  <p className="caption uppercase tracking-[0.16em] mono font-semibold" style={{ color: "var(--text-accent)" }}>
                    Written by
                  </p>
                  <h3 className="mt-1.5 text-[18px] font-semibold tracking-tight text-text-primary">
                    Shaffay Bajwa
                  </h3>
                  <p className="caption mt-1">
                    Founder & CTO at WIYO · Software engineer, 5 years building
                    in the UAE real estate market.
                  </p>
                </div>
              </div>

              {/* INLINE CTA */}
              <Reveal variant="fade">
                <div
                  className="mt-10 rounded-2xl p-8 md:p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(var(--spotlight),0.14), rgba(var(--spotlight),0.04))",
                    border: "1px solid var(--border-card)",
                  }}
                >
                  <div>
                    <h3 className="text-[22px] font-semibold tracking-tight">
                      Want to see WIYO live?
                    </h3>
                    <p className="caption mt-2 max-w-[400px]">
                      30-minute personalised demo with live data from your
                      existing portals.
                    </p>
                  </div>
                  <Link href="/#cta" className="btn-primary whitespace-nowrap">
                    Book a Live Demo
                    <ArrowRight size={15} strokeWidth={1.8} />
                  </Link>
                </div>
              </Reveal>
            </article>

            {/* TOC */}
            <aside className="lg:col-span-4">
              <div className="lg:sticky lg:top-28 flex flex-col gap-8">
                {toc && toc.length > 0 && (
                  <div>
                    <p
                      className="caption uppercase tracking-[0.18em] font-semibold mono mb-4"
                      style={{ color: "var(--text-muted)" }}
                    >
                      On this page
                    </p>
                    <ul className="flex flex-col gap-2.5">
                      {toc.map((item) => {
                        const isActive = activeId === item.id;
                        return (
                          <li key={item.id}>
                            <a
                              href={`#${item.id}`}
                              className="block text-[13.5px] leading-snug transition-all"
                              style={{
                                color: isActive
                                  ? "var(--text-primary)"
                                  : "var(--text-secondary)",
                                borderLeft: isActive
                                  ? "2px solid var(--accent-primary)"
                                  : "2px solid transparent",
                                paddingLeft: 12,
                                fontWeight: isActive ? 600 : 400,
                              }}
                            >
                              {item.text}
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}

                <div
                  className="rounded-xl p-5"
                  style={{
                    background: "var(--bg-elevated)",
                    border: "1px solid var(--border-card)",
                  }}
                >
                  <p className="caption uppercase tracking-[0.16em] mono font-semibold mb-3" style={{ color: "var(--text-accent)" }}>
                    Quick links
                  </p>
                  <ul className="flex flex-col gap-2 text-[13.5px]">
                    {[
                      { href: "/#features", label: "All Features" },
                      { href: "/off-plan-crm-uae", label: "Off-Plan CRM" },
                      { href: "/bayut-property-finder-crm", label: "Bayut + PF" },
                      { href: "/#pricing", label: "Pricing" },
                    ].map((l) => (
                      <li key={l.href}>
                        <Link
                          href={l.href}
                          className="inline-flex items-center gap-1 hover:text-text-primary transition-colors"
                          style={{ color: "var(--text-secondary)" }}
                        >
                          {l.label}
                          <ArrowUpRight size={12} strokeWidth={1.8} />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* RELATED */}
      <section className="pb-24">
        <div className="container-x max-w-[1180px]">
          <div className="flex items-baseline justify-between mb-8">
            <h3 className="text-[20px] font-semibold tracking-tight text-text-primary">
              Continue reading
            </h3>
            <Link
              href="/blog"
              className="caption mono hover:underline"
              style={{ color: "var(--text-accent)" }}
            >
              All articles →
            </Link>
          </div>
          <div className="grid sm:grid-cols-3 gap-5">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/blog/${r.slug}`}
                className="card group p-0 overflow-hidden hover:scale-[1.01] transition-transform"
              >
                <div
                  className="relative aspect-[16/10] overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, ${r.accent[0]}, ${r.accent[1]})`,
                  }}
                >
                  <Image
                    src={r.coverImage}
                    alt={r.coverAlt}
                    fill
                    sizes="(min-width: 640px) 33vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <span
                    className="caption uppercase tracking-[0.14em] font-semibold mono"
                    style={{ color: "var(--text-accent)" }}
                  >
                    {r.category}
                  </span>
                  <p className="mt-2.5 text-[15.5px] font-semibold leading-tight text-text-primary group-hover:opacity-90">
                    {r.title}
                  </p>
                  <p className="caption mt-2 mono">{r.readingMins} min read</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
      <MobileCTABar />
    </main>
  );
}
