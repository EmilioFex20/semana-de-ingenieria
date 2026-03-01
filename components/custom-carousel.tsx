"use client";
import Link from "next/link";
import Image from "next/image";

import * as React from "react";
import AutoScroll from "embla-carousel-auto-scroll";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

type Slide = { src: string; alt: string; slug: string };

const slides: Slide[] = [
  { src: "/logos/FoxCoding.png", alt: "Logo de FoxCoding", slug: "foxcoding" },
  {
    src: "/logos/FoxRobotics.png",
    alt: "Logo de FoxRobotics",
    slug: "foxrobotics",
  },
  { src: "/logos/FoxForce.png", alt: "Logo de FoxForce", slug: "foxforce" },
  { src: "/logos/Cmb.png", alt: "Logo de CMB", slug: "cmb" },
  { src: "/logos/SeaFox.png", alt: "Logo de SeaFox", slug: "seafox" },
];

function slideStyle(offset: number) {
  if (offset === 0) return "opacity-100 scale-100 z-20";
  if (offset === -1 || offset === 1) return "opacity-45 scale-95 z-10";
  return "opacity-45 scale-90 z-0";
}

export function Continuous3Carousel() {
  const [api, setApi] = React.useState<ReturnType<typeof setApi> | null>(null);
  const [selected, setSelected] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;
    const onSelect = () => setSelected(api.selectedScrollSnap());
    onSelect();
    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <Carousel
      setApi={setApi as any}
      opts={{ loop: true, align: "center" }}
      plugins={[
        AutoScroll({
          speed: 1.2,
          stopOnInteraction: false,
          stopOnMouseEnter: true,
        }),
      ]}
      className="w-full"
      aria-label="Carrusel de equipos representativos"
    >
      <CarouselContent className="-ml-4 items-center">
        {slides.map((s, i) => {
          const len = slides.length;
          const raw = i - selected;
          const norm = ((raw % len) + len) % len;
          const offset = norm > len / 2 ? norm - len : norm;

          return (
            <CarouselItem key={s.src} className="pl-4 basis-2/3 lg:basis-1/3">
              <Link
                href={`/equipos-representativos#${s.slug}`}
                className="block focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand rounded-2xl"
                aria-label={`Ir a ${s.alt}`}
              >
                <div
                  className={[
                    "transition-all duration-300 ease-out",
                    "rounded-2xl overflow-hidden shadow-lg",
                    "h-[220px] md:h-[280px]",
                    slideStyle(offset),
                  ].join(" ")}
                >
                  <Image
                    src={s.src}
                    alt={s.alt}
                    width={400}
                    height={280}
                    className="h-full w-full object-cover"
                    style={{ width: "100%", height: "100%" }}
                    draggable={false}
                  />
                </div>
              </Link>
            </CarouselItem>
          );
        })}
      </CarouselContent>
    </Carousel>
  );
}
