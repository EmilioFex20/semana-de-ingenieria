"use client";

import * as React from "react";
import AutoScroll from "embla-carousel-auto-scroll";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

type Slide = { src: string; alt: string };

const slides: Slide[] = [
  { src: "/logos/FoxCoding.png", alt: "Logo de FoxCoding" },
  { src: "/logos/FoxRobotics.png", alt: "Logo de FoxRobotics" },
  { src: "/logos/FoxForce.png", alt: "Logo de FoxForce" },
  { src: "/logos/Cmb.png", alt: "Logo de CMB" },
  { src: "/logos/SeaFox.png", alt: "Logo de SeaFox" },
];

function slideStyle(offset: number) {
  if (offset === 0) return "opacity-100 scale-100 z-20";
  if (offset === -1 || offset === 1) return "opacity-45 scale-95 z-10";
  return "opacity-20 scale-90 z-0";
}

export function Continuous3Carousel() {
  const [api, setApi] = React.useState<any>(null);
  const [selected, setSelected] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;
    const onSelect = () => setSelected(api.selectedScrollSnap());
    onSelect();
    api.on("select", onSelect);
    return () => api.off("select", onSelect);
  }, [api]);

  return (
    <Carousel
      setApi={setApi}
      opts={{ loop: true, align: "center" }}
      plugins={[
        AutoScroll({
          speed: 1.2,
          stopOnInteraction: false,
          stopOnMouseEnter: true,
        }),
      ]}
      className="w-full"
    >
      <CarouselContent className="-ml-4 items-center">
        {slides.map((s, i) => {
          const len = slides.length;
          const raw = i - selected;
          const norm = ((raw % len) + len) % len;
          const offset = norm > len / 2 ? norm - len : norm;

          return (
            <CarouselItem key={s.src} className="pl-4 basis-2/3 md:basis-1/3">
              <div
                className={[
                  "transition-all duration-300 ease-out",
                  "rounded-2xl overflow-hidden shadow-xl",
                  "h-[220px] md:h-[280px]",
                  slideStyle(offset),
                ].join(" ")}
              >
                <img
                  src={s.src}
                  alt={s.alt}
                  className="h-full w-full object-cover"
                  draggable={false}
                />
              </div>
            </CarouselItem>
          );
        })}
      </CarouselContent>
    </Carousel>
  );
}
