"use client";

import { useState, useEffect } from "react";

const Loader = () => {
  const [loading, setLoading] = useState(true);

  // 1. Gérer le timer
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  // 2. Gérer le scroll de manière isolée (le plus fiable)
  useEffect(() => {
    if (loading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Optionnel : Nettoyage si le composant est démonté brutalement
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [loading]); // S'exécute à chaque fois que 'loading' change

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-9999 bg-black flex flex-col items-center justify-center">
      {/* Conteneur de tes 4 persos */}
      <div className="flex gap-4 mb-8">
        <img src="/images/gifs/aqua.gif" alt="dance" className="w-24 h-24" />
        <img
          src="/images/gifs/hidamari-sketch-miyako.gif"
          alt="dance"
          className="w-24 h-24"
        />
        <img
          src="/images/gifs/hsr-evernight-dance.gif"
          alt="dance"
          className="w-24 h-24"
        />
        <img src="/images/gifs/osaka.gif" alt="dance" className="w-24 h-24" />
      </div>

      {/* Ton texte de chargement */}
      <p className="text-white font-mono animate-pulse text-lg">
        Loading sushis...
      </p>
    </div>
  );
};

export default Loader;
