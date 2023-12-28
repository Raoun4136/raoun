import typescript from 'rollup-plugin-typescript2';
import resolve from '@rollup/plugin-node-resolve';
import { uglify } from 'rollup-plugin-uglify';
import commonjs from '@rollup/plugin-commonjs';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import image from '@rollup/plugin-image';
import dts from 'rollup-plugin-dts';

export default [
  {
    // js 번들링
    input: 'lib/index.ts',
    output: [
      {
        dir: 'dist',
        format: 'cjs',
        sourcemap: true,
      },
      {
        dir: 'dist',
        format: 'esm',
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
      typescript({ clean: true, sourceMap: true }),
      // uglify(), // js 압축
    ],
  }, // 타입 정의 파일 번들링
  {
    input: 'lib/index.ts',
    output: [
      { file: 'dist/index.d.ts', format: 'cjs' },
      { file: 'dist/index.esm.d.ts', format: 'esm' },
    ],
    exports: {
      '.': {
        import: './dist/index.d.ts',
        require: './dist/index.esm.d.ts',
      },
    },
    plugins: [dts()],
  },
];
