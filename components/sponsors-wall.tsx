"use client";

import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

type Sponsor = {
  name: string;
  logo: string;
};

export function SponsorsWall({ sponsors }: { sponsors: Sponsor[] }) {
  return (
    <section className="w-full">
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl md:text-4xl font-bold text-center">
          Patrocinadores confirmados
        </h2>
        <p className="text-base md:text-xl text-center text-black/60">
          Gracias por impulsar la Semana de Ingeniería 2026
        </p>
      </div>

      <div className=" grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {sponsors.map((s) => {
          const isRound =
            s.name.toLowerCase() === "creative labs" ||
            s.name.toLowerCase() === "rockon gym";

          return (
            <div
              key={s.name}
              className={cn(
                "mx-auto flex items-center justify-center",
                isRound ? "h-full w-full" : "h-full w-full",
              )}
            >
              <Image
                src={s.logo}
                alt={s.name}
                width={300}
                height={300}
                className={cn(
                  "object-contain",
                  isRound ? "rounded-full h-full w-full" : "h-full w-auto",
                )}
              />
            </div>
          );
        })}
      </div>

      <div className="mt-10 text-center">
        <Link
          href="#paquetes"
          className="text-sm md:text-base font-semibold text-brand hover:underline"
        >
          ¿Tu empresa quiere aparecer aquí? Ver paquetes
        </Link>
      </div>
    </section>
  );
}
