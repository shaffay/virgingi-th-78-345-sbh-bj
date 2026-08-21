import { Building2, Eye, FileCheck2, UserRoundCheck } from "lucide-react";
import Overline from "../ui/Overline";

const proof = [
  {
    icon: Eye,
    title: "A product walkthrough, not a pitch deck",
    description:
      "The demo follows a lead from arrival to assignment, follow-up, inventory match, and management visibility.",
  },
  {
    icon: UserRoundCheck,
    title: "Your workflow becomes the test case",
    description:
      "Tell us where leads stall today. We will use that operating problem to structure the walkthrough.",
  },
  {
    icon: FileCheck2,
    title: "Claims you can verify",
    description:
      "Capabilities, pricing, and implementation assumptions are reviewed with your team before a buying decision.",
  },
];

export default function SocialProof() {
  return (
    <section id="proof" className="section-y relative overflow-hidden">
      <div className="container-x relative">
        <div className="grid gap-10 lg:grid-cols-[.85fr_1.15fr] lg:items-end">
          <div>
            <Overline>Proof Before Promises</Overline>
            <h2 className="h2 mt-6">
              Evaluate WIYO against{" "}
              <span className="text-gradient">the way your agency works.</span>
            </h2>
            <p className="body-lg mt-6 max-w-[600px]">
              We removed anonymous testimonials and unverifiable performance
              claims. The standard is simpler: inspect the workflow, challenge
              the assumptions, and decide with evidence.
            </p>
          </div>
          <div className="rounded-2xl border p-5 sm:p-7" style={{ borderColor: "var(--border-accent)", background: "linear-gradient(135deg,rgba(var(--spotlight),.14),var(--bg-elevated))" }}>
            <div className="flex items-start gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl" style={{ background: "var(--cta-gradient)", color: "white" }}>
                <Building2 size={20} />
              </span>
              <div>
                <p className="mono text-[11px] tracking-[.14em] text-text-accent">REGISTERED UAE ENTITY</p>
                <h3 className="mt-2 text-[19px] font-semibold text-text-primary">WIYO L.L.C-FZ</h3>
                <p className="body-md mt-2">
                  Trade Licence No. 2649536.01 · Meydan Free Zone, Dubai.
                  Full registered details appear in the footer and company page.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {proof.map(({ icon: Icon, title, description }) => (
            <article key={title} className="card h-full">
              <Icon size={24} strokeWidth={1.5} className="text-text-accent" />
              <h3 className="mt-5 text-[18px] font-semibold text-text-primary">{title}</h3>
              <p className="body-md mt-3">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
