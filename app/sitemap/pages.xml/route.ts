/**
 * Pages sub-sitemap at /sitemap/pages.xml.
 * Optional split sitemap for tooling that prefers page-only URL sets.
 * lastmod is intentionally omitted unless a real content date is available.
 */

const SITE = "https://www.wiyo.ae";

interface UrlEntry {
  loc: string;
  priority: number;
  changefreq: "weekly" | "monthly";
}

const urls: UrlEntry[] = [
  { loc: `${SITE}/`, priority: 1.0, changefreq: "weekly" },
  { loc: `${SITE}/real-estate-crm-dubai`, priority: 0.95, changefreq: "weekly" },
  { loc: `${SITE}/uae-real-estate-crm`, priority: 0.95, changefreq: "weekly" },
  { loc: `${SITE}/off-plan-crm-uae`, priority: 0.9, changefreq: "weekly" },
  { loc: `${SITE}/bayut-property-finder-crm`, priority: 0.85, changefreq: "monthly" },
  { loc: `${SITE}/whatsapp-crm-dubai`, priority: 0.85, changefreq: "monthly" },
  { loc: `${SITE}/about`, priority: 0.7, changefreq: "monthly" },
  { loc: `${SITE}/author/shaffay-bajwa`, priority: 0.6, changefreq: "monthly" },
  { loc: `${SITE}/editorial-methodology`, priority: 0.6, changefreq: "monthly" },
  { loc: `${SITE}/contact`, priority: 0.6, changefreq: "monthly" },
  { loc: `${SITE}/blog`, priority: 0.8, changefreq: "weekly" },
  { loc: `${SITE}/sitemap`, priority: 0.4, changefreq: "monthly" },
];

export function GET() {
  const items = urls
    .map(
      (u) => `  <url>
    <loc>${u.loc}</loc>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority.toFixed(2)}</priority>
  </url>`
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${items}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}

export const dynamic = "force-static";
