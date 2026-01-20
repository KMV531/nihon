"use client";

import DomeGallery from "@/components/DomeGallery";

export default function GaleyPhoto() {
  return (
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
  );
}
