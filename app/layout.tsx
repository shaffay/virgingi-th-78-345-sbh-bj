import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import LenisProvider from "@/components/LenisProvider";
import { ThemeProvider, themeBootstrapScript } from "@/components/ThemeProvider";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://wiyo.ae"),
  title: {
    default: "WIYO — Intelligent Business Communication. Reimagined.",
    template: "%s | WIYO",
  },
  description:
    "WIYO is the AI-powered business operating system replacing expensive CRMs and armies of employees. 7 modules, 40+ capabilities, running 24/7. Built in the UAE. Launching 2026.",
  keywords: [
    "WIYO",
    "AI CRM",
    "WhatsApp business",
    "UAE business automation",
    "AI lead qualification",
    "Real estate CRM Dubai",
  ],
  openGraph: {
    title: "WIYO — Intelligent Business Communication. Reimagined.",
    description:
      "An all-in-one AI business operating system. 7 modules, 40+ capabilities, running 24/7 with 0 extra staff.",
    url: "https://wiyo.ae",
    siteName: "WIYO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WIYO — Intelligent Business Communication. Reimagined.",
    description:
      "AI-powered business OS. 7 modules, 40+ capabilities, 24/7. Built in UAE. Launching 2026.",
  },
  icons: { icon: "/favicon.png" },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#080c21" },
    { media: "(prefers-color-scheme: light)", color: "#f8f6ff" },
  ],
  width: "device-width",
  initialScale: 1,
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
        <script
          dangerouslySetInnerHTML={{ __html: themeBootstrapScript }}
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
