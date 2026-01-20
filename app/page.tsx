import { AboutSection } from "@/sections/AboutSection";
import CulturalHighlights from "@/sections/culturalHighlights";
import DebunkingMyths from "@/sections/DebunkingMyths";
import GaleyPhoto from "@/sections/GaleryPhoto";
import HeroSection from "@/sections/HeroSection";

function HomePage() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <CulturalHighlights />
      <DebunkingMyths />
      <GaleyPhoto />
    </main>
  );
}

export default HomePage;
