"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import ThemeToggle from "../ThemeToggle";
import { useTheme } from "../ThemeProvider";

const solutions = [
  { href: "/real-estate-crm-dubai", label: "Real Estate CRM Dubai" },
  { href: "/uae-real-estate-crm", label: "UAE Real Estate CRM" },
  { href: "/off-plan-crm-uae", label: "Off-Plan CRM" },
  { href: "/bayut-property-finder-crm", label: "Bayut + Property Finder" },
  { href: "/whatsapp-crm-dubai", label: "WhatsApp CRM" },
];

const links = [
  { href: "/#features", label: "Features" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/blog", label: "Blog" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const solutionsRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the Solutions menu on outside click or Escape.
  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (
        solutionsRef.current &&
        !solutionsRef.current.contains(e.target as Node)
      ) {
        setSolutionsOpen(false);
      }
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setSolutionsOpen(false);
    }
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  function openSolutions() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setSolutionsOpen(true);
  }
  function scheduleClose() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setSolutionsOpen(false), 140);
  }

  const logoSrc = theme === "light" ? "/logo-dark.png" : "/logo-light.png";

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ease-standard ${
        scrolled ? "backdrop-blur-md border-b" : "border-b border-transparent"
      }`}
      style={
        scrolled
          ? {
              background:
                theme === "light"
                  ? "rgba(248,246,255,0.9)"
                  : theme === "mild"
                  ? "rgba(22,19,40,0.9)"
                  : "rgba(8,12,33,0.9)",
              borderColor: "var(--border-subtle)",
              backdropFilter: "blur(8px) saturate(180%)",
              WebkitBackdropFilter: "blur(8px) saturate(180%)",
            }
          : undefined
      }
    >
      <div className="container-x flex items-center justify-between h-24">
        <div>
          <Link
            href="/"
            aria-label="WIYO home"
            className="flex items-center gap-2.5 transition-transform duration-150 hover:scale-[1.03]"
          >
            <Image
              src={logoSrc}
              alt="WIYO"
              key={logoSrc}
              width={220}
              height={60}
              priority
              className="h-12 md:h-14 w-auto object-contain"
            />
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-9">
          <motion.a
            href="/#features"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: "easeOut", delay: 0.15 }}
            className="relative text-[14.5px] font-medium text-text-secondary hover:text-text-primary transition-colors duration-150 group"
          >
            Features
            <span
              className="absolute left-0 -bottom-1 h-px w-0 transition-all duration-300 ease-standard group-hover:w-full"
              style={{ background: "var(--cta-gradient)" }}
            />
          </motion.a>

          {/* Solutions dropdown */}
          <motion.div
            ref={solutionsRef}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: "easeOut", delay: 0.21 }}
            className="relative"
            onMouseEnter={openSolutions}
            onMouseLeave={scheduleClose}
          >
            <button
              type="button"
              aria-haspopup="menu"
              aria-expanded={solutionsOpen}
              onClick={() => setSolutionsOpen((v) => !v)}
              className="flex items-center gap-1.5 text-[14.5px] font-medium text-text-secondary hover:text-text-primary transition-colors duration-150"
            >
              Solutions
              <ChevronDown
                size={14}
                strokeWidth={1.8}
                className="transition-transform duration-200"
                style={{ transform: solutionsOpen ? "rotate(180deg)" : "none" }}
              />
            </button>

            <AnimatePresence>
              {solutionsOpen && (
                <motion.div
                  role="menu"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.18, ease: "easeOut" }}
                  className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-[280px]"
                >
                  <div
                    className="rounded-xl p-2 shadow-xl"
                    style={{
                      background: "var(--bg-overlay)",
                      border: "1px solid var(--border-subtle)",
                      backdropFilter: "blur(12px) saturate(180%)",
                      WebkitBackdropFilter: "blur(12px) saturate(180%)",
                    }}
                  >
                    {solutions.map((s) => (
                      <Link
                        key={s.href}
                        href={s.href}
                        role="menuitem"
                        onClick={() => setSolutionsOpen(false)}
                        className="block rounded-lg px-3.5 py-2.5 text-[14px] font-medium text-text-secondary hover:text-text-primary transition-colors"
                        style={{ background: "transparent" }}
                      >
                        {s.label}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {links
            .filter((l) => l.label !== "Features")
            .map((l, i) => (
              <motion.a
                key={l.href}
                href={l.href}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.35,
                  ease: "easeOut",
                  delay: 0.27 + i * 0.06,
                }}
                className="relative text-[14.5px] font-medium text-text-secondary hover:text-text-primary transition-colors duration-150 group"
              >
                {l.label}
                <span
                  className="absolute left-0 -bottom-1 h-px w-0 transition-all duration-300 ease-standard group-hover:w-full"
                  style={{ background: "var(--cta-gradient)" }}
                />
              </motion.a>
            ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.3 }}
          >
            <ThemeToggle />
          </motion.div>
          <motion.a
            href="/#cta"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.45 }}
            className="btn-primary text-[14px] py-3 px-5"
          >
            Book a Demo
            <ArrowRight size={15} strokeWidth={1.8} />
          </motion.a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          className="md:hidden w-11 h-11 rounded-pill border flex items-center justify-center text-text-secondary"
          style={{ borderColor: "var(--border-subtle)", background: "var(--bg-subtle)" }}
        >
          {open ? <X size={18} strokeWidth={1.8} /> : <Menu size={18} strokeWidth={1.8} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="md:hidden border-t"
            style={{
              background: "var(--bg-overlay)",
              borderColor: "var(--border-subtle)",
              backdropFilter: "blur(8px) saturate(180%)",
            }}
          >
            <div className="container-x py-6 flex flex-col gap-4">
              <a
                href="/#features"
                onClick={() => setOpen(false)}
                className="text-text-primary text-lg font-medium py-2"
              >
                Features
              </a>

              <div>
                <p
                  className="caption uppercase tracking-[0.16em] font-semibold mono mb-2"
                  style={{ color: "var(--text-muted)" }}
                >
                  Solutions
                </p>
                <div className="flex flex-col gap-1 pl-1">
                  {solutions.map((s) => (
                    <a
                      key={s.href}
                      href={s.href}
                      onClick={() => setOpen(false)}
                      className="text-text-secondary hover:text-text-primary text-[15px] font-medium py-1.5"
                    >
                      {s.label}
                    </a>
                  ))}
                </div>
              </div>

              {links
                .filter((l) => l.label !== "Features")
                .map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="text-text-primary text-lg font-medium py-2"
                  >
                    {l.label}
                  </a>
                ))}

              <div className="flex items-center justify-between gap-3 pt-2">
                <ThemeToggle />
                <a
                  href="/#cta"
                  onClick={() => setOpen(false)}
                  className="btn-primary flex-1 justify-center"
                >
                  Book a Demo <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
