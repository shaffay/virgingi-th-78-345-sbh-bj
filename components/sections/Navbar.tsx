"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import ThemeToggle from "../ThemeToggle";
import { useTheme } from "../ThemeProvider";

const links = [
  { href: "#features", label: "Features" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const logoSrc = "/logo-dark.png";

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ease-standard ${
        scrolled
          ? "backdrop-blur-md border-b"
          : "border-b border-transparent"
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
      <div className="container-x flex items-center justify-between h-16">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
        >
          <Link
            href="#top"
            aria-label="WIYO home"
            className="flex items-center gap-2.5 transition-transform duration-150 hover:scale-[1.03]"
          >
            <Image
              src={logoSrc}
              alt="WIYO"
              width={120}
              height={32}
              priority
              className="h-7 w-auto object-contain"
            />
          </Link>
        </motion.div>

        <nav className="hidden md:flex items-center gap-9">
          {links.map((l, i) => (
            <motion.a
              key={l.href}
              href={l.href}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: "easeOut", delay: 0.15 + i * 0.06 }}
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
            href="#cta"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.45 }}
            className="btn-primary text-[14px] py-3 px-5"
          >
            Join Waitlist
            <ArrowRight size={15} strokeWidth={1.8} />
          </motion.a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          className="md:hidden w-10 h-10 rounded-pill border flex items-center justify-center text-text-secondary"
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
              {links.map((l) => (
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
                  href="#cta"
                  onClick={() => setOpen(false)}
                  className="btn-primary flex-1 justify-center"
                >
                  Join Waitlist <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
