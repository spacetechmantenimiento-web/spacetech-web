"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import { serviceGroups } from "@/components/home/site-data";

export function Services() {
  return (
    <section id="servicios" className="services-section section-shell relative overflow-hidden border-t border-white/[0.07]">
      <div className="section-glow section-glow-right" aria-hidden="true" />
      <div className="mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-12">
        <div className="section-intro grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
          <p className="section-kicker">Lo que hacemos</p>
          <h2 className="section-title max-w-4xl">Tres capacidades.<br /><span className="text-slate-500">Un mismo estándar.</span></h2>
        </div>

        <div className="service-list mt-16">
          {serviceGroups.map((group, index) => (
            <motion.article
              key={group.eyebrow}
              initial={{ y: 24 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.65, delay: index * 0.06 }}
              className={`service-row service-tone-${group.tone}`}
            >
              <div className="flex items-start gap-4">
                <span className="service-icon"><group.icon className="size-5" aria-hidden /></span>
                <p className="service-eyebrow">{group.eyebrow}</p>
              </div>
              <div>
                <h3>{group.title}</h3>
                <p className="mt-4 max-w-xl leading-7 text-slate-400">{group.description}</p>
              </div>
              <div className="grid gap-3">
                {group.items.map((item) => (
                  <span key={item} className="flex items-center gap-3 text-sm text-slate-300"><Check className="size-4 text-cyan-300" aria-hidden />{item}</span>
                ))}
              </div>
              <a href="#contacto" className="service-arrow" aria-label={`Conocer ${group.eyebrow}`}><ArrowUpRight className="size-5" /></a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
