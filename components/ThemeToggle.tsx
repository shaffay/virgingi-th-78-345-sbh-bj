"use client";

import { Sun, SunMedium, Moon } from "lucide-react";
import { useTheme, type Theme } from "./ThemeProvider";

const options: { value: Theme; label: string; Icon: typeof Sun }[] = [
  { value: "light", label: "Light", Icon: Sun },
  { value: "mild", label: "Mild", Icon: SunMedium },
  { value: "dark", label: "Dark", Icon: Moon },
];

export default function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, setTheme } = useTheme();

  return (
    <div
      role="radiogroup"
      aria-label="Theme"
      className={`inline-flex items-center gap-0.5 p-1 rounded-pill bg-bg-elevated border border-border-subtle ${className}`}
      style={{ background: "var(--bg-subtle)" }}
    >
      {options.map(({ value, label, Icon }) => {
        const active = theme === value;
        return (
          <button
            key={value}
            role="radio"
            aria-checked={active}
            aria-label={`${label} mode`}
            onClick={() => setTheme(value)}
            className={`relative inline-flex items-center justify-center w-9 h-9 rounded-pill transition-all duration-150 ease-standard ${
              active
                ? "text-white"
                : "text-text-secondary hover:text-text-primary"
            }`}
            style={
              active
                ? {
                    background: "var(--cta-gradient)",
                    boxShadow:
                      "0 0 18px rgba(var(--spotlight), 0.5), inset 0 0 0 1px rgba(255,255,255,0.06)",
                  }
                : undefined
            }
          >
            <Icon
              size={15}
              strokeWidth={1.8}
              className="transition-transform duration-300"
            />
          </button>
        );
      })}
    </div>
  );
}
