"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Instagram, Linkedin, Twitter, Mail } from "lucide-react";
import { useTheme } from "../ThemeProvider";
import Divider from "../ui/Divider";

export default function Footer() {
  const { theme } = useTheme();
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const logoSrc = theme === "light" ? "/logo-dark.png" : "/logo-light.png";

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
        <div className="md:col-span-5">
          <Link href="#top" className="inline-flex items-center gap-2.5">
            <Image
              src={logoSrc}
              alt="WIYO"
              width={130}
              height={36}
              className="h-8 w-auto object-contain"
            />
          </Link>
          <p className="mt-5 body-md max-w-[380px]">
            With Intelligence, Your Operations. Intelligent business
            communication, reimagined — for those who won't settle.
          </p>

          <form onSubmit={onSubscribe} className="mt-7 relative max-w-[400px]">
            <label htmlFor="email" className="caption uppercase tracking-[0.18em] mb-3 block font-semibold">
              Stay in the loop
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
                placeholder="you@company.com"
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
              <p className="caption mt-3" style={{ color: "var(--text-accent)" }}>
                Thanks — you're on the list.
              </p>
            )}
          </form>

          <div className="mt-7 flex flex-wrap gap-2">
            <span className="pill">Building in UAE 🇦🇪</span>
            <span className="pill">
              <span className="dot" />
              AI-Powered
            </span>
            <span className="pill">Launching 2026</span>
          </div>
        </div>

        <div className="md:col-span-2">
          <p className="caption uppercase tracking-[0.18em] font-semibold mb-4">
            Product
          </p>
          <ul className="flex flex-col gap-3 text-[14.5px] text-text-secondary">
            <li>
              <a href="#features" className="hover:text-text-primary transition-colors">
                Features
              </a>
            </li>
            <li>
              <a href="#pricing" className="hover:text-text-primary transition-colors">
                Pricing
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:text-text-primary transition-colors">
                FAQ
              </a>
            </li>
            <li>
              <a href="#cta" className="hover:text-text-primary transition-colors">
                Join Waitlist
              </a>
            </li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <p className="caption uppercase tracking-[0.18em] font-semibold mb-4">
            Company
          </p>
          <ul className="flex flex-col gap-3 text-[14.5px] text-text-secondary">
            <li>
              <a href="#" className="hover:text-text-primary transition-colors">
                About
              </a>
            </li>
            <li>
              <a href="mailto:hello@wiyo.ae" className="hover:text-text-primary transition-colors">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-text-primary transition-colors">
                Privacy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-text-primary transition-colors">
                Terms
              </a>
            </li>
          </ul>
        </div>

        <div className="md:col-span-3">
          <p className="caption uppercase tracking-[0.18em] font-semibold mb-4">
            Follow
          </p>
          <div className="flex gap-3">
            {[
              { Icon: Instagram, href: "#", label: "Instagram" },
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
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "var(--text-primary)";
                  e.currentTarget.style.borderColor = "var(--border-accent)";
                  e.currentTarget.style.background = "rgba(var(--spotlight),0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "var(--text-secondary)";
                  e.currentTarget.style.borderColor = "var(--border-subtle)";
                  e.currentTarget.style.background = "var(--bg-elevated)";
                }}
              >
                <s.Icon size={16} strokeWidth={1.6} />
              </a>
            ))}
          </div>
          <p className="mt-5 caption">
            Reach the founder directly:
            <br />
            <a
              href="mailto:hello@wiyo.ae"
              className="hover:underline mono"
              style={{ color: "var(--text-accent)" }}
            >
              hello@wiyo.ae
            </a>
          </p>
        </div>
      </div>

      <div className="border-t" style={{ borderColor: "var(--border-subtle)" }}>
        <div className="container-x py-6 flex flex-col md:flex-row items-center justify-between gap-3 caption">
          <p className="mono">© 2026 WIYO. All rights reserved.</p>
          <p>Built with intent in the UAE 🇦🇪</p>
        </div>
      </div>
    </footer>
  );
}
