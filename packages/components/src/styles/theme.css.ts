import { createGlobalThemeContract } from '@vanilla-extract/css';

import { global, semantic, colorSet } from '@raoun/design-token';
import { getVarName } from '@raoun/design-token/utils';

export const vars = createGlobalThemeContract(
	{
		global: {
			...global,
			colors: {
				...global.colors,
				primary: colorSet.firstPrimary,
			},
		},
		semantic,
	},
	getVarName,
);
