"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button if page is scrolled more than 400px
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`fixed bottom-8 right-8 z-50 transition-all duration-500 transform ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "translate-y-20 opacity-0 pointer-events-none"
      }`}
    >
      <button
        onClick={scrollToTop}
        className="backdrop-blur-lg p-4 rounded-full shadow-2xl hover:bg-white transition-colors group cursor-pointer"
        aria-label="Back to top"
      >
        <Image
          src={"/icons/tori-gate-icon.png"}
          alt="Torii Gate Icon"
          width={45}
          height={45}
        />

        {/* Tooltip for the "Summit" vibe */}
        <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-black text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap uppercase tracking-tighter">
          Ascend
        </span>
      </button>
    </div>
  );
};

export default ScrollToTop;
