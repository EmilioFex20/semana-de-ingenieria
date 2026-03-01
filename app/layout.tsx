import type { Metadata } from "next";
import { Inter, Pixelify_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const pixelifySans = Pixelify_Sans({
  variable: "--font-pixelify",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ingenio",
  description: "Sitio web para la semana de ingeniería de Cetys Universidad",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-1">{children}</main>
        <div className="h-10" />
        <Footer />
      </body>
    </html>
  );
}
