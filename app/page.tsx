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
      {/* ── Hero ── */}
      <section className="flex justify-center font-sans bg-brand lg:bg-white text-foreground">
        <div className="w-full lg:w-4/6 h-full lg:my-15">
          <CircuitLines />
          <HeroImage />
        </div>
      </section>

      {/* ── Sobre ── */}
      <section id="sobre" className="bg-white pt-16 pb-8">
        <Reveal className="w-5/6 lg:w-4/6 mx-auto" delay={0}>
          <p className="text-sm font-semibold uppercase tracking-widest text-brand mb-2">
            Semana de Ingenieria 2026
          </p>
          <h2 className="text-2xl md:text-4xl font-bold text-balance">
            Semana de Ingenieria 2026
          </h2>
          <p className="text-lg md:text-xl mt-2 text-muted-foreground leading-relaxed">
            Innovacion, ingenieria y colaboracion en un mismo espacio
          </p>
        </Reveal>

        <Reveal className="w-5/6 lg:w-4/6 mx-auto mt-20 md:mt-28" delay={100}>
          <h3 className="text-3xl md:text-5xl lg:w-7/12 font-bold text-center mx-auto mb-6 text-balance leading-tight">
            Un espacio donde la ingenieria se conecta con la innovacion, la
            industria y la sociedad.
          </h3>
          <p className="text-lg md:text-xl text-center mx-auto text-muted-foreground leading-relaxed max-w-3xl">
            Durante dos dias, estudiantes, docentes y empresas se reunen para
            compartir proyectos, ideas y experiencias que reflejan el impacto de
            la ingenieria en el mundo real.
          </p>
        </Reveal>

        {/* Cards */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 w-5/6 lg:w-4/6 mx-auto mt-16">
          <Reveal delay={0}>
            <CustomCard />
          </Reveal>
          <Reveal delay={120}>
            <CustomCard
              title="Participar en Expo Proyectos"
              description="Presenta proyectos academicos, prototipos o ideas innovadoras desarrolladas por estudiantes. Un espacio para compartir, recibir retroalimentacion y mostrar el talento que se forma en ingenieria."
            />
          </Reveal>
          <Reveal delay={240}>
            <CustomCard
              title="Participar como empresa"
              description="Vinculate con estudiantes y docentes a traves de charlas, retos, exposiciones o patrocinios. La Semana de Ingenieria es una oportunidad para acercarte al talento universitario y a la comunidad academica."
            />
          </Reveal>
        </div>
      </section>

      {/* ── Equipos ── */}
      <section id="equipos" className="bg-white pt-16 pb-8">
        <Reveal className="w-5/6 lg:w-4/6 mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold mb-4 text-balance">
            Conoce a nuestros equipos representativos
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl">
            Los equipos representativos de ingenieria participan activamente en
            eventos academicos, competencias y actividades de formacion,
            fortaleciendo el aprendizaje practico y el trabajo colaborativo.
          </p>
        </Reveal>

        <div className="mt-12 mb-4">
          <Continuous3Carousel />
        </div>
      </section>

      {/* ── Horario ── */}
      <section id="horario" className="bg-white py-16">
        <div className="w-5/6 lg:w-4/6 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            <Reveal delay={0}>
              <p className="text-sm font-semibold uppercase tracking-widest text-brand mb-2">
                Programa
              </p>
              <h2 className="text-3xl md:text-5xl font-bold text-balance">
                Horario 19 de marzo
              </h2>
            </Reveal>

            <Reveal delay={120}>
              <ScheduleList
                items={[
                  { time: "8:40 AM", title: "Inauguracion" },
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
      </section>

      {/* ── Ubicacion / Contacto ── */}
      <section id="ubicacion" className="bg-white py-16">
        <div className="w-5/6 lg:w-4/6 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            <Reveal delay={0}>
              <p className="text-sm font-semibold uppercase tracking-widest text-brand mb-2">
                Ubicacion
              </p>
              <h2 className="text-3xl md:text-5xl font-bold text-center md:text-start mb-4 text-balance">
                CETYS Universidad - Campus Mexicali
              </h2>
              <p className="text-lg md:text-xl text-center md:text-start text-muted-foreground">
                CEID
              </p>
              <p className="text-lg md:text-xl text-center md:text-start text-muted-foreground">
                Calzada Cetys s/n Colonia Rivera
              </p>
              <Button
                variant="default"
                className="mt-6 mx-auto md:mx-0 block w-full md:w-auto text-base md:text-lg px-6 py-3"
              >
                {"Contactanos \u2192"}
              </Button>
            </Reveal>

            <Reveal delay={120}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3359.1549253595845!2d-115.40957592375116!3d32.6553211901944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d7719705fae145%3A0x764e0e1885300e56!2sCEID%20Centro%20de%20Excelencia%20en%20innovacion%20y%20Dise%C3%B1o!5e0!3m2!1sen!2smx!4v1772355879392!5m2!1sen!2smx"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-xl shadow-sm"
                title="Mapa de ubicacion CEID CETYS Universidad"
              ></iframe>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
