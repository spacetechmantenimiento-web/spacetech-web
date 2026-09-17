import { ArrowUpRight } from "lucide-react";
import { mapsUrl, navItems, whatsappUrl } from "@/components/home/site-data";

export function Footer() {
  return (
    <footer className="site-footer border-t border-white/10">
      <div className="footer-orbit" aria-hidden="true" />
      <div className="footer-main mx-auto grid max-w-[90rem] gap-12 px-5 sm:px-8 md:grid-cols-2 lg:grid-cols-[1.4fr_0.7fr_0.9fr] lg:px-12">
        <div className="footer-brand">
          <a href="#inicio" className="inline-flex items-center gap-3"><span className="brand-mark" aria-hidden="true"><span /></span><span className="font-space text-sm font-semibold uppercase tracking-[0.2em]">SpaceTech</span></a>
          <p className="footer-description mt-5 max-w-sm">Soporte, software, web y soluciones empresariales para mantener tu tecnología siempre en órbita.</p>
        </div>
        <nav aria-label="Navegación del pie de página">
          <p className="footer-label">Explora</p>
          <div className="footer-nav mt-5 grid">{navItems.map((item) => <a key={item.href} href={item.href} className="footer-link">{item.label}</a>)}</div>
        </nav>
        <div className="footer-contact">
          <p className="footer-label">Contacto</p>
          <div className="footer-contact-list mt-5">
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="footer-contact-primary">WhatsApp · 56 5574 5468 <ArrowUpRight aria-hidden /></a>
            <a href="mailto:contacto@spacetech.com.mx" className="footer-contact-primary">contacto@spacetech.com.mx <ArrowUpRight aria-hidden /></a>
            <a href={mapsUrl} target="_blank" rel="noreferrer" className="footer-contact-secondary">Eje 1 Nte. 135, Moctezuma 2da Secc,<br />Venustiano Carranza, CDMX.</a>
            <p className="footer-contact-secondary">Lun–Vie · 9:00–19:00 · Con cita</p>
          </div>
        </div>
      </div>
      <div className="footer-bottom mx-auto flex max-w-[90rem] flex-col gap-2 border-t px-5 py-6 text-xs sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
        <span>© 2026 Space Tech. Todos los derechos reservados.</span><span>Ciudad de México · México</span>
      </div>
    </footer>
  );
}
