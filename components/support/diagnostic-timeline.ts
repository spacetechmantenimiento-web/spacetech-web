export type DiagnosticPose = {
  scale: number; x: number; y: number; rotation: number;
  scan: number; scanOpacity: number; layers: number; spread: number;
  routes: number; clean: number; bridge: number;
};

export const diagnosticPhases = [
  { name: "Equipo", title: "Todo comienza entendiendo el problema.", detail: "Revisamos tu equipo y escuchamos qué sucede antes de intervenir." },
  { name: "Escaneo", title: "Un equipo. Distintas capas.", detail: "RAM, almacenamiento, refrigeración, sistema y hardware: una revisión del conjunto." },
  { name: "Detección", title: "Hardware. Software. Temperatura. Rendimiento.", detail: "Relacionamos lo que observas con los puntos que necesitan revisión." },
  { name: "Solución", title: "Solución definida.", detail: "Te proponemos el trabajo y la cotización. La reparación comienza con tu autorización." },
  { name: "Siguiente paso", title: "Diagnóstico, reparación y mantenimiento.", detail: "De entender la falla a elegir una intervención adecuada para tu equipo." }
];

const base: DiagnosticPose = { scale: .82, x: 0, y: 35, rotation: -4, scan: 0, scanOpacity: 0, layers: 0, spread: 0, routes: 0, clean: 0, bridge: 0 };
const frame = (update: Partial<DiagnosticPose>): DiagnosticPose => ({ ...base, ...update });

export const diagnosticStops = [0, .19, .2, .39, .4, .59, .6, .79, .8, 1];
export const diagnosticPoses = [
  frame({}),
  frame({ scale: 1, y: 0, rotation: 0 }),
  frame({ scale: 1, y: 0, rotation: 0, scanOpacity: 1, layers: .15 }),
  frame({ scale: 1.05, y: 0, rotation: 0, scan: 1, scanOpacity: 1, layers: 1 }),
  frame({ scale: 1.05, y: 0, rotation: 0, scan: 1, layers: 1 }),
  frame({ scale: 1.18, x: -20, y: 5, rotation: 2, layers: 1, spread: 1, routes: 1 }),
  frame({ scale: 1.18, x: -20, y: 5, rotation: 2, layers: 1, spread: 1, routes: 1 }),
  frame({ scale: 1.02, y: 0, rotation: 0, layers: 1, routes: 1, clean: 1 }),
  frame({ scale: 1.02, y: 0, rotation: 0, layers: 1, routes: 1, clean: 1 }),
  frame({ scale: .76, y: -40, rotation: 0, layers: .3, routes: 1, clean: 1, bridge: 1 })
];

export function diagnosticPhase(progress: number) {
  return Math.min(4, Math.max(0, Math.floor(progress * 5)));
}
