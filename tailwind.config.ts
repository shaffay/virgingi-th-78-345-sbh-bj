import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  blocklist: ["overline"],
  theme: {
    extend: {
      colors: {
        // Map CSS vars so Tailwind utilities pick up theme switching
        "bg-base": "var(--bg-base)",
        "bg-elevated": "var(--bg-elevated)",
        "bg-overlay": "var(--bg-overlay)",
        "text-primary": "var(--text-primary)",
        "text-secondary": "var(--text-secondary)",
        "text-muted": "var(--text-muted)",
        "text-accent": "var(--text-accent)",
        "border-card": "var(--border-card)",
        "border-accent": "var(--border-accent)",
        "border-subtle": "var(--border-subtle)",
        accent: {
          DEFAULT: "var(--accent-primary)",
          mid: "var(--accent-mid)",
          soft: "var(--accent-soft)",
          ultra: "var(--accent-ultra)",
          deep: "var(--accent-deep)",
        },
      },
      fontFamily: {
        sans: [
          "var(--font-geist)",
          "Geist Fallback",
          "system-ui",
          "sans-serif",
        ],
        mono: ["var(--font-geist-mono)", "Geist Mono Fallback", "monospace"],
      },
      borderRadius: {
        sharp: "var(--radius-sharp)",
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
        xl: "var(--radius-xl)",
        "2xl": "var(--radius-2xl)",
        "3xl": "var(--radius-3xl)",
        pill: "9999px",
      },
      maxWidth: {
        wrapper: "1320px",
      },
      transitionTimingFunction: {
        pomelo: "cubic-bezier(.85,.09,.15,.91)",
        spring: "cubic-bezier(.16,1,.3,1)",
        standard: "cubic-bezier(.4,0,.2,1)",
      },
      animation: {
        "fade-in-up": "fade-in-up 0.35s ease-out both",
        "slide-in": "slide-in 2s cubic-bezier(.16,1,.3,1) both",
        shimmer: "shimmer-sweep 4s linear infinite",
        "marquee": "marquee-left 26s linear infinite",
        "float-gentle": "float-gentle 12s ease-in-out infinite",
        "pulse-dot": "pulse-dot 2s ease-in-out infinite",
        "spotlight-pulse":
          "spotlight-pulse 8s ease-in-out infinite alternate",
        "glow-breathe": "glow-breathe 3s ease-in-out infinite alternate",
        "border-glow-rotate": "border-glow-rotate 6s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
