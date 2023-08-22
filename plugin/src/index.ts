/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import fs from 'fs';
import { theme as gardenTheme } from './theme';
import plugin from 'tailwindcss/plugin';
import postcss from 'postcss';

interface IPluginOptions {
  includeBedrock?: boolean;
}

const DEFAULT_OPTIONS: IPluginOptions = { includeBedrock: true };

/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-return */

export default plugin.withOptions(
  (options: IPluginOptions = DEFAULT_OPTIONS) =>
    ({ addBase }: any): void => {
      if (!options.includeBedrock) {
        return;
      }

      const gardenBedrockCSS = postcss.parse(
        fs.readFileSync(require.resolve('@zendeskgarden/css-bedrock'), 'utf8')
      );

      /**
       * Include `@zendeskgarden/css-bedrock` as a global CSS reset
       */
      addBase(gardenBedrockCSS);
    },
  (options: IPluginOptions = DEFAULT_OPTIONS) =>
    ({
      theme: gardenTheme, // Overwrite global theme with Garden values
      corePlugins: {
        preflight: !options.includeBedrock // Disable Tailwind global resets as we provide our own
      }
    }) as any
) as (options?: IPluginOptions) => void;
