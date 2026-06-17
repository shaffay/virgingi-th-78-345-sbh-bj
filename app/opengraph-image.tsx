import { ImageResponse } from "next/og";

// File-based OpenGraph image. Next wires this into og:image (and, with no
// twitter-image present, twitter:image) for every route automatically — so
// every share renders a branded card instead of a 404'd static asset.
export const alt =
  "WIYO — The Real Estate Operating System for the UAE";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background:
            "radial-gradient(120% 120% at 80% 0%, #1a1543 0%, #080c21 55%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        {/* Top row: wordmark + region tag */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              fontSize: 64,
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
              fontSize: 22,
              fontWeight: 600,
              color: "#b9b6d6",
              border: "1px solid rgba(123,92,240,0.45)",
              borderRadius: 999,
              padding: "10px 22px",
            }}
          >
            Built in the UAE 🇦🇪
          </div>
        </div>

        {/* Headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 76,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              maxWidth: 980,
            }}
          >
            The Real Estate Operating System for the UAE
          </div>
          <div
            style={{
              fontSize: 30,
              fontWeight: 500,
              color: "#c7c4e0",
              maxWidth: 920,
            }}
          >
            AI-powered CRM for Dubai brokerages — Bayut, Property Finder,
            Dubizzle, WhatsApp & off-plan, unified.
          </div>
        </div>

        {/* Bottom row: value chips */}
        <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
          {[
            "Native portal leads",
            "GPT-4o lead scoring",
            "Off-plan workflow",
            "From AED 1,000/mo",
          ].map((chip) => (
            <div
              key={chip}
              style={{
                display: "flex",
                fontSize: 24,
                fontWeight: 600,
                color: "#e9e8f5",
                background: "rgba(123,92,240,0.16)",
                border: "1px solid rgba(123,92,240,0.3)",
                borderRadius: 14,
                padding: "12px 22px",
              }}
            >
              {chip}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size },
  );
}
