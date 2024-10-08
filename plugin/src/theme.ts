/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { rgba } from 'polished';

/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */

const BASE = DEFAULT_THEME.space.base;

export const theme = {
  screens: {
    sm: DEFAULT_THEME.breakpoints.sm,
    md: DEFAULT_THEME.breakpoints.md,
    lg: DEFAULT_THEME.breakpoints.lg,
    xl: DEFAULT_THEME.breakpoints.xl
  },
  colors: {
    inherit: 'inherit',
    current: 'currentColor',
    transparent: 'transparent',
    ...DEFAULT_THEME.palette
  },
  spacing: {
    px: '1px',
    0: '0',
    1: `${BASE}px`,
    2: `${BASE * 2}px`,
    3: `${BASE * 3}px`,
    4: `${BASE * 4}px`,
    5: `${BASE * 5}px`,
    6: `${BASE * 6}px`,
    7: `${BASE * 7}px`,
    8: `${BASE * 8}px`,
    9: `${BASE * 9}px`,
    10: `${BASE * 10}px`,
    12: `${BASE * 12}px`,
    16: `${BASE * 16}px`,
    20: `${BASE * 20}px`,
    24: `${BASE * 24}px`,
    32: `${BASE * 32}px`,
    40: `${BASE * 40}px`,
    48: `${BASE * 48}px`,
    56: `${BASE * 56}px`,
    64: `${BASE * 64}px`
  },
  borderColor: (localTheme: any): any => ({
    ...localTheme('colors'),
    DEFAULT: localTheme('colors.grey.300', 'currentColor')
  }),
  borderRadius: {
    none: '0',
    sm: DEFAULT_THEME.borderRadii.sm,
    DEFAULT: DEFAULT_THEME.borderRadii.md,
    full: '9999px'
  },
  borderWidth: {
    DEFAULT: DEFAULT_THEME.borderWidths.sm,
    0: '0',
    2: '2px',
    3: '3px',
    4: '4px',
    8: '8px'
  },
  boxShadow: (localTheme: any): any => ({
    sm: DEFAULT_THEME.shadows.sm(rgba(localTheme('colors.grey.1200'), localTheme('opacity.16'))),
    'sm-dark': DEFAULT_THEME.shadows.sm(
      rgba(localTheme('colors.grey.1200'), localTheme('opacity.88'))
    ),
    DEFAULT: DEFAULT_THEME.shadows.md(
      rgba(localTheme('colors.grey.1200'), localTheme('opacity.16'))
    ),
    'md-dark': DEFAULT_THEME.shadows.md(
      rgba(localTheme('colors.grey.1200'), localTheme('opacity.64'))
    ),
    lg: DEFAULT_THEME.shadows.lg(
      '20px',
      '28px',
      rgba(localTheme('colors.grey.1200'), localTheme('opacity.16'))
    ),
    'lg-dark': DEFAULT_THEME.shadows.lg(
      '20px',
      '28px',
      rgba(localTheme('colors.grey.1200'), localTheme('opacity.80'))
    ),
    inner: `inset ${DEFAULT_THEME.shadows.xs(
      localTheme('colors.white')
    )}, inset ${DEFAULT_THEME.shadows.md(localTheme('colors.blue.700'))}`,
    'inner-dark': `inset ${DEFAULT_THEME.shadows.xs(
      localTheme('colors.grey.1100')
    )}, inset ${DEFAULT_THEME.shadows.md(localTheme('colors.blue.600'))}`,
    outline: `${DEFAULT_THEME.shadows.xs(
      localTheme('colors.white')
    )}, ${DEFAULT_THEME.shadows.md(localTheme('colors.blue.700'))}`,
    'outline-dark': `${DEFAULT_THEME.shadows.xs(
      localTheme('colors.grey.1100')
    )}, ${DEFAULT_THEME.shadows.md(localTheme('colors.blue.600'))}`,
    none: 'none'
  }),
  fontFamily: {
    sans: DEFAULT_THEME.fonts.system.split(','),
    mono: DEFAULT_THEME.fonts.mono.split(',')
  },
  fontSize: {
    xs: DEFAULT_THEME.fontSizes.xs,
    sm: DEFAULT_THEME.fontSizes.sm,
    base: DEFAULT_THEME.fontSizes.md,
    lg: DEFAULT_THEME.fontSizes.lg,
    xl: DEFAULT_THEME.fontSizes.xl,
    '2xl': DEFAULT_THEME.fontSizes.xxl,
    '3xl': DEFAULT_THEME.fontSizes.xxxl
  },
  fontWeight: {
    thin: DEFAULT_THEME.fontWeights.thin,
    extralight: DEFAULT_THEME.fontWeights.extralight,
    light: DEFAULT_THEME.fontWeights.light,
    normal: DEFAULT_THEME.fontWeights.regular,
    medium: DEFAULT_THEME.fontWeights.medium,
    semibold: DEFAULT_THEME.fontWeights.semibold,
    bold: DEFAULT_THEME.fontWeights.bold,
    extrabold: DEFAULT_THEME.fontWeights.extrabold,
    black: DEFAULT_THEME.fontWeights.black
  },
  lineHeight: {
    none: '1',
    sm: DEFAULT_THEME.lineHeights.sm,
    md: DEFAULT_THEME.lineHeights.md,
    lg: DEFAULT_THEME.lineHeights.lg,
    xl: DEFAULT_THEME.lineHeights.xl,
    '2xl': DEFAULT_THEME.lineHeights.xxl,
    '3xl': DEFAULT_THEME.lineHeights.xxxl
  },
  opacity: {
    0: 0,
    8: DEFAULT_THEME.opacity[100],
    16: DEFAULT_THEME.opacity[200],
    24: DEFAULT_THEME.opacity[300],
    32: DEFAULT_THEME.opacity[400],
    40: DEFAULT_THEME.opacity[500],
    48: DEFAULT_THEME.opacity[600],
    56: DEFAULT_THEME.opacity[700],
    64: DEFAULT_THEME.opacity[800],
    72: DEFAULT_THEME.opacity[900],
    80: DEFAULT_THEME.opacity[1000],
    88: DEFAULT_THEME.opacity[1100],
    96: DEFAULT_THEME.opacity[1200],
    100: 1
  }
};
