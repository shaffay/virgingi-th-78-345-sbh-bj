import type { Metadata } from "next";
import LegalLayout from "@/components/legal/LegalLayout";

const URL = "https://www.wiyo.ae/terms";

export const metadata: Metadata = {
  title: "Terms of Service | WIYO",
  description:
    "The terms that govern your use of the WIYO website and platform — the Real Estate Operating System built for UAE brokerages.",
  alternates: { canonical: URL },
  openGraph: {
    title: "Terms of Service | WIYO",
    description: "The terms that govern your use of the WIYO website and platform.",
    url: URL,
    type: "website",
  },
};

export default function TermsPage() {
  return (
    <LegalLayout
      title="Terms of Service"
      intro="These terms govern your use of the WIYO website and, where you are a customer, the WIYO platform. By using our site you agree to them."
      lastUpdated="17 June 2026"
    >
      <h2>About these terms</h2>
      <p>
        These Terms of Service (&quot;Terms&quot;) are a legal agreement between
        you and WIYO regarding your use of www.wiyo.ae (the &quot;Site&quot;) and,
        for customers, the WIYO platform (the &quot;Service&quot;). If you do not
        agree, please do not use the Site or the Service.
      </p>

      <h2>Use of the Site</h2>
      <p>
        You may browse the Site and submit enquiries for lawful purposes only.
        You agree not to misuse the Site, attempt to disrupt it, access it
        through automated means in a way that burdens our infrastructure, or use
        it to infringe the rights of others.
      </p>

      <h2>Demos, enquiries, and accounts</h2>
      <p>
        Information you submit through demo or contact forms must be accurate and
        your own (or submitted with authority on behalf of your agency). Pricing
        shown on the Site is indicative and may change; the commercial terms that
        apply to you are those set out in your order or subscription agreement.
      </p>

      <h2>Intellectual property</h2>
      <p>
        The Site, the Service, and all related content, branding, and software
        are owned by WIYO or its licensors and are protected by intellectual
        property laws. You receive no rights in them except the limited right to
        use the Site and, if you are a customer, the Service under your agreement.
      </p>

      <h2>Service availability</h2>
      <p>
        We work hard to keep the Site and Service available, but we provide them
        on an &quot;as is&quot; and &quot;as available&quot; basis and do not
        guarantee uninterrupted or error-free operation. Features described on
        the Site may evolve as the product develops.
      </p>

      <h2>Limitation of liability</h2>
      <p>
        To the maximum extent permitted by law, WIYO is not liable for indirect,
        incidental, or consequential losses arising from your use of the Site.
        Nothing in these Terms limits any liability that cannot be limited under
        applicable law.
      </p>

      <h2>Third-party services</h2>
      <p>
        The Site and Service may reference or integrate third-party services
        (for example, property portals or messaging providers). We are not
        responsible for those third parties&apos; own terms or availability.
      </p>

      <h2>Governing law</h2>
      <p>
        These Terms are governed by the laws of the United Arab Emirates and the
        applicable laws of the Emirate of Dubai, and disputes are subject to the
        jurisdiction of the competent courts of Dubai.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about these Terms? Email{" "}
        <a href="mailto:hello@wiyo.ae">hello@wiyo.ae</a>.
      </p>
    </LegalLayout>
  );
}
