"use client";

import { useEffect, useState } from "react";

const MobileLoader = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [opacity, setOpacity] = useState(1);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    // 1. The Percentage Logic: Jump to random-ish values
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100;
        // Jumps of 12, 33, etc. to make it look "busy"
        const next = prev + Math.floor(Math.random() * 25) + 5;
        return next > 100 ? 100 : next;
      });
    }, 800); // Speed of the jumps

    // 2. The Close Logic
    const timer = setTimeout(() => {
      setOpacity(0);
      setTimeout(() => {
        setIsVisible(false);
        document.body.style.overflow = "auto";
      }, 500);
    }, 7000);

    return () => {
      document.body.style.overflow = "auto";
      clearTimeout(timer);
      clearInterval(progressInterval);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      style={{ transition: "opacity 0.5s ease-in-out", opacity: opacity }}
      className="fixed inset-0 z-9999 bg-black flex flex-col items-center justify-center p-6"
    >
      <div className="w-full max-w-xs flex flex-col items-center">
        {/* The Bubble */}
        <div className="relative capitalize bg-white text-black px-6 py-3 rounded-2xl font-bold text-sm text-center shadow-[0_0_20px_rgba(255,255,255,0.3)] mb-8 animate-pulse">
          Compressing Developer&apos;s Ego to fit screen...
          {/* Triangle tip for the bubble */}
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[10px] border-t-white"></div>
        </div>

        {/* The Progress Bar Container */}
        <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden mb-4">
          <div
            className="h-full bg-yellow-400 transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* The Percentage Text */}
        <div className="font-mono text-yellow-400 text-2xl font-black">
          {progress}%
        </div>

        <div className="mt-2 text-white/70 text-[10px] uppercase tracking-widest animate-pulse">
          Optimizing Layout Chaos
        </div>
      </div>
    </div>
  );
};

export default MobileLoader;
