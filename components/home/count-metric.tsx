"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";

export function CountMetric({
  value,
  label,
  prefix = "",
  suffix = ""
}: {
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
}) {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(value);

  useEffect(() => {
    if (reduceMotion) {
      setCount(value);
      return;
    }

    const element = ref.current;
    if (!element) return;
    if (!("IntersectionObserver" in window)) {
      setCount(value);
      return;
    }

    let frame = 0;
    setCount(0);

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      const start = performance.now();
      const duration = 950;

      const update = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setCount(Math.round(value * eased));
        if (progress < 1) frame = requestAnimationFrame(update);
      };

      frame = requestAnimationFrame(update);
      observer.disconnect();
    }, { threshold: 0.6 });

    observer.observe(element);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [reduceMotion, value]);

  return (
    <div ref={ref} className="hero-metric">
      <strong>{prefix}{count}{suffix}</strong>
      <span>{label}</span>
    </div>
  );
}
