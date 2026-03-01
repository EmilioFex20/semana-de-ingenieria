"use client";

import { useEffect, useRef, useState } from "react";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  /** delay en ms */
  delay?: number;
  /** cuanto del elemento debe entrar para disparar (0 a 1) */
  threshold?: number;
  /** si quieres que se repita cada vez que sale/entra */
  once?: boolean;
};

export function Reveal({
  children,
  className = "",
  delay = 0,
  threshold = 0.15,
  once = true,
}: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.unobserve(el);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        // dispara un poquito antes de que llegue al centro
        rootMargin: "0px 0px -10% 0px",
      },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, once]);

  return (
    <div
      ref={ref}
      className={[
        "transition-all duration-700 ease-out will-change-transform",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
        className,
      ].join(" ")}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
