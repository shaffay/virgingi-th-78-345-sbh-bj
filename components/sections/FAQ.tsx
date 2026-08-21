import { ChevronDown } from "lucide-react";
import Overline from "../ui/Overline";

const faqs = [
  {
    q: "What is WIYO?",
    a: "WIYO is a web-based real estate CRM for UAE brokerages. It is designed to organise lead capture, conversations, team follow-up, property inventory, and management visibility in one operating workspace.",
  },
  {
    q: "Who is WIYO built for?",
    a: "WIYO is positioned for UAE real estate teams, from independent agents and growing brokerages to larger sales operations. The right setup depends on team size, lead volume, inventory model, and required workflows.",
  },
  {
    q: "Can WIYO handle portal and WhatsApp leads?",
    a: "WIYO is designed around the lead sources UAE property teams use, including property portals, websites, advertising channels, and WhatsApp conversations. The demo team will confirm the exact connection method and availability for each source in your setup.",
  },
  {
    q: "How does AI support the sales team?",
    a: "WIYO uses AI-assisted workflows to help summarise lead context, prioritise follow-up, suggest next actions, draft messages, and match buyer requirements with relevant inventory. A team member remains in control of customer-facing decisions and messages.",
  },
  {
    q: "Does WIYO support off-plan sales workflows?",
    a: "Yes. Off-plan is a core use case: teams can organise project information, buyer requirements, follow-up, and deal progress in the same workspace as their wider sales pipeline. The live walkthrough shows how that process maps to your agency.",
  },
  {
    q: "How long does implementation take?",
    a: "Implementation depends on data migration, lead sources, team structure, permissions, and workflow customisation. WIYO will define the scope and expected timeline with your team before onboarding starts rather than promise a generic launch date.",
  },
  {
    q: "How is security reviewed?",
    a: "Security, access controls, data handling, integrations, and retention requirements should be reviewed during procurement. Ask the WIYO team for the current technical and contractual details relevant to your deployment before relying on a specific hosting or compliance assumption.",
  },
  {
    q: "What happens in a live demo?",
    a: "The 30-minute walkthrough is tailored to your current bottleneck. It covers lead intake, ownership, follow-up, inventory context, and reporting, then confirms which capabilities and implementation steps apply to your agency.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
};

export default function FAQ() {
  return (
    <section id="faq" className="section-y relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="container-x">
        <div className="text-center max-w-[820px] mx-auto">
          <Overline>Frequently Asked</Overline>
          <h2 className="h2 mt-6">
            Clear answers before{" "}
            <span className="text-gradient">you book a walkthrough.</span>
          </h2>
          <p className="body-lg mt-6 max-w-[640px] mx-auto">
            Need a procurement or technical answer? Email{" "}
            <a href="mailto:hello@wiyo.ae" className="mono hover:underline text-text-accent">
              hello@wiyo.ae
            </a>
            .
          </p>
        </div>

        <div className="mt-14 max-w-[860px] mx-auto flex flex-col gap-3">
          {faqs.map((item, index) => (
            <details
              key={item.q}
              className="group rounded-xl border bg-transparent open:bg-[var(--bg-elevated)]"
              style={{ borderColor: "var(--border-subtle)" }}
              open={index === 0}
            >
              <summary className="min-h-16 cursor-pointer list-none px-5 md:px-6 py-5 flex items-center justify-between gap-4">
                <span className="text-[15.5px] md:text-[17px] font-medium tracking-tight text-text-primary">
                  {item.q}
                </span>
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border transition-transform duration-200 group-open:rotate-180" style={{ borderColor: "var(--border-subtle)" }}>
                  <ChevronDown size={14} strokeWidth={1.8} />
                </span>
              </summary>
              <p className="px-5 md:px-6 pb-6 body-md leading-[1.7]">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
