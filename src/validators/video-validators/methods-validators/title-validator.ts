import { ValidationChain } from 'express-validator';

export const titleValidator = (chain: ValidationChain): ValidationChain => {
	return chain
		.trim()
		.isString()
		.withMessage('Title must be a string!')
		.isLength({ min: 1, max: 40 })
		.withMessage('Name length must be greater than 1 and less or equal 40 ');
};
