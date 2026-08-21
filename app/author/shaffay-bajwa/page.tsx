import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ContentPage from "@/components/company/ContentPage";
import { blogPosts } from "@/lib/blog";

const URL = "https://www.wiyo.ae/author/shaffay-bajwa";

export const metadata: Metadata = {
  title: "Shaffay Bajwa, Founder of WIYO | Author",
  description: "Author profile for Shaffay Bajwa, founder of WIYO and contributor to WIYO's UAE real estate operations research.",
  alternates: { canonical: URL },
  openGraph: { title: "Shaffay Bajwa — Founder of WIYO", description: "Author and founder profile.", url: URL, type: "profile", images: ["/shaffay.jpg"] },
  twitter: { card: "summary_large_image", title: "Shaffay Bajwa — Founder of WIYO", description: "Author and founder profile.", images: ["/shaffay.jpg"] },
};

export default function AuthorPage() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${URL}#person`,
    name: "Shaffay Bajwa",
    jobTitle: "Founder",
    worksFor: { "@id": "https://www.wiyo.ae/#organization" },
    url: URL,
    image: "https://www.wiyo.ae/shaffay.jpg",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      <ContentPage
        eyebrow="Author"
        title="Shaffay Bajwa"
        intro="Founder of WIYO and contributor to the company's product, brand, and UAE real estate operations research."
      >
        <div className="grid gap-8 md:grid-cols-[220px_1fr] md:items-start">
          <Image src="/shaffay.jpg" alt="Shaffay Bajwa, founder of WIYO" width={440} height={440} className="aspect-square w-full max-w-[220px] rounded-2xl object-cover" priority />
          <div>
            <h2>Editorial focus</h2>
            <p>
              Shaffay writes about real estate CRM selection, lead operations, response workflows,
              off-plan sales, and the practical use of AI in UAE property teams. Commercial claims
              should be read alongside WIYO&apos;s published methodology and verified during procurement.
            </p>
            <p><Link href="/editorial-methodology">Read the editorial methodology</Link></p>
          </div>
        </div>

        <h2>Published on WIYO</h2>
        <ul className="company-article-list">
          {blogPosts.map((post) => (
            <li key={post.slug}>
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              <span>{new Date(`${post.date}T00:00:00Z`).toLocaleDateString("en-AE", { year: "numeric", month: "short", day: "numeric" })}</span>
            </li>
          ))}
        </ul>
      </ContentPage>
    </>
  );
}
