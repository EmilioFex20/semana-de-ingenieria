import Link from "next/link";

export function Header() {
  return (
    <nav className="sticky top-0 w-[80%] mx-auto py-10 bg-white text-black">
      <div className="flex flex-col md:flex-row mx-auto md:items-center justify-between">
        <Link href="/" className="text-4xl font-black tracking-tighter">
          INGENIO
        </Link>
        <div className="flex gap-4 text-sm font-sm">
          <Link href="/">Contacto</Link>
          <Link href="/">Patrocinadores</Link>
        </div>
      </div>
    </nav>
  );
}
