import { AboutSection } from "@/sections/AboutSection";
import CulturalHighlights from "@/sections/culturalHighlights";
import DebunkingMyths from "@/sections/DebunkingMyths";
import Footer from "@/sections/Footer";
import GaleyPhoto from "@/sections/GaleryPhoto";
import HeroSection from "@/sections/HeroSection";

function HomePage() {
  return (
    <main>
      {/* We remove 'hidden' so mobile users who passed the troll can see it */}
      <div className="block">
        <HeroSection />
        <AboutSection />

        {/* If you want to hide specific sections on mobile but keep them on Desktop, 
            keep 'hidden lg:block' ONLY on those specific components */}
        <div className="hidden lg:block">
          <CulturalHighlights />
          <DebunkingMyths />
          <GaleyPhoto />
        </div>

        <Footer />
      </div>
    </main>
  );
}

export default HomePage;
