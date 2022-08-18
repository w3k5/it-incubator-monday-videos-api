import { body } from 'express-validator';
import { customStringValidator } from '../../custom-validators/is-string-validator';

/**
 * Title field validators
 */
export const titleStringValidation = body('title')
	.trim()
	.custom((value) => customStringValidator(value, 'Title'))
	.isString()
	.withMessage('Title must be a string')
	.isLength({ min: 1, max: 40 })
	.withMessage(
		`Min length of title: ${1}. Max length of title: ${40} symbols!`,
	);
