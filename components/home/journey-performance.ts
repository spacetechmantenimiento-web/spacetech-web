// Opt-in diagnostics only; no sampling loop runs during normal visits.
export function observeJourneyPerformance(element: HTMLElement) {
  if (!new URLSearchParams(window.location.search).has("motion-audit")) return () => {};
  let frame = 0;
  let lastScroll = 0;
  let previousTime = 0;
  const intervals: number[] = [];
  const sample = (time: number) => {
    if (previousTime && time - previousTime < 150) intervals.push(time - previousTime);
    previousTime = time;
    if (time - lastScroll < 300 && !document.hidden) {
      frame = requestAnimationFrame(sample);
    } else {
      frame = 0;
      previousTime = 0;
      if (intervals.length) {
        const sorted = [...intervals].sort((a, b) => a - b);
        element.dataset.fps = (1000 / (intervals.reduce((sum, value) => sum + value, 0) / intervals.length)).toFixed(1);
        element.dataset.frameP95 = sorted[Math.floor(sorted.length * .95)].toFixed(1);
        element.dataset.frameSamples = String(intervals.length);
      }
    }
  };
  const onScroll = () => {
    lastScroll = performance.now();
    if (!frame && !document.hidden) frame = requestAnimationFrame(sample);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  return () => {
    cancelAnimationFrame(frame);
    window.removeEventListener("scroll", onScroll);
  };
}
