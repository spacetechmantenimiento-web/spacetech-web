"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, CalendarCheck, Clock3, MapPin, MessageCircle } from "lucide-react";
import { appointmentWhatsappUrl, mapsEmbedUrl, mapsUrl } from "@/components/home/site-data";

export function Location() {
  return (
    <section className="location-section section-shell relative overflow-hidden" aria-labelledby="location-title">
      <div className="section-glow section-glow-right" aria-hidden="true" />
      <div className="mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-12">
        <div className="location-layout grid gap-12 lg:grid-cols-[0.96fr_1.04fr] lg:items-stretch">
          <motion.div initial={{ x: -20 }} whileInView={{ x: 0 }} viewport={{ once: true }} className="location-content flex flex-col justify-between py-4">
            <div>
              <p className="section-kicker">Ubicación</p>
              <h2 id="location-title" className="location-title mt-6 font-space text-4xl font-medium tracking-[-0.03em] sm:text-6xl">Visítanos en<br />nuestra oficina.</h2>
              <p className="location-lead mt-6 max-w-lg leading-7 text-slate-400">Atendemos con cita previa para brindarte un servicio rápido, personalizado y seguro.</p>
            </div>
            <div className="location-details mt-11 grid">
              <Info icon={MapPin} title="Dirección"><span className="location-address">Eje 1 Nte. 135<br />Moctezuma 2da Secc, Venustiano Carranza<br />15530, CDMX</span></Info>
              <Info icon={Clock3} title="Horario">Lunes a viernes · 9:00 a 19:00 hrs.</Info>
              <Info icon={CalendarCheck} title="Atención">Únicamente con cita previa.</Info>
            </div>
            <div className="location-actions mt-10 flex flex-col gap-3 sm:flex-row">
              <a href={appointmentWhatsappUrl} target="_blank" rel="noreferrer" className="primary-action location-primary"><MessageCircle className="size-4" />Agendar cita</a>
              <a href={mapsUrl} target="_blank" rel="noreferrer" className="secondary-action location-secondary">Cómo llegar <ArrowUpRight className="size-4" /></a>
            </div>
          </motion.div>
          <motion.div initial={{ y: 24 }} whileInView={{ y: 0 }} viewport={{ once: true }} className="map-frame">
            <iframe title="Mapa de Space Tech en Venustiano Carranza, CDMX" src={mapsEmbedUrl} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen className="h-full min-h-[30rem] w-full border-0 grayscale invert-[0.88] hue-rotate-180 contrast-[0.96] saturate-[0.68]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Info({ icon: Icon, title, children }: { icon: typeof MapPin; title: string; children: React.ReactNode }) {
  return <div className="location-detail flex gap-4"><span className="location-icon"><Icon aria-hidden /></span><div><strong className="location-detail-title block">{title}</strong><p className="location-detail-copy mt-1.5">{children}</p></div></div>;
}
