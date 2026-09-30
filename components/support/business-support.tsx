import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { businessUrl } from "./support-data";
import { CheckList, SupportHeading, SupportLink } from "./support-ui";
import styles from "./support.module.css";

export function BusinessSupport() {
  return <section id="negocios" className={`${styles.section} ${styles.business}`}><div className={`${styles.container} ${styles.twoColumns}`}><SupportHeading eyebrow="Para negocios / equipos de trabajo" title={<>Soporte para <span>tu operación.</span></>}>Una laptop detenida también puede detener tu negocio. Te ayudamos a cuidar la tecnología de tu oficina, emprendimiento o equipo de trabajo.</SupportHeading><div><CheckList items={["Mantenimiento preventivo y soporte", "Configuración y optimización", "Atención de varios equipos", "Asesoría tecnológica"]} /><div className={styles.businessActions}><SupportLink href={businessUrl}>Hablar sobre soporte para mi negocio</SupportLink><Link href="/#nosotros" className={styles.textLink}>Tu departamento tecnológico externo <ArrowUpRight size={15} aria-hidden /></Link></div></div></div></section>;
}
