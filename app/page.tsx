import HeroImage from "@/components/hero-image";
import CircuitLines from "@/components/circuit-lines";
import { CustomCard } from "@/components/custom-card";
import { Continuous3Carousel } from "@/components/custom-carousel";
import { ScheduleList } from "@/components/schedule-list";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";

export default function Home() {
  return (
    <>
      <div className="flex justify-center font-sans bg-[#0146e9] lg:bg-white text-black">
        <div className="w-full lg:w-4/6 h-full lg:my-15">
          <CircuitLines />
          <HeroImage />
        </div>
      </div>
      <div className="relative w-full h-full bg-white z-11 pt-10">
        <Reveal className="w-5/6 lg:w-4/6 mx-auto mt-5 text-black" delay={0}>
          <h2 className="text-2xl md:text-4xl font-bold text-start mb-2">
            Semana de Ingeniería 2026
          </h2>
          <p className="text-lg md:text-xl text-start mx-auto opacity-55">
            Innovación, ingeniería y colaboración en un mismo espacio
          </p>
        </Reveal>
        <Reveal className="w-5/6 lg:w-4/6 mx-auto my-30 text-black" delay={100}>
          <h2 className="text-3xl md:text-5xl lg:w-7/12 font-bold text-center mx-auto mb-5">
            Un espacio donde la ingeniería se conecta con la innovación, la
            industria y la sociedad.
          </h2>
          <p className="text-xl md:text-2xl text-center mx-auto opacity-55">
            Durante dos días, estudiantes, docentes y empresas se reúnen para
            compartir proyectos, ideas y experiencias que reflejan el impacto de
            la ingeniería en el mundo real.
          </p>
        </Reveal>
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-10 w-5/6 lg:w-4/6 mx-auto my-10">
          <Reveal delay={0}>
            <CustomCard />
          </Reveal>
          <Reveal delay={120}>
            <CustomCard
              title="Participar en Expo Proyectos"
              description="Presenta proyectos académicos, prototipos o ideas innovadoras desarrolladas por estudiantes. Un espacio para compartir, recibir retroalimentación y mostrar el talento que se forma en ingeniería."
            />
          </Reveal>
          <Reveal delay={240}>
            <CustomCard
              title="Participar como empresa"
              description="Vincúlate con estudiantes y docentes a través de charlas, retos, exposiciones o patrocinios. La Semana de Ingeniería es una oportunidad para acercarte al talento universitario y a la comunidad académica."
            />
          </Reveal>
        </div>
        <Reveal className="w-5/6 lg:w-4/6 mx-auto my-30 text-black">
          <h2 className="text-2xl md:text-4xl font-bold text-start mx-auto mb-5">
            CONOCE A NUESTROS EQUIPOS REPRESENTATIVOS
          </h2>
          <p className="text-lg md:text-xl text-start mx-auto opacity-55">
            Los equipos representativos de ingeniería participan activamente en
            eventos académicos, competencias y actividades de formación,
            fortaleciendo el aprendizaje práctico y el trabajo colaborativo.
          </p>
        </Reveal>
      </div>
      <div className="mb-10">
        <Continuous3Carousel />
      </div>
      <div className="w-5/6 lg:w-4/6 mx-auto my-30 text-black">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <Reveal delay={0}>
            <h2 className="text-3xl md:text-5xl font-bold text-start mb-5">
              Horario 19 de marzo
            </h2>
          </Reveal>

          <Reveal delay={120}>
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
          </Reveal>
        </div>
      </div>
      <div className="w-5/6 lg:w-4/6 mx-auto my-30 text-black">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <Reveal delay={0}>
            <h2 className="text-3xl md:text-5xl font-bold text-center md:text-start mb-5">
              CETYS Universidad - Campus Mexicali
            </h2>
            <p className="text-lg md:text-xl text-center md:text-start mx-auto opacity-55">
              CEID
            </p>
            <p className="text-lg md:text-xl text-center md:text-start mx-auto opacity-55">
              Calzada Cetys s/n Colonia Rivera
            </p>
            <Button
              variant="default"
              className="mt-5 mx-auto md:mx-0 block w-full md:w-auto text-lg md:text-xl h-full"
            >
              Contactanos →
            </Button>
          </Reveal>

          <Reveal delay={120}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3359.1549253595845!2d-115.40957592375116!3d32.6553211901944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d7719705fae145%3A0x764e0e1885300e56!2sCEID%20Centro%20de%20Excelencia%20en%20innovacion%20y%20Dise%C3%B1o!5e0!3m2!1sen!2smx!4v1772355879392!5m2!1sen!2smx"
              width="100%"
              height="400"
              style={{ border: 0, marginLeft: "auto", marginRight: "auto" }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg"
            ></iframe>
          </Reveal>
        </div>
      </div>
    </>
  );
}
