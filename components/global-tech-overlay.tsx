const nodes = [
  { left: "8%", top: "18%", delay: "0s" },
  { left: "22%", top: "36%", delay: "1.8s" },
  { left: "41%", top: "16%", delay: "3.1s" },
  { left: "68%", top: "28%", delay: "0.9s" },
  { left: "86%", top: "14%", delay: "2.5s" },
  { left: "12%", top: "64%", delay: "2.2s" },
  { left: "34%", top: "78%", delay: "0.4s" },
  { left: "58%", top: "66%", delay: "3.4s" },
  { left: "79%", top: "82%", delay: "1.2s" }
];

const codeFragments = [
  { text: "0101", left: "9%", top: "28%" },
  { text: "deploy()", left: "74%", top: "20%" },
  { text: "orbit:true", left: "18%", top: "71%" },
  { text: "solve()", left: "84%", top: "58%" },
  { text: "const tech", left: "48%", top: "84%" }
];

export function GlobalTechOverlay() {
  return (
    <div className="global-tech-overlay pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      <div className="tech-gradient-layer absolute inset-0" />
      <div className="tech-grid-layer absolute inset-0" />
      <div className="tech-scan-layer absolute inset-0" />

      <svg
        className="tech-orbit-layer absolute inset-0 h-full w-full"
        viewBox="0 0 1440 1200"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="orbitLine" x1="0%" x2="100%" y1="0%" y2="0%">
            <stop offset="0%" stopColor="rgba(32,200,255,0)" />
            <stop offset="48%" stopColor="rgba(32,200,255,0.28)" />
            <stop offset="100%" stopColor="rgba(109,92,255,0)" />
          </linearGradient>
          <linearGradient id="networkLine" x1="0%" x2="100%" y1="0%" y2="0%">
            <stop offset="0%" stopColor="rgba(238,246,255,0.02)" />
            <stop offset="50%" stopColor="rgba(32,200,255,0.18)" />
            <stop offset="100%" stopColor="rgba(109,92,255,0.04)" />
          </linearGradient>
        </defs>
        <path className="tech-orbit-path tech-orbit-a" d="M-80 330 C260 90 760 110 1520 260" />
        <path className="tech-orbit-path tech-orbit-b" d="M-120 820 C320 610 840 690 1540 520" />
        <path className="tech-orbit-path tech-orbit-c" d="M105 1120 C430 760 780 340 1340 50" />
        <path className="tech-network-path" d="M116 216 L318 432 L590 192 L980 336 L1238 168" />
        <path className="tech-network-path" d="M174 768 L490 936 L835 792 L1138 984" />
      </svg>

      <div className="tech-node-layer absolute inset-0">
        {nodes.map((node) => (
          <span
            key={`${node.left}-${node.top}`}
            className="tech-node"
            style={{ left: node.left, top: node.top, animationDelay: node.delay }}
          />
        ))}
      </div>

      <div className="tech-fragment-layer absolute inset-0">
        {codeFragments.map((fragment) => (
          <span
            key={fragment.text}
            className="tech-code-fragment"
            style={{ left: fragment.left, top: fragment.top }}
          >
            {fragment.text}
          </span>
        ))}
      </div>
    </div>
  );
}
