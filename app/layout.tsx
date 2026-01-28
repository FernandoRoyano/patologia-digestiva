// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { Quicksand, Nunito } from "next/font/google";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
});

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: "DR NUTRICION | Especialista en Patología Digestiva",
  description: "Acompañamiento personalizado para mejorar tu salud digestiva. Especialista en colitis ulcerosa, SIBO e intolerancias alimentarias.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${quicksand.variable} ${nunito.variable} ${quicksand.className}`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
