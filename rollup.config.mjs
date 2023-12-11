import typescript from 'rollup-plugin-typescript2';
import resolve from '@rollup/plugin-node-resolve';
import { uglify } from 'rollup-plugin-uglify';
import commonjs from '@rollup/plugin-commonjs';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import image from '@rollup/plugin-image';
import dts from 'rollup-plugin-dts';

const extensions = ['.js', '.ts'];

export default [
  {
    // js 번들링
    input: 'src/index.ts',
    output: [{ file: 'dist/index.js', format: 'esm' }],
    plugins: [
      peerDepsExternal(),
      image(),
      resolve({ extensions }),
      commonjs({
        include: /node_modules/,
      }),
      typescript({ clean: true, sourceMap: false }),
      uglify(), // js 압축
      postcss(),
    ],
  }, // 타입 정의 파일 번들링
  {
    input: 'src/index.ts',
    output: [{ file: 'dist/index.d.ts', format: 'cjs' }],

    plugins: [dts(), postcss()],
  },
];