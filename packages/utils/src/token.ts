export const getVarName = (_value: string | null, path: string[]) => {
  return path.join('-').replace('.', '_').replace('/', '__');
};

export const transformObject = <R extends string>(
  originalObject: Record<string, any>
) => {
  const flattenObject = (obj: Record<string, any>, prefix = '') => {
    const ObjectKeys = Object.keys(obj) as Array<keyof typeof obj>;

    return ObjectKeys.reduce((acc, key) => {
      const newKey = prefix ? (`${prefix}-${String(key)}` as R) : (String(key) as R);
      if (typeof obj[key] === 'object' && obj[key] !== null) {
        Object.assign(acc, flattenObject(obj[key], newKey));
      } else {
        acc[newKey] = obj[key] as R;
      }
      return acc;
    }, {} as Record<R, string>);
  };

  return flattenObject(originalObject);
};

export type FlattenObjectKeys<
  T extends Record<string | number, unknown>,
  P extends string = ''
> = {
  [K in keyof T]: T[K] extends Record<string | number, unknown>
    ? FlattenObjectKeys<T[K], `${P}${K & (string | string)}-`>
    : `${P}${K & (string | number)}`;
}[keyof T];
