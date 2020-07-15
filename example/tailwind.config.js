module.exports = {
  purge: ['./src/**/*.jsx', './src/**/*.tsx'],
  theme: {
    extend: {
      borderRadius: theme => ({
        2: theme('spacing.2'),
        4: theme('spacing.4')
      }),
      inset: theme => ({
        2: theme('spacing.2')
      }),
      backgroundOpacity: {
        10: '0.1',
        20: '0.2'
      }
    }
  },
  variants: {},
  plugins: [require('@zendeskgarden/tailwindcss')]
};
