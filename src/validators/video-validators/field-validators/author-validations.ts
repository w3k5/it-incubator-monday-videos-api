import { body } from 'express-validator';
import { customStringValidator } from '../../custom-validators/is-string-validator';

/**
 * Author field validators
 */
export const authorStringValidation = body('author')
	.trim()
	.custom((value) => customStringValidator(value, 'Author'))
	.isString()
	.withMessage('Author must be a string!')
	.isLength({ min: 1, max: 20 })
	.withMessage(
		`Min length of author: ${1}. Max length of author: ${20} symbols!`,
	);
