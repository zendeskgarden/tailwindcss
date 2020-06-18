/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import gardenPlugin from './index';
import postcss from 'postcss';
import tailwindCSS from 'tailwindcss';

function processCSS(tailwindConfig: unknown, css: string) {
  return postcss([tailwindCSS(tailwindConfig)]).process(css, {
    from: undefined,
    to: undefined
  });
}

describe('Garden TailwindCSS Plugin', () => {
  describe('Bedrock reset', () => {
    it('is applied by default', async () => {
      const result = await processCSS({ plugins: [gardenPlugin] }, '@tailwind base;');

      expect(result.toString()).toMatchSnapshot();
    });

    it('applies preflight styles when disabled', async () => {
      const result = await processCSS(
        { plugins: [gardenPlugin({ includeBedrock: false })] },
        '@tailwind base;'
      );

      expect(result.toString()).toMatchSnapshot();
    });
  });

  describe('Theme', () => {
    it('applies themed values', async () => {
      const result = await processCSS(
        { plugins: [gardenPlugin] },
        `
        .custom-blue {
          @apply text-blue-600;
        }
      `
      );

      expect(result.toString()).toMatchSnapshot();
    });
  });
});
