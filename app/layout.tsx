import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import LenisProvider from "@/components/LenisProvider";
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
  },
  openGraph: {
    title: "WIYO — The Real Estate Operating System for UAE",
    description:
      "Replace 6 tools with one. AI-powered CRM built for UAE real estate agencies. Bayut + Property Finder + WhatsApp + Off-Plan, unified.",
    url: SITE_URL,
    siteName: "WIYO",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "WIYO — Real Estate CRM UAE" }],
    locale: "en_AE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WIYO — The Real Estate Operating System for UAE",
    description:
      "AI-powered CRM built for UAE real estate agencies. Bayut + Property Finder + WhatsApp + Off-Plan, unified.",
    images: ["/og-image.jpg"],
  },
  icons: { icon: "/favicon.png" },
  authors: [{ name: "WIYO" }],
  creator: "WIYO",
  publisher: "WIYO",
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

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "WIYO",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description:
    "AI-powered Real Estate CRM and Operating System built for UAE brokerages. Integrates Bayut, Property Finder, Dubizzle, WhatsApp and off-plan project management in one platform.",
  url: SITE_URL,
  offers: [
    {
      "@type": "Offer",
      name: "WIYO Solo",
      price: "1000",
      priceCurrency: "AED",
    },
    {
      "@type": "Offer",
      name: "WIYO Starter",
      price: "2650",
      priceCurrency: "AED",
    },
    {
      "@type": "Offer",
      name: "WIYO Pro",
      price: "5500",
      priceCurrency: "AED",
    },
    {
      "@type": "Offer",
      name: "WIYO Enterprise",
      price: "9900",
      priceCurrency: "AED",
    },
  ],
  creator: {
    "@type": "Organization",
    name: "WIYO",
    url: SITE_URL,
    foundingLocation: "Dubai, UAE",
    sameAs: ["https://www.instagram.com/wiyo.ae"],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "12",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "WIYO",
  url: SITE_URL,
  logo: `${SITE_URL}/logo-dark.png`,
  address: {
    "@type": "PostalAddress",
    addressCountry: "AE",
    addressRegion: "Dubai",
  },
  contactPoint: {
    "@type": "ContactPoint",
    email: "hello@wiyo.ae",
    contactType: "sales",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "WIYO",
  description:
    "AI-powered Real Estate CRM and Operating System built for UAE brokerages",
  url: SITE_URL,
  email: "hello@wiyo.ae",
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
    { "@type": "AdministrativeArea", name: "United Arab Emirates" },
  ],
  priceRange: "AED 1,000 – AED 9,900 per month",
  currenciesAccepted: "AED",
  paymentAccepted: "Credit Card, Bank Transfer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(softwareApplicationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
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
