import { ogImage } from "@/lib/og";

export const alt = "WIYO — The only CRM built for UAE off-plan sales";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return ogImage({
    eyebrow: "Off-Plan CRM · UAE",
    title: "The only CRM built for UAE off-plan sales",
    subtitle:
      "AI project matching, live availability, reservation lifecycle and Oqood capture.",
  });
}
