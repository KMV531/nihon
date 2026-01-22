import LoaderWrapper from "@/components/Loader/LoaderWrapper";

import { AboutSection } from "@/sections/AboutSection";
import CulturalHighlights from "@/sections/culturalHighlights";
import DebunkingMyths from "@/sections/DebunkingMyths";
import Footer from "@/sections/Footer";
import GalleryPhoto from "@/sections/GalleryPhoto";
import HeroSection from "@/sections/HeroSection";

function HomePage() {
  return (
    <main>
      <div className="block lg:hidden">
        <LoaderWrapper />
      </div>
      {/* We remove 'hidden' so mobile users who passed the troll can see it */}
      <div className="block">
        <HeroSection />
        <AboutSection />

        {/* If you want to hide specific sections on mobile but keep them on Desktop, 
            keep 'hidden lg:block' ONLY on those specific components */}
        <div className="hidden lg:block">
          <CulturalHighlights />
          <DebunkingMyths />
          <GalleryPhoto />
        </div>

        <Footer />
      </div>
    </main>
  );
}

export default HomePage;

/* 

"use client";

import MobileLoader from "@/components/MobileLoader";
import { AboutSection } from "@/sections/AboutSection";
import CulturalHighlights from "@/sections/culturalHighlights";
import DebunkingMyths from "@/sections/DebunkingMyths";
import Footer from "@/sections/Footer";
import GaleyPhoto from "@/sections/GaleryPhoto";
import HeroSection from "@/sections/HeroSection";
import { useSearchParams } from "next/navigation";

function HomePage() {
  const searchParams = useSearchParams();
  const isLoading = searchParams.get("loading") === "true";

  return (
    <main>
      <div className="block lg:hidden">{isLoading && <MobileLoader />}</div>
      {/* We remove 'hidden' so mobile users who passed the troll can see it 
      <div className="block">
        <HeroSection />
        <AboutSection />

        {/* If you want to hide specific sections on mobile but keep them on Desktop, 
            keep 'hidden lg:block' ONLY on those specific components 
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


*/
