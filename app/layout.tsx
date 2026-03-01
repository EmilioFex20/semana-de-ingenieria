import type { Metadata, Viewport } from "next";
import { Inter, Pixelify_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const pixelifySans = Pixelify_Sans({
  variable: "--font-pixelify",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ingenio - Semana de Ingenieria 2026",
  description:
    "Innovacion, ingenieria y colaboracion en un mismo espacio. Semana de Ingenieria 2026 en CETYS Universidad, Campus Mexicali.",
};

export const viewport: Viewport = {
  themeColor: "#0146e9",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${pixelifySans.variable}`}>
      <body className="font-sans antialiased min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
