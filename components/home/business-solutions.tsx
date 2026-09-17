"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

const points = ["Soporte continuo", "Asesoría tecnológica", "Desarrollo digital", "Seguimiento personalizado"];

export function BusinessSolutions() {
  return (
    <section id="nosotros" className="business-section section-shell relative overflow-hidden border-y border-white/[0.07]">
      <div className="section-mesh" aria-hidden="true" />
      <div className="business-atmosphere" aria-hidden="true">
        <span className="business-orbit business-orbit-wide" />
        <span className="business-orbit business-orbit-tight" />
        <span className="business-node business-node-a" />
        <span className="business-node business-node-b" />
      </div>
      <div className="mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-12">
        <motion.div initial={{ y: 28 }} whileInView={{ y: 0 }} viewport={{ once: true, margin: "-100px" }} className="business-panel">
          <div className="business-heading">
            <p className="section-kicker">Para empresas</p>
            <h2 className="mt-6 max-w-4xl font-space text-4xl font-medium leading-[1.05] tracking-[-0.035em] sm:text-6xl lg:text-7xl">Tu departamento<br /><span className="text-gradient">tecnológico externo.</span></h2>
          </div>
          <div className="business-content max-w-xl">
            <p className="text-lg leading-8 text-slate-300">Nos encargamos de distintas necesidades tecnológicas sin que tengas que construir un departamento interno completo. Un equipo cercano, flexible y listo para acompañar tu operación.</p>
            <div className="business-points">
              {points.map((point) => <span key={point} className="business-point"><CheckCircle2 className="size-4" />{point}</span>)}
            </div>
            <a href="#contacto" className="primary-action business-action">Conocer soluciones para negocios <ArrowUpRight className="size-4" /></a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
