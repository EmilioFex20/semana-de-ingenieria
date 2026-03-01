import { Reveal } from "@/components/reveal";
import { TeamCard } from "@/components/team-card";

interface EquipoRepresentativosProps {
  title: string;
  description: string;
  image: string;
}

const EquipoRepresentativos: EquipoRepresentativosProps[] = [
  {
    title: "FoxCoding",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et accusantium nam iure vero dignissimos sint est ipsum",
    image: "/logos/FoxCoding.png",
  },
  {
    title: "Cmb",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et accusantium nam iure vero dignissimos sint est ipsum",
    image: "/logos/Cmb.png",
  },
  {
    title: "FoxForce",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et accusantium nam iure vero dignissimos sint est ipsum",
    image: "/logos/FoxForce.png",
  },
  {
    title: "FoxRobotics",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et accusantium nam iure vero dignissimos sint est ipsum",
    image: "/logos/FoxRobotics.png",
  },
  {
    title: "SeaFox",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et accusantium nam iure vero dignissimos sint est ipsum",
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
            key={idx}
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
