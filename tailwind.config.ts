import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    colors: {
      snow: "#FFFFE3",
      shadow: "#323228",
      ghost: "#0E100F",
      sky: "#18A0FB",
      watermelon: "#37C713",
      onion: "#907CFF",
      pig: "#EE46D3",
      lake: "#18A0FB",
      beetles: "#A374FF",
      banana: "#FFD074",
      ocean: "#17F1D1"
    },
    borderWidth: {
      xs: "0.2px",
    }
  },
  plugins: [],
};
export default config;
