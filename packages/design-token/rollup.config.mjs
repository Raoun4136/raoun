import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import nodeResolve from '@rollup/plugin-node-resolve';
// import terser from '@rollup/plugin-terser';
import dts from 'rollup-plugin-dts';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Custom plugin to generate CSS files after build
const generateCSSPlugin = () => {
	return {
		name: 'generate-css',
		writeBundle() {
			try {
				const scriptPath = join(__dirname, 'scripts/generate-css.ts');
				execSync(`npx tsx ${scriptPath}`, { stdio: 'inherit' });
			} catch (error) {
				console.error('Error generating CSS files:', error);
			}
		},
	};
};

export default [
	/**
	 * Tokens Build
	 */
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
			nodeResolve(),
			commonjs(),
			typescript({
				lib: ['ESNext'],
				exclude: ['scripts/**/*', '**/*.test.ts', '**/*.spec.ts'],
			}),
			// terser({}),
			generateCSSPlugin(),
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

	/**
	 * Utils Build
	 */
	{
		input: 'src/utils/index.ts',
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
			nodeResolve(),
			commonjs(),
			typescript({
				lib: ['ESNext'],
				exclude: ['scripts/**/*', '**/*.test.ts', '**/*.spec.ts'],
			}),
		],
	},
	{
		input: 'src/utils/index.ts',
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
