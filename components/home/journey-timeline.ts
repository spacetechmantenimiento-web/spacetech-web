import { orbitPath } from "@/components/home/journey-geometry";

export type JourneyPose = {
  x: number; y: number; scale: number; rotation: number; opacity: number;
  ringA: string; ringB: string; ringC: string;
  rotateA: number; rotateB: number; rotateC: number;
  coreScale: number; coreOpacity: number;
  web: number; software: number; automation: number; infrastructure: number;
  layerScale: number; layerY: number; routeProgress: number;
};

export type JourneyFrame = { at: number; pose: JourneyPose };

export type JourneyMeasurements = {
  width: number; height: number; heroEnd: number; storyStart: number;
  storySpan: number; ecosystemMeet: number; ecosystemEnd: number;
  ctaStart: number; ctaCenter: number; pageEnd: number; mobile: boolean;
};

export function createJourneyFrames(m: JourneyMeasurements): JourneyFrame[] {
  const base: JourneyPose = {
    x: m.width * .77, y: m.height * .48, scale: 1.2, rotation: -12, opacity: .88,
    ringA: orbitPath(350, 190), ringB: orbitPath(235, 370), ringC: orbitPath(380, 105),
    rotateA: -22, rotateB: 28, rotateC: 12, coreScale: 1.25, coreOpacity: 1,
    web: 0, software: 0, automation: 0, infrastructure: 0,
    layerScale: .8, layerY: 0, routeProgress: 1
  };
  let previous = base;
  const frames: JourneyFrame[] = [];
  const add = (at: number, update: Partial<JourneyPose>) => {
    previous = { ...previous, ...update };
    frames.push({ at: Math.max(at, (frames.at(-1)?.at ?? -1) + 1), pose: previous });
  };
  const step = m.storySpan / 4;

  add(0, m.mobile ? { x: m.width * .9, scale: 1.2, opacity: .3 } : {});
  add(m.heroEnd * .65, { x: m.width * .85, y: m.height * .4, scale: 1.85, rotation: 15, ringA: orbitPath(460, 45), ringB: orbitPath(330, 440), ringC: orbitPath(480, 24), rotateA: 12, rotateB: 75, rotateC: -30, coreScale: .75, opacity: m.mobile ? .2 : .55 });
  add(m.heroEnd, { x: m.width * .92, y: m.height * .55, scale: 2.2, ringA: orbitPath(480, 10), ringC: orbitPath(470, 8), coreScale: .45, opacity: .22 });
  add(m.storyStart - m.height * .6, { x: m.width * .73, scale: 1.15, rotation: -4, opacity: m.mobile ? .15 : .45 });
  add(m.storyStart, { x: m.width * (m.mobile ? .88 : .73), y: m.height * .44, scale: m.mobile ? .9 : 1.12, rotation: 0, ringA: orbitPath(400, 140), ringB: orbitPath(270, 340), ringC: orbitPath(370, 75), rotateA: -12, rotateB: 32, rotateC: 16, coreScale: .3, web: 1, layerScale: 1, opacity: m.mobile ? .22 : .9 });
  add(m.storyStart + step * .72, { web: 1, rotateA: 6, rotateB: 46, layerScale: 1.05, layerY: -12 });
  add(m.storyStart + step, { web: 0, software: 1, coreScale: .55, layerScale: .96, layerY: -20, ringA: orbitPath(390, 115), ringC: orbitPath(410, 95), rotateA: 18, rotateC: -12 });
  add(m.storyStart + step * 1.72, { layerScale: 1.16, layerY: 20, rotateB: 78 });
  add(m.storyStart + step * 2, { software: 0, automation: 1, coreScale: 1, ringA: orbitPath(355, 240), ringB: orbitPath(230, 360), ringC: orbitPath(370, 100), rotateA: -18, rotateB: 24, rotateC: 12, layerScale: 1, layerY: 0, routeProgress: 0 });
  add(m.storyStart + step * 2.72, { routeProgress: 1, rotateA: -4, rotateB: 40 });
  add(m.storyStart + step * 3, { automation: 0, infrastructure: 1, coreScale: .65, layerScale: .92, ringA: orbitPath(430, 70), ringC: orbitPath(420, 60), rotateA: -6, rotateC: 22 });
  add(m.storyStart + step * 3.72, { infrastructure: 1, layerScale: 1.13, layerY: -24, rotateB: 62 });
  add(m.storyStart + m.storySpan, { infrastructure: .45, layerScale: .45, layerY: 0, coreScale: 1.4, scale: 1.2, x: m.width * .55, ringA: orbitPath(340, 160), ringB: orbitPath(250, 310), ringC: orbitPath(360, 100), rotateA: -12, rotateB: 32, rotateC: 15 });
  add(m.ecosystemMeet, { x: m.width * .5, y: m.height * .55, scale: 1.25, infrastructure: 0, coreScale: 1.55, coreOpacity: 0, opacity: .18 });
  add(m.ecosystemEnd, { x: m.width * .92, y: m.height * .55, scale: 1.65, rotation: 14, opacity: .12, coreScale: .6 });
  add(m.ctaStart, { x: m.width * .65, y: m.height * .7, scale: 2.1, rotation: -15, coreOpacity: 1, opacity: .25 });
  add(m.ctaCenter, { x: m.width * .5, y: m.height * .83, scale: m.mobile ? 1 : 1.3, rotation: 0, opacity: m.mobile ? .28 : .65, coreScale: 1.35, ringA: orbitPath(350, 190), ringB: orbitPath(235, 370), ringC: orbitPath(380, 105), rotateA: -22, rotateB: 28, rotateC: 12 });
  add(m.pageEnd, { scale: .8, coreScale: 1.15, opacity: 0 });
  return frames;
}
