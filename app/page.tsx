import Navbar from "@/components/sections/Navbar";
import HeroEditorial from "@/components/sections/HeroEditorial";
import LogoMarquee from "@/components/sections/LogoMarquee";
import PainPoints from "@/components/sections/PainPoints";
import HowItWorks from "@/components/sections/HowItWorks";
import Features from "@/components/sections/Features";
import Comparison from "@/components/sections/Comparison";
import CinematicBand from "@/components/sections/CinematicBand";
import PlatformStats from "@/components/sections/PlatformStats";
import ForEveryRole from "@/components/sections/ForEveryRole";
import FounderStory from "@/components/sections/FounderStory";
import SocialProof from "@/components/sections/SocialProof";
import Pricing from "@/components/sections/Pricing";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/sections/Footer";
import WhatsAppButton from "@/components/cro/WhatsAppButton";
import MobileCTABar from "@/components/cro/MobileCTABar";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <HeroEditorial />
      <LogoMarquee />
      <PainPoints />
      <HowItWorks />
      <Features />
      <Comparison />
      <CinematicBand />
      <PlatformStats />
      <ForEveryRole />
      <FounderStory />
      <SocialProof />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
      <WhatsAppButton />
      <MobileCTABar />
    </main>
  );
}
