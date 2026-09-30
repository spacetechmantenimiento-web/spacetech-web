"use client";

import { storyItems } from "@/components/home/site-data";

export function ScrollStory() {
  return (
    <section id="soluciones" className="story-section cinematic-story relative">
      <div className="section-mesh" aria-hidden="true" />
      <ol className="story-accessible-summary">{storyItems.map(item => <li key={item.label}>{item.label} {item.detail}</li>)}</ol>
      <div className="story-pin">
        <div className="story-composition mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-12">
          <div className="story-intro">
            <p className="section-kicker">Nuestra forma de pensar</p>
            <h2 className="mt-6 max-w-lg font-space text-4xl font-medium leading-[1.08] text-white sm:text-6xl">No solo reparamos tecnología.<br /><span className="text-gradient">La construimos.</span></h2>
            <p className="mt-7 max-w-md leading-7 text-slate-400">Conectamos soporte, diseño y desarrollo para resolver el problema completo, no solo una parte.</p>
          </div>
          <div className="story-scene-space" aria-hidden="true" />
          <div className="story-chapters">
            {storyItems.map((item, index) => <article key={item.label} className="story-chapter" data-chapter={index}><span className="story-number">0{index + 1} / 04</span><item.icon className="story-chapter-icon" aria-hidden /><div><h3>{item.label}</h3><p>{item.detail}</p></div></article>)}
          </div>
          <div className="story-progress" aria-hidden="true">{storyItems.map((item, index) => <span key={item.label}><i data-progress={index} /></span>)}</div>
        </div>
      </div>
    </section>
  );
}
