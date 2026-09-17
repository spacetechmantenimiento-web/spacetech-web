"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { testimonials } from "@/components/home/site-data";

export function Testimonials() {
  const [featured, ...secondary] = testimonials;

  return (
    <section className="testimonials-section section-shell relative overflow-hidden">
      <div className="section-glow section-glow-left" aria-hidden="true" />
      <div className="testimonials-orbit" aria-hidden="true" />
      <div className="mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-12">
        <div className="testimonials-intro section-intro grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
          <p className="section-kicker">Confianza real</p>
          <h2 className="section-title max-w-4xl">Tecnología clara.<br /><span className="testimonials-title-accent">Resultados que se sienten.</span></h2>
        </div>
        <div className="testimonials-layout">
          <motion.blockquote initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} className="testimonial-item testimonial-featured">
            <div className="testimonial-topline">
              <span className="testimonial-service">{featured.service}</span>
              <Quote className="testimonial-quote" aria-hidden />
            </div>
            <p className="testimonial-copy">“{featured.quote}”</p>
            <footer className="testimonial-author">{featured.author}</footer>
          </motion.blockquote>

          <div className="testimonials-secondary">
            {secondary.map((item, index) => (
              <motion.blockquote key={item.author} initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: (index + 1) * 0.08 }} className="testimonial-item testimonial-compact">
                <div className="testimonial-topline">
                  <span className="testimonial-service">{item.service}</span>
                  <Quote className="testimonial-quote" aria-hidden />
                </div>
                <p className="testimonial-copy">“{item.quote}”</p>
                <footer className="testimonial-author">{item.author}</footer>
              </motion.blockquote>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
