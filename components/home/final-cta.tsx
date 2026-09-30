"use client";

import { motion, useInView, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";
import { whatsappUrl } from "@/components/home/site-data";

export function FinalCTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const sceneY = useTransform(scrollYProgress, [0, 0.5, 1], [70, 0, -24]);
  const sceneScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.86, 1, 1.04]);
  const contentY = useTransform(scrollYProgress, [0, 0.48, 1], [28, 0, -14]);

  return (
    <section ref={sectionRef} id="contacto" data-motion-active={inView && !reduceMotion} className="final-cta relative overflow-hidden border-t border-white/[0.07]">
      <div className="final-grid" aria-hidden="true" />
      <motion.div style={reduceMotion ? undefined : { x: "-50%", y: sceneY, scale: sceneScale }} className="final-scene" aria-hidden="true">
        <div className="final-orbit final-orbit-outer" />
        <div className="final-orbit final-orbit-inner" />
        <div className="final-core"><span /></div>
        <i className="final-particle final-particle-a" />
        <i className="final-particle final-particle-b" />
        <i className="final-particle final-particle-c" />
      </motion.div>
      <motion.div style={reduceMotion ? undefined : { y: contentY }} initial={reduceMotion ? false : { opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: reduceMotion ? 0 : 0.8 }} className="relative z-10 mx-auto max-w-[90rem] px-5 py-28 text-center sm:px-8 sm:py-36 lg:px-12">
        <p className="section-kicker">El siguiente movimiento</p>
        <h2 className="mx-auto mt-7 max-w-5xl font-space text-5xl font-medium leading-[0.98] tracking-[-0.04em] text-white sm:text-7xl lg:text-8xl">Pongamos tu tecnología<br /><span className="text-gradient">en órbita.</span></h2>
        <p className="mx-auto mt-7 max-w-xl leading-7 text-slate-400">Cuéntanos qué necesita tu equipo o negocio. Nosotros trazamos la ruta.</p>
        <a href={whatsappUrl} target="_blank" rel="noreferrer" className="primary-action mt-10">Hablar con SpaceTech <ArrowUpRight className="size-4" /></a>
      </motion.div>
    </section>
  );
}
