import { type FlattenObjectKeys } from '../../utils';

export const primary = {
	10: '#ecefff',
	20: '#dce2ff',
	30: '#c0c8ff',
	40: '#9aa3ff',
	50: '#7273ff',
	60: '#5e51ff',
	70: '#5032f9',
	80: '#3821b2',
	90: '#31238c',
	100: '#1f1551',
} as const;

export const wrappedPrimary = { primary };

export type PrimaryColors = FlattenObjectKeys<typeof wrappedPrimary>;
