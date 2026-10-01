import Image from "next/image";
import { ArrowDown, MapPin } from "lucide-react";
import { diagnosticUrl, supportPrinciples } from "./support-data";
import { SupportLink } from "./support-ui";
import styles from "./support.module.css";

export function SupportHero({ photo }: { photo: string | null }) {
  return <section id="inicio" className={styles.hero} data-support-scene>
    <div className={`${styles.heroMedia} ${photo ? styles.humanMedia : ""}`}>
      <Image src={photo ?? "/images/space-tech-hero.png"} alt={photo ? "Técnico ayudando a una clienta frente a una laptop" : "Visual tecnológico de una laptop, con iluminación azul y líneas orbitales"} fill priority sizes="(max-width: 767px) 100vw, 58vw" />
      <div className={styles.imageVeil} aria-hidden />
      <div className={styles.photoLabels} aria-hidden><span>CPU</span><span>TEMP</span><span>SSD</span><span>RAM</span><span>SYSTEM</span></div>
      <span className={styles.heroBrackets} aria-hidden /><span className={styles.heroScanNode} aria-hidden />
      <span className={styles.scan} aria-hidden />
    </div>
    <div className={styles.container}>
      <div className={styles.heroCopy}>
        <p className={styles.eyebrow}>Soporte técnico · CDMX</p>
        <h1>Tu equipo vuelve a funcionar <span>como debe.</span></h1>
        <p className={styles.heroDescription}>Diagnóstico, reparación y mantenimiento de laptops y PCs. Vuelve a trabajar, estudiar, crear o jugar.</p>
        <div className={styles.actions}><SupportLink href={diagnosticUrl}>Solicitar diagnóstico</SupportLink><a href="#problemas" aria-label="Ver mi problema" title="Ver mi problema" className={`secondary-action ${styles.action} ${styles.heroExplore}`}><span>Ver mi problema</span><ArrowDown size={16} aria-hidden /></a></div>
        <p className={styles.heroLocation}><MapPin size={14} aria-hidden />Oficina en Venustiano Carranza · Con cita previa</p>
      </div>
    </div>
    <div className={`${styles.principles} ${styles.container}`}>{supportPrinciples.map(({ icon: Icon, text }) => <span key={text}><Icon size={17} aria-hidden />{text}</span>)}</div>
  </section>;
}
