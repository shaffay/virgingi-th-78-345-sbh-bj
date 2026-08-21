import type { ReactNode } from "react";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import MobileCTABar from "@/components/cro/MobileCTABar";

export default function ContentPage({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  children: ReactNode;
}) {
  return (
    <main id="main-content" className="relative">
      <Navbar />
      <header className="relative overflow-hidden pb-14 pt-40 md:pb-20 md:pt-48">
        <div className="hero-glow" aria-hidden />
        <div className="container-x relative max-w-[1040px]">
          <p className="mono text-[11px] tracking-[.18em] text-text-accent uppercase">{eyebrow}</p>
          <h1 className="h1 mt-6 max-w-[900px]" style={{ fontSize: "clamp(2.8rem,6vw,5.8rem)" }}>{title}</h1>
          <p className="body-lg mt-7 max-w-[760px]">{intro}</p>
        </div>
      </header>
      <section className="pb-24 md:pb-32">
        <div className="container-x max-w-[1040px]">
          <div className="company-prose">{children}</div>
        </div>
      </section>
      <Footer />
      <MobileCTABar />
    </main>
  );
}
