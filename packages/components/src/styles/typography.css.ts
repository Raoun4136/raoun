import { style, styleVariants } from '@vanilla-extract/css';
import { vars } from './theme.css';

const base = style({ fontFamily: vars.global.typography.font.sans });

type TypographyKeys = keyof (typeof vars.semantic.typography.heading)[1];

const setNumberKey = <Obj extends Record<number | string, string>>(obj: Obj) =>
  Object.keys(obj).reduce<Record<keyof Obj, string>>((acc, curr) => {
    acc[+curr] = obj[curr];
    return acc;
  }, {} as Record<keyof Obj, string>);

const createTypographyVariant = <
  Data extends Record<number, Record<TypographyKeys, unknown>>
>(
  data: Data
) => {
  const createdVariant = styleVariants(data, (typo: any) => [
    base,
    {
      fontSize: typo.fontSize,
      fontWeight: typo.fontWeight,
      lineHeight: typo.lineHeight,
    },
  ]);

  return setNumberKey(createdVariant);
};

const heading = createTypographyVariant(vars.semantic.typography.heading);
const body = createTypographyVariant(vars.semantic.typography.body);
const caption = createTypographyVariant(vars.semantic.typography.caption);

export const typoVariant = {
  heading,
  body,
  caption,
};
