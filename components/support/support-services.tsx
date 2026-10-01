import { Database, Plus } from "lucide-react";
import { diagnosticUrl, supportServices } from "./support-data";
import { CheckList, SupportHeading, SupportLink } from "./support-ui";
import styles from "./support.module.css";
import { ServiceVisual } from "./service-visual";
import { DevicesSection } from "./devices-section";

const highlights = [["Arranque", "Rendimiento"], ["Limpieza", "Ventilación"], ["Hardware", "Sistema"], ["RAM", "SSD"], ["Configuración", "Drivers"]];

export function SupportServices() {
  return <section id="servicios-soporte" className={`${styles.section} ${styles.services}`}>
    <div className={styles.container}>
      <SupportHeading eyebrow="Tech Care / Servicios" title={<>Diagnóstico, reparación <span>y mantenimiento.</span></>}>Identificamos qué necesita tu equipo y te explicamos las opciones. Sin cambiar piezas por cambiar.</SupportHeading>
      <div className={styles.serviceRows}>
        {supportServices.map(({ name, icon: Icon, intro, items }, index) => (
          <article key={name} className={styles.serviceRow} data-support-scene>
            <div className={styles.serviceTitle}>
              <span className={styles.serviceIndex}>0{index + 1}<Icon size={24} aria-hidden /></span>
              <h3>{name}</h3><p>{intro}</p>
              <div className={styles.serviceHighlights}>{highlights[index].map(label => <span key={label}>{label}</span>)}</div>
              <details className={styles.serviceDetails}><summary>Ver qué revisamos <Plus size={18} aria-hidden /></summary><CheckList items={items} /></details>
            </div>
            <ServiceVisual index={index} />
          </article>
        ))}
      </div>
      <div className={styles.serviceNote}><Database size={22} aria-hidden /><p><strong>Tu información también importa.</strong> Evaluamos respaldo o recuperación cuando sea viable. La posibilidad de recuperar archivos depende del estado del almacenamiento.</p><SupportLink href={diagnosticUrl} secondary>Consultar mi equipo</SupportLink></div>
      <p className={styles.finePrint}>La solución, los componentes y el costo se definen después del diagnóstico. No todos los equipos admiten las mismas reparaciones o actualizaciones.</p>
      <details className={styles.equipmentDetails}><summary>Equipos que atendemos <Plus size={20} aria-hidden /></summary><DevicesSection /></details>
    </div>
  </section>;
}
