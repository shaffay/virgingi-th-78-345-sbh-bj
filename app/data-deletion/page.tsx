import type { Metadata } from "next";
import LegalLayout from "@/components/legal/LegalLayout";

const URL = "https://www.wiyo.ae/data-deletion";

export const metadata: Metadata = {
  title: "Data Deletion | WIYO",
  description:
    "How to request deletion of your data from WIYO — the Real Estate Operating System built for UAE brokerages — including data connected via Facebook and Instagram.",
  alternates: { canonical: URL },
  openGraph: {
    title: "Data Deletion | WIYO",
    description: "How to request deletion of your data from WIYO.",
    url: URL,
    type: "website",
  },
};

export default function DataDeletionPage() {
  return (
    <LegalLayout
      title="Data Deletion"
      intro="You can ask us to delete your data at any time. This page explains what we hold, how to request deletion, and what happens when you do."
      lastUpdated="20 July 2026"
    >
      <h2>Your right to deletion</h2>
      <p>
        WIYO gives every user the right to request deletion of the personal data
        we hold about them. You can request deletion whether or not you continue
        to use the Service, and we honour verified requests free of charge.
      </p>

      <h2>What data we hold</h2>
      <p>
        Depending on how you use WIYO, we may hold your account details (name,
        email, and the settings for your workspace) and the business data you
        create in the platform (such as leads, listings, and campaigns). Where you
        connect a Facebook Page or an Instagram Business account, we also store the
        data needed to operate those features — for example the access token, your
        account profile information, and the message threads, comments, and
        insights we sync into your unified inbox and analytics on your behalf.
      </p>

      <h2>Deleting data connected via Facebook or Instagram</h2>
      <p>
        If you connected a Facebook Page or Instagram Business account, you can
        remove that data yourself at any time:
      </p>
      <ul>
        <li>
          In WIYO, open <strong>Marketing Hub &rarr; Integrations</strong> and
          click <strong>Disconnect</strong> on the relevant account. This deletes
          the stored access token and the messages, threads, comments, and
          insights we synced from that account.
        </li>
        <li>
          You can also revoke WIYO&apos;s access from Facebook directly, under{" "}
          <strong>
            Settings &amp; privacy &rarr; Settings &rarr; Business Integrations
          </strong>{" "}
          (or <strong>Apps and Websites</strong>), which stops any further data
          from being shared with us.
        </li>
      </ul>

      <h2>How to request deletion of all your data</h2>
      <p>
        To delete your entire WIYO account and all associated data, email us at{" "}
        <a href="mailto:hello@wiyo.ae">hello@wiyo.ae</a> from the address on your
        account with the subject line <strong>&quot;Data deletion request&quot;</strong>.
        Tell us the workspace or account you would like removed so we can verify
        the request and act on it.
      </p>

      <h2>What happens and when</h2>
      <p>
        Once we receive and verify your request, we permanently delete the
        associated personal data from our production systems within{" "}
        <strong>30 days</strong>, and from routine backups within our normal
        backup-rotation period. We may retain a limited amount of information
        where the law requires us to (for example, records needed for tax or
        legal compliance), and we delete that data once the applicable retention
        period ends.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about deleting your data, or the status of a request? Email{" "}
        <a href="mailto:hello@wiyo.ae">hello@wiyo.ae</a> and we will help.
      </p>
    </LegalLayout>
  );
}
