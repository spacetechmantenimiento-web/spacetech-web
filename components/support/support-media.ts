import { existsSync } from "node:fs";
import path from "node:path";

// These optional, local assets are resolved on the server at build time.
export function getSupportPhotos() {
  const available = (name: string) => existsSync(path.join(process.cwd(), "public", "images", "support", name))
    ? `/images/support/${name}` : null;
  return {
    consultation: available("support-consultation.webp"),
    diagnostic: available("support-diagnostic.webp")
  };
}
