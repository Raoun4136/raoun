import typescript from 'rollup-plugin-typescript2';
import resolve from '@rollup/plugin-node-resolve';
import { uglify } from 'rollup-plugin-uglify';
import commonjs from '@rollup/plugin-commonjs';
import depsExternal from 'rollup-plugin-node-externals';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import image from '@rollup/plugin-image';
import dts from 'rollup-plugin-dts';
import cssimport from 'postcss-import';
import babel from '@rollup/plugin-babel';
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
    ],
    plugins: [
      vanillaExtractPlugin({ esbuildOptions: { loader: { '.css': 'empty' } } }),
      depsExternal(),
      peerDepsExternal(),
      image(),
      resolve(),
      commonjs({
        include: /node_modules/,
      }),
      typescript({
        clean: false,
        sourceMap: true,
        exclude: [
          // Exclude test files
          /\.test.((js|jsx|ts|tsx))$/,
          // Exclude story files
          /\.stories.((js|jsx|ts|tsx|mdx))$/,
          // Exclude playground files
          /\Playground.tsx$/,
        ],
      }),
      // uglify(), // js 압축
      babel({
        babelHelpers: 'bundled',
        presets: ['@babel/preset-env', '@babel/preset-typescript'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        exclude: [
          // Exclude test files
          /\.test.((js|jsx|ts|tsx))$/,
          // Exclude story files
          /\.stories.((js|jsx|ts|tsx|mdx))$/,
          // Exclude playground files
          /\Playground.tsx$/,
        ],
      }),
      postcss(
        // css 번들링
        {
          plugins: [autoprefixer()],
          extract: true,
        }
      ),
    ],
  },
];
