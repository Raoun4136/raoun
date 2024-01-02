import { createGlobalTheme, createGlobalThemeContract } from '@vanilla-extract/css';

import { global, semantic, getVarName } from '@raoun/design-token';

export const vars = createGlobalThemeContract({ global, semantic }, getVarName);

createGlobalTheme(':root', vars, { global, semantic });
