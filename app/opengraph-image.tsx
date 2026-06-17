import { ogImage } from "@/lib/og";

// Default share card for the homepage and any route without its own.
export const alt = "WIYO — The Real Estate Operating System for the UAE";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return ogImage({
    eyebrow: "Real Estate CRM · UAE",
    title: "The Real Estate Operating System for the UAE",
    subtitle:
      "AI-powered CRM for Dubai brokerages — Bayut, Property Finder, Dubizzle, WhatsApp & off-plan, unified.",
  });
}
