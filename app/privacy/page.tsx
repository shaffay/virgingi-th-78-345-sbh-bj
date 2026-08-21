import type { Metadata } from "next";
import LegalLayout from "@/components/legal/LegalLayout";

const URL = "https://www.wiyo.ae/privacy";

export const metadata: Metadata = {
  title: "Privacy Policy | WIYO",
  description:
    "How WIYO collects, uses, stores, and protects the personal data of UAE real estate professionals who use our website and platform.",
  alternates: { canonical: URL },
  openGraph: {
    title: "Privacy Policy | WIYO",
    description:
      "How WIYO collects, uses, stores, and protects your personal data.",
    url: URL,
    type: "website",
  },
};

export default function PrivacyPage() {
  return (
    <LegalLayout
      title="Privacy Policy"
      intro="WIYO is a UAE-built Real Estate Operating System. This policy explains what personal data we collect through this website and our platform, why we collect it, and the choices you have."
      lastUpdated="17 June 2026"
    >
      <h2>Who we are</h2>
      <p>
        WIYO (&quot;WIYO&quot;, &quot;we&quot;, &quot;us&quot;) operates the
        website at www.wiyo.ae and the WIYO real estate platform. We are based
        in Dubai, United Arab Emirates. For any privacy question, contact us at{" "}
        <a href="mailto:hello@wiyo.ae">hello@wiyo.ae</a>.
      </p>

      <h2>What data we collect</h2>
      <p>When you request a demo, subscribe to insights, or contact us, we may collect:</p>
      <ul>
        <li>Your name and the name of your agency or company</li>
        <li>Your work email address and phone number</li>
        <li>Your team size and the challenge you are trying to solve</li>
        <li>
          Technical data such as IP address, browser type, and pages visited,
          collected through standard server logs and analytics
        </li>
      </ul>
      <p>
        We do not ask for, and you should not submit, sensitive personal data
        (such as government IDs or financial account details) through our
        website forms.
      </p>

      <h2>How we use your data</h2>
      <ul>
        <li>To respond to demo requests and sales enquiries</li>
        <li>To send the UAE real estate insights you subscribed to</li>
        <li>To operate, secure, and improve our website and platform</li>
        <li>To comply with our legal and regulatory obligations</li>
      </ul>
      <p>
        We rely on your consent and our legitimate business interest in
        responding to enquiries as the basis for processing. You can withdraw
        consent at any time.
      </p>

      <h2>How we share data</h2>
      <p>
        We do not sell your personal data. Lead enquiries submitted through this
        website are forwarded to our own customer relationship management system
        so our team can follow up. We use a small number of trusted service
        providers (for example, hosting and email delivery) who process data
        only on our instructions and under appropriate safeguards.
      </p>

      <h2>Where your data is stored</h2>
      <p>
        Hosting locations, subprocessors, and data-transfer arrangements depend
        on the service and customer deployment. Current platform details and any
        contractual residency commitments are provided during procurement. Some
        website providers may process limited technical data outside the UAE;
        where they do, we take steps to ensure an appropriate level of protection.
      </p>

      <h2>How long we keep it</h2>
      <p>
        We keep enquiry and subscriber data for as long as needed to respond to
        you and maintain our business relationship, and then for a reasonable
        period to meet legal and accounting requirements, after which it is
        deleted or anonymised.
      </p>

      <h2>Your rights</h2>
      <p>
        Subject to applicable UAE data protection law, you may request access to,
        correction of, or deletion of your personal data, and you may unsubscribe
        from our emails at any time using the link in any message or by emailing{" "}
        <a href="mailto:hello@wiyo.ae">hello@wiyo.ae</a>.
      </p>

      <h2>Cookies</h2>
      <p>
        We use a small number of cookies and similar technologies to keep the
        site working, remember your theme preference, and understand aggregate
        usage. You can control cookies through your browser settings.
      </p>

      <h2>Changes to this policy</h2>
      <p>
        We may update this policy from time to time. The &quot;last updated&quot;
        date at the top reflects the most recent revision.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about this policy or your data? Email{" "}
        <a href="mailto:hello@wiyo.ae">hello@wiyo.ae</a>.
      </p>
    </LegalLayout>
  );
}
