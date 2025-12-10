import { transformObject } from '@raoun/design-token/utils';
import { type semantic, type global, type colorSet } from '@raoun/design-token';
import { createRainbowSprinkles, defineProperties } from 'rainbow-sprinkles';

import { vars } from './theme.css';

const colors = {
	...transformObject<colorSet.FirstPrimaryColors>(vars.global.colors.primary),
	...transformObject<global.Colors>(vars.global.colors),
	...transformObject<semantic.SemanticColor>(vars.semantic.color),
};

const shadows = {
	...transformObject<global.Elevation>(vars.global.elevation),
};

const spacing = transformObject<global.Space>({ spacing: vars.global.spacing });
const radius = transformObject<global.Radius>({ radius: vars.global.radius });

export const interactiveProperties = defineProperties({
	conditions: {
		default: {},
		hover: { selector: '&:hover' },
		active: { selector: '&:active' },
		disabled: { selector: '&:disabled' },
		focusVisible: { selector: '&:focus-visible' },
	},
	defaultCondition: 'default',
	dynamicProperties: {
		color: colors,
		backgroundColor: colors,
		borderColor: {
			'100': 'AliceBlue',
		},

		display: true,

		width: true,
		height: true,

		borderRadius: radius,
		paddingTop: spacing,
		paddingBottom: spacing,
		paddingLeft: spacing,
		paddingRight: spacing,
		marginBlock: spacing,
		marginTop: spacing,
		marginBottom: spacing,
		marginLeft: spacing,
		marginRight: spacing,
		gap: spacing,
		margin: spacing,
		boxShadow: shadows,
	},
	staticProperties: {},
	shorthands: {
		elevation: ['boxShadow'],
		rounded: ['borderRadius'],
		paddingX: ['paddingLeft', 'paddingRight'],
		paddingY: ['paddingTop', 'paddingBottom'],
		marginX: ['marginLeft', 'marginRight'],
		marginY: ['marginTop', 'marginBottom'],
		bgColor: ['backgroundColor'],
	},
});

// export const responsiveProperties = defineProperties({
// 	properties: {
// 		display: {
// 			default: 'block',
// 		},
// 	},
// });

// export const sprinkles = createSprinkles(interactiveProperties, responsiveProperties, colorProperties);
export const sprinkles = createRainbowSprinkles(interactiveProperties);
export type Sprinkles = Parameters<typeof sprinkles>[0];
