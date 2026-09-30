"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { storyItems } from "@/components/home/site-data";

export function ScrollStory() {
  const [active, setActive] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (!inView) return;
    let frame = 0;
    const updateActiveItem = () => {
      frame = 0;
      const items = Array.from(sectionRef.current?.querySelectorAll<HTMLElement>("[data-story-index]") ?? []);
      const viewportCenter = window.innerHeight * 0.52;
      let closestIndex = 0;
      let closestDistance = Number.POSITIVE_INFINITY;

      items.forEach((item) => {
        const rect = item.getBoundingClientRect();
        const distance = Math.abs(rect.top + rect.height / 2 - viewportCenter);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = Number(item.dataset.storyIndex);
        }
      });

      setActive(closestIndex);
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(updateActiveItem);
    };

    updateActiveItem();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    };
  }, [inView]);

  return (
    <section ref={sectionRef} id="soluciones" className="story-section relative border-y border-white/[0.07]">
      <div className="section-mesh" aria-hidden="true" />
      <div className="mx-auto grid max-w-[90rem] gap-16 px-5 py-24 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:px-12 lg:py-36">
        <div className="story-sticky lg:sticky lg:top-28 lg:h-fit">
          <p className="section-kicker">Nuestra forma de pensar</p>
          <h2 className="mt-6 max-w-lg font-space text-4xl font-medium leading-[1.08] tracking-[-0.03em] text-white sm:text-6xl">
            No solo reparamos tecnología.<br /><span className="text-gradient">La construimos.</span>
          </h2>
          <p className="mt-7 max-w-md leading-7 text-slate-400">Conectamos soporte, diseño y desarrollo para resolver el problema completo, no solo una parte.</p>
          <div className="story-system" data-active={active} aria-hidden="true">
            <div className="story-system-grid" />
            <div className="story-system-plane story-system-plane-back" />
            <div className="story-system-core"><span>0{active + 1}</span></div>
            <div className="story-system-ring story-system-ring-a" />
            <div className="story-system-ring story-system-ring-b" />
            <div className="story-system-plane story-system-plane-front" />
            <span className="story-system-signal story-system-signal-a" />
            <span className="story-system-signal story-system-signal-b" />
            <p>{storyItems[active].label.replace(".", "")}</p>
          </div>
        </div>

        <div className="story-list">
          {storyItems.map((item, index) => (
            <motion.div
              key={item.label}
              initial={reduceMotion ? false : { opacity: 0.2, y: 36, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ amount: 0.55 }}
              transition={{ duration: reduceMotion ? 0 : 0.65, ease: [0.22, 1, 0.36, 1] }}
              data-story-index={index}
            >
              <article
                onPointerEnter={(event) => {
                  if (event.pointerType === "mouse" && window.matchMedia("(hover: hover) and (pointer: fine)").matches) setActive(index);
                }}
                className={`story-item ${active === index ? "story-item-active" : index < active ? "story-item-past" : "story-item-future"}`}
              >
                <span className="story-number">0{index + 1}</span>
                <item.icon className="story-icon" aria-hidden />
                <div><h3>{item.label}</h3><p>{item.detail}</p></div>
              </article>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
