/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    // Kutubxona: squared corners, like cloth-bound books and library tickets.
    borderRadius: {
      none: "0",
      sm: "2px",
      DEFAULT: "2px",
      md: "2px",
      lg: "3px",
      xl: "3px",
      "2xl": "4px",
      "3xl": "4px",
      full: "9999px",
    },
    extend: {
      colors: {
        // The task cards are paper tickets, so the default palette is
        // re-tinted: every white, gray, green and red already used by the
        // task components now reads as paper, brown ink, forest and oxblood.
        white: "#fbf6ea",
        gray: {
          50: "#f6efdd",
          100: "#efe5cc",
          200: "#dccfae",
          300: "#c7b68e",
          400: "#7d6d4d",
          500: "#6d5d42",
          600: "#5a4b35",
          700: "#46392a",
          800: "#33291f",
        },
        green: { 50: "#e8efdf", 100: "#d6e3c8", 400: "#6f9a58", 500: "#3f6b3a", 600: "#2f5a2f", 800: "#1f3d21" },
        red: { 50: "#f6e3e1", 100: "#efcfcb", 400: "#b4524f", 500: "#8f2a2f", 600: "#7a1f27", 800: "#5a141c" },
        blue: { 50: "#e3e9f2", 400: "#4f6c9b", 500: "#213d66" },
        purple: { 50: "#eee3ee", 400: "#8a5a86", 500: "#5c2d58" },
        amber: { 50: "#f7ecd0", 400: "#c9a04a", 500: "#a47a24" },
        primary: "#6a1a24",
        accent: "#b8923f",
        ink: "#2a1a14",
        cream: "#f2e8d2",
        success: "#3f6b3a",
        danger: "#8f2a2f",
        wall: "#3b1119",
        wall2: "#2c0c12",
        wood: "#1b0d08",
        brass: "#cfa85d",
        brassd: "#8a6c33",
        paper: "#f2e8d2",
        muted: "#cdb8a6",
      },
      fontFamily: {
        serif: ['"Libre Caslon Display"', "Georgia", "serif"],
        sans: ['"Libre Caslon Text"', "Georgia", "serif"],
      },
      boxShadow: {
        card: "0 26px 46px -24px rgba(0,0,0,0.75)",
      },
    },
  },
  plugins: [],
};
