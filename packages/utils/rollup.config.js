import ts from 'rollup-plugin-ts';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import dts from 'rollup-plugin-dts';

const extensions = ['.js', '.ts'];

export default [
  {
    input: 'src/index.ts',
    output: [{ file: 'dist/index.js', format: 'esm' }],
    plugins: [ts(), resolve({ extensions })],
  },
  {
    input: 'src/index.ts',
    output: [{ file: 'dist/index.d.ts', format: 'cjs' }],
    plugins: [dts(), commonjs()],
  },
];
