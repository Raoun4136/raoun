import typescript from 'rollup-plugin-typescript2';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';
import replace from '@rollup/plugin-replace';
import html from '@rollup/plugin-html';
import { vanillaExtractPlugin } from '@vanilla-extract/rollup-plugin';

function playgroundTemplate({ attributes, files, meta, publicPath, title }) {
  const scripts = (files.js || [])
    .map(({ fileName }) => `<script src="${publicPath}${fileName}"></script>`)
    .join('\n');
  const links = (files.css || [])
    .map(({ fileName }) => `<link rel="stylesheet" href="${publicPath}${fileName}">`)
    .join('\n');

  return `<!doctype html><html><head><meta charset="utf-8"><title>${title}</title>${links}</head><body><div id="root"></div>${scripts}</body></html>`;
}

export default [
  {
    input: 'src/Playground.tsx',
    output: [
      {
        file: 'dist_playground/bundle.js',
        format: 'iife', // 즉시 실행 함수 형태로 번들
        sourcemap: true,
      },
    ],
    plugins: [
      typescript(),
      resolve(),
      commonjs(),
      babel({
        presets: ['@babel/preset-env', '@babel/preset-react'],
        babelHelpers: 'bundled',
        exclude: 'node_modules/**',
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      }),
      serve({
        open: true,
        contentBase: ['dist_playground'],
        port: 6005,
      }),
      livereload('dist_playground'),
      replace({
        'process.env.NODE_ENV': JSON.stringify('development'),
        preventAssignment: true,
      }),
      html({
        title: 'Featuring Core Playground',
        template: playgroundTemplate,
      }),
      vanillaExtractPlugin({ esbuildOptions: { loader: { '.css': 'empty' } } }),
    ],
  },
];
