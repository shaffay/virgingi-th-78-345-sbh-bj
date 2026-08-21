import type { Metadata } from "next";
import Link from "next/link";
import BlogLayout from "@/components/blog/BlogLayout";
import Figure from "@/components/blog/Figure";
import { articleJsonLd } from "@/lib/seo";
import { getPost } from "@/lib/blog";

const post = getPost("rera-aware-crm-dubai-real-estate")!;

export const metadata: Metadata = {
  title: "RERA-Aware CRM Dubai 2026 | DLD, Oqood & UAE Compliance | WIYO",
  description: post.description,
  alternates: { canonical: `https://www.wiyo.ae/blog/${post.slug}` },
  openGraph: {
    title: post.title,
    description: post.description,
    url: `https://www.wiyo.ae/blog/${post.slug}`,
    type: "article",
    publishedTime: post.date,
    images: [post.coverImage],
  },
};

const toc = [
  { id: "rera", text: "What RERA actually does" },
  { id: "dld-oqood", text: "DLD and Oqood explained" },
  { id: "generic-fail", text: "Why generic CRMs fail compliance" },
  { id: "wiyo-aware", text: "What RERA-awareness looks like" },
  { id: "faq", text: "FAQs" },
];

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd(post)) }}
      />
      <BlogLayout post={post} toc={toc}>
        <p>
          If your CRM has never seen a Title Deed, doesn't know what
          Oqood means, and assumes addresses look like &ldquo;123 Main
          St,&rdquo; you're running an American sales tool through a
          Dubai workflow. It works — until the audit, the
          re-registration, or the off-plan reservation that needs
          paperwork your software has no field for. RERA-aware isn't a
          marketing phrase; it's a compliance posture.
        </p>

        <h2 id="rera">What Is RERA and Why It Matters for Your CRM</h2>
        <p>
          The Real Estate Regulatory Agency (RERA) is the regulator
          inside the Dubai Land Department that governs the Dubai
          real-estate sector. RERA registers brokers, defines
          commission disclosure standards, sets listing requirements,
          and runs the audit framework every active broker eventually
          encounters.
        </p>
        <p>
          For a CRM, RERA-awareness translates into practical features:
        </p>
        <ul>
          <li>
            <strong>Broker ID and BRN tracking</strong> per agent on
            every listing and deal.
          </li>
          <li>
            <strong>Listing fields aligned to RERA standards</strong>{" "}
            (DLD permit numbers, NOC tracking, accurate area
            measurements).
          </li>
          <li>
            <strong>Commission disclosure structure</strong> on every
            closed deal.
          </li>
          <li>
            <strong>Audit-ready document storage</strong> — the
            paperwork you'll need if RERA asks.
          </li>
          <li>
            <strong>Documented deployment terms</strong> so hosting, access,
            retention, and export requirements are clear.
          </li>
        </ul>

        <Figure
          src="https://images.unsplash.com/photo-1554469384-e58fac16e23a?auto=format&fit=crop&w=2000&q=80"
          alt="Documents and contracts on a desk with a pen"
          caption="RERA compliance lives in the paperwork your CRM was supposed to track — or never had a field for"
        />

        <h2 id="dld-oqood">What Are DLD and Oqood — And What Your CRM Should Know</h2>
        <p>
          DLD is the Dubai Land Department, the body responsible for
          registering all property transactions in Dubai. Oqood is the
          digital pre-registration platform that locks in off-plan
          purchases before SPA and final DLD registration.
        </p>
        <p>
          A useful real-estate CRM knows the difference between:
        </p>
        <ul>
          <li>
            <strong>Title Deed:</strong> proof of completed ownership,
            registered with DLD. Issued for secondary inventory.
          </li>
          <li>
            <strong>SPA (Sale &amp; Purchase Agreement):</strong> the
            binding contract for an off-plan purchase.
          </li>
          <li>
            <strong>Oqood certificate:</strong> the pre-registration
            digital receipt that gives a buyer claim to the unit during
            construction.
          </li>
          <li>
            <strong>NOC (No Objection Certificate):</strong> issued by
            the developer to allow ownership transfer; required for
            most secondary deals.
          </li>
        </ul>
        <p>
          A workflow without these as native concepts forces your
          agents into spreadsheets — which is precisely where mistakes
          and audit headaches live.
        </p>

        <h2 id="generic-fail">Why Generic CRMs Fail Dubai Agents on Compliance</h2>
        <p>
          Salesforce, Zoho, HubSpot, Pipedrive, Bitrix24 — none of
          these were built with the Dubai regulatory framework in
          mind, because none of them were built in Dubai. Three
          concrete failure modes:
        </p>
        <ul>
          <li>
            <strong>No native Title Deed handling:</strong> agents
            type fields manually from PDFs, typos go to DLD, uploads
            bounce, deals delay.
          </li>
          <li>
            <strong>No off-plan model:</strong> reservation lifecycle
            shoved into a generic deal stage, Oqood paperwork stored
            in an attachment field with no audit trail.
          </li>
          <li>
            <strong>Unclear deployment assumptions:</strong> hosting region,
            subprocessors, retention, and cross-border transfer terms can be
            overlooked unless they are reviewed during procurement.
          </li>
        </ul>

        <blockquote>
          You don't notice the compliance gap until something goes
          wrong. By then the patch is months of work that should have
          been ten minutes of correct workflow.
        </blockquote>

        <h2 id="wiyo-aware">What RERA-Awareness Looks Like in WIYO</h2>
        <p>
          WIYO was engineered with the UAE regulatory framework as a
          first-class concern, not a bolt-on. Concretely:
        </p>
        <ul>
          <li>
            <strong>Title Deed field extraction:</strong> submit the PDF,
            review extracted fields, and approve them before using the data in
            a listing workflow.
          </li>
          <li>
            <strong>Native off-plan reservation lifecycle:</strong>{" "}
            Inquiry → Holding → Reserved → Booked → Completed, with
            stage-specific document requirements built in.
          </li>
          <li>
            <strong>Oqood and escrow capture:</strong> document fields
            that match the workflow, with audit timestamps on every
            change.
          </li>
          <li>
            <strong>Passport and Emirates ID OCR:</strong> RERA-aligned
            owner verification in seconds.
          </li>
          <li>
            <strong>BRN and DLD permit fields</strong> on every listing,
            with validation against expected formats.
          </li>
          <li>
            <strong>Deployment review:</strong> confirm the current hosting
            region, subprocessors, access controls, export, and retention terms.
          </li>
        </ul>

        <h2 id="faq">Frequently Asked Questions</h2>
        <h3>What does RERA-aware mean for a Dubai CRM?</h3>
        <p>
          That the software understands RERA's regulatory framework
          natively — broker registration numbers, DLD permit fields,
          NOC tracking, off-plan reservation lifecycle, Oqood and
          escrow capture, and documented deployment terms. Not generic CRM
          fields awkwardly relabelled.
        </p>
        <h3>Where is WIYO data stored?</h3>
        <p>
          Hosting and data-residency commitments depend on the deployment and
          customer agreement. Ask WIYO for the current architecture,
          tenant-isolation controls, subprocessors, and region details.
        </p>
        <h3>What is Oqood and why does the CRM need to handle it?</h3>
        <p>
          Oqood is the DLD's digital pre-registration system for
          off-plan purchases. Without native CRM handling, agents
          track Oqood certificates in spreadsheets — which fails the
          first time anyone needs to find one quickly.
        </p>

        <p>
          See how RERA-aware workflows feel in practice —{" "}
          <Link href="/#cta">book a 30-minute WIYO demo</Link>.
        </p>
      </BlogLayout>
    </>
  );
}
