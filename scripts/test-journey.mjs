import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { createRequire } from "node:module";
import ts from "typescript";
import { interpolate } from "framer-motion";

const require = createRequire(import.meta.url);
function loadTypeScript(file) {
  const source = fs.readFileSync(file, "utf8");
  const { outputText } = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 } });
  const loadedModule = { exports: {} };
  const localRequire = name => name.startsWith("@/") ? loadTypeScript(path.resolve(name.slice(2) + ".ts")) : require(name);
  vm.runInThisContext(`(function(require,module,exports){${outputText}\n})`, { filename: file })(localRequire, loadedModule, loadedModule.exports);
  return loadedModule.exports;
}

const { createJourneyFrames } = loadTypeScript("components/home/journey-timeline.ts");
for (const width of [320, 390, 767, 768, 1024, 1440, 1920]) {
  const height = 900;
  const mobile = width < 768;
  const storyStart = 2600;
  const storySpan = mobile ? 900 : height * 2.6;
  const frames = createJourneyFrames({ width, height, heroEnd: 900, storyStart, storySpan, ecosystemMeet: storyStart + storySpan + 1000, ecosystemEnd: storyStart + storySpan + 1600, ctaStart: 10500, ctaCenter: 11200, pageEnd: 12000, mobile });
  frames.forEach((frame, index) => { if (index) assert.ok(frame.at > frames[index - 1].at); });
  const sample = interpolate(frames.map(frame => frame.at), frames.map(frame => frame.pose));
  for (let scroll = 0; scroll <= 12000; scroll += 10) {
    const pose = sample(scroll);
    for (const [name, value] of Object.entries(pose)) {
      if (typeof value === "number") assert.ok(Number.isFinite(value), `${width}: ${name} is finite`);
      else assert.ok(!/NaN|Infinity/.test(value), `${width}: SVG path is valid`);
    }
    assert.ok(pose.opacity >= 0 && pose.opacity <= 1);
    assert.ok(pose.scale > 0);
  }
  const phases = ["web", "software", "automation", "infrastructure"];
  phases.forEach((phase, index) => assert.ok(sample(storyStart + storySpan * ((index + .35) / 4))[phase] > .95, `${width}: ${phase} phase`));
  assert.equal(sample(12000).opacity, 0);
}
console.log("Journey: 7 viewports, 8,407 scroll samples and 28 phase checks passed.");
