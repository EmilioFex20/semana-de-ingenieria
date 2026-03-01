import { Reveal } from "@/components/reveal";
import { TeamCard } from "@/components/team-card";

interface EquipoRepresentativosProps {
  title: string;
  slug: string;
  description: string;
  image: string;
}

const EquipoRepresentativos: EquipoRepresentativosProps[] = [
  {
    title: "FoxCoding",
    slug: "foxcoding",
    description:
      "Equipo de programación competitiva que impulsa la comunidad de estudiantes que “desarrollan el futuro” mediante retos, competencias y proyectos.",
    image: "/logos/FoxCoding.png",
  },
  {
    title: "CMB",
    slug: "cmb",
    description:
      "Equipo multidisciplinario que diseña, fabrica y compite con un vehículo todo terreno en Baja SAE International, combinando innovación y trabajo en equipo.",
    image: "/logos/Cmb.png",
  },
  {
    title: "FoxForce",
    slug: "foxforce",
    description:
      "Equipo multidisciplinario enfocado en el diseño, análisis, pruebas y manufactura de un avión de carga a radio control para competir internacionalmente.",
    image: "/logos/FoxForce.png",
  },
  {
    title: "FoxRobotics",
    slug: "foxrobotics",
    description:
      "Grupo estudiantil dedicado a robótica y STEM, orientado a competencias y proyectos de innovación e investigación para destacar a nivel nacional e internacional.",
    image: "/logos/FoxRobotics.png",
  },
  {
    title: "SeaFox",
    slug: "seafox",
    description:
      "Equipo de robótica submarina (fundado en 2016) que diseña y manufactura un ROV para el MATE ROV World Championship, promoviendo STEM y tecnología de impacto.",
    image: "/logos/SeaFox.png",
  },
];

export default function EquiposRepresentativos() {
  return (
    <div className="relative w-full h-full bg-white my-10">
      <Reveal className="w-5/6 lg:w-4/6 mx-auto text-black" delay={0}>
        <h1 className="text-3xl md:text-5xl font-bold text-center">
          Equipos Representativos
        </h1>
      </Reveal>
      <div className="flex flex-col gap-30 w-5/6 lg:w-4/6 mx-auto my-20 md:my-30 text-black">
        {EquipoRepresentativos.map((equipo, idx) => (
          <TeamCard
            key={equipo.slug}
            id={equipo.slug}
            title={equipo.title}
            description={equipo.description}
            image={equipo.image}
            reversed={idx % 2 === 1}
          />
        ))}
      </div>
    </div>
  );
}
