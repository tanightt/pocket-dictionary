/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "320px",
      sm: "576px",
      md: "768px",
      lg: "976px",
      xl: "1280px",
    },
    colors: {
      orange: "#E9672B",
      black: "#000000",
      pink: "#F6CFCA",
      header: "#FBF8F5",
      footer: "#F3F0EC",
      nav: "#F0E5DA",
    },
    fontFamily: {
      convergence: ["var(--font-convergence)"],
      marck: ["var(--font-marck)"],
      imprima: ["var(--font-imprima)"],
      livvic: ["var(--font-livvic)"],
    },
  },
  plugins: [],
};
