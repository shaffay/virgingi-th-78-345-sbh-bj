import { NextResponse } from "next/server";

/**
 * Lead intake proxy.
 *
 * The marketing-site forms POST here; this route forwards the lead to the
 * WIYO CRM lead-sourcing webhook server-side. Doing it server-side avoids
 * cross-origin (CORS) issues between www.wiyo.ae and beta.wiyo.ae and keeps
 * the webhook URL out of the client bundle.
 *
 * Override the destination per-environment with WIYO_LEAD_WEBHOOK_URL.
 */
const WEBHOOK_URL =
  process.env.WIYO_LEAD_WEBHOOK_URL ??
  "https://beta.wiyo.ae/api/lead-sourcing/webhook/6a2ea0e782afe9a58c17f2b1/b1e2fdeca83ed7af5b439b10aab9f766";

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
