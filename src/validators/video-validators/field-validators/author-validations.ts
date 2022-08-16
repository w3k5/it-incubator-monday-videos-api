import { body } from 'express-validator';
import { customStringValidator } from '../../custom-validators/is-string-validator';

const max = 20;

/**
 * Author field validators
 */
const authorStringValidation = body('author')
	.trim()
	.custom((value) => customStringValidator(value, 'Author'))
	.isString()
	.withMessage('Author must be a string!');

const authorLengthValidation = body('author')
	.trim()
	.isLength({ max })
	.withMessage(`Max length of author: ${max} symbols!`);

export const authorValidators = {
	authorStringValidation,
	authorLengthValidation,
};
