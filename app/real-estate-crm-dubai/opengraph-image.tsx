import { ogImage } from "@/lib/og";

export const alt = "WIYO — Real Estate CRM for Dubai brokerages";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return ogImage({
    eyebrow: "Real Estate CRM · Dubai",
    title: "The CRM Dubai brokerages actually use",
    subtitle:
      "Native Bayut, Property Finder & Dubizzle. AI lead scoring. Off-plan. From AED 2,650/mo.",
  });
}
