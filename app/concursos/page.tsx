import { CustomCard } from "@/components/custom-card";
import { Reveal } from "@/components/reveal";

export default function Concursos() {
  return (
    <div className="w-full h-full bg-white my-10">
      <div className="flex flex-col gap-2 w-5/6 lg:w-4/6 mx-auto">
        <Reveal delay={0}>
          <h1 className="text-3xl md:text-5xl font-bold text-center">
            Concursos
          </h1>
        </Reveal>
        <Reveal delay={120}>
          <p className="text-base md:text-xl text-start text-black/60">
            Durante la Semana de Ingeniería, se llevarán a cabo diversos
            concursos que fomentan la creatividad, el trabajo en equipo y la
            aplicación de conocimientos en ingeniería. Estos concursos están
            diseñados para desafiar a los participantes a resolver problemas
            reales, desarrollar prototipos innovadores y demostrar sus
            habilidades en un entorno competitivo y colaborativo.
          </p>
        </Reveal>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-4 gap-6 w-5/6 lg:w-4/6 mx-auto mt-16">
        <Reveal delay={240}>
          <CustomCard
            title="Registro Concurso FoxRobotics MINISUMO"
            url="https://docs.google.com/forms/d/1LzJN9kjW-P7EhQb3tgmVwCHOdLofaLgkFVsLuNiUY9Q/viewform?edit_requested=true"
          />
        </Reveal>
        <Reveal delay={360}>
          <CustomCard
            title="Registro Concurso INGENIA -  Engineering What Matters"
            url="https://docs.google.com/forms/d/1WtnUp7fQ97MJbvdfvrE6OGwjMVZLpshVehXFyznDhWM/viewform?edit_requested=true"
          />
        </Reveal>
        <Reveal delay={480}>
          <CustomCard
            title="Registro Concurso Reto Estructural - Proyecto de Ingeniería"
            url="https://docs.google.com/forms/d/1eFtXyd7wIIQlOL803162lq0Cygb9pVHF-776YkF71xE/viewform?edit_requested=tr"
          />
        </Reveal>
        <Reveal delay={600}>
          <CustomCard
            title="Registro Concurso Lanza: ¡Que llegue más lejos!"
            url="https://docs.google.com/forms/d/13JUs2C4u6WxH1jSMYX_AKCjMwNuQZoW1YMNPf1zqbP4/viewform?edit_requested=true"
          />
        </Reveal>
      </div>
    </div>
  );
}
