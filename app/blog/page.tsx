import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";
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

export default function BlogIndex() {
  return (
    <main className="relative">
      <Navbar />
      <Spotlight radius={500}>
        <section className="pt-32 pb-16">
          <div className="container-x max-w-[920px]">
            <Overline>Blog</Overline>
            <h1 className="h1 mt-6">
              UAE Real Estate, <span className="text-gradient">Unpacked.</span>
            </h1>
            <p className="body-lg mt-6 max-w-[680px]">
              Practical writing for Dubai brokerages — CRM buying guides,
              integration playbooks, off-plan workflows, and where AI is
              going next in UAE property.
            </p>
          </div>
        </section>
      </Spotlight>

      <section className="pb-24">
        <div className="container-x max-w-[920px]">
          <div className="grid gap-5">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="card p-7 md:p-9 group block"
              >
                <div className="flex flex-col gap-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <span
                      className="caption uppercase tracking-[0.16em] font-semibold mono"
                      style={{ color: "var(--text-accent)" }}
                    >
                      {post.category}
                    </span>
                    <span style={{ color: "var(--text-muted)" }}>·</span>
                    <span className="caption mono flex items-center gap-1.5">
                      <Calendar size={12} strokeWidth={1.6} />
                      {new Date(post.date).toLocaleDateString("en-AE", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                    <span style={{ color: "var(--text-muted)" }}>·</span>
                    <span className="caption mono flex items-center gap-1.5">
                      <Clock size={12} strokeWidth={1.6} />
                      {post.readingMins} min read
                    </span>
                  </div>
                  <h2 className="text-[22px] md:text-[26px] font-semibold tracking-tight leading-tight text-text-primary group-hover:text-gradient transition-colors">
                    {post.title}
                  </h2>
                  <p className="body-md">{post.description}</p>
                  <span
                    className="inline-flex items-center gap-1.5 text-[13.5px] font-semibold mono mt-1"
                    style={{ color: "var(--text-accent)" }}
                  >
                    Read article
                    <ArrowRight size={13} strokeWidth={1.8} />
                  </span>
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
