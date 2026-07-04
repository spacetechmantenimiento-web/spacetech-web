"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "framer-motion";
import { CheckCircle2, Code2, Cpu, Terminal } from "lucide-react";

const codeLines = [
  { text: 'import { innovation } from "SpaceTech";', tone: "text-cyan-200" },
  { text: 'import { solutions } from "Orbit";', tone: "text-violet-200" },
  { text: "", tone: "text-slate-500" },
  { text: "const services = [", tone: "text-slate-200" },
  { text: '  "Soporte técnico",', tone: "text-electric" },
  { text: '  "Desarrollo web",', tone: "text-cyan-200" },
  { text: '  "Sistemas administrativos",', tone: "text-violet-200" },
  { text: '  "Optimización",', tone: "text-emerald-200" },
  { text: '  "Recuperación de datos",', tone: "text-electric" },
  { text: '  "Automatización"', tone: "text-cyan-200" },
  { text: "];", tone: "text-slate-200" },
  { text: "", tone: "text-slate-500" },
  { text: "function launchSolution(problem) {", tone: "text-slate-200" },
  { text: "  if (problem) {", tone: "text-slate-300" },
  { text: "    return SpaceTech.solve(problem);", tone: "text-electric" },
  { text: "  }", tone: "text-slate-300" },
  { text: '  return "Tu tecnología siempre en órbita";', tone: "text-violet-200" },
  { text: "}", tone: "text-slate-200" },
  { text: "", tone: "text-slate-500" },
  { text: "class SpaceTech {", tone: "text-slate-200" },
  { text: "  constructor() {", tone: "text-slate-300" },
  { text: '    this.mission = "Impulsar tu tecnología";', tone: "text-cyan-200" },
  { text: '    this.vision = "Soluciones que transforman";', tone: "text-violet-200" },
  { text: "    this.orbit = true;", tone: "text-emerald-200" },
  { text: "  }", tone: "text-slate-300" },
  { text: "}", tone: "text-slate-200" }
];

const statusItems = ["Build Successful", "Firebase Connected", "API Online"];

export function AnimatedCodePanel() {
  const reduceMotion = useReducedMotion();
  const lines = [...codeLines, ...codeLines.slice(0, 12)];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97, y: 24 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative mx-auto w-full max-w-2xl"
      aria-label="Panel animado con código de Space Tech"
    >
      <div className="absolute inset-[-1.5rem] rounded-[2rem] bg-electric/10 blur-3xl" />
      <div className="absolute -right-5 top-8 h-40 w-40 rounded-full border border-electric/20" />
      <div className="absolute -left-6 bottom-12 h-36 w-36 rounded-full border border-plasma/20" />
      <motion.div
        animate={reduceMotion ? undefined : { y: [0, -8, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="code-panel relative overflow-hidden rounded-2xl border border-white/12 bg-void/70 shadow-glow backdrop-blur-2xl"
      >
        <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.045] px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="size-2.5 rounded-full bg-[#ff5f57]" />
            <span className="size-2.5 rounded-full bg-[#ffbd2e]" />
            <span className="size-2.5 rounded-full bg-[#28c840]" />
          </div>
          <div className="flex items-center gap-2 rounded-full border border-electric/20 bg-electric/10 px-3 py-1 text-xs font-medium text-cyan-100">
            <Terminal className="size-3.5" aria-hidden />
            orbit-core.ts
          </div>
        </div>

        <div className="relative h-[25rem] overflow-hidden p-4 sm:h-[29rem] sm:p-6">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(32,200,255,0.055)_1px,transparent_1px)] bg-[length:100%_34px] opacity-60" />
          <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-void via-void/80 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-void via-void/80 to-transparent" />
          <div className="absolute left-4 right-4 top-4 z-20 flex flex-wrap gap-2 sm:left-6 sm:right-6 sm:top-5">
            {statusItems.map((item, index) => (
              <motion.span
                key={item}
                initial={reduceMotion ? false : { opacity: 0, y: -6 }}
                animate={reduceMotion ? undefined : { opacity: [0.6, 1, 0.72], y: 0 }}
                transition={{
                  delay: 0.35 + index * 0.18,
                  duration: 3.8,
                  repeat: Infinity,
                  repeatDelay: 4,
                  ease: "easeInOut"
                }}
                className="inline-flex items-center gap-1.5 rounded-full border border-emerald-300/15 bg-emerald-300/[0.055] px-2.5 py-1 text-[0.65rem] font-medium text-emerald-100 backdrop-blur-xl"
              >
                <CheckCircle2 className="size-3 text-emerald-200" aria-hidden />
                {item}
              </motion.span>
            ))}
          </div>
          <div className="absolute right-5 top-5 rounded-full border border-electric/20 bg-electric/10 p-3 text-electric">
            <Cpu className="size-5" aria-hidden />
          </div>
          <div className="absolute bottom-5 left-5 rounded-full border border-plasma/20 bg-plasma/10 p-3 text-violet-200">
            <Code2 className="size-5" aria-hidden />
          </div>

          <div className="code-scroll relative z-10 font-mono text-[0.8rem] leading-7 sm:text-sm">
            {lines.map((line, index) => (
              <div
                key={`${line.text}-${index}`}
                className={`grid grid-cols-[2.25rem_1fr] gap-3 ${
                  index === 14 ? "code-compile-line rounded bg-electric/[0.045]" : ""
                }`}
              >
                <span className="select-none text-right text-slate-600">{String(index + 1).padStart(2, "0")}</span>
                <span className={line.tone}>
                  {line.text || "\u00a0"}
                  {index === 14 && <span className="code-cursor ml-1 inline-block h-4 w-1 translate-y-0.5 bg-electric" />}
                </span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
