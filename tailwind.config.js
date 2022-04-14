module.exports = {
  mode: "jit",
  content: ["./src/**/*.{html,js}", "./node_modules/tw-elements/dist/js/**/*.js"],
  theme: {
    extend: {
      colors: {
        background: "#F2F9FF",
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
};
