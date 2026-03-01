"use client";

import { Reveal } from "@/components/reveal";
import { SponsorTiers } from "@/components/sponsorTiers";

export default function Sponsors() {
  return (
    <div className="relative w-full h-full bg-white my-10">
      {/* <Reveal className="w-5/6 lg:w-4/6 mx-auto" delay={0}>
        <h1 className="text-2xl md:text-4xl font-bold text-start">
          Patrocinadores
        </h1>
      </Reveal> */}
      <Reveal className="w-5/6 lg:w-4/6 mx-auto text-black" delay={0}>
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-5">
          ¿Quieres apoyar como patrocinador?
        </h2>
        <p className="text-lg md:text-xl text-start my-15 mx-auto opacity-55">
          Si deseas donar o realizar algún tipo de patrocinio, contáctate con
          nosotros a través del correo electrónico. Con tu apoyo contribuyes al
          desarrollo de actividades académicas, formativas y de vinculación para
          la comunidad estudiantil.
        </p>
      </Reveal>
      <div className="w-5/6 lg:w-4/6 mx-auto">
        <SponsorTiers />
      </div>
    </div>
  );
}
