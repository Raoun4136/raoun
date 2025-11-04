export const transformObject = <R extends string>(originalObject: Record<string, any>) => {
	const flattenObject = (obj: Record<string, any>, prefix = '') => {
		const ObjectKeys = Object.keys(obj);

		return ObjectKeys.reduce<Record<R, string>>(
			(acc, key) => {
				const newKey = prefix ? (key === '' ? (prefix as R) : (`${prefix}-${String(key)}` as R)) : (String(key) as R);
				if (typeof obj[key] === 'object' && obj[key] !== null) {
					Object.assign(acc, flattenObject(obj[key], newKey));
				} else {
					acc[newKey] = obj[key] as R;
				}
				return acc;
			},
			{} as Record<R, string>,
		);
	};

	return flattenObject(originalObject);
};

export type FlattenObjectKeys<T extends Record<string | number, unknown>, P extends string = ''> = {
	[K in keyof T]: T[K] extends Record<string | number, unknown>
		? P extends ''
			? FlattenObjectKeys<T[K], `${K & (string | string)}`>
			: FlattenObjectKeys<T[K], `${P}-${K & (string | string)}`>
		: P extends ''
			? `${K & (string | number)}`
			: K extends ''
				? `${P}`
				: `${P}-${K & (string | number)}`;
}[keyof T];
