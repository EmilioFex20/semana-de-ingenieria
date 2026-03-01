import Image from "next/image";
import Link from "next/link";
import { Linkedin, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full mx-auto bg-black text-white border-t-2 border-black">
      <div className="flex flex-col w-5/6 lg:w-4/6 py-5 gap-8 md:gap-0 md:flex-row mx-auto md:items-center justify-between">
        <div className="flex flex-col">
          <Image
            className="-ml-3 md:ml-0"
            src="/Logo secundario en negro.jpg"
            alt="Ingenio Logo"
            width={100}
            height={100}
          />
          <div>
            <p className="text-lg md:text-xl text-start mx-auto mb-5">
              Innovación, ingeniería y colaboración en un mismo espacio
            </p>
          </div>
          <div className="flex flex-row gap-5">
            <Link href="https://www.instagram.com/inge.nio2026/">
              <Instagram className="text-white hover:text-gray-300" />
            </Link>
            <Link href="https://www.linkedin.com/company/ingenio-cetys">
              <Linkedin className="text-white hover:text-gray-300" />
            </Link>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-5 text-lg md:text-xl">
          <div className="flex flex-col md:w-2/6 md:mx-auto gap-2 md:gap-5">
            <Link href="/equipos-representativos">Equipos representativos</Link>
            <Link href="/patrocinadores">Patrocinadores</Link>
          </div>
          <div className="flex flex-col md:w-2/6 md:mx-auto gap-2 md:gap-5">
            <Link href="/">Contacto</Link>
            <Link href="/">Reglamento CETYS</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
