"use client";

import { useState, type CSSProperties } from "react";
import { ArrowUpRight } from "lucide-react";
import { pcPurposes, supportWhatsapp } from "./support-data";
import { CheckList, SupportHeading, SupportLink } from "./support-ui";
import styles from "./support.module.css";
import { PcAssembly } from "./pc-assembly";

export function CustomPcSection() {
  const [active, setActive] = useState(0);
  const purpose = pcPurposes[active];
  return (
    <section
      id="pc-a-tu-medida"
      className={`${styles.section} ${styles.pcSection}`}
      data-support-scene
      style={{ "--pc-accent": purpose.accent } as CSSProperties}
    >
      <div className={styles.container}>
        <SupportHeading
          eyebrow="Ingeniería para tu día a día"
          title={<>Una PC construida <span>alrededor de ti.</span></>}
        >
          Diseñamos, armamos o actualizamos tu computadora según su propósito.
          La configuración empieza contigo, no con una lista de componentes.
        </SupportHeading>
        <PcAssembly />
        <div className={styles.pcComposition}>
          <div className={styles.pcSelector} role="group" aria-label="Uso de tu PC">
            {pcPurposes.map((item, index) => (
              <button key={item.id} aria-pressed={active === index} onClick={() => setActive(index)}>
                <span>0{index + 1}</span>{item.name}<ArrowUpRight size={16} aria-hidden />
              </button>
            ))}
          </div>
          <div className={styles.pcDetails} aria-live="polite" aria-atomic="true">
            <h3>{purpose.label}</h3>
            <p>{purpose.description}</p>
            <CheckList items={purpose.items} />
            <SupportLink href={supportWhatsapp(`Hola SpaceTech, quiero cotizar una PC personalizada para ${purpose.name.toLowerCase()}.`)}>
              Cotizar mi PC
            </SupportLink>
            <p className={styles.finePrint}>Presupuesto, software y necesidades primero. Componentes después.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
