import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, Clock, BookOpen } from "lucide-react";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import Overline from "@/components/ui/Overline";
import Spotlight from "@/components/motion/Spotlight";
import WhatsAppButton from "@/components/cro/WhatsAppButton";
import MobileCTABar from "@/components/cro/MobileCTABar";
import { blogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "WIYO Blog | UAE Real Estate CRM, Bayut, Off-Plan & AI Insights",
  description:
    "Practical, opinionated writing for Dubai and UAE real estate agencies. CRM buying guides, Bayut + Property Finder integration playbooks, off-plan workflows, and AI in property sales.",
  alternates: { canonical: "https://www.wiyo.ae/blog" },
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-AE", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default function BlogIndex() {
  const featured = blogPosts.find((p) => p.featured) ?? blogPosts[0];
  const rest = blogPosts.filter((p) => p.slug !== featured.slug);
  const categories = Array.from(new Set(blogPosts.map((p) => p.category)));

  return (
    <main className="relative">
      <Navbar />

      <Spotlight radius={500}>
        <section className="pt-32 pb-12">
          <div className="container-x max-w-[1180px]">
            <Overline>
              <BookOpen size={11} strokeWidth={1.8} />
              The WIYO Blog
            </Overline>
            <h1 className="h1 mt-6 leading-[1.05] max-w-[820px]">
              UAE Real Estate,{" "}
              <span className="text-gradient">Unpacked.</span>
            </h1>
            <p className="body-lg mt-6 max-w-[680px]">
              Practical, opinionated writing for Dubai brokerages — CRM
              buying guides, integration playbooks, off-plan workflows, and
              where AI is going next in UAE property.
            </p>

            <div className="mt-10 flex flex-wrap gap-2">
              <span
                className="caption uppercase tracking-[0.16em] font-semibold mono px-3.5 py-1.5 rounded-pill"
                style={{
                  background: "var(--cta-gradient)",
                  color: "white",
                  boxShadow: "0 0 18px rgba(var(--spotlight),0.45)",
                }}
              >
                All
              </span>
              {categories.map((c) => (
                <span
                  key={c}
                  className="caption uppercase tracking-[0.16em] font-semibold mono px-3.5 py-1.5 rounded-pill"
                  style={{
                    background: "var(--bg-subtle)",
                    color: "var(--text-secondary)",
                    border: "1px solid var(--border-subtle)",
                  }}
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        </section>
      </Spotlight>

      {/* FEATURED POST */}
      <section className="pb-16">
        <div className="container-x max-w-[1180px]">
          <p
            className="caption uppercase tracking-[0.2em] font-semibold mono mb-5"
            style={{ color: "var(--text-accent)" }}
          >
            ✦ Featured Article
          </p>
          <Link
            href={`/blog/${featured.slug}`}
            className="card group grid lg:grid-cols-12 gap-0 p-0 overflow-hidden hover:scale-[1.005] transition-transform"
          >
            <div
              className="lg:col-span-7 relative aspect-[16/10] lg:aspect-auto lg:min-h-[440px] overflow-hidden"
              style={{
                background: `linear-gradient(135deg, ${featured.accent[0]}, ${featured.accent[1]})`,
              }}
            >
              <Image
                src={featured.coverImage}
                alt={featured.coverAlt}
                fill
                priority
                sizes="(min-width: 1024px) 700px, 100vw"
                className="object-cover"
              />
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(to bottom right, transparent 50%, rgba(0,0,0,0.3))",
                }}
              />
            </div>
            <div className="lg:col-span-5 p-7 md:p-10 flex flex-col justify-center">
              <div className="flex flex-wrap items-center gap-2 caption mono">
                <span
                  className="uppercase tracking-[0.16em] font-semibold px-2.5 py-1 rounded-pill"
                  style={{
                    background: "rgba(var(--spotlight),0.12)",
                    color: "var(--text-accent)",
                    border: "1px solid rgba(var(--spotlight),0.25)",
                  }}
                >
                  {featured.category}
                </span>
                <span style={{ color: "var(--text-muted)" }}>·</span>
                <span className="flex items-center gap-1">
                  <Calendar size={11} strokeWidth={1.6} />
                  {formatDate(featured.date)}
                </span>
                <span style={{ color: "var(--text-muted)" }}>·</span>
                <span className="flex items-center gap-1">
                  <Clock size={11} strokeWidth={1.6} />
                  {featured.readingMins} min
                </span>
              </div>
              <h2 className="text-[26px] md:text-[32px] font-semibold tracking-tight leading-[1.15] text-text-primary mt-5 group-hover:opacity-90">
                {featured.title}
              </h2>
              <p className="body-md mt-4">{featured.description}</p>
              <span
                className="inline-flex items-center gap-1.5 text-[13.5px] font-semibold mono mt-6"
                style={{ color: "var(--text-accent)" }}
              >
                Read article
                <ArrowRight size={13} strokeWidth={1.8} />
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* ARTICLE GRID */}
      <section className="pb-24">
        <div className="container-x max-w-[1180px]">
          <p
            className="caption uppercase tracking-[0.2em] font-semibold mono mb-5"
            style={{ color: "var(--text-muted)" }}
          >
            Latest articles
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {rest.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="card group p-0 overflow-hidden hover:scale-[1.015] transition-transform flex flex-col"
              >
                <div
                  className="relative aspect-[16/10] overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, ${post.accent[0]}, ${post.accent[1]})`,
                  }}
                >
                  <Image
                    src={post.coverImage}
                    alt={post.coverAlt}
                    fill
                    sizes="(min-width: 1024px) 380px, (min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span
                      className="caption uppercase tracking-[0.14em] font-semibold mono px-2.5 py-1 rounded-pill backdrop-blur-md text-white"
                      style={{
                        background: "rgba(0,0,0,0.45)",
                        border: "1px solid rgba(255,255,255,0.18)",
                      }}
                    >
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2 caption mono">
                    <span className="flex items-center gap-1">
                      <Calendar size={11} strokeWidth={1.6} />
                      {formatDate(post.date)}
                    </span>
                    <span style={{ color: "var(--text-muted)" }}>·</span>
                    <span className="flex items-center gap-1">
                      <Clock size={11} strokeWidth={1.6} />
                      {post.readingMins} min
                    </span>
                  </div>
                  <h3 className="text-[18px] md:text-[19px] font-semibold tracking-tight leading-tight text-text-primary mt-3 group-hover:opacity-90">
                    {post.title}
                  </h3>
                  <p className="caption mt-3 flex-1">{post.description}</p>
                  <span
                    className="inline-flex items-center gap-1.5 text-[12.5px] font-semibold mono mt-5"
                    style={{ color: "var(--text-accent)" }}
                  >
                    Read article
                    <ArrowRight size={12} strokeWidth={1.8} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER CTA */}
      <section className="pb-24">
        <div className="container-x max-w-[1180px]">
          <div
            className="rounded-3xl p-10 md:p-14 text-center"
            style={{
              background:
                "linear-gradient(135deg, rgba(var(--spotlight),0.14), rgba(var(--spotlight),0.04))",
              border: "1px solid var(--border-card)",
            }}
          >
            <h2 className="text-[26px] md:text-[32px] font-semibold tracking-tight">
              Want WIYO insights in your inbox?
            </h2>
            <p className="body-md mt-3 max-w-[520px] mx-auto">
              One short email a month — UAE market shifts, product updates,
              and the integration playbooks we publish here.
            </p>
            <Link
              href="/#cta"
              className="btn-primary btn-primary-lg mt-8 inline-flex"
            >
              Book a Live Demo
              <ArrowRight size={17} strokeWidth={1.8} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
      <MobileCTABar />
    </main>
  );
}
