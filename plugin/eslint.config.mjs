/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import config from '@zendeskgarden/eslint-config';
import jestPlugin from '@zendeskgarden/eslint-config/plugins/jest.js';
import noticePlugin from '@zendeskgarden/eslint-config/plugins/notice.js';
import prettierConfig from 'eslint-config-prettier';
import typescriptPlugin from '@zendeskgarden/eslint-config/plugins/typescript.js';
import typescriptTypeCheckedPlugin from '@zendeskgarden/eslint-config/plugins/typescript-type-checked.js';

export default [
  ...config,
  prettierConfig,
  noticePlugin,
  {
    files: ['**/*.ts'],
    ...typescriptPlugin,
    ...typescriptTypeCheckedPlugin
  },
  {
    files: ['**/*.spec.!(*.snap)'],
    ...jestPlugin,
    languageOptions: {
      globals: jestPlugin.languageOptions.globals,
      parserOptions: {
        requireConfigFile: false
      }
    }
  },
  {
    rules: {
      'n/no-missing-import': 'off',
      '@typescript-eslint/strict-boolean-expressions': 'off',
      '@typescript-eslint/no-unsafe-member-access': 'off',
      '@typescript-eslint/no-unsafe-call': 'off'
    }
  }
];
