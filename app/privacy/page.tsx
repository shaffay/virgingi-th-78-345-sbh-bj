import type { Metadata } from "next";
import LegalLayout from "@/components/legal/LegalLayout";

const URL = "https://www.wiyo.ae/privacy";

export const metadata: Metadata = {
  title: "Privacy Policy | WIYO",
  description:
    "How WIYO collects, uses, stores, and protects the personal data of UAE real estate professionals who use our website, our platform, and the WIYO ROS mobile app.",
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
      intro="WIYO is a UAE-built Real Estate Operating System. This policy explains what personal data we collect through this website, our platform, and the WIYO ROS mobile app, why we collect it, and the choices you have."
      lastUpdated="1 September 2026"
    >
      <h2>Who we are</h2>
      <p>
        WIYO (&quot;WIYO&quot;, &quot;we&quot;, &quot;us&quot;) operates the
        website at www.wiyo.ae, the WIYO real estate platform, and the WIYO ROS
        mobile app for iOS and Android. The controlling entity is{" "}
        <strong>WIYO L.L.C-FZ</strong>, The Meydan Hotel, Grandstand, 6th Floor,
        Meydan Road, Nad Al Sheba, Dubai, United Arab Emirates. For any privacy
        question, contact us at <a href="mailto:hello@wiyo.ae">hello@wiyo.ae</a>.
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

      <h2>The WIYO ROS mobile app</h2>
      <p>
        WIYO ROS is a business tool for licensed brokerages and their agents. It
        is not a consumer app: accounts are issued by a subscribing brokerage,
        there is no public sign-up, and every screen requires a sign-in. The
        sections below describe the app specifically.
      </p>

      <h3>Account and profile data</h3>
      <p>
        When your brokerage creates your account and when you sign in, we process
        your name, email address, password (stored only as a salted hash, never
        in plain text), phone number, profile photo, job role, permissions, and
        the company you belong to.
      </p>

      <h3>Client and lead data you enter</h3>
      <p>
        The app is a CRM, so you enter information about your own clients and
        prospects: name, phone number, email address, nationality, preferred
        language, occupation, budget, property preferences, enquiry messages, and
        your notes. You are responsible for having a lawful basis to enter
        another person&apos;s data. We process it on your brokerage&apos;s
        instructions, as a processor.
      </p>

      <h3>Identity documents (KYC)</h3>
      <p>
        Where you use the KYC feature, the app captures a photograph of a
        client&apos;s identity document &mdash; typically a passport or Emirates
        ID &mdash; using your device camera or photo library. The image is
        uploaded to our content delivery network and processed by an automated
        text-extraction service to read the document fields. Both the image and
        the extracted fields are stored against the corresponding lead record.
      </p>
      <p>
        Identity documents are sensitive personal data. Capture them only where
        you have the client&apos;s consent and a lawful basis to do so. We
        process them because UAE anti-money-laundering rules require brokerages
        to verify client identity.
      </p>

      <h3>Camera and photo access</h3>
      <p>
        Camera and photo-library access are used for one purpose only: attaching
        an identity document or an image to a client record, when you actively
        choose to do so. The app never opens the camera in the background, and
        images are uploaded only as part of an action you initiate. You can
        decline or later revoke these permissions in your device settings; the
        rest of the app continues to work.
      </p>

      <h3>Communications</h3>
      <p>
        If your brokerage connects WhatsApp, message content, contact
        identifiers, and delivery status flow through the app so you can read and
        reply to client conversations in one place.
      </p>

      <h3>Technical data</h3>
      <p>
        We process your authentication token, device push-notification token, app
        version, and error diagnostics. Requests to our API are logged, including
        timestamp and endpoint, for security and troubleshooting.
      </p>

      <h3>What the app does not collect</h3>
      <ul>
        <li>
          <strong>Location.</strong> The app requests no location permission and
          never reads your position. Property maps show fixed project
          coordinates, not you.
        </li>
        <li>
          <strong>Microphone or audio.</strong> The app has no recording
          capability; the permission is explicitly blocked in the app manifest.
        </li>
        <li>
          <strong>Contacts, calendar, SMS, or call logs.</strong> Never accessed.
        </li>
        <li>
          <strong>Advertising identifiers.</strong> We run no advertising and no
          third-party analytics or tracking SDKs in the app.
        </li>
      </ul>

      <h3>Who we share app data with</h3>
      <p>
        Only with processors who help us run the service: cloud hosting and
        database, a content delivery network for images and documents, automated
        text-extraction providers for KYC documents and listing copy, messaging
        platforms where your brokerage connects them, and push-notification
        delivery. Each acts under contract and may process data only on our
        instructions. We do not sell app data or use it for advertising.
      </p>

      <h3>Security</h3>
      <p>
        Data is encrypted in transit using HTTPS. Your session token is stored in
        the device&apos;s hardware-backed secure storage &mdash; the iOS Keychain
        or the Android Keystore &mdash; not in ordinary app storage. Passwords are
        stored only as salted hashes. Access is restricted by role, and each
        brokerage&apos;s data is segregated so one company cannot read another&apos;s.
      </p>

      <h2>How long we keep it</h2>
      <p>
        We keep enquiry and subscriber data for as long as needed to respond to
        you and maintain our business relationship, and then for a reasonable
        period to meet legal and accounting requirements, after which it is
        deleted or anonymised.
      </p>
      <p>
        App account data is kept while the account is active. Client, lead, and
        KYC records are kept for as long as the brokerage requires them, and at
        least as long as UAE real-estate and anti-money-laundering record-keeping
        rules demand, after the end of the business relationship. Diagnostic logs
        are kept for a short period and then deleted.
      </p>

      <h2>Account and data deletion</h2>
      <p>
        To delete your WIYO ROS account and its associated data, email{" "}
        <a href="mailto:hello@wiyo.ae">hello@wiyo.ae</a> from your registered
        address, or ask your brokerage administrator. We delete or irreversibly
        anonymise the data within 30 days, except where law requires us to retain
        records. If you are a client of a brokerage rather than an app user,
        contact that brokerage first &mdash; they control your data; we only
        process it for them.
      </p>

      <h2>Your rights</h2>
      <p>
        Subject to UAE Federal Decree-Law No. 45 of 2021 on the protection of
        personal data (and the GDPR where it applies), you may request access to,
        correction of, or deletion of your personal data, request restriction or
        a portable copy, object to processing, and unsubscribe from our emails at
        any time using the link in any message or by emailing{" "}
        <a href="mailto:hello@wiyo.ae">hello@wiyo.ae</a>. We respond within 30
        days.
      </p>

      <h2>Cookies</h2>
      <p>
        We use a small number of cookies and similar technologies to keep the
        site working, remember your theme preference, and understand aggregate
        usage. You can control cookies through your browser settings. The mobile
        app does not use advertising or tracking cookies.
      </p>

      <h2>Children</h2>
      <p>
        Our website, platform, and app are intended for real estate
        professionals. They are not directed at anyone under 18, and we do not
        knowingly collect children&apos;s data.
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
