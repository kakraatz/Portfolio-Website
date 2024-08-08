import {nextui} from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./projects/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
      },
    },
  },
  plugins: [
      nextui({
            themes: {
              light: {
                colors: {
                  background: "#FFFFFF",
                  foreground: "#000000",
                },
              },
              dark: {
                colors: {
                  background: "#0c0a09",
                  foreground: "#FFFFFF",
                },
              },
            },
          },
      )],
};

export default config;
