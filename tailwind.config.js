module.exports = {
  mode: "jit",
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        background: "#F2F9FF",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
