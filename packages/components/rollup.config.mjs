import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import { vanillaExtractPlugin } from '@vanilla-extract/rollup-plugin';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import json from '@rollup/plugin-json';

export default [
	// Components Build
	{
		input: 'src/index.ts',
		output: [
			{
				dir: 'dist',
				format: 'esm',
				sourcemap: true,
				preserveModules: true,
				preserveModulesRoot: 'src',
			},
		],
		onwarn(warning, warn) {
			if (warning.code === 'MODULE_LEVEL_DIRECTIVE') {
				return;
			}
			warn(warning);
		},
		plugins: [
			nodeResolve({
				dedupe: ['react', 'react-dom'],
			}),
			commonjs(),
			peerDepsExternal(),
			vanillaExtractPlugin(),
			typescript({
				lib: ['ESNext'],
				exclude: ['scripts/**/*', '**/*.test.ts', '**/*.spec.ts', '**/*.stories.tsx'],
			}),
			json(),
		],
	},
	{
		input: 'src/index.ts',
		output: [
			{
				dir: 'dist',
				format: 'esm',
				sourcemap: true,
				preserveModules: true,
				preserveModulesRoot: 'src',
			},
		],
		plugins: [
			dts({
				declaration: true,
				noEmit: false,
				emitDeclarationOnly: true,
				noEmitOnError: true,
			}),
		],
	},
];
