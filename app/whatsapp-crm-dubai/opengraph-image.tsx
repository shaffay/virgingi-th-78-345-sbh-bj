import { ogImage } from "@/lib/og";

export const alt = "WIYO — WhatsApp CRM for Dubai real estate";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return ogImage({
    eyebrow: "WhatsApp CRM · Dubai",
    title: "Turn WhatsApp into a real sales channel",
    subtitle:
      "Business API. AI-drafted replies. Shared team inbox. Full CRM sync and audit trail.",
  });
}
