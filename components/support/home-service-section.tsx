import Image from "next/image";
import { Building2, Home, MapPin, Monitor } from "lucide-react";
import { homeServiceUrl } from "./support-data";
import { SupportHeading, SupportLink } from "./support-ui";
import styles from "./support.module.css";

export function HomeServiceSection({ photo }: { photo: string | null }) {
  return <section id="a-domicilio" className={`${styles.section} ${styles.homeService}`} data-support-scene><div className={`${styles.container} ${styles.twoColumns}`}>
    <div><SupportHeading eyebrow="Servicio a domicilio" title={<>También vamos <span>hasta tu tecnología.</span></>}>Para determinados servicios podemos atenderte en tu domicilio, oficina o negocio dentro de nuestra zona de cobertura.</SupportHeading><div className={styles.visitIndicators}><span><Home size={24} aria-hidden />Hogar</span><span><Building2 size={24} aria-hidden />Oficina</span><span><Monitor size={24} aria-hidden />Negocio</span></div><details className={styles.coverageDetails}><summary>Cobertura y tipo de servicio</summary><p className={styles.bodyCopy}>Cuéntanos dónde estás y qué sucede con tu equipo. Confirmamos la cobertura y si el servicio puede realizarse en tu ubicación; algunos diagnósticos o reparaciones requieren traslado o trabajo adicional.</p></details><SupportLink href={homeServiceUrl}>Solicitar servicio a domicilio</SupportLink><p className={styles.locationNote}><MapPin size={15} aria-hidden />CDMX · Cobertura sujeta a confirmación</p></div>
    <div className={styles.visitVisual}>{photo ? <Image src={photo} alt="Técnico explicando el diagnóstico de una laptop a una clienta" fill sizes="(max-width: 767px) 100vw, 48vw" /> : <div className={styles.visitNetwork} aria-hidden><div className={styles.visitCenter}><Monitor size={42} strokeWidth={1.3} /><span>SPACETECH</span></div><div className={styles.visitClient}><Home size={42} strokeWidth={1.3} /><span>CLIENTE</span></div></div>}<svg className={styles.visitRoute} viewBox="0 0 600 400" aria-hidden><path d="M130 220h120q30 0 30-30v-60q0-30 30-30h160" /></svg><div className={styles.visitCaption}><span className={styles.statusDot} aria-hidden />Atención coordinada contigo</div></div>
  </div></section>;
}
