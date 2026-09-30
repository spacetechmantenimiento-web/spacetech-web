import type { Metadata } from "next";
import { Navbar } from "@/components/home/navbar";
import { Footer } from "@/components/home/footer";
import { WhatsAppFloat } from "@/components/home/whatsapp-float";
import { SupportMotion } from "@/components/support/support-motion";
import { SupportHero } from "@/components/support/support-hero";
import { DevicesSection } from "@/components/support/devices-section";
import { SupportServices } from "@/components/support/support-services";
import { CustomPcSection } from "@/components/support/custom-pc-section";
import { SupportProcess } from "@/components/support/support-process";
import { HomeServiceSection } from "@/components/support/home-service-section";
import { BusinessSupport } from "@/components/support/business-support";
import { SupportFAQ } from "@/components/support/support-faq";
import { SupportFinalCTA } from "@/components/support/support-final-cta";
import { supportNavigation } from "@/components/support/support-data";
import { getSupportPhotos } from "@/components/support/support-media";
import styles from "@/components/support/support.module.css";

const title = "Soporte Técnico y Reparación de Computadoras en CDMX | SpaceTech";
const description = "Soporte técnico, mantenimiento, reparación, optimización y actualización de laptops y computadoras en CDMX. Servicio a domicilio y PCs personalizadas con SpaceTech.";
const url = "https://www.spacetech.com.mx/soporte-tecnico";

export const metadata: Metadata = {
  title, description,
  alternates: { canonical: url },
  openGraph: {
    title, description, url, siteName: "SpaceTech", locale: "es_MX", type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "SpaceTech - Soporte técnico y soluciones tecnológicas" }]
  },
  twitter: { card: "summary_large_image", title, description, images: ["/og-image.png"] }
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${url}#servicio`,
  name: "Soporte técnico y reparación de computadoras",
  serviceType: "Diagnóstico, mantenimiento, reparación y actualización de computadoras",
  description,
  url,
  provider: {
    "@type": "ProfessionalService", name: "SpaceTech", url: "https://www.spacetech.com.mx",
    telephone: "+525655745468", email: "contacto@spacetech.com.mx",
    address: { "@type": "PostalAddress", streetAddress: "Eje 1 Nte. 135, Moctezuma 2da Secc", addressLocality: "Venustiano Carranza", addressRegion: "Ciudad de México", postalCode: "15530", addressCountry: "MX" }
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog", name: "Servicios de soporte técnico",
    itemListElement: ["Diagnóstico de computadoras", "Mantenimiento preventivo", "Mantenimiento correctivo", "Actualización y optimización", "Instalación y configuración de software", "Armado y personalización de PC", "Servicio a domicilio sujeto a cobertura y tipo de servicio"].map(name => ({ "@type": "Offer", itemOffered: { "@type": "Service", name } }))
  }
};

export default function SupportPage() {
  const photos = getSupportPhotos();
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema).replace(/</g, "\\u003c") }} />
    <SupportMotion className={`premium-site ${styles.page}`}>
      <a className="skip-link" href="#contenido-soporte">Saltar al contenido principal</a>
      <Navbar items={supportNavigation} homeHref="/" />
      <main id="contenido-soporte">
        <SupportHero photo={photos.consultation} />
        <DevicesSection />
        <SupportServices />
        <CustomPcSection />
        <SupportProcess />
        <HomeServiceSection photo={photos.diagnostic} />
        <BusinessSupport />
        <SupportFAQ />
        <SupportFinalCTA />
      </main>
      <Footer homeHref="/" />
      <WhatsAppFloat />
    </SupportMotion>
  </>;
}
