import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import LenisProvider from "@/components/LenisProvider";
import { SOCIAL_URLS, X_HANDLE } from "@/lib/social";
import { ThemeProvider, themeBootstrapScript } from "@/components/ThemeProvider";
import Analytics from "@/components/Analytics";
import { WIYO_WHATSAPP_DISPLAY } from "@/lib/contact";
import "./globals.css";

const SITE_URL = "https://www.wiyo.ae";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "WIYO — Real Estate CRM for UAE Brokerages",
    // Existing route titles already include WIYO where useful.
    template: "%s",
  },
  description:
    "A real estate CRM for UAE brokerages: bring portal and WhatsApp leads into one pipeline, organise off-plan inventory, and give every agent a clear next action.",
  keywords: [
    "real estate CRM UAE",
    "CRM Dubai real estate",
    "property CRM Dubai",
    "real estate software UAE",
    "Bayut CRM integration",
    "Property Finder CRM",
    "off-plan CRM Dubai",
    "WhatsApp CRM UAE",
    "AI CRM real estate",
    "lead management real estate Dubai",
  ],
  alternates: {
    canonical: SITE_URL,
    languages: {
      en: SITE_URL,
      "x-default": SITE_URL,
    },
    types: {
      "application/rss+xml": `${SITE_URL}/feed.xml`,
    },
  },
  openGraph: {
    title: "WIYO — Real Estate CRM for UAE Brokerages",
    description:
      "One operating workspace for property leads, conversations, inventory, and the team working every deal.",
    url: SITE_URL,
    siteName: "WIYO",
    // og:image is provided by the file-based convention in app/opengraph-image.tsx,
    // which Next wires into every route automatically (no hardcoded asset to 404 on).
    locale: "en_AE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WIYO — Real Estate CRM for UAE Brokerages",
    description:
      "One operating workspace for property leads, conversations, inventory, and the team working every deal.",
    site: X_HANDLE,
    creator: X_HANDLE,
  },
  icons: {
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
  authors: [{ name: "WIYO", url: SITE_URL }],
  creator: "WIYO",
  publisher: "WIYO",
  category: "Real Estate Technology",
  applicationName: "WIYO",
  referrer: "origin-when-cross-origin",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#080c21" },
    { media: "(prefers-color-scheme: light)", color: "#f8f6ff" },
  ],
  width: "device-width",
  initialScale: 1,
};

// ---------------------------------------------------------------
// Structured data — fed straight to Google + Bing for SERP sitelinks,
// knowledge-graph eligibility, and rich results.
// ---------------------------------------------------------------

