import Link from "next/link";

export function Header() {
  return (
    <nav className="px-20 py-6 bg-white text-black">
      <div className="flex mx-auto  items-center justify-between">
        <Link href="/" className="text-4xl font-black tracking-tighter">
          INGENIO
        </Link>
        <div className="flex gap-4">
          <Link href="/">Contacto</Link>
          <Link href="/">Patrocinadores</Link>
        </div>
      </div>
    </nav>
  );
}
