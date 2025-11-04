import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import nodeResolve from '@rollup/plugin-node-resolve';
// import terser from '@rollup/plugin-terser';
import dts from 'rollup-plugin-dts';

export default [
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
			{
				dir: 'dist',
				format: 'cjs',
				sourcemap: true,
				preserveModules: true,
				preserveModulesRoot: 'src',
				entryFileNames({ name }) {
					return `${name}.cjs`;
				},
			},
		],
		plugins: [
			nodeResolve({}),
			commonjs({}),
			typescript({
				lib: ['ESNext'],
			}),
			// terser({}),
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
