"use client";

import { useSearchParams } from "next/navigation";
import MobileLoader from "./MobileLoader";
import { Suspense } from "react";

// This component handles the searchParams safely
function LoaderCheck() {
  const searchParams = useSearchParams();
  const isLoading = searchParams.get("loading") === "true";

  return isLoading ? <MobileLoader /> : null;
}

export default function LoaderWrapper() {
  return (
    <Suspense fallback={null}>
      <LoaderCheck />
    </Suspense>
  );
}
