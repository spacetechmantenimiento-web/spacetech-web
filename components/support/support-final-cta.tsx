import { Check, Cpu } from "lucide-react";
import { supportWhatsapp } from "./support-data";
import { SupportHeading, SupportLink } from "./support-ui";
import styles from "./support.module.css";

export function SupportFinalCTA() {
  return <section id="contacto-soporte" className={`${styles.section} ${styles.finalCta}`} data-support-scene><div className={styles.finalOrbit} aria-hidden><span /><span /><Cpu size={36} strokeWidth={1.2} /></div><div className={styles.container}><SupportHeading eyebrow="SpaceTech Tech Care" title={<>Haz que tu equipo vuelva <span>a estar en órbita.</span></>}>Cuéntanos qué sucede o qué te gustaría mejorar. Encontramos el siguiente paso contigo.</SupportHeading><SupportLink href={supportWhatsapp("Hola SpaceTech, quiero hablar con un técnico sobre mi equipo.")}>Hablar con un técnico</SupportLink><p className={styles.finalNote}><Check size={15} aria-hidden />Diagnóstico, reparación o una PC a tu medida.</p></div></section>;
}
