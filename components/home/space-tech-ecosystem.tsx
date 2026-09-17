"use client";

import { motion } from "framer-motion";
import { ecosystemNodes } from "@/components/home/site-data";

export function SpaceTechEcosystem() {
  return (
    <section id="ecosistema" className="section-shell ecosystem-section overflow-hidden">
      <div className="section-glow section-glow-center" aria-hidden="true" />
      <div className="mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-12">
        <div className="ecosystem-heading mx-auto max-w-4xl text-center">
          <p className="section-kicker">Ecosistema SpaceTech</p>
          <h2 className="ecosystem-title section-title mt-5">Todo tu ecosistema tecnológico<br /><span>en un solo lugar.</span></h2>
        </div>

        <motion.div
          initial={{ scale: 0.96 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9 }}
          className="ecosystem-map"
        >
          <div className="ecosystem-orbit ecosystem-orbit-a" />
          <div className="ecosystem-orbit ecosystem-orbit-b" />
          <div className="ecosystem-crosshair" />
          <div className="ecosystem-core">
            <span className="brand-mark brand-mark-large" aria-hidden="true"><span /></span>
            <strong>SPACE<br />TECH</strong>
          </div>
          {ecosystemNodes.map((node, index) => (
            <motion.div
              key={node.label}
              initial={{ scale: 0.75 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 + index * 0.07 }}
              className={`ecosystem-node ${node.position}`}
            >
              <node.icon aria-hidden /><span>{node.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
