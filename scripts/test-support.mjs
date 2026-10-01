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
  const { outputText } = ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022, esModuleInterop: true }
  });
  const loadedModule = { exports: {} };
  const localRequire = name => name.startsWith("@/")
    ? loadTypeScript(path.resolve(name.slice(2) + ".ts")) : require(name);
  vm.runInThisContext(`(function(require,module,exports){${outputText}\n})`, { filename: file })(localRequire, loadedModule, loadedModule.exports);
  return loadedModule.exports;
}

const data = loadTypeScript("components/support/support-data.ts");
const { whatsappUrl } = loadTypeScript("components/home/site-data.ts");
const phone = new URL(whatsappUrl).pathname;
const unicodeMessage = "Hola SpaceTech, necesito diagnóstico, RAM y respaldo. ¿Agendamos?";
assert.equal(new URL(data.supportWhatsapp(unicodeMessage)).searchParams.get("text"), unicodeMessage);
const messages = [data.diagnosticUrl, data.homeServiceUrl, data.businessUrl,
  ...data.supportProblems.map(problem => data.supportWhatsapp(`Hola SpaceTech, ${problem.message}. Quiero solicitar un diagnóstico.`)),
  ...data.pcPurposes.map(purpose => data.supportWhatsapp(`Hola SpaceTech, quiero cotizar una PC personalizada para ${purpose.name.toLowerCase()}.`))];
for (const link of messages) {
  const url = new URL(link);
  assert.equal(url.origin, "https://wa.me");
  assert.equal(url.pathname, phone);
  assert.ok(url.searchParams.get("text")?.startsWith("Hola SpaceTech"));
}
assert.equal(data.devices.length, 5);
assert.equal(data.supportServices.length, 5);
assert.equal(data.pcPurposes.length, 5);
assert.equal(data.supportSteps.length, 5);
assert.equal(data.supportFaq.length, 9);
assert.equal(data.supportProblems.length, 8);
assert.equal(new Set(data.supportProblems.map(problem => problem.title)).size, 8);
assert.equal(new Set(data.supportNavigation.map(item => item.href)).size, 4);

const { getSupportPhotos } = loadTypeScript("components/support/support-media.ts");
for (const photo of Object.values(getSupportPhotos())) {
  if (photo !== null) assert.ok(fs.existsSync(path.join(process.cwd(), "public", photo)));
}
const { default: sitemap } = loadTypeScript("app/sitemap.ts");
assert.ok(sitemap().some(entry => entry.url === "https://www.spacetech.com.mx/soporte-tecnico"));
assert.equal(sitemap().length, 2, "Only the home and implemented support route are published");

const timeline = loadTypeScript("components/support/diagnostic-timeline.ts");
assert.equal(timeline.diagnosticPhases.length, 5);
assert.equal(timeline.diagnosticStops.length, timeline.diagnosticPoses.length);
assert.deepEqual([-.1, 0, .2, .4, .6, .8, 1, 1.1].map(timeline.diagnosticPhase), [0, 0, 1, 2, 3, 4, 4, 4]);
const sample = interpolate(timeline.diagnosticStops, timeline.diagnosticPoses);
for (let step = 0; step <= 1000; step++) {
  const pose = sample(step / 1000);
  assert.ok(Object.values(pose).every(Number.isFinite));
  assert.ok(pose.scale >= .76 && pose.scale <= 1.18);
  for (const key of ["scan", "scanOpacity", "layers", "spread", "routes", "clean", "bridge"]) {
    assert.ok(pose[key] >= 0 && pose[key] <= 1, `${key} must remain bounded`);
  }
}
assert.equal(sample(.79).clean, 1, "Reduced-motion scene has a stable solution state");
assert.equal(sample(.79).scanOpacity, 0, "Reduced-motion scene has no scanner");
assert.equal(sample(1).bridge, 1, "The last phase connects to services");
assert.ok(timeline.diagnosticPhases[3].detail.includes("autorización"));
console.log("Support: contextual WhatsApp, retained content, diagnostic timeline, optional images and sitemap passed.");
