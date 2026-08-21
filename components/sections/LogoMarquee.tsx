import Divider from "../ui/Divider";

const workflows = [
  "Portal lead capture",
  "WhatsApp conversations",
  "Off-plan inventory",
  "Team pipeline",
  "AI-assisted follow-up",
  "AED-first workflows",
];

export default function LogoMarquee() {
  return (
    <section
      className="relative py-16"
      style={{ background: "var(--bg-elevated)" }}
    >
      <Divider className="absolute inset-x-0 top-0" />
      <Divider className="absolute inset-x-0 bottom-0" />

      <div className="container-x">
        <p className="text-center text-[11.5px] uppercase tracking-[0.2em] text-text-muted font-medium mono">
          One workspace across the property sales journey
        </p>
        <ul className="mt-7 flex flex-wrap items-center justify-center gap-2.5" aria-label="WIYO workflow coverage">
          {workflows.map((workflow) => (
            <li key={workflow} className="pill min-h-10 px-4">{workflow}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
