"use client";

import { Check, X, Minus } from "lucide-react";
import Overline from "../ui/Overline";
import { Reveal } from "../motion/Reveal";

type Cell =
  | { kind: "yes"; text?: string }
  | { kind: "partial"; text?: string }
  | { kind: "no"; text?: string }
  | { kind: "text"; text: string };

const rows: { feature: string; wiyo: Cell; generic: Cell; niche: Cell }[] = [
  {
    feature: "Built for UAE Real Estate",
    wiyo: { kind: "yes", text: "100% purpose-built" },
    generic: { kind: "no", text: "Adapted from generic" },
    niche: { kind: "partial", text: "Partial" },
  },
  {
    feature: "Off-Plan Project Management",
    wiyo: { kind: "yes", text: "Full lifecycle + AI Match" },
    generic: { kind: "no", text: "Not available" },
    niche: { kind: "partial", text: "Limited" },
  },
  {
    feature: "AI Lead Scoring (GPT-4o)",
    wiyo: { kind: "yes", text: "Native, every lead" },
    generic: { kind: "partial", text: "Add-on / extra cost" },
    niche: { kind: "no", text: "Not available" },
  },
  {
    feature: "Title Deed OCR Auto-fill",
    wiyo: { kind: "yes", text: "DLD-aware Vision AI" },
    generic: { kind: "no", text: "Not available" },
    niche: { kind: "no", text: "Not available" },
  },
  {
    feature: "Bayut + PF + Dubizzle Native",
    wiyo: { kind: "yes", text: "All 3, zero config" },
    generic: { kind: "no", text: "Requires Zapier" },
    niche: { kind: "partial", text: "Partial" },
  },
  {
    feature: "WhatsApp Business API",
    wiyo: { kind: "yes", text: "Built-in, AI-drafted" },
    generic: { kind: "no", text: "Third-party" },
    niche: { kind: "partial", text: "Basic" },
  },
  {
    feature: "11 Lead Sources, Unified",
    wiyo: { kind: "yes", text: "Deduped, normalized" },
    generic: { kind: "no", text: "Manual integrations" },
    niche: { kind: "partial", text: "Fewer sources" },
  },
  {
    feature: "UAE Data Residency",
    wiyo: { kind: "yes", text: "Data stays in UAE" },
    generic: { kind: "no", text: "Usually US / EU" },
    niche: { kind: "partial", text: "Unknown" },
  },
  {
    feature: "Pricing (starting)",
    wiyo: { kind: "text", text: "AED 2,650 / mo" },
    generic: { kind: "text", text: "AED 3,000 – 15,000+" },
    niche: { kind: "text", text: "Varies" },
  },
  {
    feature: "Setup Time",
    wiyo: { kind: "yes", text: "Same day" },
    generic: { kind: "no", text: "Weeks of onboarding" },
    niche: { kind: "partial", text: "Days" },
  },
];

function CellContent({ cell }: { cell: Cell }) {
  if (cell.kind === "yes") {
    return (
      <div className="flex items-center gap-2">
        <span
          className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
          style={{
            background: "var(--cta-gradient)",
            color: "white",
            boxShadow: "0 0 10px rgba(var(--spotlight),0.4)",
          }}
        >
          <Check size={11} strokeWidth={3} />
        </span>
        {cell.text && (
          <span className="text-[13.5px] text-text-primary">{cell.text}</span>
        )}
      </div>
    );
  }
  if (cell.kind === "partial") {
    return (
      <div className="flex items-center gap-2">
        <span
          className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
          style={{
            background: "var(--bg-subtle)",
            border: "1px solid var(--border-subtle)",
            color: "var(--text-muted)",
          }}
        >
          <Minus size={10} strokeWidth={2.5} />
        </span>
        {cell.text && (
          <span className="text-[13.5px] text-text-muted">{cell.text}</span>
        )}
      </div>
    );
  }
  if (cell.kind === "no") {
    return (
      <div className="flex items-center gap-2">
        <span
          className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
          style={{
            background: "var(--bg-subtle)",
            border: "1px solid var(--border-subtle)",
            color: "var(--text-muted)",
          }}
        >
          <X size={10} strokeWidth={2} />
        </span>
        {cell.text && (
          <span className="text-[13.5px] text-text-muted line-through">
            {cell.text}
          </span>
        )}
      </div>
    );
  }
  return (
    <span className="text-[13.5px] text-text-primary mono">{cell.text}</span>
  );
}

export default function Comparison() {
  return (
    <section id="why-wiyo" className="section-y relative">
      <div className="container-x">
        <div className="text-center max-w-[860px] mx-auto">
          <Reveal variant="fade">
            <Overline>Why WIYO</Overline>
          </Reveal>
          <Reveal>
            <h2 className="h2 mt-6">
              Why UAE Agencies Choose WIYO Over{" "}
              <span className="text-gradient">Generic CRMs</span>
            </h2>
          </Reveal>
          <Reveal variant="fade" delay={0.1}>
            <p className="body-lg mt-6 max-w-[680px] mx-auto">
              Salesforce and Zoho were built for software companies. They don't
              know what a Title Deed is. They've never heard of Oqood. WIYO
              does. Because WIYO was built in Dubai.
            </p>
          </Reveal>
        </div>

        <Reveal>
          <div className="mt-14 overflow-x-auto">
            <table
              className="w-full min-w-[760px] border-collapse rounded-xl overflow-hidden"
              style={{
                background: "var(--bg-elevated)",
                border: "1px solid var(--border-subtle)",
              }}
            >
              <thead>
                <tr
                  className="text-left"
                  style={{
                    background: "var(--bg-subtle)",
                    borderBottom: "1px solid var(--border-subtle)",
                  }}
                >
                  <th className="px-5 py-4 caption uppercase tracking-[0.16em] font-semibold mono text-text-secondary">
                    Feature
                  </th>
                  <th className="px-5 py-4 caption uppercase tracking-[0.16em] font-bold mono">
                    <span className="text-gradient">WIYO</span>
                  </th>
                  <th className="px-5 py-4 caption uppercase tracking-[0.16em] font-semibold mono text-text-secondary">
                    Salesforce / Zoho / HubSpot
                  </th>
                  <th className="px-5 py-4 caption uppercase tracking-[0.16em] font-semibold mono text-text-secondary">
                    Pixxi / LeadRat
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr
                    key={i}
                    style={{
                      borderBottom:
                        i < rows.length - 1
                          ? "1px solid var(--border-subtle)"
                          : "none",
                    }}
                  >
                    <td className="px-5 py-4 text-[14px] font-medium text-text-primary">
                      {row.feature}
                    </td>
                    <td
                      className="px-5 py-4"
                      style={{
                        background: "rgba(var(--spotlight),0.04)",
                      }}
                    >
                      <CellContent cell={row.wiyo} />
                    </td>
                    <td className="px-5 py-4">
                      <CellContent cell={row.generic} />
                    </td>
                    <td className="px-5 py-4">
                      <CellContent cell={row.niche} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>

        <Reveal variant="fade" delay={0.2}>
          <div className="mt-12 max-w-[760px] mx-auto text-center">
            <p className="body-md">
              Generic CRMs like Salesforce and Zoho were built for software
              companies and retailers. They don't know what a Title Deed is.
              They've never heard of Oqood. They don't integrate with Bayut.
            </p>
            <p className="body-md mt-4 text-text-primary font-medium">
              WIYO does. Because WIYO was built in Dubai, by people who live in
              this market, for the agencies competing in it every day.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
