import styles from "./support.module.css";

export function ServiceVisual({ index }: { index: number }) {
  return <div className={`${styles.serviceVisual} ${styles[`visual${index}`]}`} aria-hidden><svg viewBox="0 0 260 180">
    <path d="M24 151h212M45 160h170" className={styles.visualGround} />
    {index === 0 && <><circle cx="130" cy="83" r="54" /><circle cx="130" cy="83" r="33" /><path d="M65 83h130M130 19v128" /><circle cx="130" cy="83" r="5" className={styles.visualNode} /><path d="M73 65h114" className={styles.visualScan} /></>}
    {index === 1 && <><circle cx="130" cy="83" r="48" /><circle cx="130" cy="83" r="10" /><g className={styles.visualFan}><path d="M130 73q-42-32-23-41m33 51q32-42 41-23m-51 33q42 32 23 41m-33-51q-32 42-41 23" /></g><path d="M33 59q28 24 36 0M29 102q27-24 39 0M191 58q20 24 38 0M191 103q20-24 38 0" /></>}
    {index === 2 && <><path d="M55 55h57v57H55zm93 0h57v57h-57zM112 83h36" /><g className={styles.visualConnector}><path d="M123 66h14v34h-14z" /><circle cx="130" cy="83" r="3" /></g><path d="M71 39v16m25-16v16m68-16v16m25-16v16M71 112v16m25-16v16m68-16v16m25-16v16" /></>}
    {index === 3 && <><g className={styles.visualModule}><path d="M53 100h154v30H53zM68 107h25v14H68zm35 0h25v14h-25zm35 0h25v14h-25zm35 0h20v14h-20z" /></g><path d="M53 51h154v30H53zM130 84v12m-8-7 8 8 8-8" /></>}
    {index === 4 && <><path d="M51 64l79-31 79 31-79 31zM51 87l79 31 79-31M51 111l79 31 79-31" /><path d="m105 64-11 7 11 7m50-14 11 7-11 7m-21-16-8 19" className={styles.visualCode} /></>}
  </svg></div>;
}
