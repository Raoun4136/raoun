import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles';
import { baseProperties } from '@raoun/vanilla-extract';

// extraproperties
export const sprinkles = createSprinkles(baseProperties);

export type Sprinkles = Parameters<typeof sprinkles>[0];
