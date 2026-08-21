import type { Metadata } from "next";
import ContentPage from "@/components/company/ContentPage";

const URL = "https://www.wiyo.ae/editorial-methodology";

export const metadata: Metadata = {
  title: "Editorial Methodology & Corrections | WIYO",
  description: "How WIYO researches, writes, updates, discloses, and corrects product guidance and vendor comparisons.",
  alternates: { canonical: URL },
  openGraph: { title: "WIYO Editorial Methodology", description: "Research, disclosure, updates, and corrections at WIYO.", url: URL, type: "website" },
  twitter: { card: "summary_large_image", title: "WIYO Editorial Methodology", description: "Research, disclosure, updates, and corrections at WIYO." },
};

export default function MethodologyPage() {
  return (
    <ContentPage
      eyebrow="Editorial Standards"
      title="Useful guidance requires visible methods."
      intro="WIYO is both a software company and a publisher. This page explains the standard our product guidance and commercial comparisons are expected to meet."
    >
      <h2>Research standard</h2>
      <p>
        Product capabilities, pricing, integrations, and compliance claims should be checked against
        first-party vendor documentation, direct product observation when available, and relevant
        primary public sources. Important facts should carry a checked or updated date.
      </p>

      <h2>Comparison standard</h2>
      <p>
        A comparison must name its criteria, explain who the evaluation is for, separate published
        facts from editorial judgment, and avoid presenting WIYO&apos;s commercial interest as independent
        third-party validation. WIYO may rank its own product, but that relationship must be obvious.
      </p>

      <h2>AI use</h2>
      <p>
        AI may assist with research organisation, structure, editing, and quality checks. A human remains
        accountable for claims, sources, recommendations, and corrections. AI-generated text is not a source.
      </p>

      <h2>Updates and corrections</h2>
      <p>
        Software and pricing change. Material corrections should update the page, its modified date, and
        the affected conclusion where necessary. To flag an error, email{" "}
        <a href="mailto:hello@wiyo.ae?subject=Editorial%20correction">hello@wiyo.ae</a> with the page URL and supporting source.
      </p>

      <h2>Commercial disclosure</h2>
      <p>
        WIYO articles can recommend WIYO. They should help a reader make a better decision even when WIYO
        is not the right fit. Vendor names and trademarks belong to their respective owners; mention does
        not imply endorsement or partnership.
      </p>
    </ContentPage>
  );
}
