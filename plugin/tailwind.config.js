module.exports = {
  plugins: [require('./dist/index')],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true
  }
};
