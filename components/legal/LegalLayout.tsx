import { ReactNode } from "react";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";

interface LegalLayoutProps {
  title: string;
  intro: string;
  lastUpdated: string;
  children: ReactNode;
}

export default function LegalLayout({
  title,
  intro,
  lastUpdated,
  children,
}: LegalLayoutProps) {
  return (
    <main className="relative">
      <Navbar />

      <section className="pt-36 pb-10">
        <div className="container-x max-w-[820px]">
          <h1 className="h1 leading-[1.08]">{title}</h1>
          <p className="body-lg mt-6 text-text-secondary max-w-[680px]">
            {intro}
          </p>
          <p className="caption mono mt-6" style={{ color: "var(--text-muted)" }}>
            Last updated: {lastUpdated}
          </p>
        </div>
      </section>

      <section className="pb-28">
        <div className="container-x max-w-[820px]">
          <div className="prose-wiyo">{children}</div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
