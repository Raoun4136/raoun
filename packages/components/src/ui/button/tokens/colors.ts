import { vars } from '../../../styles/theme.css';

export const primary = {
	'': vars.global.colors.primary[60],
	text: vars.global.colors.white,
	hover: vars.global.colors.primary[70],
	active: vars.global.colors.primary[80],
} as const;

export const secondary = {
	'': vars.global.colors.secondary[100],
	text: vars.global.colors.white,
	hover: vars.global.colors.secondary[90],
	active: vars.global.colors.secondary[80],
} as const;

export const tertiary = {
	text: vars.global.colors.gray[90],
	border: vars.global.colors.gray[30],
	bg: vars.global.colors.white,
	hover: vars.global.colors.gray[10],
	active: vars.global.colors.gray[15],
} as const;

export const contrast = {
	'': vars.global.colors.gray[90],
	hover: {
		text: vars.global.colors.primary[60],
		bg: vars.global.colors.primary[10],
	},
	active: {
		text: vars.global.colors.primary[50],
		bg: vars.global.colors.primary[10],
	},
} as const;

export const danger = {
	primary: {
		'': vars.global.colors.red[60],
		hover: vars.global.colors.red[70],
		active: vars.global.colors.red[80],
	},
	tertiary: {
		text: vars.global.colors.red[60],
		border: vars.global.colors.red[60],
		bg: vars.global.colors.white,
		hover: vars.global.colors.red[10],
		active: vars.global.colors.red[20],
	},
	contrast: {
		'': vars.global.colors.red[60],
		hover: vars.global.colors.red[10],
		active: vars.global.colors.red[20],
	},
} as const;

export const disabled = {
	bg: vars.global.colors.gray[20],
	border: vars.global.colors.gray[40],
	text: {
		'': vars.global.colors.gray[50],
		on: {
			color: vars.global.colors.gray[60],
		},
	},
} as const;
