"use client";

import { motion } from "framer-motion";
import { storyItems } from "@/components/home/site-data";

export function ScrollStory() {
  return (
    <section id="soluciones" className="story-section relative border-y border-white/[0.07]">
      <div className="section-mesh" aria-hidden="true" />
      <div className="mx-auto grid max-w-[90rem] gap-16 px-5 py-24 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:px-12 lg:py-36">
        <div className="lg:sticky lg:top-32 lg:h-fit">
          <p className="section-kicker">Nuestra forma de pensar</p>
          <h2 className="mt-6 max-w-lg font-space text-4xl font-medium leading-[1.08] tracking-[-0.03em] text-white sm:text-6xl">
            No solo reparamos tecnología.<br /><span className="text-gradient">La construimos.</span>
          </h2>
          <p className="mt-7 max-w-md leading-7 text-slate-400">Conectamos soporte, diseño y desarrollo para resolver el problema completo, no solo una parte.</p>
        </div>

        <div className="story-list">
          {storyItems.map((item, index) => (
            <motion.article
              key={item.label}
              initial={{ opacity: 0.2, y: 36, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ amount: 0.55 }}
              transition={{ duration: 0.65 }}
              className="story-item"
            >
              <span className="story-number">0{index + 1}</span>
              <item.icon className="story-icon" aria-hidden />
              <div><h3>{item.label}</h3><p>{item.detail}</p></div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
