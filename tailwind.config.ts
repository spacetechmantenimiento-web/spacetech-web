import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        void: "#05070d",
        orbit: "#07111f",
        plasma: "#6d5cff",
        electric: "#20c8ff",
        frost: "#eef6ff"
      },
      fontFamily: {
        sans: ["Inter", "SF Pro Display", "Segoe UI", "system-ui", "sans-serif"],
        space: ["Space Grotesk", "Inter", "system-ui", "sans-serif"],
        display: ["Orbitron", "Space Grotesk", "system-ui", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 44px rgba(32, 200, 255, 0.18)",
        violet: "0 0 56px rgba(109, 92, 255, 0.20)"
      }
    }
  },
  plugins: []
};

export default config;
