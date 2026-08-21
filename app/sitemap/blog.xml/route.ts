/**
 * Blog sub-sitemap at /sitemap/blog.xml.
 * Generated from lib/blog so it stays in sync as new posts ship.
 */

import { blogPosts } from "@/lib/blog";

const SITE = "https://www.wiyo.ae";

export function GET() {
  const sorted = [...blogPosts].sort((a, b) =>
    a.date < b.date ? 1 : -1
  );

  const items = sorted
    .map((post) => {
      const priority = post.featured ? 0.8 : 0.7;
      const lastmod = new Date(post.updated ?? post.date).toISOString();
      return `  <url>
    <loc>${SITE}/blog/${post.slug}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${priority.toFixed(2)}</priority>
  </url>`;
    })
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
