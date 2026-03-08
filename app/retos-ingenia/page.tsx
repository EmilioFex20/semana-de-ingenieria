"use client";

import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";

const retos = [
  {
    id: 1,
    title: "From Waste to Value",
    subtitle:
      "Innovación para reducir contaminación y promover consumo responsable",
    difficulty: "Intermedio",
    type: "Open Innovation",
    subjects: [
      "Sustentabilidad",
      "Residuos",
      "Economía circular",
      "Comunidad",
      "Industria",
      "ODS 12",
    ],
    pdfPreview:
      "https://drive.google.com/file/d/1zXLyzZxA_qVW2FHOhSwuPBsmRWF7piw1/preview",
    pdfOpen:
      "https://drive.google.com/file/d/1zXLyzZxA_qVW2FHOhSwuPBsmRWF7piw1/view",
    description:
      "Diseña una solución innovadora que ayude a reducir, reutilizar o transformar residuos, promoviendo prácticas de producción y consumo responsables alineadas con el ODS 12.",
  },
  {
    id: 2,
    title: "Mind Matters",
    subtitle: "Prevención y bienestar en jóvenes",
    difficulty: "Intermedio",
    type: "Animación / Videojuego o Software (Prototipo)",
    subjects: ["Salud", "Educación", "Bienestar", "Juventud", "ODS 3", "ODS 4"],
    pdfPreview:
      "https://drive.google.com/file/d/16Tp5AqmigEOuoPF0wr2VnI9mbEKNMpYg/preview",
    pdfOpen:
      "https://drive.google.com/file/d/16Tp5AqmigEOuoPF0wr2VnI9mbEKNMpYg/view",
    description:
      "Crea una solución educativa, tecnológica o interactiva que ayude a prevenir adicciones y promover la salud integral en adolescentes.",
  },
  {
    id: 3,
    title: "Fair Tech",
    subtitle: "Tecnología para reducir desigualdades",
    difficulty: "Intermedio",
    type: "Investigación y propuesta conceptual / Open Innovation",
    subjects: [
      "Inclusión",
      "Igualdad",
      "Ética tecnológica",
      "Comunidad",
      "ODS 5",
      "ODS 10",
    ],
    pdfPreview:
      "https://drive.google.com/file/d/17cjnVhtwpkNAFA-Z1zrjA1UZPo-m_A52/preview",
    pdfOpen:
      "https://drive.google.com/file/d/17cjnVhtwpkNAFA-Z1zrjA1UZPo-m_A52/view",
    description:
      "Propón una solución tecnológica o social que contribuya a reducir desigualdades en la comunidad, promoviendo el acceso equitativo a oportunidades, educación o servicios.",
  },
  {
    id: 4,
    title: "Smart Mobility for the Border City",
    subtitle: "Soluciones para mejorar la movilidad urbana",
    difficulty: "Intermedio",
    type: "Software (Prototipo)",
    subjects: [
      "Movilidad",
      "Smart Cities",
      "Datos urbanos",
      "Transporte",
      "Comunidad",
    ],
    pdfPreview:
      "https://drive.google.com/file/d/1ArWQqjbI4iegU9tfmAp0jIWlLi5P8o0x/preview",
    pdfOpen:
      "https://drive.google.com/file/d/1ArWQqjbI4iegU9tfmAp0jIWlLi5P8o0x/view",
    description:
      "Diseña una solución tecnológica o conceptual que ayude a mejorar la movilidad urbana, facilitando desplazamientos más eficientes, seguros y sostenibles.",
  },
  {
    id: 5,
    title: "Energy for Extreme Climates",
    subtitle: "Innovación energética para regiones de clima extremo",
    difficulty: "Avanzado",
    type: "Investigación y propuesta conceptual",
    subjects: ["Energía", "Sustentabilidad", "Innovación", "Cambio climático"],
    pdfPreview:
      "https://drive.google.com/file/d/1uLn0EXtCAjmiFfYQVQDWYk77m99U86q4/preview",
    pdfOpen:
      "https://drive.google.com/file/d/1uLn0EXtCAjmiFfYQVQDWYk77m99U86q4/view",
    description:
      "Propón una solución innovadora que mejore la eficiencia energética o promueva el uso de energías limpias en climas extremos.",
  },
];

