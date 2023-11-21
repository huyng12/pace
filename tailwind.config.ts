import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";
import { fontFamily } from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      xs: ["0.75rem", { lineHeight: "1rem" }],
      sm: ["0.875rem", { lineHeight: "1.5rem" }],
      base: ["1rem", { lineHeight: "1.75rem" }],
      lg: ["1.125rem", { lineHeight: "1.75rem" }],
      xl: ["1.25rem", { lineHeight: "2rem" }],
      "2xl": ["1.5rem", { lineHeight: "2.25rem" }],
      "3xl": ["1.75rem", { lineHeight: "2.25rem" }],
      "4xl": ["2rem", { lineHeight: "2.5rem" }],
      "5xl": ["2.5rem", { lineHeight: "3rem" }],
      "6xl": ["3rem", { lineHeight: "3.5rem" }],
      "7xl": ["4rem", { lineHeight: "4.5rem" }],
    },
    extend: {
      colors: {
        primary: colors.indigo,
        gourd: {
          // red
          "50": "#FFF2F1",
          "100": "#FFE1DF",
          "200": "#FFC8C5",
          "300": "#FFA29D",
          "400": "#FFA29D",
          "500": "#FF2C20",
          "600": "#ED2115",
          "700": "#C8170D",
          "800": "#A5170F",
          "900": "#881A14",
          "950": "#4B0804",
        },
        coffee: {
          // brown
          "50": "#FBF6EF",
          "100": "#F3E5D2",
          "200": "#E5C9A2",
          "300": "#D8A971",
          "400": "#CF8E50",
          "500": "#C5733B",
          "600": "#B95E35",
          "700": "#91412C",
          "800": "#773529",
          "900": "#622D25",
          "950": "#371511",
        },
        lemon: {
          // yellow
          "50": "#FFFFE7",
          "100": "#FEFFC1",
          "200": "#FFFD86",
          "300": "#FFF441",
          "400": "#FFE50D",
          "500": "#FFD600",
          "600": "#D19D00",
          "700": "#A67102",
          "800": "#89570A",
          "900": "#74470F",
          "950": "#442504",
        },
        carrot: {
          // orange
          "50": "#FFFAEC",
          "100": "#FFF3D3",
          "200": "#FFE3A5",
          "300": "#FFCE6D",
          "400": "#FFAD32",
          "500": "#FF920A",
          "600": "#FF7A00",
          "700": "#CC5802",
          "800": "#A1440B",
          "900": "#823A0C",
          "950": "#461B04",
        },
      },
      borderRadius: {
        "4xl": "2.5rem",
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
        display: [
          ["var(--font-sans)", ...fontFamily.sans],
          { fontVariationSettings: '"wdth" 125' },
        ],
      },
    },
  },
  plugins: [],
};

export default config;
