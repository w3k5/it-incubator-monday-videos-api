import { ValidationChain } from 'express-validator';

export const authorValidator = (chain: ValidationChain): ValidationChain => {
	return chain
		.trim()
		.isString()
		.isLength({
			min: 1,
		})
		.withMessage('Name length must be greater than 1');
};
