"use client";

import { useState } from "react";
import { supportProblems, supportWhatsapp } from "./support-data";
import { SupportHeading, SupportLink } from "./support-ui";
import styles from "./support.module.css";

export function ProblemsSection() {
  const [selected, setSelected] = useState(0);
  const [preview, setPreview] = useState<number | null>(null);
  const problem = supportProblems[preview ?? selected];
  return (
    <section id="problemas" className={`${styles.section} ${styles.problems}`}>
      <div className={styles.container}>
        <SupportHeading eyebrow="Empieza por el síntoma" title="¿Qué le pasa a tu equipo?">
          Empieza por lo que estás viendo. Nosotros buscamos la causa.
        </SupportHeading>
        <div className={styles.problemsGrid} role="group" aria-label="Lo que sucede con tu equipo">
          {supportProblems.map(({ title, icon: Icon }, index) => (
            <button
              key={title}
              type="button"
              aria-pressed={selected === index}
              onClick={() => { setSelected(index); setPreview(null); }}
              onPointerEnter={event => { if (event.pointerType === "mouse") setPreview(index); }}
              onPointerLeave={() => setPreview(null)}
              onFocus={() => setPreview(index)}
              onBlur={() => setPreview(null)}
              className={styles.problemButton}
            >
              <Icon size={36} strokeWidth={1.4} aria-hidden />
              <span>{title}</span>
              <span className={styles.problemIndex} aria-hidden>0{index + 1}</span>
            </button>
          ))}
        </div>
        <div className={styles.problemResponse}>
          <div><p className={styles.problemClues}>{problem.clues}</p><p className={styles.finePrint}>Posibles puntos de revisión. La causa se confirma con diagnóstico.</p></div>
          <SupportLink href={supportWhatsapp(`Hola SpaceTech, ${problem.message}. Quiero solicitar un diagnóstico.`)}>Cuéntanos qué sucede</SupportLink>
        </div>
      </div>
    </section>
  );
}
