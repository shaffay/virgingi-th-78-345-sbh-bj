"use client";

import { ReactNode } from "react";
import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import Navbar from "../sections/Navbar";
import Footer from "../sections/Footer";
import Spotlight from "../motion/Spotlight";
import { Reveal } from "../motion/Reveal";
import WhatsAppButton from "../cro/WhatsAppButton";
import MobileCTABar from "../cro/MobileCTABar";
import { blogPosts, type BlogPost } from "@/lib/blog";

interface Props {
  post: BlogPost;
  children: ReactNode;
}

export default function BlogLayout({ post, children }: Props) {
  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <main className="relative">
      <Navbar />

      <Spotlight radius={600}>
        <article className="pt-32 pb-20">
          <div className="container-x max-w-[820px]">
            <nav className="caption mono mb-8" aria-label="Breadcrumb">
              <Link
                href="/"
                className="hover:underline"
                style={{ color: "var(--text-secondary)" }}
              >
                Home
              </Link>
              <span style={{ color: "var(--text-muted)" }}> / </span>
              <Link
                href="/blog"
                className="hover:underline"
                style={{ color: "var(--text-secondary)" }}
              >
                Blog
              </Link>
              <span style={{ color: "var(--text-muted)" }}> / </span>
              <span style={{ color: "var(--text-accent)" }}>{post.category}</span>
            </nav>

            <Reveal variant="fade">
              <span
                className="caption uppercase tracking-[0.18em] font-semibold mono"
                style={{ color: "var(--text-accent)" }}
              >
                {post.category}
              </span>
            </Reveal>

            <Reveal>
              <h1 className="h1 mt-4 leading-[1.05]">{post.title}</h1>
            </Reveal>

            <Reveal variant="fade" delay={0.1}>
              <p className="body-lg mt-6 max-w-[680px]">{post.description}</p>
            </Reveal>

            <Reveal variant="fade" delay={0.15}>
              <div className="mt-8 flex flex-wrap items-center gap-4 caption mono">
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
                <span style={{ color: "var(--text-muted)" }}>·</span>
                <span>By Shaffay Bajwa, Founder</span>
              </div>
            </Reveal>

            <div
              className="my-10 h-px"
              style={{ background: "var(--border-subtle)" }}
            />

            <div className="prose-wiyo body-lg leading-[1.75] text-text-secondary">
              {children}
            </div>

            <div
              className="my-14 h-px"
              style={{ background: "var(--border-subtle)" }}
            />

            <Reveal variant="fade">
              <div
                className="rounded-2xl p-8 md:p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(var(--spotlight),0.12), rgba(var(--spotlight),0.04))",
                  border: "1px solid var(--border-card)",
                }}
              >
                <div>
                  <h3 className="text-[22px] font-semibold tracking-tight">
                    Want to see WIYO live?
                  </h3>
                  <p className="caption mt-2">
                    30-min personalised demo. Live data from your existing
                    portals.
                  </p>
                </div>
                <Link href="/#cta" className="btn-primary whitespace-nowrap">
                  Book a Live Demo
                  <ArrowRight size={15} strokeWidth={1.8} />
                </Link>
              </div>
            </Reveal>

            <section className="mt-16">
              <h3 className="text-[18px] font-semibold tracking-tight mb-6 caption uppercase mono">
                Related Articles
              </h3>
              <div className="grid sm:grid-cols-3 gap-4">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/blog/${r.slug}`}
                    className="card hover:scale-[1.02] transition-transform p-5"
                  >
                    <span
                      className="caption uppercase tracking-[0.14em] font-semibold mono"
                      style={{ color: "var(--text-accent)" }}
                    >
                      {r.category}
                    </span>
                    <p className="mt-2 text-[15px] font-medium leading-tight text-text-primary">
                      {r.title}
                    </p>
                  </Link>
                ))}
              </div>
            </section>
          </div>
        </article>
      </Spotlight>

      <Footer />
      <WhatsAppButton />
      <MobileCTABar />
    </main>
  );
}

