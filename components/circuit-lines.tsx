"use client";

import { useEffect, useState } from "react";

interface CircuitPath {
  d: string;
  delay: number;
  duration: number;
  strokeWidth?: number;
}

interface CircuitDot {
  cx: number;
  cy: number;
  r: number;
  delay: number;
}

const circuitPaths: CircuitPath[] = [
  // Top-left corner bracket
  {
    d: "M 0 290 L 30 270 L 190 270",
    delay: 0,
    duration: 1.2,
  },

  // Top traces going right
  { d: "M 80 0 L 120 75 L 200 75 L 220 90", delay: 0.3, duration: 1.5 },
  { d: "M 220 90 L 360 90 L 380 75 L 480 75", delay: 0.6, duration: 1.8 },
  { d: "M 480 75 L 530 75 L 560 95", delay: 1.0, duration: 1.2 },

  // Top-right corner bracket
  { d: "M 880 60 L 970 60", delay: 0.2, duration: 1, strokeWidth: 2 },
  { d: "M 990 30 L 990 120", delay: 0.25, duration: 1, strokeWidth: 2 },

  // Top-right traces
  {
    d: "M 800 105 L 870 105 L 890 120 L 940 120",
    delay: 0.4,
    duration: 1.6,
  },

  // Right side circuit lines
  {
    d: "M 970 150 L 970 250 L 940 280",
    delay: 0.5,
    duration: 1.4,
    strokeWidth: 2,
  },
  {
    d: "M 940 280 L 940 330 L 960 350",
    delay: 0.9,
    duration: 1.2,
    strokeWidth: 2,
  },

  // Center horizontal line (main spine)
  {
    d: "M 200 270 L 350 270 L 380 250 L 620 250 L 650 270 L 800 270",
    delay: 0.7,
    duration: 2.5,
    strokeWidth: 2,
  },

  // Left side branches
  { d: "M 0 180 L 140 180 L 180 210", delay: 0.4, duration: 1.3 },
  { d: "M 200 210 L 250 210 L 280 240", delay: 0.7, duration: 1.0 },
  { d: "M 100 320 L 160 320 L 200 350 L 300 350", delay: 0.6, duration: 1.6 },

  // Bottom branches
  { d: "M 400 350 L 500 350 L 530 380 L 600 380", delay: 0.8, duration: 1.5 },
  { d: "M 600 380 L 650 380 L 680 400 L 680 430", delay: 1.1, duration: 1.2 },

  // Bottom-left corner
  {
    d: "M 10 380 L 10 470 L 30 490",
    delay: 0.3,
    duration: 1.2,
    strokeWidth: 2.5,
  },
  { d: "M 30 490 L 80 490", delay: 0.5, duration: 0.8, strokeWidth: 2 },
  // Bottom-left diagonal hatch marks
  { d: "M 30 450 L 50 470", delay: 0.6, duration: 0.4, strokeWidth: 2 },
  { d: "M 45 450 L 65 470", delay: 0.65, duration: 0.4, strokeWidth: 2 },
  { d: "M 60 450 L 80 470", delay: 0.7, duration: 0.4, strokeWidth: 2 },
  { d: "M 75 450 L 95 470", delay: 0.75, duration: 0.4, strokeWidth: 2 },

  // Bottom-right corner
  {
    d: "M 920 490 L 990 490 L 990 400",
    delay: 0.35,
    duration: 1.2,
    strokeWidth: 2,
  },
  { d: "M 870 490 L 920 490", delay: 0.45, duration: 0.8, strokeWidth: 2 },
];

