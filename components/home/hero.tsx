"use client";

import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { whatsappUrl } from "@/components/home/site-data";
import { CountMetric } from "@/components/home/count-metric";

const particles = [
  { left: "7%", top: "18%", size: 2, delay: "0s" },
  { left: "21%", top: "72%", size: 1, delay: "1.8s" },
  { left: "39%", top: "22%", size: 1, delay: "3.4s" },
  { left: "57%", top: "81%", size: 2, delay: "2.1s" },
  { left: "73%", top: "17%", size: 1, delay: "0.9s" },
  { left: "89%", top: "64%", size: 2, delay: "4.2s" },
  { left: "82%", top: "36%", size: 1, delay: "2.9s" },
  { left: "14%", top: "46%", size: 1, delay: "5s" }
];

export function Hero() {
  const reduceMotion = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const smoothX = useSpring(pointerX, { stiffness: 70, damping: 20 });
  const smoothY = useSpring(pointerY, { stiffness: 70, damping: 20 });
  const sphereX = useTransform(smoothX, [-0.5, 0.5], [-14, 14]);
  const sphereY = useTransform(smoothY, [-0.5, 0.5], [-10, 10]);

  return (
    <section
      id="inicio"
      className="hero-stage relative flex min-h-[100svh] items-center overflow-hidden pt-24"
      onPointerMove={(event) => {
        if (reduceMotion) return;
        const rect = event.currentTarget.getBoundingClientRect();
        pointerX.set((event.clientX - rect.left) / rect.width - 0.5);
        pointerY.set((event.clientY - rect.top) / rect.height - 0.5);
      }}
      onPointerLeave={() => { pointerX.set(0); pointerY.set(0); }}
    >
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-ambient" aria-hidden="true" />
      <div className="hero-particles" aria-hidden="true">
        {particles.map((particle) => (
          <span
            key={`${particle.left}-${particle.top}`}
            style={{ left: particle.left, top: particle.top, width: particle.size, height: particle.size, animationDelay: particle.delay }}
          />
        ))}
      </div>

      <motion.div style={reduceMotion ? undefined : { x: sphereX, y: sphereY }} className="hero-orbit-visual" aria-hidden="true">
        <div className="orbital-signature">
          <svg viewBox="0 0 720 720" role="presentation">
            <defs>
              <radialGradient id="coreGlow">
                <stop offset="0%" stopColor="#d9f7ff" stopOpacity="0.92" />
                <stop offset="24%" stopColor="#6ad7ff" stopOpacity="0.52" />
                <stop offset="100%" stopColor="#187fc2" stopOpacity="0" />
              </radialGradient>
              <linearGradient id="arcGlow" x1="0" x2="1">
                <stop stopColor="#69d9ff" stopOpacity="0" />
                <stop offset="45%" stopColor="#69d9ff" stopOpacity="0.48" />
                <stop offset="100%" stopColor="#4d84ff" stopOpacity="0.03" />
              </linearGradient>
            </defs>
            <circle className="orbital-halo" cx="360" cy="360" r="235" />
            <path className="orbit-arc orbit-arc-a" d="M116 410C180 154 462 88 624 258" />
            <path className="orbit-arc orbit-arc-b" d="M178 566C425 660 637 485 590 244" />
            <path className="orbit-arc orbit-arc-c" d="M92 304C245 431 473 445 652 320" />
            <path className="orbit-arc orbit-arc-d" d="M272 94C209 258 256 489 444 626" />
            <path className="orbit-fragment" d="M126 476C168 546 226 594 292 617" />
            <circle className="orbital-core-glow" cx="360" cy="360" r="104" />
            <circle className="orbital-core-line" cx="360" cy="360" r="42" />
            <circle className="orbital-core" cx="360" cy="360" r="11" />
            <circle className="orbit-dot orbit-dot-a" cx="155" cy="245" r="5" />
            <circle className="orbit-dot orbit-dot-b" cx="606" cy="262" r="4" />
            <circle className="orbit-dot orbit-dot-c" cx="487" cy="588" r="4" />
            <circle className="orbit-dot orbit-dot-moving" cx="360" cy="360" r="3" />
          </svg>
          <span className="orbital-particle orbital-particle-a" />
          <span className="orbital-particle orbital-particle-b" />
          <span className="orbital-particle orbital-particle-c" />
        </div>
      </motion.div>

      <div className="relative z-10 mx-auto grid w-full max-w-[90rem] items-end gap-12 px-5 pb-14 pt-12 sm:px-8 lg:px-12 lg:pb-16">
        <motion.div initial="hidden" animate="show" variants={{ show: { transition: { staggerChildren: 0.12 } } }} className="max-w-5xl">
          <motion.p variants={fade} className="mb-8 font-space text-xs font-semibold uppercase tracking-[0.32em] text-cyan-300/90">Space Tech · CDMX</motion.p>
          <motion.h1 variants={fade} className="hero-title font-space font-medium tracking-[-0.035em] text-white">
            Tu tecnología<br />siempre en <span className="text-gradient">órbita.</span>
          </motion.h1>
          <motion.p variants={fade} className="mt-7 font-space text-sm font-medium uppercase tracking-[0.18em] text-slate-400 sm:text-base">
            Soporte <span>·</span> Software <span>·</span> Web <span>·</span> Tecnología
          </motion.p>
          <motion.p variants={fade} className="hero-copy mt-6 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
            Un solo aliado para cuidar tu operación, construir productos digitales y hacer que la tecnología trabaje a favor de tu negocio.
          </motion.p>
          <motion.div variants={fade} className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="primary-action group">
              Hablar con SpaceTech <ArrowUpRight className="size-4" aria-hidden />
            </a>
            <a href="#servicios" className="secondary-action group">
              Explorar soluciones <ArrowDown className="size-4" aria-hidden />
            </a>
          </motion.div>
          <motion.div variants={fade} className="hero-metrics mt-11 grid max-w-xl grid-cols-3 border-t border-white/10 pt-5">
            <CountMetric value={50} prefix="+" label="equipos" />
            <CountMetric value={20} prefix="+" label="soluciones" />
            <CountMetric value={100} suffix="%" label="personalizado" />
          </motion.div>
        </motion.div>
      </div>
      <a href="#servicios" className="scroll-cue" aria-label="Ir a servicios"><span />Scroll</a>
    </section>
  );
}

const fade = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } }
};
