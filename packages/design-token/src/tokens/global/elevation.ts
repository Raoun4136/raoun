import { type FlattenObjectKeys } from '../../utils';

export const elevation = {
	2: '0px 0px 2px 0px rgb(from var(--global-colors-black) r g b / 12%), 0px 1px 2px 0px rgb(from var(--global-colors-black) r g b / 14%)',
	4: '0px 0px 2px 0px rgb(from var(--global-colors-black) r g b / 12%), 0px 2px 4px 0px rgb(from var(--global-colors-black) r g b / 14%)',
	8: '0px 0px 2px 0px rgb(from var(--global-colors-black) r g b / 12%), 0px 4px 8px 0px rgb(from var(--global-colors-black) r g b / 14%)',
	16: '0px 0px 2px 0px rgb(from var(--global-colors-black) r g b / 12%), 0px 8px 16px 0px rgb(from var(--global-colors-black) r g b / 14%)',
	28: '0px 0px 8px 0px rgb(from var(--global-colors-black) r g b / 20%), 0px 14px 28px 0px rgb(from var(--global-colors-black) r g b / 24%)',
	64: '0px 0px 8px 0px rgb(from var(--global-colors-black) r g b / 20%), 0px 32px 64px 0px rgb(from var(--global-colors-black) r g b / 24%)',
};

const wrappedElevation = { elevation };

export type Elevation = FlattenObjectKeys<typeof wrappedElevation>;
