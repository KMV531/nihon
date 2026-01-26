"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const SakuraCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = (canvas as HTMLCanvasElement).getContext("2d");
    if (!ctx) return;

    // Initialisation des dimensions
    let cw = (canvas.width = window.innerWidth);
    let ch = (canvas.height = window.innerHeight);

    const petalCount = 60; // Nombre de pétales

    interface Petal {
      x: number;
      y: number;
      scale: number;
      rotate: number;
      opacity: number;
      horizontalSwing: number;
    }

    const petals: Petal[] = [];

    // Image du pétale (Utilise un PNG transparent)
    const petalImg = new Image();
    petalImg.src = "/petale-1.png";

    // Création des objets pétales avec des propriétés initiales aléatoires
    for (let i = 0; i < petalCount; i++) {
      petals.push({
        x: Math.random() * cw,
        y: Math.random() * ch, // Répartis sur toute la hauteur au début
        scale: Math.random() * 0.4 + 0.2,
        rotate: Math.random() * 360,
        opacity: Math.random() * 0.6 + 0.4,
        horizontalSwing: Math.random() * 2 + 1, // Vitesse du balancement
      });
    }

    // Fonction de dessin (efface et redessine)
    const draw = () => {
      ctx.clearRect(0, 0, cw, ch);

      petals.forEach((p) => {
        ctx.save();
        ctx.globalAlpha = p.opacity;
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotate * Math.PI) / 180);

        // On dessine l'image centrée sur ses coordonnées
        const size = 30 * p.scale;
        ctx.drawImage(petalImg, -size / 2, -size / 2, size, size);

        ctx.restore();
      });
    };

    // --- ANIMATIONS GSAP ---

    petals.forEach((p) => {
      // 1. Chute infinie
      gsap.to(p, {
        y: ch + 50,
        duration: Math.random() * 8 + 6,
        ease: "none",
        repeat: -1,
        onRepeat: () => {
          p.y = -50;
          p.x = Math.random() * cw;
        }, // Reset en haut
      });

      // 2. Balancement horizontal (effet de vent)
      gsap.to(p, {
        x: "+=" + (Math.random() * 100 - 50),
        duration: Math.random() * 3 + 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // 3. Rotation 3D simulée
      gsap.to(p, {
        rotate: "+=360",
        duration: Math.random() * 5 + 3,
        repeat: -1,
        ease: "none",
      });
    });

    // Le Ticker : Le moteur qui force le rendu à chaque frame
    const tickerHandler = () => draw();
    gsap.ticker.add(tickerHandler);

    // Gestion du redimensionnement
    const handleResize = () => {
      cw = canvas.width = window.innerWidth;
      ch = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    // Nettoyage à la fermeture du composant
    return () => {
      window.removeEventListener("resize", handleResize);
      gsap.ticker.remove(tickerHandler);
      gsap.killTweensOf(petals);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none", // Laisse passer les clics
        zIndex: 10, // Par dessus le background mais sous tes textes si besoin
      }}
    />
  );
};

export default SakuraCanvas;
