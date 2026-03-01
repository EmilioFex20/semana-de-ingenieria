import Image from "next/image";
import Link from "next/link";
import { Linkedin, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full bg-foreground text-background">
      <div className="flex flex-col w-5/6 lg:w-4/6 py-10 gap-10 md:gap-0 md:flex-row mx-auto md:items-start justify-between">
        {/* Brand column */}
        <div className="flex flex-col gap-4 md:max-w-sm">
          <Image
            src="/Logo secundario en negro.jpg"
            alt="Ingenio Logo secundario"
            width={100}
            height={40}
            style={{ width: 100, height: "auto" }}
            className="rounded"
          />
          <p className="text-base text-background/70 leading-relaxed">
            Innovacion, ingenieria y colaboracion en un mismo espacio
          </p>
          <div className="flex gap-4" role="list" aria-label="Redes sociales">
            <Link
              href="https://www.instagram.com/inge.nio2026/"
              aria-label="Instagram de Ingenio"
              className="text-background/70 hover:text-background transition-colors"
            >
              <Instagram className="h-5 w-5" />
            </Link>
            <Link
              href="https://www.linkedin.com/company/ingenio-cetys"
              aria-label="LinkedIn de Ingenio"
              className="text-background/70 hover:text-background transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
          </div>
        </div>

        {/* Link columns */}
        <div className="flex flex-col sm:flex-row gap-8 sm:gap-16">
          <nav aria-label="Enlaces del evento">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-background/50 mb-3">
              Evento
            </h3>
            <ul className="flex flex-col gap-2">
              <li>
                <Link
                  href="/equipos-representativos"
                  className="text-base text-background/70 hover:text-background transition-colors"
                >
                  Equipos representativos
                </Link>
              </li>
              <li>
                <Link
                  href="/patrocinadores"
                  className="text-base text-background/70 hover:text-background transition-colors"
                >
                  Patrocinadores
                </Link>
              </li>
            </ul>
          </nav>
          <nav aria-label="Informacion adicional">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-background/50 mb-3">
              Info
            </h3>
            <ul className="flex flex-col gap-2">
              <li>
                <Link
                  href="/#ubicacion"
                  className="text-base text-background/70 hover:text-background transition-colors"
                >
                  Contacto
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-base text-background/70 hover:text-background transition-colors"
                >
                  Reglamento CETYS
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-background/10">
        <div className="w-5/6 lg:w-4/6 mx-auto py-4">
          <p className="text-sm text-background/40 text-center">
            Semana de Ingenieria 2026 - CETYS Universidad
          </p>
        </div>
      </div>
    </footer>
  );
}
