module.exports = {
  plugins: {
    tailwindcss: {},
    postcssFocusVisible: {
      preserve: false,
      replaceWith: ':global(.focus-visible)' // necessary for CSS modules support
    },
    autoprefixer: {}
  }
};
