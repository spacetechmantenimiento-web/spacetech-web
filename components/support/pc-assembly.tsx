"use client";

import { motion, useReducedMotion, useScroll, useSpring, useTransform, type MotionStyle } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { CircuitBoard, Cpu, Fan, HardDrive, MemoryStick } from "lucide-react";
import styles from "./support.module.css";

const parts = [
  { name: "CPU", Icon: Cpu, from: [-235, -145], to: [-54, -65] },
  { name: "GPU", Icon: CircuitBoard, from: [230, 65], to: [0, 35] },
  { name: "RAM", Icon: MemoryStick, from: [230, -145], to: [54, -65] },
  { name: "SSD", Icon: HardDrive, from: [-240, 110], to: [-54, 110] },
  { name: "Refrigeración", Icon: Fan, from: [0, -225], to: [0, -145] }
];

function AssemblyPart({ part, progress, compact }: { part: typeof parts[number]; progress: ReturnType<typeof useSpring>; compact: boolean }) {
  const reduced = useReducedMotion();
  const x = useTransform(progress, [0, .82], [part.from[0] * (compact ? .48 : 1), part.to[0]]);
  const y = useTransform(progress, [0, .82], [part.from[1] * (compact ? .72 : 1), part.to[1]]);
  const scale = useTransform(progress, [0, .82], [1.1, .86]);
  const style: MotionStyle & { "--assembly-final-x": string; "--assembly-final-y": string } = {
    "--assembly-final-x": `${part.to[0]}px`,
    "--assembly-final-y": `${part.to[1]}px`,
    ...(reduced ? { x: part.to[0], y: part.to[1], scale: .86 } : { x, y, scale })
  };
  return <motion.div className={`${styles.assemblyPart} ${part.name === "Refrigeración" ? styles.assemblyCooling : ""}`} style={style}><part.Icon size={36} strokeWidth={1.3} aria-hidden /><span>{part.name}</span></motion.div>;
}

export function PcAssembly() {
  const root = useRef<HTMLDivElement>(null);
  const [compact, setCompact] = useState(false);
  useEffect(() => {
    const query = window.matchMedia("(max-width: 767px)");
    const update = () => setCompact(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);
  const { scrollYProgress } = useScroll({ target: root, offset: ["start .95", "end .5"] });
  const progress = useSpring(scrollYProgress, { stiffness: 150, damping: 30 });
  const rotation = useTransform(progress, [0, 1], [-8, 0]);
  const reduced = useReducedMotion();
  return <div className={styles.assembly} ref={root}><div className={styles.assemblyViewport} aria-hidden><motion.div className={styles.assemblyChassis} style={{ rotateY: reduced ? 0 : rotation }}><span /><i /></motion.div>{parts.map(part => <AssemblyPart key={part.name} part={part} progress={progress} compact={compact} />)}<span className={styles.assemblyLine} /></div><p className={styles.assemblyMotto}>Tu PC. <span>Tu uso.</span> Tu configuración.</p></div>;
}
