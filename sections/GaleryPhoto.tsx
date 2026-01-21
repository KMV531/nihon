"use client";

import DomeGallery from "@/components/DomeGallery";
import Heading from "@/components/Heading";

export default function GaleyPhoto() {
  return (
    <main className="flex flex-col space-y-8 items-center justify-center">
      <Heading title="SNAPSHOTS OF JAPAN" title2="— Nihon no sunappushotto" />
      <div style={{ width: "95vw", height: "100vh" }}>
        <DomeGallery
          fit={0.8}
          minRadius={600}
          maxVerticalRotationDeg={0}
          segments={34}
          dragDampening={2}
          grayscale={false}
        />
      </div>
    </main>
  );
}
