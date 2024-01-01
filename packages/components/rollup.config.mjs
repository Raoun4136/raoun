import typescript from 'rollup-plugin-typescript2';
import resolve from '@rollup/plugin-node-resolve';
import { uglify } from 'rollup-plugin-uglify';
import commonjs from '@rollup/plugin-commonjs';
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
        dir: 'dist',
        format: 'esm',
        preserveModules: true,
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      image(),
      resolve(),
      commonjs({
        include: /node_modules/,
      }),
      typescript({ clean: true, sourceMap: false }),
      uglify(), // js 압축
      babel({
        babelHelpers: 'bundled',
        presets: ['@babel/preset-env', '@babel/preset-typescript'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      }),
      postcss(
        // css 번들링
        {
          plugins: [cssimport(), autoprefixer()],
          extract: true,
        }
      ),
    ],
  }, // 타입 정의 파일 번들링
  {
    input: 'src/index.ts',
    output: [{ dir: 'dist', format: 'esm', sourceMap: true, preserveModules: true }],
    plugins: [
      dts(),
      postcss({
        plugins: [cssimport(), autoprefixer()],
        extract: true,
      }),
    ],
  },
];
