"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";
import Overline from "../ui/Overline";
import { Reveal, StaggerGroup, slideInVariant } from "../motion/Reveal";
import { motion } from "framer-motion";

export default function FinalCTA() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    agency: "",
    agents: "",
    challenge: "",
  });

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.email || !form.name || sending) return;
    setSending(true);
    setError("");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, source: "wiyo.ae demo form" }),
      });
      if (!res.ok) throw new Error("Request failed");
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again or email us directly.");
    } finally {
      setSending(false);
    }
  }

  return (
    <section id="cta" className="section-y relative overflow-hidden">
      {/* Dubai skyline backdrop — heavily graded so it reads as atmosphere */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <Image
          src="/dubai-skyline.jpg"
          alt=""
          fill
          sizes="100vw"
          quality={70}
          className="object-cover"
          style={{
            objectPosition: "center 62%",
            filter: "brightness(2.1) saturate(1.2)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, var(--bg-base) 0%, rgba(8,12,33,0.72) 30%, rgba(8,12,33,0.76) 68%, var(--bg-base) 100%)",
          }}
        />
      </div>

      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[900px] rounded-full"
          style={{
            background:
              "radial-gradient(closest-side, rgba(var(--spotlight),0.22), transparent 70%)",
            filter: "blur(60px)",
            animation: "spotlight-pulse 4s ease-in-out infinite alternate",
          }}
        />
      </div>

      <div className="container-x relative">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <StaggerGroup className="lg:col-span-6">
            <motion.div variants={slideInVariant}>
              <Overline>Book a Live Demo</Overline>
            </motion.div>

            <motion.h2 variants={slideInVariant} className="h2 mt-7">
              See WIYO in action —{" "}
              <span className="text-gradient">in 30 minutes.</span>
            </motion.h2>

            <motion.p
              variants={slideInVariant}
              className="body-lg mt-6 max-w-[560px]"
            >
              We'll show you how Bayut, Property Finder, and Dubizzle leads
              flow into your pipeline live — and how the AI Co-pilot scores,
              briefs, and drafts replies on every one of them.
            </motion.p>

            <motion.ul
              variants={slideInVariant}
              className="mt-8 flex flex-col gap-3 max-w-[480px]"
            >
              {[
                "30-minute personalised walkthrough",
                "Live data flow from your existing portals",
                "Off-Plan AI Match on real buyer briefs",
                "Custom pricing for your agency size",
              ].map((b) => (
                <li
                  key={b}
                  className="flex items-start gap-3 text-[15px] text-text-secondary"
                >
                  <span
                    className="mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{
                      background: "var(--cta-gradient)",
                      color: "white",
                      boxShadow: "0 0 10px rgba(var(--spotlight),0.4)",
                    }}
                  >
                    <Check size={11} strokeWidth={3} />
                  </span>
                  {b}
                </li>
              ))}
            </motion.ul>

            <motion.div
              variants={slideInVariant}
              className="mt-10 flex flex-wrap gap-2"
            >
              <span className="pill">
                <span className="dot" />
                Same-day onboarding
              </span>
              <span className="pill">No commitment</span>
              <span className="pill">UAE 🇦🇪</span>
            </motion.div>
          </StaggerGroup>

          <Reveal variant="fade" delay={0.15} className="lg:col-span-6">
            <div
              className="card p-6 sm:p-7 md:p-9"
              style={{ minHeight: "100%" }}
            >
              {submitted ? (
                <div className="flex flex-col items-center text-center py-10">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center"
                    style={{
                      background: "var(--cta-gradient)",
                      boxShadow: "0 0 30px rgba(var(--spotlight),0.5)",
                    }}
                  >
                    <Check size={26} strokeWidth={2.5} color="white" />
                  </div>
                  <h3 className="mt-5 text-[22px] font-semibold tracking-tight">
                    Demo request received.
                  </h3>
                  <p className="body-md mt-3 max-w-[360px]">
                    Our team will reach out within one business day to
                    schedule your live walkthrough.
                  </p>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="flex flex-col gap-4">
                  <h3 className="text-[22px] font-semibold tracking-tight">
                    Book Your Live Demo
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <Field
                      label="Name"
                      value={form.name}
                      required
                      onChange={(v) => setForm({ ...form, name: v })}
                    />
                    <Field
                      label="Email"
                      type="email"
                      value={form.email}
                      required
                      onChange={(v) => setForm({ ...form, email: v })}
                    />
                    <Field
                      label="Phone (UAE)"
                      value={form.phone}
                      placeholder="+971 ..."
                      onChange={(v) => setForm({ ...form, phone: v })}
                    />
                    <Field
                      label="Agency Name"
                      value={form.agency}
                      onChange={(v) => setForm({ ...form, agency: v })}
                    />
                    <Field
                      label="Number of Agents"
                      value={form.agents}
                      placeholder="e.g. 8"
                      onChange={(v) => setForm({ ...form, agents: v })}
                    />
                  </div>
                  <Field
                    label="What's your biggest challenge right now? (optional)"
                    value={form.challenge}
                    textarea
                    onChange={(v) => setForm({ ...form, challenge: v })}
                  />
                  <button
                    type="submit"
                    disabled={sending}
                    className="btn-primary justify-center w-full mt-2 disabled:opacity-60"
                  >
                    {sending ? "Sending…" : "Book My Demo"}
                    <ArrowRight size={16} strokeWidth={1.8} />
                  </button>
                  {error && (
                    <p
                      className="caption text-center"
                      style={{ color: "var(--text-accent)" }}
                      role="alert"
                    >
                      {error}
                    </p>
                  )}
                  <p
                    className="caption text-center"
                    style={{ color: "var(--text-muted)" }}
                  >
                    No credit card required · We'll reach out within one
                    business day
                  </p>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  value,
  onChange,
  required,
  type,
  placeholder,
  textarea,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
  type?: string;
  placeholder?: string;
  textarea?: boolean;
}) {
  return (
    <label className="flex flex-col gap-1.5 min-w-0">
      <span className="caption uppercase tracking-[0.12em] font-semibold leading-snug">
        {label}
        {required && (
          <span style={{ color: "var(--text-accent)" }}> *</span>
        )}
      </span>
      {textarea ? (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          required={required}
          rows={3}
          className="px-4 py-3 rounded-lg text-[14px] text-text-primary outline-none transition-colors resize-none"
          style={{
            background: "var(--bg-subtle)",
            border: "1px solid var(--border-subtle)",
          }}
        />
      ) : (
        <input
          type={type ?? "text"}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          required={required}
          className="px-4 py-3 rounded-lg text-[14px] text-text-primary outline-none transition-colors"
          style={{
            background: "var(--bg-subtle)",
            border: "1px solid var(--border-subtle)",
          }}
        />
      )}
    </label>
  );
}