const circuitDots: CircuitDot[] = [
  { cx: 120, cy: 180, r: 3.5, delay: 0.3 },
  { cx: 200, cy: 75, r: 3, delay: 0.6 },
  { cx: 480, cy: 75, r: 3, delay: 1.0 },
  { cx: 940, cy: 120, r: 3.5, delay: 0.8 },
  { cx: 970, cy: 250, r: 3, delay: 0.9 },
  { cx: 200, cy: 210, r: 3, delay: 0.7 },
  { cx: 300, cy: 350, r: 3, delay: 1.0 },
  { cx: 600, cy: 380, r: 3.5, delay: 1.1 },
  { cx: 700, cy: 130, r: 3, delay: 1.2 },
  { cx: 350, cy: 270, r: 2.5, delay: 0.9 },
  { cx: 650, cy: 270, r: 2.5, delay: 1.1 },
  { cx: 200, cy: 270, r: 3, delay: 0.7 },
  { cx: 800, cy: 270, r: 3, delay: 1.3 },
];

export default function CircuitLines() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <svg
      viewBox="0 0 1000 500"
      className="absolute inset-0 w-full lg:h-4/6 2xl:h-11/12 z-10 hidden lg:block"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Glow filter for lines */}
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Stronger glow for dots */}
        <filter id="dotGlow" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="4" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Traveling light gradient */}
        <linearGradient id="travelingLight" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(255,255,255,0)" />
          <stop offset="45%" stopColor="rgba(255,255,255,0)" />
          <stop offset="50%" stopColor="rgba(255,255,255,1)" />
          <stop offset="55%" stopColor="rgba(255,255,255,0)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </linearGradient>
      </defs>

      {/* Circuit paths with draw-in animation */}
      {circuitPaths.map((path, i) => (
        <path
          key={`path-${i}`}
          d={path.d}
          fill="none"
          stroke="#0146e9"
          strokeWidth={path.strokeWidth || 2}
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#glow)"
          className="path"
          style={{
            strokeDasharray: 1000, // Longitud de la línea
            strokeDashoffset: 1000, // Comienza oculta
            animation: `dash ${path.duration}s linear forwards ${path.delay}s`, // Agrega duración y retraso
            opacity: mounted ? 1 : 0,
          }}
        />
      ))}

      {/* Circuit junction dots */}
      {circuitDots.map((dot, i) => (
        <g key={`dot-${i}`}>
          <circle
            cx={dot.cx}
            cy={dot.cy}
            r={dot.r}
            fill="#0146e9"
            filter="url(#dotGlow)"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "scale(1)" : "scale(0)",
              transformOrigin: `${dot.cx}px ${dot.cy}px`,
              transition: `opacity 0.4s ease ${dot.delay + 0.5}s, transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) ${dot.delay + 0.5}s`,
            }}
          />
          {/* Pulsing ring around dots */}
          <circle
            cx={dot.cx}
            cy={dot.cy}
            r={dot.r + 2}
            fill="none"
            stroke="#0146e9"
            strokeWidth={1}
            className={mounted ? "animate-circuit-pulse" : ""}
            style={{
              opacity: mounted ? 1 : 0,
            }}
          />
        </g>
      ))}

      {/* Traveling light particles along select paths */}
      {mounted && (
        <>
          <circle r="2" fill="#0146e9" filter="url(#dotGlow)" opacity="0.9">
            <animateMotion
              dur="4s"
              repeatCount="indefinite"
              begin="2s"
              path="M 200 270 L 350 270 L 380 250 L 620 250 L 650 270 L 800 270"
            />
          </circle>
          {/* Arriba */}
          <circle r="1.5" fill="#0146e9" filter="url(#dotGlow)" opacity="0.8">
            <animateMotion
              dur="3s"
              repeatCount="indefinite"
              begin="2.5s"
              path="M 80 0 L 120 75 L 200 75 L 220 90 M 220 90 L 360 90 L 380 75 L 480 75 M 480 75 L 530 75 L 560 95"
            />
          </circle>
          <circle r="1.5" fill="#0146e9" filter="url(#dotGlow)" opacity="0.7">
            <animateMotion
              dur="3s"
              repeatCount="indefinite"
              begin="2.8s"
              path="M 100 320 L 160 320 L 200 350 L 300 350 L 400 350 L 500 350 L 530 380 L 600 380"
            />
          </circle>
        </>
      )}
    </svg>
  );
}