// Profile URLs live in lib/social so the footer, sitemap and this schema graph
// can never drift apart.
const SOCIAL_PROFILES = SOCIAL_URLS;

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: "WIYO",
  alternateName: "WIYO — Real Estate Operating System UAE",
  description:
    "Real estate CRM for UAE brokerages, bringing property leads, conversations, inventory, and sales workflows into one workspace.",
  inLanguage: "en-AE",
  publisher: { "@id": `${SITE_URL}/#organization` },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: "WIYO",
  legalName: "WIYO L.L.C-FZ",
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/logo-dark.png`,
    width: 512,
    height: 140,
  },
  image: `${SITE_URL}/opengraph-image`,
  description:
    "WIYO builds real estate CRM software for UAE brokerages, focused on lead operations, inventory, conversations, and team workflows.",
  email: "hello@wiyo.ae",
  telephone: WIYO_WHATSAPP_DISPLAY,
  foundingLocation: {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dubai",
      addressCountry: "AE",
    },
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Meydan Grandstand, 6th Floor, Meydan Road, Nad Al Sheba",
    addressLocality: "Dubai",
    addressRegion: "Dubai",
    addressCountry: "AE",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      email: "hello@wiyo.ae",
      telephone: WIYO_WHATSAPP_DISPLAY,
      contactType: "sales",
      areaServed: ["AE"],
      availableLanguage: ["English", "Arabic"],
    },
    {
      "@type": "ContactPoint",
      email: "hello@wiyo.ae",
      contactType: "customer support",
      areaServed: ["AE"],
      availableLanguage: ["English", "Arabic"],
    },
  ],
  founder: {
    "@type": "Person",
    "@id": `${SITE_URL}/author/shaffay-bajwa#person`,
    name: "Shaffay Bajwa",
    jobTitle: "Founder",
    url: `${SITE_URL}/author/shaffay-bajwa`,
  },
  identifier: "Trade Licence No. 2649536.01",
  sameAs: SOCIAL_PROFILES,
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "@id": `${SITE_URL}/#software`,
  name: "WIYO",
  applicationCategory: "BusinessApplication",
  applicationSubCategory: "CRM Software",
  operatingSystem: "Any device with a modern web browser",
  description:
    "Real estate CRM built for UAE brokerage workflows, including lead management, team pipelines, conversations, and off-plan inventory.",
  url: SITE_URL,
  publisher: { "@id": `${SITE_URL}/#organization` },
  offers: [
    {
      "@type": "Offer",
      name: "WIYO Solo",
      price: "1000",
      priceCurrency: "AED",
      url: `${SITE_URL}/#pricing`,
      availability: "https://schema.org/InStock",
    },
    {
      "@type": "Offer",
      name: "WIYO Starter",
      price: "2650",
      priceCurrency: "AED",
      url: `${SITE_URL}/#pricing`,
      availability: "https://schema.org/InStock",
    },
    {
      "@type": "Offer",
      name: "WIYO Pro",
      price: "5500",
      priceCurrency: "AED",
      url: `${SITE_URL}/#pricing`,
      availability: "https://schema.org/InStock",
    },
    {
      "@type": "Offer",
      name: "WIYO Enterprise",
      price: "9900",
      priceCurrency: "AED",
      url: `${SITE_URL}/#pricing`,
      availability: "https://schema.org/InStock",
    },
  ],
  featureList: [
    "Portal lead capture workflows",
    "AI-assisted lead prioritisation and summaries",
    "WhatsApp conversation workflows",
    "Off-plan project management",
    "Listing data extraction",
    "Lead-response SLA workflows",
    "UAE real estate workflow support",
  ],
};

const siteNavigationSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": `${SITE_URL}/#mainnav`,
  name: "WIYO main navigation",
  itemListElement: [
    { "@type": "SiteNavigationElement", position: 1, name: "Features", url: `${SITE_URL}/#features` },
    { "@type": "SiteNavigationElement", position: 2, name: "Off-Plan CRM", url: `${SITE_URL}/off-plan-crm-uae` },
    { "@type": "SiteNavigationElement", position: 3, name: "Integrations", url: `${SITE_URL}/bayut-property-finder-crm` },
    { "@type": "SiteNavigationElement", position: 4, name: "Pricing", url: `${SITE_URL}/#pricing` },
    { "@type": "SiteNavigationElement", position: 5, name: "Blog", url: `${SITE_URL}/blog` },
    { "@type": "SiteNavigationElement", position: 6, name: "Book a Demo", url: `${SITE_URL}/#cta` },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      websiteSchema,
      organizationSchema,
      softwareApplicationSchema,
      siteNavigationSchema,
    ],
  };

  return (
    <html
      lang="en"
      data-theme="dark"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
      style={
        {
          ["--font-geist" as never]: GeistSans.style.fontFamily,
          ["--font-geist-mono" as never]: GeistMono.style.fontFamily,
        } as React.CSSProperties
      }
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeBootstrapScript }} />
        {/*
          Canonical URLs are emitted per-route via each page's
          metadata.alternates.canonical (home falls back to the root metadata).
          A hardcoded canonical here would point every sub-page at the homepage.
        */}
        <link
          rel="sitemap"
          type="application/xml"
          title="WIYO sitemap"
          href="/sitemap.xml"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
        />
      </head>
      <body>
        <a className="skip-link" href="#main-content">
          Skip to main content
        </a>
        <ThemeProvider>
          <LenisProvider>{children}</LenisProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
