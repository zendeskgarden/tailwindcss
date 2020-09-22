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

export default plugin.withOptions(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (options: IPluginOptions = DEFAULT_OPTIONS) => ({ addBase }: any) => {
    if (!options.includeBedrock) {
      return;
    }

    const gardenBedrockCSS = postcss.parse(
      fs.readFileSync(require.resolve('@zendeskgarden/css-bedrock'), 'utf8')
    );

    /**
     * Include `@zendeskgarden/css-bedrock` as a global CSS reset
     */
    addBase(gardenBedrockCSS.nodes);
  },
  (options: IPluginOptions = DEFAULT_OPTIONS) => ({
    theme: gardenTheme, // Overwrite global theme with Garden values
    corePlugins: {
      preflight: !options.includeBedrock // Disable Tailwind global resets as we provide our own
    }
  })
) as (options?: IPluginOptions) => void;
