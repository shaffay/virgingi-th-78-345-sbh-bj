"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Instagram, Linkedin, Twitter, Mail } from "lucide-react";
import Divider from "../ui/Divider";

const columns = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "/#features" },
      { label: "Off-Plan CRM", href: "/off-plan-crm-uae" },
      { label: "Integrations", href: "/bayut-property-finder-crm" },
      { label: "Pricing", href: "/#pricing" },
      { label: "Book a Demo", href: "/#cta" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Dubai Brokerages", href: "/real-estate-crm-dubai" },
      { label: "UAE Agencies", href: "/uae-real-estate-crm" },
      { label: "Off-Plan Sales Teams", href: "/off-plan-crm-uae" },
      { label: "Solo Agents", href: "/#pricing" },
      { label: "Enterprise", href: "/#cta" },
    ],
  },
  {
    title: "Integrations",
    links: [
      { label: "Bayut CRM", href: "/bayut-property-finder-crm" },
      { label: "Property Finder CRM", href: "/bayut-property-finder-crm" },
      { label: "Dubizzle Leads", href: "/bayut-property-finder-crm" },
      { label: "Meta Ads", href: "/bayut-property-finder-crm" },
      { label: "WhatsApp Business", href: "/whatsapp-crm-dubai" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/#built-for-uae" },
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "mailto:hello@wiyo.ae" },
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
    ],
  },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const logoSrc = "/logo-dark.png";

  function onSubscribe(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setEmail("");
    setTimeout(() => setSubmitted(false), 4000);
  }

  return (
    <footer className="relative overflow-hidden">
      <Divider className="absolute inset-x-0 top-0" />

      <div className="container-x py-20 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-4">
          <Link href="/#top" className="inline-flex items-center gap-2.5">
            <Image
              src={logoSrc}
              alt="WIYO — Real Estate CRM UAE"
              width={130}
              height={36}
              className="h-8 w-auto object-contain"
            />
          </Link>
          <p className="mt-5 body-md max-w-[380px]">
            The Real Estate Operating System for the UAE. Built in Dubai, by
            people who live in this market — for the agencies competing in it
            every day.
          </p>

          <form onSubmit={onSubscribe} className="mt-7 relative max-w-[400px]">
            <label
              htmlFor="email"
              className="caption uppercase tracking-[0.18em] mb-3 block font-semibold"
            >
              Get UAE real estate insights
            </label>
            <div
              className="flex items-center gap-2 p-1.5 rounded-pill border transition-colors focus-within:border-accent"
              style={{
                background: "var(--bg-elevated)",
                borderColor: "var(--border-subtle)",
              }}
            >
              <Mail
                size={15}
                strokeWidth={1.6}
                className="ml-3 text-text-muted flex-shrink-0"
              />
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@agency.ae"
                className="flex-1 bg-transparent border-0 outline-none text-[14px] py-2 text-text-primary placeholder:text-text-muted"
              />
              <button
                type="submit"
                className="btn-primary text-[13px] py-2 px-4"
                aria-label="Subscribe"
              >
                {submitted ? "Sent" : "Subscribe"}
                <ArrowRight size={14} strokeWidth={1.8} />
              </button>
            </div>
            {submitted && (
              <p
                className="caption mt-3"
                style={{ color: "var(--text-accent)" }}
              >
                Thanks — you're on the list.
              </p>
            )}
          </form>

          <div className="mt-7 flex flex-wrap gap-2">
            <span className="pill">Built in UAE 🇦🇪</span>
            <span className="pill">
              <span className="dot" />
              GPT-4o Powered
            </span>
            <span className="pill">RERA-Aware</span>
          </div>
        </div>

        {columns.map((col) => (
          <div key={col.title} className="md:col-span-2">
            <p className="caption uppercase tracking-[0.18em] font-semibold mb-4">
              {col.title}
            </p>
            <ul className="flex flex-col gap-3 text-[14.5px] text-text-secondary">
              {col.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="hover:text-text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="container-x pb-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="caption uppercase tracking-[0.18em] font-semibold mb-3">
              Follow
            </p>
            <div className="flex items-center gap-3">
              {[
                { Icon: Instagram, href: "https://www.instagram.com/wiyo.ae", label: "Instagram" },
                { Icon: Linkedin, href: "#", label: "LinkedIn" },
                { Icon: Twitter, href: "#", label: "X / Twitter" },
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  aria-label={s.label}
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 ease-standard"
                  style={{
                    background: "var(--bg-elevated)",
                    border: "1px solid var(--border-subtle)",
                    color: "var(--text-secondary)",
                  }}
                >
                  <s.Icon size={16} strokeWidth={1.6} />
                </a>
              ))}
              <a
                href="mailto:hello@wiyo.ae"
                className="ml-3 mono text-[14px] hover:underline"
                style={{ color: "var(--text-accent)" }}
              >
                hello@wiyo.ae
              </a>
            </div>
          </div>
          <p className="caption max-w-[440px] text-right">
            WIYO · Built in Dubai, UAE 🇦🇪
            <br />
            Serving real estate agencies across Dubai, Abu Dhabi, Sharjah, and
            the Emirates.
          </p>
        </div>
      </div>

      <div
        className="border-t"
        style={{ borderColor: "var(--border-subtle)" }}
      >
        <div className="container-x py-6 flex flex-col md:flex-row items-center justify-between gap-3 caption">
          <p className="mono">© 2026 WIYO. All rights reserved.</p>
          <p>Built with intent in the UAE 🇦🇪</p>
        </div>
      </div>
    </footer>
  );
}
