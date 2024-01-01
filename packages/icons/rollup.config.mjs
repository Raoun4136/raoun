import typescript from 'rollup-plugin-typescript2';
import resolve from '@rollup/plugin-node-resolve';
import { uglify } from 'rollup-plugin-uglify';
import commonjs from '@rollup/plugin-commonjs';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import image from '@rollup/plugin-image';
import dts from 'rollup-plugin-dts';
import babel from '@rollup/plugin-babel';
import svgr from '@svgr/rollup';

export default [
  {
    // js 번들링
    input: 'lib/index.ts',
    output: [
      {
        dir: 'dist',
        format: 'esm',
        sourcemap: true,
        preserveModules: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      image(),
      resolve(),
      commonjs({
        include: /node_modules/,
      }),
      typescript({ clean: true, sourceMap: true }),
      // uglify(), // js 압축
      babel({
        babelHelpers: 'bundled',
        presets: ['@babel/preset-env', '@babel/preset-typescript'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      }),
      svgr(),
    ],
  }, // 타입 정의 파일 번들링
  {
    input: 'lib/index.ts',
    output: [
      {
        dir: 'dist',
        format: 'esm',
        sourceMap: true,
        preserveModules: true,
      },
    ],
    plugins: [dts()],
  },
];
