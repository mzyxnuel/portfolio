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
      sky: "#18A0FB"
    },
    borderWidth: {
      xs: "0.2px",
    }
  },
  plugins: [],
};
export default config;
