export const customStringValidator = (value: any, fieldName: string) => {
	if (typeof value !== 'string' || !isNaN(+value)) {
		throw new Error(`${fieldName} must be a string!`);
	}
	return true;
};
