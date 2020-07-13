/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import commonjs from '@rollup/plugin-commonjs';
import del from 'rollup-plugin-delete';
import nodePolyfills from 'rollup-plugin-node-polyfills';
import nodeResolve from '@rollup/plugin-node-resolve';
import pkg from './package.json';
import typescript from 'rollup-plugin-typescript2';

export default {
  input: ['src/index.ts'],
  external: id => {
    const externals = [
      ...Object.keys(pkg.dependencies),
      ...Object.keys(pkg.peerDependencies),
      'tailwindcss/plugin',
      'fs'
    ];

    return externals.includes(id);
  },
  plugins: [
    /**
     * Remove existing dist files and type definitions
     */
    del({ targets: 'dist/*' }),
    nodePolyfills(),
    nodeResolve(),
    commonjs(),
    typescript({
      useTsconfigDeclarationDir: true
    })
  ],
  output: [{ dir: 'dist', format: 'cjs' }]
};
