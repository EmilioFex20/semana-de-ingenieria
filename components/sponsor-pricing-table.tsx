"use client";

import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

type TierKey = "basico" | "intermedio" | "avanzado" | "estrategico";

const tiers: {
  key: TierKey;
  title: string;
  range: string;
  level: number;
  highlight?: boolean;
}[] = [
  { key: "basico", title: "Básico", range: "$5,000 – $9,999 MXN", level: 1 },
  {
    key: "intermedio",
    title: "Intermedio",
    range: "$10,000 – $17,999 MXN",
    level: 2,
  },
  {
    key: "avanzado",
    title: "Avanzado",
    range: "$18,000 – $25,999 MXN",
    level: 3,
    highlight: true,
  },
  { key: "estrategico", title: "Estratégico", range: "$26,000+ MXN", level: 4 },
];

const features: { label: string; minLevel: number }[] = [
  { label: "Recibo de deducción de impuestos", minLevel: 1 },
  { label: "Reconocimiento en clausura", minLevel: 1 },
  { label: "Logo en video “Conoce a nuestros patrocinadores”", minLevel: 1 },
  { label: "Logo en publicación de agradecimiento en redes", minLevel: 1 },
  { label: "Obsequio sorpresa", minLevel: 1 },

  { label: "Post dedicado en historias destacadas", minLevel: 2 },
  { label: "X-banner en entrada del CEID", minLevel: 2 },

  { label: "Logo en lona de bienvenida", minLevel: 3 },
  { label: "Tour personalizado de exposiciones", minLevel: 3 },
  {
    label: "Publicación de vacantes en página oficial (opcional)",
    minLevel: 3,
  },
  { label: "Participación como juez en concursos (opcional)", minLevel: 3 },
  { label: "Stand de promoción 1 día (sujeto a disponibilidad)", minLevel: 3 },

  { label: "Stand de promoción 2 días (sujeto a disponibilidad)", minLevel: 4 },
  { label: "Logo en gafete oficial (frontal)", minLevel: 4 },
  { label: "Mención como anfitrión en salas de exposición", minLevel: 4 },
];

function hasFeature(tierLevel: number, minLevel: number) {
  return tierLevel >= minLevel;
}

export function SponsorPricingTable() {
  return (
    <div className="w-full scroll-mt-32 md:scroll-mt-36" id="paquetes">
      {/* Desktop / tablet: tabla */}
      <div className="hidden lg:block overflow-x-auto rounded-2xl border border-black/10">
        <table className="w-full border-collapse bg-white">
          <thead>
            <tr className="bg-[#f7f7f7]">
              <th className="text-left p-5 w-[34%]">
                <p className="text-sm font-semibold text-black/60">
                  Beneficios
                </p>
              </th>

              {tiers.map((t) => (
                <th
                  key={t.key}
                  className={cn(
                    "p-5 text-left align-top border-l border-black/10",
                    t.highlight && "bg-[#eef3ff]",
                  )}
                >
                  <div className="flex flex-col gap-2">
                    <p className="text-xl font-bold">{t.title}</p>
                    <p className="text-2xl font-bold text-black">{t.range}</p>
                    {t.highlight && (
                      <span className="mt-1 inline-flex w-fit rounded-full bg-black/5 px-2 py-1 text-xs font-semibold">
                        Recomendado
                      </span>
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {features.map((f, idx) => (
              <tr
                key={f.label}
                className={cn(idx % 2 === 0 ? "bg-white" : "bg-[#fbfbfb]")}
              >
                <td className="p-5 text-base font-medium text-[#404040]">
                  {f.label}
                </td>

                {tiers.map((t) => {
                  const ok = hasFeature(t.level, f.minLevel);
                  return (
                    <td
                      key={t.key}
                      className={cn(
                        "p-5 border-l border-black/10 text-center",
                        t.highlight && "bg-[#f7f9ff]",
                      )}
                    >
                      {ok ? (
                        <Check className="mx-auto h-5 w-5 text-[#0146e9]" />
                      ) : (
                        <span className="text-black/25">—</span>
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile: SOLO lo nuevo que agrega cada paquete */}
      <div className="lg:hidden grid grid-cols-1 gap-6">
        {tiers.map((t) => {
          const newlyAdded =
            t.level === 1
              ? features.filter((f) => f.minLevel === 1)
              : features.filter((f) => f.minLevel === t.level);

          const includesPrevText =
            t.level === 1 ? "Incluye:" : "Incluye todo lo anterior y además:";

          return (
            <div
              key={t.key}
              className={cn(
                "rounded-2xl border border-black/10 bg-white p-5",
                t.highlight && "ring-2 ring-[#0146e9]/15",
              )}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-2xl font-bold">{t.title}</p>
                  <p className="mt-1 text-3xl font-bold">{t.range}</p>
                </div>
                {t.highlight && (
                  <span className="inline-flex rounded-full bg-[#0146e9]/10 px-2 py-1 text-xs font-semibold text-[#0146e9]">
                    Recomendado
                  </span>
                )}
              </div>

              <Link href="mailto:fernanda.millan@cetys.mx">
                <Button className="mt-4 w-full bg-brand hover:bg-brand/90">
                  Contáctanos
                </Button>
              </Link>

              <p className="mt-4 text-sm font-semibold text-black/60">
                {includesPrevText}
              </p>

              <ul className="mt-3 space-y-2 text-base text-[#6d6d6d]">
                {newlyAdded.map((f) => (
                  <li key={f.label} className="flex items-start gap-2">
                    <Check className="mt-1 h-5 w-5 text-[#0146e9] shrink-0" />
                    <span>{f.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      <p className="mt-4 text-sm text-black/50">
        * Los beneficios son acumulables por nivel y están sujetos a
        disponibilidad.
      </p>
    </div>
  );
}
