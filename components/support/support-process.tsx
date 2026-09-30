import { supportSteps } from "./support-data";
import { SupportHeading } from "./support-ui";
import styles from "./support.module.css";

export function SupportProcess() {
  return <section id="proceso" className={styles.section} data-support-scene><div className={styles.container}><SupportHeading eyebrow="Así trabajamos" title={<>Todo claro. <span>De principio a fin.</span></>}>Conoces qué encontramos, qué proponemos y qué trabajo vamos a realizar.</SupportHeading><ol className={styles.process}>{supportSteps.map((step, index) => <li key={step.name}><span className={styles.stepNumber}>0{index + 1}</span><h3>{step.name}</h3><p>{step.detail}</p></li>)}</ol></div></section>;
}
