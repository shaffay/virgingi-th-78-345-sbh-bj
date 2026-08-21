import type { MetadataRoute } from "next";

const SITE = "https://www.wiyo.ae";

/**
 * Explicit, named-bot policy — what enterprise SEO teams ship.
 * Every major search and LLM crawler is welcome on indexable content;
 * private and infrastructure paths are blocked uniformly.
 */
export default function robots(): MetadataRoute.Robots {
  // Framework assets stay crawlable so search and answer engines can render
  // the same page a human sees.
  const disallow = ["/admin", "/api/", "/private/"];

  const allowedBots = [
    // Search engines
    "Googlebot",
    "Googlebot-Image",
    "Googlebot-News",
    "Bingbot",
    "Slurp", // Yahoo
    "DuckDuckBot",
    "YandexBot",
    "Baiduspider",
    // Social previews
    "facebookexternalhit",
    "Twitterbot",
    "LinkedInBot",
    "WhatsApp",
    "Slackbot",
    // LLM / AI search crawlers
    "GPTBot", // OpenAI
    "OAI-SearchBot",
    "OAI-AdsBot",
    "ChatGPT-User",
    "ClaudeBot", // Anthropic
    "Claude-Web",
    "Google-Extended", // Google Gemini training
    "PerplexityBot", // Perplexity
    "Applebot",
    "Applebot-Extended",
    "Amazonbot",
    "CCBot", // Common Crawl (feeds many LLMs)
    "anthropic-ai",
    "cohere-ai",
    "Diffbot",
    "Bytespider", // ByteDance / Doubao
    "DuckAssistBot",
    "mistralai-user",
  ];

  return {
    rules: [
      ...allowedBots.map((userAgent) => ({
        userAgent,
        allow: "/",
        disallow,
      })),
      // Catch-all for any other crawler
      {
        userAgent: "*",
        allow: "/",
        disallow,
      },
    ],
    sitemap: `${SITE}/sitemap.xml`,
    host: SITE,
  };
}
