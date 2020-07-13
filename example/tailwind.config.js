module.exports = {
  purge: ["./src/**/*.jsx", "./src/**/*.tsx"],
  theme: {
    extend: {
      spacing: {
        "1-1/2": "6px",
        "13-1/2": "54px",
        17: "68px",
      },
      borderRadius: (theme) => ({
        2: theme("spacing.2"),
        4: theme("spacing.4"),
      }),
      inset: (theme) => ({
        2: theme("spacing.2"),
      }),
      backgroundOpacity: {
        10: "0.1",
        20: "0.2",
      },
    },
  },
  variants: {},
  plugins: [require("@zendeskgarden/tailwindcss")],
};
