import { NextResponse } from "next/server";

/**
 * Lead intake proxy.
 *
 * The marketing-site forms POST here; this route forwards the lead to the
 * WIYO CRM lead-sourcing webhook server-side. Doing it server-side avoids
 * cross-origin (CORS) issues between www.wiyo.ae and beta.wiyo.ae and keeps
 * the webhook URL out of the client bundle.
 *
 * The destination is configured per-environment via WIYO_LEAD_WEBHOOK_URL and
 * is deliberately NOT hardcoded — this repository is public, and the webhook
 * token is a write credential for the CRM. Set it in Vercel (Production and
 * Preview) and in .env.local for local development.
 */
const WEBHOOK_URL = process.env.WIYO_LEAD_WEBHOOK_URL;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type LeadPayload = {
  name?: string;
  email?: string;
  phone?: string;
  agency?: string;
  agents?: string;
  challenge?: string;
  source?: string;
};

export async function POST(req: Request) {
  let body: LeadPayload;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  // A missing webhook silently loses every lead, so fail loudly in the logs
  // rather than falling back to some other destination.
  if (!WEBHOOK_URL) {
    console.error(
      "WIYO_LEAD_WEBHOOK_URL is not configured — lead dropped. Set it in the Vercel project environment variables.",
    );
    return NextResponse.json(
      { error: "Lead could not be delivered. Please try again." },
      { status: 500 },
    );
  }

  const email = (body.email ?? "").trim();
  const name = (body.name ?? "").trim();

  // Email is the one field every lead must have to be useful in the CRM.
  if (!email || !EMAIL_RE.test(email)) {
    return NextResponse.json(
      { error: "A valid email is required." },
      { status: 400 },
    );
  }

  const lead = {
    name: name || undefined,
    email,
    phone: (body.phone ?? "").trim() || undefined,
    company: (body.agency ?? "").trim() || undefined,
    teamSize: (body.agents ?? "").trim() || undefined,
    message: (body.challenge ?? "").trim() || undefined,
    source: body.source || "wiyo.ae",
    submittedAt: new Date().toISOString(),
  };

  try {
    const res = await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(lead),
      // Don't let a slow CRM hang the request indefinitely.
      signal: AbortSignal.timeout(10_000),
    });

    if (!res.ok) {
      console.error(
        `Lead webhook responded ${res.status}: ${await res.text().catch(() => "")}`,
      );
      return NextResponse.json(
        { error: "Lead could not be delivered. Please try again." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error: unknown) {
    const reason = error instanceof Error ? error.message : "unknown error";
    console.error(`Lead webhook request failed: ${reason}`);
    return NextResponse.json(
      { error: "Lead could not be delivered. Please try again." },
      { status: 502 },
    );
  }
}
