import * as global from '../tokens/global';
import * as colorSet from '../tokens/color-set';

export const getVarName = (_value: string | null, path: string[]) => {
	return path
		.filter((name) => name.trim() !== '')
		.join('-')
		.replace('.', '_')
		.replace('/', '__');
};

export const getGlobalColors = <T extends Record<string, string>>(primaryColors: 'first' | 'second' | T) => {
	const primaryColorSet = {
		first: colorSet.firstPrimary,
		second: colorSet.secondPrimary,
	} as const;

	const primary = typeof primaryColors === 'string' ? primaryColorSet[primaryColors] : primaryColors;

	return { ...global.colors, primary };
};
