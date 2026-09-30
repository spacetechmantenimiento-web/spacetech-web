"use client";

import { interpolate, useScroll, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import { JourneyScene } from "@/components/home/journey-scene";
import { createJourneyFrames, type JourneyPose } from "@/components/home/journey-timeline";
import { observeJourneyPerformance } from "@/components/home/journey-performance";

export function CinematicJourney() {
  const rootRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const smoothScroll = useSpring(scrollY, { stiffness: 180, damping: 32, mass: .25 });

  useEffect(() => {
    const root = rootRef.current;
    const site = root?.closest<HTMLElement>(".premium-site");
    if (!root || !site) return;
    const scene = root.querySelector<HTMLElement>(".journey-scene")!;
    const camera = root.querySelector<HTMLElement>(".journey-camera")!;
    const pointer = root.querySelector<HTMLElement>(".journey-pointer")!;
    const core = root.querySelector<SVGGElement>(".journey-core")!;
    const route = root.querySelector<SVGPathElement>(".journey-route")!;
    const rings = ["a", "b", "c"].map(name => root.querySelector<SVGPathElement>(`.journey-ring-${name}`)!);
    const layers = ["interface", "modules", "routes", "architecture"].map(name => root.querySelector<SVGGElement>(`.journey-${name}`)!);
    const chapters = Array.from(site.querySelectorAll<HTMLElement>(".story-chapter"));
    const bars = Array.from(site.querySelectorAll<HTMLElement>("[data-progress]"));
    const story = site.querySelector<HTMLElement>("#soluciones")!;
    const hero = site.querySelector<HTMLElement>("#inicio")!;
    const ecosystem = site.querySelector<HTMLElement>("#ecosistema")!;
    const ecosystemCore = site.querySelector<HTMLElement>(".ecosystem-core")!;
    const cta = site.querySelector<HTMLElement>("#contacto")!;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const desktop = window.matchMedia("(min-width: 768px) and (min-height: 650px)");
    const initialHash = window.location.hash;
    let sample: ((scroll: number) => JourneyPose) | null = null;
    let chapterStarts: number[] = [];
    let storyStart = 0;
    let storySpan = 1;
    let activeChapter = -1;
    let refreshFrame = 0;
    let disposed = false;

    const top = (element: Element) => element.getBoundingClientRect().top + window.scrollY;
    const render = (scroll: number) => {
      if (!sample || reduced.matches || disposed) return;
      const pose = sample(scroll);
      scene.style.opacity = String(pose.opacity);
      if (pose.opacity < .001) return;
      camera.style.transform = `translate(${pose.x}px, ${pose.y}px) translate(-50%, -50%) scale(${pose.scale}) rotate(${pose.rotation}deg)`;
      core.style.transform = `translate(500px, 500px) scale(${pose.coreScale}) translate(-500px, -500px)`;
      core.style.opacity = String(pose.coreOpacity);
      [pose.ringA, pose.ringB, pose.ringC].forEach((path, index) => rings[index].setAttribute("d", path));
      [pose.rotateA, pose.rotateB, pose.rotateC].forEach((rotation, index) => rings[index].setAttribute("transform", `rotate(${rotation} 500 500)`));
      [pose.web, pose.software, pose.automation, pose.infrastructure].forEach((opacity, index) => {
        layers[index].style.opacity = String(opacity);
        layers[index].setAttribute("transform", `translate(500 ${500 + pose.layerY}) scale(${pose.layerScale}) translate(-500 -500)`);
      });
      route.style.strokeDashoffset = String((1 - pose.routeProgress) * 2400);

      const progress = Math.max(0, Math.min(1, (scroll - storyStart) / storySpan));
      const index = desktop.matches
        ? Math.min(3, Math.floor(progress * 4))
        : Math.max(0, chapterStarts.findLastIndex(start => scroll >= start));
      if (activeChapter !== index) {
        activeChapter = index;
        story.dataset.phase = String(index);
        chapters.forEach((chapter, i) => {
          chapter.dataset.current = String(i === index);
          if (desktop.matches) chapter.setAttribute("aria-hidden", "true");
        });
      }
      bars.forEach((bar, i) => { bar.style.transform = `scaleX(${Math.max(0, Math.min(1, progress * 4 - i))})`; });
    };

    const measure = () => {
      refreshFrame = 0;
      if (disposed) return;
      site.classList.toggle("cinematic-enabled", !reduced.matches);
      site.classList.toggle("cinematic-pinned", desktop.matches && !reduced.matches);
      chapters.forEach(chapter => chapter.removeAttribute("aria-hidden"));
      activeChapter = -1;
      if (reduced.matches) { sample = null; return; }
      const height = window.innerHeight;
      const width = window.innerWidth;
      chapterStarts = chapters.map(chapter => top(chapter) - height * .5);
      storyStart = desktop.matches ? top(story) : chapterStarts[0];
      storySpan = desktop.matches ? story.offsetHeight - height : (chapterStarts[3] - chapterStarts[0]) * 4 / 3;
      const ecoMeet = top(ecosystemCore) + ecosystemCore.offsetHeight * .5 - height * .55;
      const ctaStart = top(cta) - height;
      const ctaCenter = top(cta) + cta.offsetHeight * .5 - height * .5;
      const frames = createJourneyFrames({ width, height, heroEnd: top(hero) + hero.offsetHeight, storyStart, storySpan, ecosystemMeet: ecoMeet, ecosystemEnd: top(ecosystem) + ecosystem.offsetHeight - height * .5, ctaStart, ctaCenter, pageEnd: top(cta) + cta.offsetHeight - height * .12, mobile: !desktop.matches });
      sample = interpolate(frames.map(frame => frame.at), frames.map(frame => frame.pose));
      smoothScroll.jump(window.scrollY);
      render(window.scrollY);
    };
    const queueMeasure = () => { if (!refreshFrame) refreshFrame = requestAnimationFrame(measure); };
    const unsubscribe = smoothScroll.on("change", render);
    const pointerMove = (event: PointerEvent) => {
      if (reduced.matches || !desktop.matches || event.pointerType !== "mouse" || window.scrollY > hero.offsetHeight) return;
      pointer.style.transform = `translate(${(event.clientX / window.innerWidth - .5) * 14}px, ${(event.clientY / window.innerHeight - .5) * 10}px) rotate(${(event.clientX / window.innerWidth - .5) * 2}deg)`;
    };
    const resetPointer = () => { pointer.style.transform = "none"; };
    hero.addEventListener("pointermove", pointerMove);
    hero.addEventListener("pointerleave", resetPointer);
    reduced.addEventListener("change", queueMeasure);
    desktop.addEventListener("change", queueMeasure);
    window.addEventListener("resize", queueMeasure);
    window.addEventListener("pageshow", queueMeasure);
    const resizeObserver = new ResizeObserver(queueMeasure);
    [hero, story, ecosystem, cta].forEach(element => resizeObserver.observe(element));
    measure();
    const stopPerformanceAudit = observeJourneyPerformance(scene);
    document.fonts.ready.then(() => {
      if (disposed) return;
      measure();
      // Restore deep links after the pinned section and local fonts have settled.
      if (!initialHash || window.location.hash !== initialHash) return;
      try {
        const target = document.getElementById(decodeURIComponent(initialHash.slice(1)));
        if (target && site.contains(target)) {
          target.scrollIntoView({ behavior: "instant", block: "start" });
          smoothScroll.jump(window.scrollY);
          render(window.scrollY);
        }
      } catch {
        return;
      }
    });

    return () => {
      disposed = true;
      unsubscribe();
      stopPerformanceAudit();
      resizeObserver.disconnect();
      cancelAnimationFrame(refreshFrame);
      reduced.removeEventListener("change", queueMeasure);
      desktop.removeEventListener("change", queueMeasure);
      window.removeEventListener("resize", queueMeasure);
      window.removeEventListener("pageshow", queueMeasure);
      hero.removeEventListener("pointermove", pointerMove);
      hero.removeEventListener("pointerleave", resetPointer);
      site.classList.remove("cinematic-enabled", "cinematic-pinned");
      chapters.forEach(chapter => chapter.removeAttribute("aria-hidden"));
    };
  }, [smoothScroll]);

  return <div ref={rootRef}><JourneyScene /></div>;
}
