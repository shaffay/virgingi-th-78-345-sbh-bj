import { Building2, Clock3, MessageCircle, Sparkles } from "lucide-react";

const leads = [
  { name: "Nadia R.", brief: "2BR · Dubai Hills", source: "Portal lead", tone: "violet" },
  { name: "Omar K.", brief: "Villa · AED 4.8M", source: "WhatsApp", tone: "green" },
  { name: "Leila A.", brief: "Off-plan · Q4 2027", source: "Website", tone: "blue" },
];

export default function ProductPreview() {
  return (
    <figure className="product-preview" aria-labelledby="product-preview-caption">
      <div className="product-preview__bar">
        <div className="flex items-center gap-2">
          <span className="product-preview__mark">W</span>
          <span className="mono text-[11px] tracking-[0.12em] text-text-secondary">
            SALES WORKSPACE
          </span>
        </div>
        <span className="product-preview__live">
          <span className="dot" /> Live pipeline
        </span>
      </div>

      <div className="grid gap-3 p-4 sm:p-5">
        <div className="grid grid-cols-3 gap-2">
          {[
            ["New leads", "24"],
            ["Needs action", "7"],
            ["Active deals", "18"],
          ].map(([label, value]) => (
            <div key={label} className="product-preview__metric">
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>

        <div className="product-preview__panel">
          <div className="flex items-center justify-between gap-3 px-4 py-3 border-b border-white/5">
            <div>
              <p className="text-[13px] font-semibold text-text-primary">Priority queue</p>
              <p className="text-[11px] text-text-muted mt-0.5">One next action for every lead</p>
            </div>
            <span className="product-preview__ai"><Sparkles size={12} /> AI-assisted</span>
          </div>
          <div className="grid gap-2 p-3">
            {leads.map((lead, index) => (
              <div className="product-preview__lead" key={lead.name}>
                <span className={`product-preview__avatar product-preview__avatar--${lead.tone}`}>
                  {lead.name.slice(0, 1)}
                </span>
                <span className="min-w-0 flex-1">
                  <strong>{lead.name}</strong>
                  <small>{lead.brief}</small>
                </span>
                <span className="hidden sm:flex items-center gap-1 text-[10px] text-text-muted">
                  {index === 1 ? <MessageCircle size={11} /> : <Building2 size={11} />}
                  {lead.source}
                </span>
                <span className="product-preview__time"><Clock3 size={11} /> {index + 3}m</span>
              </div>
            ))}
          </div>
        </div>

        <div className="product-preview__insight">
          <span className="product-preview__insight-icon"><Sparkles size={15} /></span>
          <span>
            <strong>Suggested next action</strong>
            <small>Call Nadia and share two matching Dubai Hills units.</small>
          </span>
          <button type="button" tabIndex={-1} aria-hidden="true">Open lead</button>
        </div>
      </div>
      <figcaption id="product-preview-caption" className="sr-only">
        Illustrative preview of a WIYO real estate lead pipeline. Final product screens may vary.
      </figcaption>
    </figure>
  );
}
