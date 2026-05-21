import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import LogoMarquee from "@/components/sections/LogoMarquee";
import PainPoints from "@/components/sections/PainPoints";
import Solution from "@/components/sections/Solution";
import PlatformStats from "@/components/sections/PlatformStats";
import Features from "@/components/sections/Features";
import SocialProof from "@/components/sections/SocialProof";
import FounderStory from "@/components/sections/FounderStory";
import Pricing from "@/components/sections/Pricing";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <LogoMarquee />
      <PainPoints />
      <Solution />
      <PlatformStats />
      <Features />
      <SocialProof />
      <FounderStory />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
