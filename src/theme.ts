/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

export const theme = {
  screens: {
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px'
  },
  colors: {
    transparent: 'transparent',
    black: '#000',
    white: '#fff',
    grey: {
      100: '#f8f9f9',
      200: '#e9ebed',
      300: '#d8dcde',
      400: '#c2c8cc',
      500: '#87929d',
      600: '#68737d',
      700: '#49545c',
      800: '#2f3941'
    },
    blue: {
      100: '#edf7ff',
      200: '#cee2f2',
      300: '#adcce4',
      400: '#5293c7',
      500: '#337fbd',
      600: '#1f73b7',
      700: '#144a75',
      800: '#0f3554'
    },
    red: {
      100: '#fff0f1',
      200: '#f5d5d8',
      300: '#f5b5ba',
      400: '#e35b66',
      500: '#d93f4c',
      600: '#cc3340',
      700: '#8c232c',
      800: '#681219'
    },
    yellow: {
      100: '#fff7ed',
      200: '#ffeedb',
      300: '#fed6a8',
      400: '#ffb057',
      500: '#f79a3e',
      600: '#ed8f1c',
      700: '#ad5918',
      800: '#703815'
    },
    green: {
      100: '#edf8f4',
      200: '#d1e8df',
      300: '#aecfc2',
      400: '#5eae91',
      500: '#228f67',
      600: '#038153',
      700: '#186146',
      800: '#0b3b29'
    },
    kale: {
      100: '#f5fcfc',
      200: '#daeded',
      300: '#bdd9d7',
      400: '#90bbbb',
      500: '#467b7c',
      600: '#17494d',
      700: '#03363d',
      800: '#012b30'
    },
    fuschia: {
      400: '#d653c2',
      600: '#a81897',
      M400: '#cf62a8',
      M600: '#a8458c'
    },
    pink: {
      400: '#ec4d63',
      600: '#d42054',
      M400: '#d57287',
      M600: '#b23a5d'
    },
    crimson: {
      400: '#e34f32',
      600: '#c72a1c',
      M400: '#cc6c5b',
      M600: '#b24a3c'
    },
    orange: {
      400: '#de701d',
      600: '#bf5000',
      M400: '#d4772c',
      M600: '#b35827'
    },
    lemon: {
      400: '#ffd424',
      600: '#ffbb10',
      M400: '#e7a500',
      M600: '#c38f00'
    },
    lime: {
      400: '#43b324',
      600: '#2e8200',
      M400: '#519e2d',
      M600: '#47782c'
    },
    mint: {
      400: '#00a656',
      600: '#058541',
      M400: '#299c66',
      M600: '#2e8057'
    },
    teal: {
      400: '#02a191',
      600: '#028079',
      M400: '#2d9e8f',
      M600: '#3c7873'
    },
    azure: {
      400: '#3091ec',
      600: '#1371d6',
      M400: '#5f8dcf',
      M600: '#3a70b2'
    },
    royal: {
      400: '#5d7df5',
      600: '#3353e2',
      M400: '#7986d8',
      M600: '#4b61c3'
    },
    purple: {
      400: '#b552e2',
      600: '#6a27b8',
      M400: '#b072cc',
      M600: '#9358b0'
    }
  },
  spacing: {
    px: '1px',
    0: '0',
    1: '4px',
    2: '8px',
    3: '12px',
    4: '16px',
    5: '20px',
    6: '24px',
    7: '28px',
    8: '32px',
    9: '36px',
    10: '40px',
    12: '48px',
    16: '64px',
    20: '80px',
    24: '96px',
    32: '128px',
    40: '160px',
    48: '192px',
    56: '224px',
    64: '256px'
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
  borderColor: (localTheme: any): any => ({
    ...localTheme('colors'),
    default: localTheme('colors.grey.300', 'currentColor')
  }),
  borderRadius: {
    none: '0',
    sm: '2px',
    default: '4px',
    full: '9999px'
  },
  borderWidth: {
    default: '1px',
    0: '0',
    2: '2px',
    3: '3px',
    4: '4px',
    8: '8px'
  },
  boxShadow: {
    xs: '0 0 0 1px rgba(0, 0, 0, 0.05)',
    sm: '0 0 0 2px rgba(0, 0, 0, 0.05)',
    default: '0 0 0 3px rgba(0, 0, 0, 0.1)',
    inner: 'inset 0 0 0 3px rgba(31, 115, 183, 0.35)',
    outline: '0 0 0 3px rgba(31, 115, 183, 0.35)',
    none: 'none'
  },
  fontFamily: {
    sans: [
      'system-ui' /* drafts.csswg.org/css-fonts-4/#system-ui */,
      '-apple-system' /* macOS Safari & FF (San Francisco) */,
      'BlinkMacSystemFont' /* macOS Chrome (San Francisco) */,
      '"Segoe UI"' /* Windows */,
      'Roboto' /* Android & ChromeOS */,
      'Oxygen-Sans' /* KDE */,
      'Ubuntu' /* Ubuntu */,
      'Cantarell' /* GNOME */,
      '"Helvetica Neue"',
      'Arial',
      'sans-serif'
    ],
    mono: [
      'SFMono-Regular' /* macOS */,
      'Consolas' /* Windows */,
      '"Liberation Mono"' /* Ubuntu */,
      'Menlo',
      'Courier',
      'monospace'
    ]
  },
  fontSize: {
    xs: '10px',
    sm: '12px',
    base: '14px',
    lg: '18px',
    xl: '22px',
    '2xl': '26px',
    '3xl': '36px'
  },
  fontWeight: {
    thin: '100',
    extralight: '200',
    light: '300',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
    black: '900'
  },
  lineHeight: {
    none: '1',
    sm: '16px',
    md: '20px',
    lg: '24px',
    xl: '28px',
    '2xl': '32px',
    '3xl': '44px',
    3: '12px',
    4: '16px',
    5: '20px',
    6: '24px',
    7: '28px',
    8: '32px',
    9: '36px',
    10: '40px',
    11: '44px'
  }
};
