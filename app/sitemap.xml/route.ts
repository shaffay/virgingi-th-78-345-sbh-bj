/**
 * Sitemap INDEX served at /sitemap.xml.
 * Points to the two sub-sitemaps so Google can crawl each on its own cadence.
 * This is the Fortune-500 pattern (apple.com, microsoft.com etc).
 */

const SITE = "https://www.wiyo.ae";

export function GET() {
  const now = new Date().toISOString();

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${SITE}/sitemap/pages.xml</loc>
    <lastmod>${now}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${SITE}/sitemap/blog.xml</loc>
    <lastmod>${now}</lastmod>
  </sitemap>
</sitemapindex>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}

export const dynamic = "force-static";
