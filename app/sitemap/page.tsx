import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import Overline from "@/components/ui/Overline";
import WhatsAppButton from "@/components/cro/WhatsAppButton";
import MobileCTABar from "@/components/cro/MobileCTABar";
import { blogPosts } from "@/lib/blog";
import { SOCIAL_PROFILES } from "@/lib/social";

export const metadata: Metadata = {
  title: "Sitemap | WIYO — UAE Real Estate CRM",
  description:
    "Complete index of every page on wiyo.ae — product, pricing, integrations, off-plan, blog, and legal.",
  alternates: { canonical: "https://www.wiyo.ae/sitemap" },
  robots: { index: true, follow: true },
};

interface SitemapSection {
  title: string;
  description: string;
  links: { label: string; href: string; description?: string }[];
}

const sections: SitemapSection[] = [
  {
    title: "Product",
    description: "The platform, modules, and pricing.",
    links: [
      { label: "Home", href: "/", description: "WIYO product overview." },
      { label: "Features", href: "/#features", description: "The seven WIYO modules." },
      { label: "Pricing", href: "/#pricing", description: "Solo, Starter, Pro, Enterprise." },
      { label: "Built for the UAE", href: "/#built-for-uae", description: "Why WIYO is purpose-built for the Emirates." },
      { label: "Book a Demo", href: "/#cta", description: "Schedule a 30-minute live walkthrough." },
    ],
  },
  {
    title: "Pillar Pages",
    description: "Deep dives on the major use-cases.",
    links: [
      { label: "Real Estate CRM Dubai", href: "/real-estate-crm-dubai", description: "The CRM built for Dubai brokerages." },
      { label: "UAE Real Estate CRM", href: "/uae-real-estate-crm", description: "Coverage across Dubai, Abu Dhabi, Sharjah, RAK." },
      { label: "Off-Plan CRM UAE", href: "/off-plan-crm-uae", description: "The flagship off-plan workflow." },
      { label: "Bayut + Property Finder CRM", href: "/bayut-property-finder-crm", description: "Native portal webhook integration." },
      { label: "WhatsApp CRM Dubai", href: "/whatsapp-crm-dubai", description: "WhatsApp Business API + AI replies." },
    ],
  },
  {
    title: "Blog",
    description: "Guides, playbooks, and rankings for UAE agents.",
    links: [
      { label: "Blog Index", href: "/blog", description: "All articles." },
      ...blogPosts.map((post) => ({
        label: post.title,
        href: `/blog/${post.slug}`,
        description: post.description,
      })),
    ],
  },
  {
    title: "Resources",
    description: "Crawlable resources for users and machines.",
    links: [
      { label: "XML Sitemap", href: "/sitemap.xml", description: "Machine-readable sitemap index." },
      { label: "robots.txt", href: "/robots.txt", description: "Crawler policy." },
      { label: "llms.txt", href: "/llms.txt", description: "Curated map for LLM crawlers." },
    ],
  },
  {
    title: "Company",
    description: "About WIYO and how to get in touch.",
    links: [
      { label: "Contact", href: "mailto:hello@wiyo.ae", description: "hello@wiyo.ae" },
      { label: "Privacy Policy", href: "/privacy", description: "How WIYO handles your data." },
      { label: "Terms of Service", href: "/terms", description: "Terms governing use of WIYO." },
      { label: "Data Deletion", href: "/data-deletion", description: "Request deletion of your data." },
    ],
  },
  {
    title: "Follow WIYO",
    description: "Official WIYO profiles across social platforms.",
    links: SOCIAL_PROFILES.map((profile) => ({
      label: profile.name,
      href: profile.href,
      description: profile.handle,
    })),
  },
];

export default function SitemapPage() {
  return (
    <main className="relative">
      <Navbar />

      <section className="pt-32 pb-12">
        <div className="container-x max-w-[1100px]">
          <nav className="caption mono mb-6 flex items-center gap-1.5" aria-label="Breadcrumb">
            <Link
              href="/"
              className="hover:underline"
              style={{ color: "var(--text-secondary)" }}
            >
              Home
            </Link>
            <ChevronRight size={11} strokeWidth={1.8} style={{ color: "var(--text-muted)" }} />
            <span style={{ color: "var(--text-accent)" }}>Sitemap</span>
          </nav>

          <Overline>Site Index</Overline>
          <h1 className="h1 mt-6 leading-[1.05] max-w-[820px]">
            Every page on{" "}
            <span className="text-gradient">wiyo.ae</span>
          </h1>
          <p className="body-lg mt-6 max-w-[680px]">
            A single, complete index of the WIYO website — product,
            pricing, pillar pages, every blog article, and machine-readable
            resources for search engines and AI crawlers.
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="container-x max-w-[1100px] grid gap-10">
          {sections.map((section) => (
            <div
              key={section.title}
              className="rounded-2xl p-8 md:p-10"
              style={{
                background: "var(--bg-elevated)",
                border: "1px solid var(--border-card)",
              }}
            >
              <div className="flex items-baseline justify-between flex-wrap gap-3">
                <h2 className="text-[22px] md:text-[26px] font-semibold tracking-tight">
                  {section.title}
                </h2>
                <p
                  className="caption mono"
                  style={{ color: "var(--text-muted)" }}
                >
                  {section.links.length} pages
                </p>
              </div>
              <p className="body-md mt-2">{section.description}</p>

              <ul className="mt-7 grid sm:grid-cols-2 gap-x-8 gap-y-4">
                {section.links.map((link) => {
                  const external = link.href.startsWith("http") || link.href.startsWith("mailto");
                  const linkEl = (
                    <>
                      <span className="text-[15px] font-medium text-text-primary group-hover:opacity-90">
                        {link.label}
                      </span>
                      {link.description && (
                        <span className="caption mt-1 block leading-snug">
                          {link.description}
                        </span>
                      )}
                    </>
                  );
                  return (
                    <li
                      key={link.href}
                      className="border-l-2 pl-4 transition-colors group hover:border-l-2"
                      style={{
                        borderLeftColor: "var(--border-subtle)",
                      }}
                    >
                      {external ? (
                        <a
                          href={link.href}
                          className="block"
                          target={link.href.startsWith("http") ? "_blank" : undefined}
                          rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        >
                          {linkEl}
                        </a>
                      ) : (
                        <Link href={link.href} className="block">
                          {linkEl}
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
      <MobileCTABar />
    </main>
  );
}
