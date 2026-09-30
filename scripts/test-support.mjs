import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { createRequire } from "node:module";
import ts from "typescript";

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
assert.equal(new Set(data.supportNavigation.map(item => item.href)).size, 4);

const { getSupportPhotos } = loadTypeScript("components/support/support-media.ts");
for (const photo of Object.values(getSupportPhotos())) {
  if (photo !== null) assert.ok(fs.existsSync(path.join(process.cwd(), "public", photo)));
}
const { default: sitemap } = loadTypeScript("app/sitemap.ts");
assert.ok(sitemap().some(entry => entry.url === "https://www.spacetech.com.mx/soporte-tecnico"));
assert.equal(sitemap().length, 2, "Only the home and implemented support route are published");
console.log("Support: WhatsApp messages, service data, optional images and sitemap passed.");
