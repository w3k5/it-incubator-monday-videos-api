import { CustomValidator } from 'express-validator';

export const customIsoDateValidator: CustomValidator = (value: any) => {
	if (new Date(value).valueOf() < 0) {
		throw new Error('Date must be in a Date format!');
	}
	return true;
};
