import { LandingPage } from "@/components/landing-page";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "SpaceTech",
  url: "https://www.spacetech.com.mx",
  image: "https://www.spacetech.com.mx/og-image.png",
  telephone: "+52 56 5574 5468",
  email: "contacto@spacetech.com.mx",
  description:
    "Soporte técnico, desarrollo web, software y soluciones tecnológicas para personas y negocios en Ciudad de México.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Eje 1 Nte. 135",
    addressLocality: "Venustiano Carranza",
    addressRegion: "Ciudad de México",
    postalCode: "15530",
    addressCountry: "MX"
  },
  areaServed: {
    "@type": "City",
    name: "Ciudad de México"
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "19:00"
    }
  ],
  knowsAbout: [
    "Soporte técnico",
    "Mantenimiento de computadoras",
    "Desarrollo web",
    "Software a medida",
    "Sistemas administrativos",
    "Automatización"
  ]
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
      />
      <LandingPage />
    </>
  );
}
