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
        primary: {
          50: "#E6F0FF",
          100: "#CCE1FF",
          200: "#99C3FF",
          300: "#66A5FF",
          400: "#3387FF",
          500: "#0066FF",
          600: "#0052CC",
          700: "#003D99",
          800: "#002966",
          900: "#001433",
        },
        secondary: {
          50: "#F5F0FF",
          100: "#EBE0FF",
          200: "#D6C1FF",
          300: "#C2A3FF",
          400: "#AD84FF",
          500: "#9966FF",
          600: "#7A52CC",
          700: "#5C3D99",
          800: "#3D2966",
          900: "#1F1433",
        },
        accent: {
          50: "#FFF0F5",
          100: "#FFE0EB",
          200: "#FFC2D6",
          300: "#FFA3C2",
          400: "#FF85AD",
          500: "#FF006E",
          600: "#CC0058",
          700: "#990042",
          800: "#66002C",
          900: "#330016",
        },
      },
    },
  },
  plugins: [],
};
export default config;
