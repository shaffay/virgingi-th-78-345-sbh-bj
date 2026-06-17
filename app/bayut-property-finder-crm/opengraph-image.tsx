import { ogImage } from "@/lib/og";

export const alt = "WIYO — Bayut + Property Finder leads in one pipeline";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return ogImage({
    eyebrow: "Portal Integrations",
    title: "Bayut + Property Finder leads, one pipeline",
    subtitle:
      "Real-time webhook sync. No Zapier, no uploads. Automatic dedupe and a 15-minute SLA.",
  });
}
