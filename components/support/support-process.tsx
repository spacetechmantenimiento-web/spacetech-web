"use client";

import { useRef } from "react";
import { useMotionValueEvent, useReducedMotion, useScroll } from "framer-motion";
import { Plus } from "lucide-react";
import { supportSteps } from "./support-data";
import { SupportHeading } from "./support-ui";
import styles from "./support.module.css";

export function SupportProcess() {
  const root = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: root, offset: ["start .8", "end .5"] });
  useMotionValueEvent(scrollYProgress, "change", value => {
    if (!root.current || reduced) return;
    root.current.dataset.active = String(Math.min(4, Math.floor(value * 5)));
    root.current.style.setProperty("--process-progress", String(value));
  });
  const labels = ["Cuéntanos", "Diagnóstico", "Propuesta", "Servicio", "Verificación"];
  return <section id="proceso" ref={root} className={styles.section} data-active={reduced ? "4" : undefined}><div className={styles.container}><SupportHeading eyebrow="Así trabajamos" title={<>Todo claro. <span>De principio a fin.</span></>}>Conoces qué encontramos, qué proponemos y qué trabajo vamos a realizar.</SupportHeading><ol className={styles.process}>{supportSteps.map((step, index) => <li key={step.name}><span className={styles.stepNumber}>0{index + 1}</span><h3>{labels[index]}</h3><details><summary>{step.name}<Plus size={16} aria-hidden /></summary><p>{step.detail}</p></details></li>)}</ol></div></section>;
}
