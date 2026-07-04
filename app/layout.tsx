import type { Metadata } from "next";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/space-grotesk/400.css";
import "@fontsource/space-grotesk/500.css";
import "@fontsource/space-grotesk/600.css";
import "@fontsource/space-grotesk/700.css";
import "@fontsource/orbitron/700.css";
import "@fontsource/orbitron/800.css";
import "@fontsource/orbitron/900.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Space Tech | Tu tecnología siempre en órbita",
  description:
    "Servicio técnico, mantenimiento de computadoras, desarrollo web y soluciones digitales para personas y negocios en CDMX.",
  keywords: [
    "Space Tech",
    "servicio técnico CDMX",
    "mantenimiento de laptops",
    "desarrollo web CDMX",
    "recuperación de datos",
    "software a medida"
  ],
  openGraph: {
    title: "Space Tech | Tu tecnología siempre en órbita",
    description:
      "Soporte técnico confiable y desarrollo digital para que tu equipo y tu negocio nunca salgan de órbita.",
    type: "website",
    locale: "es_MX"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="bg-void font-sans text-frost antialiased">{children}</body>
    </html>
  );
}
