import type { ReactNode } from "react";
import { ArrowUpRight, Check } from "lucide-react";
import styles from "./support.module.css";

export function SupportLink({ href, children, secondary = false }: { href: string; children: ReactNode; secondary?: boolean }) {
  const external = href.startsWith("https:");
  return <a className={`${secondary ? "secondary-action" : "primary-action"} ${styles.action}`} href={href} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined}>{children}<ArrowUpRight className="size-4 shrink-0" aria-hidden /></a>;
}

export function SupportHeading({ eyebrow, title, children }: { eyebrow: string; title: ReactNode; children?: ReactNode }) {
  return <div className={styles.heading}><p className={styles.eyebrow}>{eyebrow}</p><h2>{title}</h2>{children && <p className={styles.lead}>{children}</p>}</div>;
}

export function CheckList({ items }: { items: string[] }) {
  return <ul className={styles.checkList}>{items.map(item => <li key={item}><Check size={16} aria-hidden />{item}</li>)}</ul>;
}
