"use client";

import { useState, useEffect } from "react";

const Loader = () => {
  const [isVisible, setIsVisible] = useState(true); // Manages presence in the DOM
  const [opacity, setOpacity] = useState(1); // Manages the visual fade effect
  const [phrase, setPhrase] = useState(
    "DANCING SPEEDS UP THE LOADING. TRUST US, WE CHECKED.",
  );

  useEffect(() => {
    // 1. Disable scrolling when the component mounts
    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      // 2. Trigger the visual fade-out (opacity)
      setOpacity(0);

      // 3. Wait for the transition to finish (e.g., 500ms) before removing from DOM and re-enabling scroll
      setTimeout(() => {
        setIsVisible(false);
        document.body.style.overflow = "auto";
      }, 500);
    }, 6000); // Total time the characters dance

    return () => {
      // Cleanup: ensure scroll is restored and timers are cleared
      document.body.style.overflow = "auto";
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    // Switch to the second funny phrase halfway through (after 2.5 seconds)
    const phraseTimer = setTimeout(() => {
      setPhrase("IF YOU'RE BORED, YOU CAN DANCE WITH US. NO ONE IS WATCHING.");
    }, 3000);

    // Keep your main loader exit logic here (4000ms)
    // ...

    return () => clearTimeout(phraseTimer);
  }, []);

  if (!isVisible) return null;

  return (
    <div
      style={{ transition: "opacity 0.5s ease-in-out", opacity: opacity }}
      className="fixed inset-0 z-9999 bg-black flex flex-col items-center justify-center"
    >
      <div className="relative mt-10">
        {/* The Bubble */}
        <div className="bg-white text-black px-6 py-3 rounded-2xl font-bold text-center shadow-[0_0_20px_rgba(255,255,255,0.3)] mb-1 animate-bounce">
          {phrase}
          {/* The "Tail" of the bubble (the triangle pointing down to the cats) */}
          <div
            className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 
      border-l-[10px] border-l-transparent 
      border-t-[15px] border-t-white 
      border-r-[10px] border-r-transparent"
          ></div>
        </div>
      </div>

      {/* Conteneur de tes 4 persos */}
      <div className="flex gap-4 mb-8">
        <img
          src="/images/gifs/hidamari-sketch-miyako.gif"
          alt="dance"
          className="w-30 h-30"
        />
        <img src="/images/gifs/aqua.gif" alt="dance" className="w-30 h-30" />
        <img src="/images/gifs/osaka.gif" alt="dance" className="w-30 h-30" />
        <img
          src="/images/gifs/hsr-evernight-dance.gif"
          alt="dance"
          className="w-30 h-30"
        />
      </div>
    </div>
  );
};

export default Loader;
