import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import LenisProvider from "@/components/LenisProvider";
import { SOCIAL_URLS, X_HANDLE } from "@/lib/social";
import { ThemeProvider, themeBootstrapScript } from "@/components/ThemeProvider";
import "./globals.css";

const SITE_URL = "https://www.wiyo.ae";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "WIYO | #1 Real Estate CRM UAE — AI-Powered CRM for Dubai Brokerages",
    template: "%s | WIYO",
  },
  description:
    "WIYO is the UAE's most advanced AI-powered Real Estate CRM. Built for Dubai brokerages — manage leads from Bayut, Property Finder & Dubizzle, automate WhatsApp, close more off-plan deals. From AED 2,650/month.",
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
    title: "WIYO — The Real Estate Operating System for UAE",
    description:
      "Replace 6 tools with one. AI-powered CRM built for UAE real estate agencies. Bayut + Property Finder + WhatsApp + Off-Plan, unified.",
    url: SITE_URL,
    siteName: "WIYO",
    // og:image is provided by the file-based convention in app/opengraph-image.tsx,
    // which Next wires into every route automatically (no hardcoded asset to 404 on).
    locale: "en_AE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WIYO — The Real Estate Operating System for UAE",
    description:
      "AI-powered CRM built for UAE real estate agencies. Bayut + Property Finder + WhatsApp + Off-Plan, unified.",
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
    "AI-powered Real Estate CRM built for UAE brokerages. Bayut, Property Finder, Dubizzle, WhatsApp and off-plan in one platform.",
  inLanguage: "en-AE",
  publisher: { "@id": `${SITE_URL}/#organization` },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${SITE_URL}/blog?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: "WIYO",
  legalName: "WIYO Technologies FZ-LLC",
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/logo-dark.png`,
    width: 512,
    height: 140,
  },
  image: `${SITE_URL}/opengraph-image`,
  description:
    "WIYO is the Real Estate Operating System for the UAE — an AI-powered CRM built for Dubai brokerages with native Bayut, Property Finder and Dubizzle integration.",
  email: "hello@wiyo.ae",
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
    addressLocality: "Dubai",
    addressRegion: "Dubai",
    addressCountry: "AE",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      email: "hello@wiyo.ae",
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
    name: "Shaffay Bajwa",
    jobTitle: "Founder & CTO",
  },
  sameAs: SOCIAL_PROFILES,
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#localbusiness`,
  name: "WIYO",
  description:
    "AI-powered Real Estate CRM and Operating System built for UAE brokerages.",
  url: SITE_URL,
  email: "hello@wiyo.ae",
  image: `${SITE_URL}/opengraph-image`,
  logo: `${SITE_URL}/logo-dark.png`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dubai",
    addressRegion: "Dubai",
    addressCountry: "AE",
  },
  areaServed: [
    { "@type": "City", name: "Dubai" },
    { "@type": "City", name: "Abu Dhabi" },
    { "@type": "City", name: "Sharjah" },
    { "@type": "City", name: "Ras Al Khaimah" },
    { "@type": "AdministrativeArea", name: "United Arab Emirates" },
  ],
  priceRange: "AED 1,000 – AED 9,900 per month",
  currenciesAccepted: "AED",
  paymentAccepted: "Credit Card, Bank Transfer",
  sameAs: SOCIAL_PROFILES,
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "@id": `${SITE_URL}/#software`,
  name: "WIYO",
  applicationCategory: "BusinessApplication",
  applicationSubCategory: "CRM Software",
  operatingSystem: "Web, iOS, Android",
  description:
    "AI-powered Real Estate CRM and Operating System built for UAE brokerages. Integrates Bayut, Property Finder, Dubizzle, WhatsApp Business API and off-plan project management.",
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
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "12",
    bestRating: "5",
    worstRating: "1",
  },
  featureList: [
    "Native Bayut, Property Finder, Dubizzle integration",
    "GPT-4o AI lead scoring",
    "WhatsApp Business API",
    "Off-plan project management",
    "Title Deed OCR",
    "15-minute SLA enforcement",
    "RERA-aware document workflows",
    "UAE data residency",
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
      localBusinessSchema,
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
        <ThemeProvider>
          <LenisProvider>{children}</LenisProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
