import { CustomValidator } from 'express-validator';

export const customIsoDateValidator: CustomValidator = (value: string) => {
	if (value.length !== 24) {
		throw new Error('Invalid date format');
	}
	const parsedDate = new Date(value).valueOf();
	if (parsedDate < 0 || isNaN(parsedDate)) {
		throw new Error('Date must be in a Date format!');
	}
	return true;
};