function Badge({
  children,
  variant = "default",
}: {
  children: React.ReactNode;
  variant?: "default" | "soft";
}) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-medium ${
        variant === "soft"
          ? "bg-black/5 text-black/70"
          : "bg-brand/10 text-brand"
      }`}
    >
      {children}
    </span>
  );
}

export default function Ingenia() {
  const [selectedReto, setSelectedReto] = useState<(typeof retos)[0] | null>(
    null,
  );

  return (
    <div className="w-full bg-white py-12 md:py-16">
      <div className="w-5/6 lg:w-4/6 mx-auto">
        <div className="flex flex-col gap-3">
          <Reveal delay={0}>
            <h1 className="text-3xl md:text-5xl font-bold text-center lg:text-start">
              Retos Ingenia
            </h1>
          </Reveal>

          <Reveal delay={120}>
            <p className="text-base md:text-xl text-center lg:text-start text-black/60 max-w-3xl">
              Elige entre 5 retos para que tú y tu equipo participen en el
              concurso Ingenia de este año. Explora sus temas, dificultad y
              enfoque para encontrar el que mejor se adapte a su idea.
            </p>
          </Reveal>
        </div>

        <div className="mt-10 md:mt-14 grid grid-cols-1 gap-6">
          {retos.map((reto, index) => (
            <Reveal key={reto.id} delay={index * 80}>
              <article className="rounded-3xl border border-black/10 bg-white p-6 md:p-8 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
                <div className="flex flex-col gap-5">
                  <div className="flex flex-col gap-3">
                    <div className="flex flex-wrap items-center gap-2">
                      <Badge>Reto {reto.id}</Badge>
                      <Badge variant="soft">{reto.difficulty}</Badge>
                      <Badge variant="soft">{reto.type}</Badge>
                    </div>

                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold text-black">
                        {reto.title}
                      </h2>
                      <p className="mt-1 text-base md:text-lg text-black/65">
                        {reto.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {reto.subjects.map((subject) => (
                      <span
                        key={subject}
                        className="rounded-full bg-black/5 px-3 py-1 text-sm text-black/70"
                      >
                        {subject}
                      </span>
                    ))}
                  </div>

                  <p className="text-base md:text-lg leading-relaxed text-black/80">
                    {reto.description}
                  </p>
                </div>

                <Button
                  key={reto.id}
                  onClick={() => setSelectedReto(reto)}
                  variant="convocatoria"
                  size="lg"
                  className="w-full text-base md:text-lg mt-4"
                >
                  Ver Convocatoria
                </Button>
                <Link href="https://forms.gle/ag7J9uiEYvfgXiby9">
                  <Button
                    variant="default"
                    size="lg"
                    className="w-full text-base md:text-lg mt-4 bg-brand hover:bg-brand/90 text-white"
                  >
                    Inscribirse
                  </Button>
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
      {selectedReto && (
        <div className="fixed inset-0 z-50 bg-black/60 p-4 flex items-center justify-center">
          <div className="relative w-full max-w-6xl h-[85vh] overflow-hidden rounded-3xl bg-white shadow-xl">
            <div className="flex items-center justify-between border-b border-black/10 px-5 py-4">
              <div>
                <h3 className="text-xl font-bold">{selectedReto.title}</h3>
                <p className="text-sm text-black/60">Vista previa del reto</p>
              </div>

              <div className="flex items-center gap-3">
                <Link
                  href={selectedReto.pdfOpen}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="default"
                    onClick={() => setSelectedReto(null)}
                    className="rounded-full bg-brand hover:bg-brand/90"
                  >
                    Abrir PDF
                  </Button>
                </Link>
                <Button
                  variant="convocatoria"
                  onClick={() => setSelectedReto(null)}
                  className="rounded-full"
                >
                  Cerrar
                </Button>
              </div>
            </div>

            <iframe
              src={selectedReto.pdfPreview}
              className="h-full w-full"
              title={`Preview de ${selectedReto.title}`}
            />
          </div>
        </div>
      )}
    </div>
  );
}
