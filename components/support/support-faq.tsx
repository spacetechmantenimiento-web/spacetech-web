import { Plus } from "lucide-react";
import { supportFaq } from "./support-data";
import { SupportHeading } from "./support-ui";
import styles from "./support.module.css";

export function SupportFAQ() {
  return <section id="preguntas" className={`${styles.section} ${styles.faq}`}><div className={`${styles.container} ${styles.faqLayout}`}><SupportHeading eyebrow="Antes de traer tu equipo" title={<>Respuestas <span>sin complicaciones.</span></>}>Lo que necesitas saber para dar el siguiente paso.</SupportHeading><div className={styles.accordion}>{supportFaq.map(item => <details key={item.question} name="support-faq"><summary>{item.question}<Plus size={18} aria-hidden /></summary><p>{item.answer}</p></details>)}</div></div></section>;
}
