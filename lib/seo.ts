import type { BlogPost } from "./blog";

export interface Breadcrumb {
  name: string;
  href: string;
}

export function breadcrumbJsonLd(breadcrumbs: Breadcrumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((b, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: b.name,
      item: `https://www.wiyo.ae${b.href === "/" ? "" : b.href}`,
    })),
  };
}

export function articleJsonLd(post: BlogPost) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    author: {
      "@type": "Person",
      name: "Shaffay Bajwa",
      jobTitle: "Founder & CTO, WIYO",
    },
    publisher: {
      "@type": "Organization",
      name: "WIYO",
      logo: {
        "@type": "ImageObject",
        url: "https://www.wiyo.ae/logo-dark.png",
      },
    },
    datePublished: post.date,
    dateModified: post.date,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.wiyo.ae/blog/${post.slug}`,
    },
  };
}
