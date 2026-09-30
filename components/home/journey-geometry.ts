export function orbitPath(rx: number, ry: number) {
  const k = 0.5522847498;
  return `M ${500 - rx} 500 C ${500 - rx} ${500 - ry * k} ${500 - rx * k} ${500 - ry} 500 ${500 - ry} C ${500 + rx * k} ${500 - ry} ${500 + rx} ${500 - ry * k} ${500 + rx} 500 C ${500 + rx} ${500 + ry * k} ${500 + rx * k} ${500 + ry} 500 ${500 + ry} C ${500 - rx * k} ${500 + ry} ${500 - rx} ${500 + ry * k} ${500 - rx} 500 Z`;
}
