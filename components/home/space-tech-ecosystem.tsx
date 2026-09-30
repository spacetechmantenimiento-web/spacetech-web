"use client";

import { motion, useInView, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { ecosystemNodes } from "@/components/home/site-data";
import { useRef, useState } from "react";

const nodeDepths = ["mid", "back", "front", "mid", "front", "mid", "front", "back"] as const;

export function SpaceTechEcosystem() {
  const [activeNode, setActiveNode] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef);
  const reduceMotion = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const smoothX = useSpring(pointerX, { stiffness: 55, damping: 22 });
  const smoothY = useSpring(pointerY, { stiffness: 55, damping: 22 });
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-2.8, 2.8]);
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [2.2, -2.2]);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const sceneY = useTransform(scrollYProgress, [0, 0.5, 1], [34, 0, -28]);
  const sceneScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.975, 1, 0.985]);

  return (
    <section ref={sectionRef} id="ecosistema" data-motion-active={inView && !reduceMotion} className="section-shell ecosystem-section overflow-hidden">
      <div className="section-glow section-glow-center" aria-hidden="true" />
      <div className="mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-12">
        <div className="ecosystem-heading mx-auto max-w-4xl text-center">
          <p className="section-kicker">Ecosistema SpaceTech</p>
          <h2 className="ecosystem-title section-title mt-5">Todo tu ecosistema tecnológico<br /><span>en un solo lugar.</span></h2>
        </div>

        <motion.div
          style={reduceMotion ? undefined : { y: sceneY, scale: sceneScale, rotateX, rotateY }}
          className="ecosystem-map"
          data-focus={activeNode ?? "none"}
          onPointerMove={(event) => {
            if (reduceMotion || event.pointerType !== "mouse" || !window.matchMedia("(min-width: 768px) and (hover: hover) and (pointer: fine)").matches) return;
            const rect = event.currentTarget.getBoundingClientRect();
            pointerX.set((event.clientX - rect.left) / rect.width - 0.5);
            pointerY.set((event.clientY - rect.top) / rect.height - 0.5);
          }}
          onPointerLeave={() => {
            pointerX.set(0);
            pointerY.set(0);
            setActiveNode(null);
          }}
        >
          <div className="ecosystem-depth-haze ecosystem-depth-haze-back" />
          <div className="ecosystem-orbit ecosystem-orbit-a" />
          <div className="ecosystem-orbit ecosystem-orbit-b" />
          <div className="ecosystem-orbit ecosystem-orbit-front" />
          <div className="ecosystem-crosshair" />
          <div className="ecosystem-core">
            <span className="brand-mark brand-mark-large" aria-hidden="true"><span /></span>
            <strong>SPACE<br />TECH</strong>
          </div>
          {ecosystemNodes.map((node, index) => (
            <div
              key={node.label}
              className={`ecosystem-node-hitarea ${node.position}`}
              data-depth={nodeDepths[index]}
              onPointerEnter={(event) => {
                if (event.pointerType === "mouse" && window.matchMedia("(min-width: 768px) and (hover: hover) and (pointer: fine)").matches) setActiveNode(node.position);
              }}
              onPointerLeave={() => setActiveNode(null)}
              onFocus={() => setActiveNode(node.position)}
              onBlur={() => setActiveNode(null)}
            >
              <div className={`ecosystem-node ${node.position}`} data-depth={nodeDepths[index]}>
                <node.icon aria-hidden /><span>{node.label}</span>
              </div>
            </div>
          ))}
          <div className="ecosystem-depth-haze ecosystem-depth-haze-front" />
        </motion.div>
      </div>
    </section>
  );
}
