import { NextResponse } from "next/server";

const WEBHOOK_URL = process.env.WIYO_LEAD_WEBHOOK_URL;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_BODY_BYTES = 16_384;
const WINDOW_MS = 15 * 60 * 1000;
const MAX_REQUESTS = 8;
const ALLOWED_SOURCES = new Set(["wiyo.ae demo form", "wiyo.ae newsletter"]);

type LeadPayload = {
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  agency?: unknown;
  agents?: unknown;
  challenge?: unknown;
  source?: unknown;
  website?: unknown;
  landingPage?: unknown;
  referrer?: unknown;
  utmSource?: unknown;
  utmMedium?: unknown;
  utmCampaign?: unknown;
  utmContent?: unknown;
  utmTerm?: unknown;
};

type RateEntry = { count: number; resetAt: number };

const globalRateStore = globalThis as typeof globalThis & {
  wiyoLeadRateStore?: Map<string, RateEntry>;
};
const rateStore =
  globalRateStore.wiyoLeadRateStore ??
  (globalRateStore.wiyoLeadRateStore = new Map<string, RateEntry>());

function json(body: Record<string, unknown>, status = 200) {
  return NextResponse.json(body, {
    status,
    headers: { "Cache-Control": "no-store, max-age=0" },
  });
}

function clientKey(req: Request) {
  return (
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    "unknown"
  );
}

function isRateLimited(key: string) {
  const now = Date.now();
  if (rateStore.size > 500) {
    for (const [storedKey, entry] of rateStore) {
      if (entry.resetAt <= now) rateStore.delete(storedKey);
    }
  }
  const current = rateStore.get(key);
  if (!current || current.resetAt <= now) {
    rateStore.set(key, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }
  current.count += 1;
  return current.count > MAX_REQUESTS;
}

function clean(value: unknown, max: number) {
  if (typeof value !== "string") return "";
  return value.trim().replace(/[\u0000-\u001F\u007F]/g, " ").slice(0, max);
}

export async function POST(req: Request) {
  if (!req.headers.get("content-type")?.toLowerCase().includes("application/json")) {
    return json({ error: "Content-Type must be application/json." }, 415);
  }

  const declaredLength = Number(req.headers.get("content-length") || "0");
  if (declaredLength > MAX_BODY_BYTES) {
    return json({ error: "Request body is too large." }, 413);
  }

  if (isRateLimited(clientKey(req))) {
    return json({ error: "Too many requests. Please try again shortly." }, 429);
  }

  let body: LeadPayload;
  try {
    const raw = await req.text();
    if (new TextEncoder().encode(raw).byteLength > MAX_BODY_BYTES) {
      return json({ error: "Request body is too large." }, 413);
    }
    body = JSON.parse(raw) as LeadPayload;
    if (!body || typeof body !== "object" || Array.isArray(body)) throw new Error();
  } catch {
    return json({ error: "Invalid JSON body." }, 400);
  }

  if (clean(body.website, 120)) return json({ ok: true });

  const email = clean(body.email, 254).toLowerCase();
  const name = clean(body.name, 120);
  const source = clean(body.source, 80);

  if (!email || !EMAIL_RE.test(email)) {
    return json({ error: "A valid email is required." }, 400);
  }
  if (source === "wiyo.ae demo form" && name.length < 2) {
    return json({ error: "Your name is required." }, 400);
  }
  if (!ALLOWED_SOURCES.has(source)) {
    return json({ error: "Invalid lead source." }, 400);
  }

  if (!WEBHOOK_URL) {
    console.error("WIYO_LEAD_WEBHOOK_URL is not configured.");
    return json({ error: "Lead could not be delivered. Please email hello@wiyo.ae." }, 503);
  }

  const lead = {
    name: name || undefined,
    email,
    phone: clean(body.phone, 40) || undefined,
    company: clean(body.agency, 160) || undefined,
    teamSize: clean(body.agents, 40) || undefined,
    message: clean(body.challenge, 1500) || undefined,
    source,
    attribution: {
      landingPage: clean(body.landingPage, 500) || undefined,
      referrer: clean(body.referrer, 500) || undefined,
      utmSource: clean(body.utmSource, 120) || undefined,
      utmMedium: clean(body.utmMedium, 120) || undefined,
      utmCampaign: clean(body.utmCampaign, 160) || undefined,
      utmContent: clean(body.utmContent, 160) || undefined,
      utmTerm: clean(body.utmTerm, 160) || undefined,
    },
    submittedAt: new Date().toISOString(),
  };

  try {
    const response = await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(lead),
      signal: AbortSignal.timeout(10_000),
      cache: "no-store",
    });

    if (!response.ok) {
      console.error(`Lead webhook responded with status ${response.status}.`);
      return json({ error: "Lead could not be delivered. Please email hello@wiyo.ae." }, 502);
    }

    return json({ ok: true });
  } catch (error: unknown) {
    const reason = error instanceof Error ? error.name : "unknown";
    console.error(`Lead webhook request failed: ${reason}`);
    return json({ error: "Lead could not be delivered. Please email hello@wiyo.ae." }, 502);
  }
}
