import HeroImage from "@/components/hero-image";
import CircuitLines from "@/components/circuit-lines";
import { CustomCard } from "@/components/custom-card";
import { Continuous3Carousel } from "@/components/custom-carousel";
import { ScheduleList } from "@/components/schedule-list";

export default function Home() {
  return (
    <>
      <div className="flex justify-center font-sans bg-[#0146e9] md:bg-white text-black">
        <div className="w-full md:w-4/6 h-full md:my-15">
          <CircuitLines />
          <HeroImage />
        </div>
      </div>
      <div className="relative w-full h-full bg-white z-11 pt-10">
        <div className="w-5/6 md:w-4/6 mx-auto mt-5 text-black">
          <h2 className="text-2xl md:text-4xl font-bold text-start mb-2">
            Semana de Ingeniería 2026
          </h2>
          <p className="text-lg md:text-xl text-start mx-auto opacity-55">
            Innovación, ingeniería y colaboración en un mismo espacio
          </p>
        </div>
        <div className="w-5/6 md:w-4/6 mx-auto my-30 text-black">
          <h2 className="text-3xl md:text-5xl md:w-7/12 font-bold text-center mx-auto mb-5">
            Un espacio donde la ingeniería se conecta con la innovación, la
            industria y la sociedad.
          </h2>
          <p className="text-xl md:text-2xl text-center mx-auto opacity-55">
            Durante dos días, estudiantes, docentes y empresas se reúnen para
            compartir proyectos, ideas y experiencias que reflejan el impacto de
            la ingeniería en el mundo real.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-5/6 md:w-4/6 mx-auto my-10">
          <CustomCard />
          <CustomCard
            title="Participar en Expo Proyectos"
            description="Presenta proyectos académicos, prototipos o ideas innovadoras desarrolladas por estudiantes. Un espacio para compartir, recibir retroalimentación y mostrar el talento que se forma en ingeniería."
          />
          <CustomCard
            title="Participar como empresa"
            description="Vincúlate con estudiantes y docentes a través de charlas, retos, exposiciones o patrocinios. La Semana de Ingeniería es una oportunidad para acercarte al talento universitario y a la comunidad académica."
          />
        </div>
        <div className="w-5/6 md:w-4/6 mx-auto my-30 text-black">
          <h2 className="text-2xl md:text-4xl font-bold text-start mx-auto mb-5">
            CONOCE A NUESTROS EQUIPOS REPRESENTATIVOS
          </h2>
          <p className="text-lg md:text-xl text-start mx-auto opacity-55">
            Los equipos representativos de ingeniería participan activamente en
            eventos académicos, competencias y actividades de formación,
            fortaleciendo el aprendizaje práctico y el trabajo colaborativo.
          </p>
        </div>
      </div>
      <div className="mb-10">
        <Continuous3Carousel />
      </div>
      <div className="w-5/6 md:w-4/6 mx-auto my-30 text-black">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-start mb-5">
              Horario 19 de marzo
            </h2>
          </div>

          <div>
            <ScheduleList
              items={[
                { time: "8:40 AM", title: "Inauguración" },
                { time: "9:30 AM", title: "Conferencia: IA aplicada" },
                { time: "10:20 AM", title: "Receso" },
                { time: "11:00 AM", title: "Panel: Industria y academia" },
                { time: "12:10 PM", title: "Expo Proyectos" },
                { time: "1:00 PM", title: "Cierre" },
              ]}
            />
          </div>
        </div>
      </div>
    </>
  );
}
