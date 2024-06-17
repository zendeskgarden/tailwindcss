/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import config from '@zendeskgarden/eslint-config';
import noticePlugin from '@zendeskgarden/eslint-config/plugins/notice.js';
import prettierConfig from 'eslint-config-prettier';
import typescriptPlugin from '@zendeskgarden/eslint-config/plugins/typescript.js';
import typescriptTypeCheckedPlugin from '@zendeskgarden/eslint-config/plugins/typescript-type-checked.js';

export default [
  ...config,
  prettierConfig,
  noticePlugin,
  {
    ignores: ['build/**', '*.d.ts']
  },
  {
    files: ['**/*.{ts,tsx}'],
    ...typescriptPlugin,
    ...typescriptTypeCheckedPlugin
  },
  {
    languageOptions: {
      parserOptions: {
        requireConfigFile: false
      }
    }
  },
  {
    rules: {
      'sort-imports': [1, { allowSeparatedGroups: true }],
      'n/no-missing-import': 'off'
    }
  }
];
