import { inter } from "@/app/layout";
import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <nav className="sticky top-0 w-full mx-auto bg-white text-[#0146e9] border-b-2 border-[#0146e9] z-15 header-fade-in">
      <div className="flex flex-col w-4/6 py-5 md:flex-row mx-auto md:items-center justify-between">
        <Image
          src="/Logotipo en azul.png"
          alt="Ingenio Logo"
          width={200}
          height={200}
        />
        <div className="flex gap-4 text-sm md:text-xl font-medium">
          <Link className={inter.className} href="/">
            Contacto
          </Link>
          <Link className={inter.className} href="/">
            Patrocinadores
          </Link>
        </div>
      </div>
    </nav>
  );
}
