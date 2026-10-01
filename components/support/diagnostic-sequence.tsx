"use client";

import { interpolate, useScroll, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import { diagnosticPhases, diagnosticPoses, diagnosticStops, diagnosticPhase } from "./diagnostic-timeline";
import { DiagnosticScene } from "./diagnostic-scene";
import { observeJourneyPerformance } from "@/components/home/journey-performance";
import styles from "./diagnostic.module.css";

const sample = interpolate(diagnosticStops, diagnosticPoses);

export function DiagnosticSequence() {
  const rootRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: rootRef, offset: ["start start", "end end"] });
  const progress = useSpring(scrollYProgress, { stiffness: 200, damping: 35, mass: .3 });
  useEffect(() => {
    const root = rootRef.current!;
    const camera = root.querySelector<HTMLElement>("[data-diagnostic-camera]")!;
    const layers = root.querySelector<SVGGElement>("[data-diagnostic-layers]")!;
    const scan = root.querySelector<SVGGElement>("[data-diagnostic-scan]")!;
    const routes = root.querySelector<SVGGElement>("[data-diagnostic-routes]")!;
    const callouts = root.querySelector<SVGGElement>("[data-diagnostic-callouts]")!;
    const solution = root.querySelector<SVGGElement>("[data-diagnostic-solution]")!;
    const bridge = root.querySelector<SVGGElement>("[data-diagnostic-bridge]")!;
    const chapters = Array.from(root.querySelectorAll<HTMLElement>("[data-diagnostic-chapter]"));
    const desktop = window.matchMedia("(min-width: 1024px) and (min-height: 600px), (min-width: 768px) and (min-height: 700px)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    let active = -1;
    let inView = false;
    let disposed = false;
    const render = (value: number) => {
      if ((!inView && !reduced.matches) || disposed) return;
      const pinned = desktop.matches && !reduced.matches;
      const p = reduced.matches ? .79 : pinned ? value : Math.max(.25, Math.min(.79, value));
      const pose = sample(p);
      const phase = diagnosticPhase(p);
      camera.style.transform = `translate3d(${pose.x}px,${pose.y}px,0) scale(${pose.scale}) rotate(${pose.rotation}deg)`;
      layers.style.opacity = String(pose.layers * (1 - pose.clean * .55));
      layers.style.transform = `translateY(${-pose.spread * 18}px)`;
      scan.style.opacity = String(pose.scanOpacity);
      scan.style.transform = `translateX(${pose.scan * 590}px)`;
      routes.style.opacity = String(pose.routes * .7);
      routes.style.strokeDashoffset = String((1 - pose.routes) * 950);
      callouts.style.opacity = String(pose.layers * (1 - pose.bridge));
      solution.style.opacity = String(pose.clean);
      bridge.style.opacity = String(pose.bridge);
      bridge.style.transform = `translateY(${pose.bridge * 25}px)`;
      root.style.setProperty("--diagnostic-progress", String(p));
      if (active !== phase) {
        active = phase;
        root.dataset.phase = String(phase);
        chapters.forEach((chapter, index) => {
          chapter.dataset.current = String(index === phase);
          if (pinned) chapter.setAttribute("aria-hidden", "true");
          else chapter.removeAttribute("aria-hidden");
        });
      }
    };
    const configure = () => {
      root.dataset.mode = reduced.matches ? "reduced" : desktop.matches ? "pinned" : "compact";
      chapters.forEach(chapter => {
        if (root.dataset.mode === "pinned") chapter.setAttribute("aria-hidden", "true");
        else chapter.removeAttribute("aria-hidden");
      });
      active = -1;
      progress.jump(scrollYProgress.get());
      render(progress.get());
    };
    const visibility = new IntersectionObserver(entries => {
      inView = entries[0].isIntersecting;
      if (inView) render(progress.get());
    }, { rootMargin: "100px" });
    visibility.observe(root);
    const unsubscribe = progress.on("change", render);
    desktop.addEventListener("change", configure);
    reduced.addEventListener("change", configure);
    configure();
    const initialHash = window.location.hash;
    document.fonts.ready.then(() => {
      if (disposed || !initialHash || window.location.hash !== initialHash) return;
      const target = document.getElementById(initialHash.slice(1));
      if (target) target.scrollIntoView({ behavior: "instant" });
    });
    const stopAudit = observeJourneyPerformance(root);
    return () => {
      disposed = true;
      unsubscribe(); visibility.disconnect(); stopAudit();
      desktop.removeEventListener("change", configure);
      reduced.removeEventListener("change", configure);
    };
  }, [progress, scrollYProgress]);

  return (
    <section id="diagnostico" ref={rootRef} className={styles.sequence} data-support-scene>
      <ol className={styles.accessibleSummary}>{diagnosticPhases.map(phase => <li key={phase.name}>{phase.title} {phase.detail}</li>)}</ol>
      <div className={styles.pin}>
        <div className={styles.layout}>
          <div className={styles.intro}><p>SPACETECH DIAGNOSTIC</p><h2>Primero, entender.<br /> <span>Después, resolver.</span></h2></div>
          <DiagnosticScene />
          <div className={styles.chapters}>{diagnosticPhases.map((phase, index) => <article key={phase.name} data-diagnostic-chapter data-current={index === 0} className={styles.chapter}><span>0{index + 1} / {phase.name}</span><h3>{phase.title}</h3><p>{phase.detail}</p></article>)}</div>
          <div className={styles.progress} aria-hidden>{diagnosticPhases.map((phase, index) => <span key={phase.name}><i>{phase.name}</i><b style={{ "--phase-start": index } as React.CSSProperties} /></span>)}</div>
        </div>
      </div>
    </section>
  );
}
