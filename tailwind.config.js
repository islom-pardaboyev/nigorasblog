/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2c5f2e",
        accent: "#e8a020",
        ink: "#1a1a1a",
        cream: "#f8f6f1",
        success: "#3a8a3f",
        danger: "#c0392b",
      },
      fontFamily: {
        serif: ['"DM Serif Display"', "serif"],
        sans: ['"DM Sans"', "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 4px 24px rgba(0,0,0,0.08)",
      },
    },
  },
  plugins: [],
};
