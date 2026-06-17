import { ImageResponse } from "next/og";

/**
 * Shared OpenGraph card template. Every route's opengraph-image.tsx calls this
 * with its own copy so each share card is page-specific but visually uniform.
 */
const OG_SIZE = { width: 1200, height: 630 };

interface OgImageOptions {
  eyebrow: string;
  title: string;
  subtitle: string;
}

export function ogImage({ eyebrow, title, subtitle }: OgImageOptions) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "70px 80px",
          background:
            "radial-gradient(120% 120% at 80% 0%, #1a1543 0%, #080c21 55%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        {/* Top: wordmark + region tag */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              fontSize: 56,
              fontWeight: 800,
              letterSpacing: "-0.04em",
              backgroundImage: "linear-gradient(90deg, #7B5CF0, #5B7CFA)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            WIYO
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 20,
              fontWeight: 600,
              color: "#b9b6d6",
              border: "1px solid rgba(123,92,240,0.45)",
              borderRadius: 999,
              padding: "9px 20px",
            }}
          >
            Built in the UAE 🇦🇪
          </div>
        </div>

        {/* Middle: eyebrow + title + subtitle */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              display: "flex",
              fontSize: 24,
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "#9b8cf0",
            }}
          >
            {eyebrow}
          </div>
          <div
            style={{
              fontSize: 68,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              maxWidth: 1000,
            }}
          >
            {title}
          </div>
          <div
            style={{ fontSize: 28, fontWeight: 500, color: "#c7c4e0", maxWidth: 960 }}
          >
            {subtitle}
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            fontSize: 22,
            color: "#8e8bb0",
          }}
        >
          <div
            style={{
              display: "flex",
              width: 38,
              height: 6,
              borderRadius: 999,
              background: "linear-gradient(90deg, #7B5CF0, #5B7CFA)",
            }}
          />
          wiyo.ae — The Real Estate Operating System for the UAE
        </div>
      </div>
    ),
    { ...OG_SIZE },
  );
}
