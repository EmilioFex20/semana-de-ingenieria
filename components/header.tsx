"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { label: "Sobre", href: "/#sobre" },
  { label: "Equipos", href: "/#equipos" },
  { label: "Horario", href: "/#horario" },
  { label: "Ubicacion", href: "/#ubicacion" },
  { label: "Patrocinadores", href: "/patrocinadores" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className="sticky top-0 w-full bg-white/95 backdrop-blur-sm text-foreground border-b border-border z-50 header-fade-in"
      role="navigation"
      aria-label="Navegacion principal"
    >
      <div className="flex w-5/6 lg:w-4/6 py-4 mx-auto items-center justify-between">
        {/* Logo */}
        <Link href="/" aria-label="Ir al inicio">
          <Image
            src="/Logotipo en negro.png"
            alt="Ingenio Logo"
            width={160}
            height={48}
            style={{ width: 160, height: "auto" }}
            priority
          />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-6 text-base font-medium">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-foreground/70 hover:text-foreground transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          type="button"
          className="md:hidden p-2 rounded-md hover:bg-muted transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Cerrar menu" : "Abrir menu"}
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-border bg-white">
          <ul className="flex flex-col w-5/6 mx-auto py-4 gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block py-3 px-4 rounded-lg text-base font-medium text-foreground/70 hover:text-foreground hover:bg-muted transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
