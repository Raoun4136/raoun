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

export default [
  {
    // js 번들링
    input: 'src/index.ts',
    output: [
      {
        dir: 'dist',
        format: 'cjs',
        preserveModules: true,
        sourcemap: true,
      },
      {
        dir: 'dist',
        format: 'esm',
        sourcemap: true,
        preserveModules: true,
      },
    ],
    exports: {
      '.': {
        import: './dist/index.esm.js',
        require: './dist/index.js',
      },
    },
    plugins: [
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
  }, // 타입 정의 파일 번들링
  {
    input: 'src/index.ts',
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
    plugins: [
      dts(),
      postcss({
        plugins: [cssimport(), autoprefixer()],
        extract: true,
      }),
    ],
  },
];
