import { inter } from "@/app/layout";
import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <nav className="sticky top-0 w-full mx-auto bg-white text-black border-b-2 border-black z-15 header-fade-in">
      <div className="flex flex-col md:flex-row w-5/6 lg:w-4/6 py-5 mx-auto md:items-center justify-between">
        <div>
          <Link href="/">
            <Image
              className="-ml-3 md:ml-0"
              src="/Logotipo en negro.png"
              alt="Ingenio Logo"
              width={200}
              height={200}
              style={{ height: "auto" }}
            />
          </Link>
        </div>
        <div className="flex gap-4 text-lg md:text-xl tracking-tighter">
          <Link className={inter.className} href="/">
            Contacto
          </Link>
          <Link className={inter.className} href="/patrocinadores">
            Patrocinadores
          </Link>
        </div>
      </div>
    </nav>
  );
}
