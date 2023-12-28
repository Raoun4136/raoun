import { createGlobalTheme, createGlobalThemeContract } from '@vanilla-extract/css';

import * as global from './tokens/global';
import * as semantic from './tokens/semantic';

import { getVarName } from './utils';

export const vars = createGlobalThemeContract({ global, semantic }, getVarName);

createGlobalTheme(':root', vars, { global, semantic });
