import type { Metadata, Viewport } from "next";
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
  metadataBase: new URL("https://www.spacetech.com.mx"),
  title: "Space Tech | Soluciones Tecnológicas y Desarrollo Web en CDMX",
  description:
    "Space Tech ofrece soporte técnico profesional, mantenimiento de computadoras, desarrollo web, sistemas administrativos, automatización y soluciones digitales para empresas y particulares en Ciudad de México.",
  applicationName: "Space Tech",
  authors: [{ name: "Space Tech" }],
  creator: "Space Tech",
  publisher: "Space Tech",
  manifest: "/manifest.webmanifest",
  keywords: [
    "Space Tech",
    "servicio técnico CDMX",
    "mantenimiento de laptops",
    "desarrollo web CDMX",
    "recuperación de datos",
    "software a medida"
  ],
  alternates: {
    canonical: "https://www.spacetech.com.mx"
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-64.png", sizes: "64x64", type: "image/png" }
    ],
    shortcut: "/favicon.svg",
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  },
  openGraph: {
    title: "Space Tech",
    description: "Tu tecnología siempre en órbita.",
    url: "https://www.spacetech.com.mx",
    siteName: "Space Tech",
    type: "website",
    locale: "es_MX",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Space Tech - Tu tecnología siempre en órbita"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Space Tech",
    description: "Tu tecnología siempre en órbita.",
    images: ["/og-image.png"]
  }
};

export const viewport: Viewport = {
  themeColor: "#050816"
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
