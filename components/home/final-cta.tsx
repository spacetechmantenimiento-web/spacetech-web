"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { whatsappUrl } from "@/components/home/site-data";

export function FinalCTA() {
  return (
    <section id="contacto" className="final-cta relative overflow-hidden border-t border-white/[0.07]">
      <div className="final-grid" aria-hidden="true" />
      <div className="final-orbit" aria-hidden="true" />
      <motion.div initial={{ y: 30 }} whileInView={{ y: 0 }} viewport={{ once: true }} className="relative z-10 mx-auto max-w-[90rem] px-5 py-28 text-center sm:px-8 sm:py-36 lg:px-12">
        <p className="section-kicker">El siguiente movimiento</p>
        <h2 className="mx-auto mt-7 max-w-5xl font-space text-5xl font-medium leading-[0.98] tracking-[-0.04em] text-white sm:text-7xl lg:text-8xl">Pongamos tu tecnología<br /><span className="text-gradient">en órbita.</span></h2>
        <p className="mx-auto mt-7 max-w-xl leading-7 text-slate-400">Cuéntanos qué necesita tu equipo o negocio. Nosotros trazamos la ruta.</p>
        <a href={whatsappUrl} target="_blank" rel="noreferrer" className="primary-action mt-10">Hablar con SpaceTech <ArrowUpRight className="size-4" /></a>
      </motion.div>
    </section>
  );
}
