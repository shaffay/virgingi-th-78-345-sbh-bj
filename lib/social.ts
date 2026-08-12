/**
 * Canonical WIYO social profiles — single source of truth.
 * Consumed by the footer, the HTML sitemap, and the schema.org `sameAs`
 * graph in the root layout, so a handle only ever changes in one place.
 */
export interface SocialProfile {
  /** Display name, also used as the accessible label. */
  name: string;
  href: string;
  /** Public handle, shown in text contexts. */
  handle: string;
}

export const SOCIAL_PROFILES: SocialProfile[] = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/wiyo.ae/",
    handle: "@wiyo.ae",
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/wiyo.ae/",
    handle: "@wiyo.ae",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/wiyo-ae/",
    handle: "WIYO",
  },
  {
    name: "X",
    href: "https://x.com/Wiyo_LLC",
    handle: "@Wiyo_LLC",
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@wiyo310",
    handle: "@wiyo310",
  },
];

/** Profile URLs for the schema.org `sameAs` property. */
export const SOCIAL_URLS: string[] = SOCIAL_PROFILES.map((p) => p.href);

/** Handle used by Twitter/X card metadata. */
export const X_HANDLE = "@Wiyo_LLC";
