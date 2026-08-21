import { ogImage } from "@/lib/og";

export const alt = "WIYO — Off-plan CRM for UAE property sales teams";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return ogImage({
    eyebrow: "Off-Plan CRM · UAE",
    title: "Off-plan CRM for UAE property sales teams",
    subtitle:
      "AI project matching, live availability, reservation lifecycle and Oqood capture.",
  });
}
