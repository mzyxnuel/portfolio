import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    colors: {
      snow: "#FFFFE3",
      shadow: "#323228",
    },
    borderWidth: {
      xs: "0.2px",
    }
  },
  plugins: [],
};
export default config;
