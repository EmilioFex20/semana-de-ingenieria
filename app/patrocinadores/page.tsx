"use client";

import { Reveal } from "@/components/reveal";
import { SponsorPricingTable } from "@/components/sponsor-pricing-table";
import { SponsorsWall } from "@/components/sponsors-wall";

interface Sponsor {
  name: string;
  logo: string;
}

const confirmedSponsors: Sponsor[] = [
  { name: "Tutuli Truck", logo: "/sponsors/Tutuli-Truck.jpg" },
  { name: "Spark technologies", logo: "/sponsors/Spark.png" },
  { name: "Trimble", logo: "/sponsors/Trimble.png" },
  { name: "Mangiamos", logo: "/sponsors/Mangiamos.jpg" },
  { name: "RockOn Gym", logo: "/sponsors/RockOn-Climbing-Gym.jpg" },
  { name: "Xquadrone", logo: "/sponsors/Xquadrone.png" },
  { name: "Costco", logo: "/sponsors/Costco.png" },
  { name: "Creative Labs", logo: "/sponsors/Creative-Labs.jpg" },
];

export default function Sponsors() {
  return (
    <div className="relative w-full h-full bg-white my-10">
      <div className="w-5/6 lg:w-4/6 mx-auto my-10">
        <SponsorsWall sponsors={confirmedSponsors} />
      </div>
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
      <div className="w-5/6 lg:w-4/6 h-full mx-auto">
        <SponsorPricingTable />
      </div>
    </div>
  );
}
