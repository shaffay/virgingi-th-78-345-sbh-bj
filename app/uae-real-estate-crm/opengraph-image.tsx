import { ogImage } from "@/lib/og";

export const alt = "WIYO — Real Estate CRM for agencies across the UAE";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return ogImage({
    eyebrow: "Real Estate CRM · UAE",
    title: "One CRM for agents across the Emirates",
    subtitle:
      "Dubai, Abu Dhabi, Sharjah & RAK. Bayut + Property Finder native. Transparent AED pricing.",
  });
}
