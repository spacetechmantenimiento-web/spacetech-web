"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import { devices } from "./support-data";
import { SupportHeading } from "./support-ui";
import styles from "./support.module.css";

export function DevicesSection() {
  const [active, setActive] = useState(0);
  const tabs = useRef<Array<HTMLButtonElement | null>>([]);
  function navigate(event: KeyboardEvent, index: number) {
    const next = event.key === "ArrowRight" ? (index + 1) % devices.length : event.key === "ArrowLeft" ? (index - 1 + devices.length) % devices.length : event.key === "Home" ? 0 : event.key === "End" ? devices.length - 1 : null;
    if (next === null) return;
    event.preventDefault();
    setActive(next);
    tabs.current[next]?.focus();
  }
  return <section id="equipos" className={`${styles.section} ${styles.devicesSection}`}>
    <div className={styles.container}>
      <SupportHeading eyebrow="Tu equipo, nuestro enfoque" title={<>Cuidamos la tecnología que usas <span>todos los días.</span></>} />
      <div role="tablist" aria-label="Tipos de equipos" className={styles.deviceTabs}>
        {devices.map(({ name, icon: Icon }, index) => (
          <button
            key={name}
            ref={element => { tabs.current[index] = element; }}
            id={`device-tab-${index}`}
            role="tab"
            aria-selected={active === index}
            aria-controls={`device-panel-${index}`}
            tabIndex={active === index ? 0 : -1}
            onKeyDown={event => navigate(event, index)}
            onClick={() => setActive(index)}
          >
            <Icon size={23} aria-hidden /><span>{name}</span>
          </button>
        ))}
      </div>
      {devices.map((device, index) => (
        <div key={device.name} id={`device-panel-${index}`} role="tabpanel" aria-labelledby={`device-tab-${index}`} hidden={active !== index} tabIndex={0} className={styles.devicePanel}>
          <div className={styles.deviceEmblem} aria-hidden><device.icon size={50} strokeWidth={1.2} /></div>
          <div><h3>{device.description}</h3><p>{device.detail}</p></div>
          <p className={styles.deviceNote}>Cada equipo es distinto.<br />Revisamos antes de recomendar.</p>
        </div>
      ))}
    </div>
  </section>;
}
