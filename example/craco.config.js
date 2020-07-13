module.exports = {
  style: {
    postcss: {
      plugins: [
        require("tailwindcss"),
        require("postcss-focus-visible")({
          replaceWith: ":global(.focus-visible)", // necessary for CSS modules support
        }),
        require("autoprefixer"),
      ],
    },
  },
};
