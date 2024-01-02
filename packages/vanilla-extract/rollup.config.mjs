import typescript from 'rollup-plugin-typescript2';
import resolve from '@rollup/plugin-node-resolve';
import { uglify } from 'rollup-plugin-uglify';
import commonjs from '@rollup/plugin-commonjs';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import image from '@rollup/plugin-image';
import dts from 'rollup-plugin-dts';
import cssimport from 'postcss-import';
import autoprefixer from 'autoprefixer';
import { vanillaExtractPlugin } from '@vanilla-extract/rollup-plugin';

export default [
  {
    // js 번들링
    input: 'src/index.ts',
    output: [
      {
        dir: 'esm',
        format: 'esm',
        sourcemap: true,
        preserveModules: true,
        preserveModulesRoot: 'src',
        // Change .css.js files to something else so that they don't get re-processed by consumer's setup
        entryFileNames({ name }) {
          return `${name.replace(/\.css$/, '.css.vanilla')}.js`;
        },
        assetFileNames({ name }) {
          return name?.replace(/^src\//, '') ?? '';
        },
      },
      {
        dir: 'cjs',
        format: 'cjs',
        preserveModules: true,
        preserveModulesRoot: 'src',
        sourcemap: true,
        // Change .css.js files to something else so that they don't get re-processed by consumer's setup
        entryFileNames({ name }) {
          return `${name.replace(/\.css$/, '.css.vanilla')}.js`;
        },
        assetFileNames({ name }) {
          return name?.replace(/^src\//, '') ?? '';
        },
      },
    ],
    plugins: [
      vanillaExtractPlugin(),
      peerDepsExternal(),
      image(),
      resolve(),
      commonjs({}),
      typescript({ clean: true, sourceMap: true }),
      // uglify(), // js 압축
      postcss(
        // css 번들링
        {
          plugins: [cssimport(), autoprefixer()],
          extract: true,
        }
      ),
    ],
  },
];
