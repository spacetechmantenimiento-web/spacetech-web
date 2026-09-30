"use client";

import { orbitPath } from "@/components/home/journey-geometry";

const stars = Array.from({ length: 14 }, (_, index) => ({ x: 150 + ((index * 173) % 720), y: 130 + ((index * 227) % 740) }));

export function JourneyScene() {
  return (
    <div className="journey-scene" aria-hidden="true">
      <div className="journey-camera"><div className="journey-pointer">
        <svg className="journey-system" viewBox="0 0 1000 1000">
          <defs>
            <radialGradient id="journey-sphere" cx="35%" cy="25%"><stop stopColor="#c3f3ff" /><stop offset=".22" stopColor="#58bde9" /><stop offset=".58" stopColor="#13608d" /><stop offset="1" stopColor="#061e38" /></radialGradient>
            <linearGradient id="journey-line" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#5a9dee" stopOpacity=".3" /><stop offset=".45" stopColor="#a9eaff" stopOpacity=".8" /><stop offset="1" stopColor="#6598ea" stopOpacity=".2" /></linearGradient>
          </defs>
          <g className="journey-stars">{stars.map((star, index) => <circle key={index} cx={star.x} cy={star.y} r={index % 3 === 0 ? 2.2 : 1.2} />)}</g>
          <g className="journey-orbits-back"><path className="journey-ring journey-ring-a" d={orbitPath(350, 190)} /><path className="journey-ring journey-ring-b" d={orbitPath(235, 370)} /></g>
          <g className="journey-interface">
            <rect className="journey-interface-frame" x="190" y="270" width="620" height="400" rx="12" />
            <path d="M190 325H810M250 390H485M250 415H410M250 550H425M250 575H380" />
            <rect x="250" y="460" width="155" height="34" rx="4" /><rect x="535" y="365" width="215" height="220" rx="6" />
            <path d="M570 415H715M570 440H680M570 480H715M570 505H640" />
            <circle cx="216" cy="296" r="4" /><circle cx="234" cy="296" r="4" /><circle cx="252" cy="296" r="4" />
          </g>
          <g className="journey-modules">{[0, 1, 2].map(index => <g key={index} className={`journey-module journey-module-${index}`}><path d={`M${225 + index * 80} ${310 + index * 85}h370l95 70h-370Z`} /><path d={`M${225 + index * 80} ${322 + index * 85}v50l95 70h370v-50`} /><path d={`M${295 + index * 80} ${345 + index * 85}h110m35 0h65`} /></g>)}</g>
          <g className="journey-routes">
            <path className="journey-route" d="M225 370H370L500 500L665 340H800M200 640H345L500 500L670 660H820M500 500V220M500 500V805" />
            {[[225,370],[800,340],[200,640],[820,660],[500,220],[500,805]].map(([x,y],index) => <g key={index} className="journey-route-node"><circle cx={x} cy={y} r="22" /><circle cx={x} cy={y} r="5" /></g>)}
          </g>
          <g className="journey-architecture">
            <path d="M140 610L490 400L860 610L510 825ZM210 650L560 440M280 692L630 480M350 734L700 523M420 776L770 565M210 568L580 783M280 525L650 741M350 482L720 699M420 442L790 657" />
            <path d="M340 555V420L490 332L645 420V555L490 645ZM340 420L490 510L645 420M490 510V645" />
          </g>
          <g className="journey-core"><circle className="journey-core-halo" cx="500" cy="500" r="116" /><circle className="journey-core-shell" cx="500" cy="500" r="67" /><circle className="journey-core-sphere" cx="500" cy="500" r="43" /><path d="M449 488C478 462 525 462 551 488M449 512C478 538 525 538 551 512" /><circle className="journey-core-light" cx="487" cy="481" r="5" /></g>
          <g className="journey-orbits-front"><path className="journey-ring journey-ring-c" d={orbitPath(380, 105)} /><circle className="journey-satellite" cx="862" cy="475" r="5" /><circle className="journey-satellite" cx="178" cy="556" r="3" /></g>
        </svg>
        <span className="journey-coordinate journey-coordinate-a">SPACETECH / SYSTEM 01</span><span className="journey-coordinate journey-coordinate-b">CONNECTED</span>
      </div></div>
    </div>
  );
}
