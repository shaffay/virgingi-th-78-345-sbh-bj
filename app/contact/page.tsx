import type { Metadata } from "next";
import Link from "next/link";
import ContentPage from "@/components/company/ContentPage";
import {
  WIYO_WHATSAPP_DISPLAY,
  WIYO_WHATSAPP_URL,
} from "@/lib/contact";

const URL = "https://www.wiyo.ae/contact";

export const metadata: Metadata = {
  title: "Contact WIYO | UAE Real Estate CRM",
  description: "Contact WIYO for a product walkthrough, procurement question, privacy request, or editorial correction.",
  alternates: { canonical: URL },
  openGraph: { title: "Contact WIYO", description: "Sales, company, privacy, and editorial contact details.", url: URL, type: "website" },
  twitter: { card: "summary_large_image", title: "Contact WIYO", description: "Sales, company, privacy, and editorial contact details." },
};

export default function ContactPage() {
  return (
    <ContentPage
      eyebrow="Contact"
      title="Start with the question you need answered."
      intro="Book a product walkthrough or contact the registered WIYO team directly."
    >
      <div className="grid gap-4 md:grid-cols-2">
        <div className="company-callout">
          <h2>Product and sales</h2>
          <p>Show us your current lead journey and the point where work gets lost or delayed.</p>
          <Link href="/#cta" className="btn-primary mt-6 inline-flex">Book a live demo</Link>
        </div>
        <div className="company-callout">
          <h2>Direct contact</h2>
          <p><a href="mailto:hello@wiyo.ae">hello@wiyo.ae</a></p>
          <p>
            <a href={WIYO_WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              WhatsApp {WIYO_WHATSAPP_DISPLAY}
            </a>
          </p>
          <p>Use the same address for privacy requests, procurement questions, partnerships, and editorial corrections.</p>
        </div>
      </div>

      <h2>Registered office</h2>
      <address className="not-italic">
        WIYO L.L.C-FZ<br />
        Meydan Grandstand, 6th Floor<br />
        Meydan Road, Nad Al Sheba<br />
        Dubai, United Arab Emirates<br />
        Trade Licence No. 2649536.01
      </address>
    </ContentPage>
  );
}
