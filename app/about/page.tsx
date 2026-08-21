import type { Metadata } from "next";
import Link from "next/link";
import ContentPage from "@/components/company/ContentPage";

const URL = "https://www.wiyo.ae/about";

export const metadata: Metadata = {
  title: "About WIYO | UAE Real Estate CRM Company",
  description: "Learn what WIYO builds, who it serves, and the registered UAE company behind the real estate CRM.",
  alternates: { canonical: URL },
  openGraph: { title: "About WIYO", description: "The company behind WIYO's UAE real estate CRM.", url: URL, type: "website" },
  twitter: { card: "summary_large_image", title: "About WIYO", description: "The company behind WIYO's UAE real estate CRM." },
};

export default function AboutPage() {
  return (
    <ContentPage
      eyebrow="Company"
      title="A clearer operating system for property sales."
      intro="WIYO builds real estate CRM software around the day-to-day reality of UAE brokerages: fragmented lead sources, fast-moving conversations, complex inventory, and teams that need one shared view of every deal."
    >
      <h2>What WIYO is building</h2>
      <p>
        WIYO brings lead intake, ownership, follow-up, property context, off-plan workflows,
        and management visibility into one web-based workspace. AI-assisted features are used
        to reduce repetitive work and surface useful context; people remain responsible for
        decisions and customer communication.
      </p>

      <h2>Who it is for</h2>
      <p>
        The product is positioned for independent agents, growing brokerages, and larger UAE
        property-sales teams. A live walkthrough maps WIYO to the buyer&apos;s actual lead volume,
        sources, team structure, inventory model, and reporting needs.
      </p>

      <h2>Company details</h2>
      <dl className="company-facts">
        <div><dt>Licensed name</dt><dd>WIYO L.L.C-FZ</dd></div>
        <div><dt>Trade licence</dt><dd>2649536.01</dd></div>
        <div><dt>Licensing authority</dt><dd>Meydan Free Zone, Government of Dubai</dd></div>
        <div><dt>Registered address</dt><dd>Meydan Grandstand, 6th Floor, Meydan Road, Nad Al Sheba, Dubai, UAE</dd></div>
      </dl>

      <h2>How we communicate</h2>
      <p>
        WIYO publishes product information, practical UAE real estate operations guidance,
        and vendor comparisons. Our <Link href="/editorial-methodology">editorial methodology</Link>{" "}
        explains how commercial interests, updates, and corrections are handled.
      </p>

      <div className="company-callout">
        <h2>See the workflow with your use case</h2>
        <p>Bring one real operating problem to a 30-minute walkthrough. We will show where WIYO fits—and where it does not.</p>
        <Link className="btn-primary mt-6 inline-flex" href="/#cta">Book a live demo</Link>
      </div>
    </ContentPage>
  );
}
