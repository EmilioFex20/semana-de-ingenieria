"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function HeroImage() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Small delay to ensure smooth initial animation
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="relative w-full overflow-hidden rounded-lgDXx z-11"
      style={{
        transform: loaded ? "scale(1)" : "scale(0.95)",
        opacity: loaded ? 1 : 0,
        transition:
          "transform 0.8s cubic-bezier(0.16, 1, 0.3, 1), opacity 2s ease",
      }}
    >
      {/* Base image */}
      <Image
        src="/Image.png"
        alt="Semana de Ingenio - Engineering Week featuring various engineering disciplines"
        width={0}
        height={0}
        sizes="100vw"
        priority
        className="block"
        style={{
          width: "100%",
          height: "auto",
        }}
      />

      {/* Scan line effect */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundSize: "100% 4px",
          animation: loaded ? "scanline 8s linear infinite" : "none",
        }}
      />
    </div>
  );
}
