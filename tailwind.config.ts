import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "ink-1": "#0f192f",
        "ink-2": "#0a1429",
        "ink-3": "#060f22",
        "ink-4": "#020918",
        "ink-5": "#01050f",
        "cloud-1": "#ffffff",
        "cloud-2": "#cccfd3",
        "cloud-3": "#9a9ea7",
        "cloud-4": "#676e7c",
        "cloud-5": "#353d50",
        "quartz-1": "#e1e4f2",
        "quartz-2": "#b4b9c9",
        "quartz-3": "#888ea0",
        "quartz-4": "#5b6377",
        "quartz-5": "#2f384d",
        "lavender-1": "#c397ff",
        "lavender-2": "#9c7bd3",
        "lavender-3": "#7660a7",
        "lavender-4": "#4f447c",
        "lavender-5": "#292950",
        "blue-1": "#2f85ff",
        "blue-2": "#266dd3",
        "blue-3": "#1d55a7",
        "blue-4": "#143d7c",
        "blue-5": "#0b2550",
      },
    },
    plugins: [],
  },
};
export default config;
