"use client";

import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";

const concursos = [
  {
    id: 1,
    title: "FoxRobotics MINISUMO",
    subtitle: "Concurso de robótica",
    pdfPreview:
      "https://drive.google.com/file/d/1y0CJJfW8YvKsXYaMcda_ziRzIGWH1Wf7/preview",
    pdfOpen:
      "https://drive.google.com/file/d/1y0CJJfW8YvKsXYaMcda_ziRzIGWH1Wf7/view",
    url: "https://docs.google.com/forms/d/1LzJN9kjW-P7EhQb3tgmVwCHOdLofaLgkFVsLuNiUY9Q/viewform?edit_requested=true",
  },
  {
    id: 2,
    title: "INGENIA",
    subtitle: "Engineering What Matters",
    pdfPreview:
      "https://drive.google.com/file/d/1WIynE5CkITE8YJ3H3MmX7l3cPHBG2tl2/preview",
    pdfOpen:
      "https://drive.google.com/file/d/1WIynE5CkITE8YJ3H3MmX7l3cPHBG2tl2/view",
    url: "/retos-ingenia",
  },
  {
    id: 3,
    title: "Reto Estructural",
    subtitle: "Proyecto de Ingeniería",
    pdfPreview:
      "https://drive.google.com/file/d/1hTQLWAYYi5rjJARK0Eo4AzTj9cJ7Cj8o/preview",
    pdfOpen:
      "https://drive.google.com/file/d/1hTQLWAYYi5rjJARK0Eo4AzTj9cJ7Cj8o/view",
    url: "https://docs.google.com/forms/d/1eFtXyd7wIIQlOL803162lq0Cygb9pVHF-776YkF71xE/viewform?edit_requested=tr",
  },
  {
    id: 4,
    title: "Lanza",
    subtitle: "¡Que llegue más lejos!",
    pdfPreview:
      "https://drive.google.com/file/d/1bV63igNAqyDhOT7G5z2kf_MFctYthbX0/preview",
    pdfOpen:
      "https://drive.google.com/file/d/1bV63igNAqyDhOT7G5z2kf_MFctYthbX0/view",
    url: "https://docs.google.com/forms/d/13JUs2C4u6WxH1jSMYX_AKCjMwNuQZoW1YMNPf1zqbP4/viewform?edit_requested=true",
  },
];

export default function Concursos() {
  const [selectedReto, setSelectedReto] = useState<
    (typeof concursos)[0] | null
  >(null);

  return (
    <div className="w-full bg-white my-10">
      <div className="flex flex-col gap-3 w-5/6 lg:w-4/6 mx-auto">
        <Reveal delay={0}>
          <h1 className="text-3xl md:text-5xl font-bold text-center">
            Concursos
          </h1>
        </Reveal>

        <Reveal delay={120}>
          <p className="text-base md:text-xl text-black/60 text-center md:text-left max-w-4xl mx-auto md:mx-0">
            Durante la Semana de Ingeniería, se llevarán a cabo diversos
            concursos que fomentan la creatividad, el trabajo en equipo y la
            aplicación de conocimientos en ingeniería. Estos concursos están
            diseñados para desafiar a los participantes a resolver problemas
            reales, desarrollar prototipos innovadores y demostrar sus
            habilidades en un entorno competitivo y colaborativo.
          </p>
        </Reveal>
      </div>

      <div className="mt-10 md:mt-14 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 w-5/6 lg:w-4/6 mx-auto">
        {concursos.map((reto, index) => (
          <Reveal key={reto.id} delay={index * 80}>
            <article className="h-full min-h-[320px] rounded-3xl border border-black/10 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg flex flex-col justify-between">
              <div className="space-y-3">
                <div className="inline-flex rounded-full border border-brand/20 bg-brand/5 px-3 py-1 text-sm font-medium text-brand">
                  Concurso
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-bold leading-tight text-black text-balance">
                    {reto.title}
                  </h2>
                  <p className="mt-2 text-sm md:text-base text-black/60">
                    {reto.subtitle}
                  </p>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-3">
                {reto.pdfOpen ? (
                  <Button
                    onClick={() => setSelectedReto(reto)}
                    variant="convocatoria"
                    size="lg"
                    className="w-full"
                  >
                    Ver convocatoria
                  </Button>
                ) : null}

                <Link
                  href={reto.url}
                  target={reto.url.startsWith("http") ? "_blank" : undefined}
                  rel={
                    reto.url.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                >
                  <Button
                    variant="default"
                    size="lg"
                    className="w-full bg-brand hover:bg-brand/90 text-white"
                  >
                    Inscribirse
                  </Button>
                </Link>
              </div>
            </article>
          </Reveal>
        ))}
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
                {selectedReto.pdfOpen ? (
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
                ) : null}

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
