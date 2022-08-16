import { body } from 'express-validator';
import { customStringValidator } from '../../custom-validators/is-string-validator';
import { NextFunction, Request, Response } from 'express';

const max = 40;

/**
 * Title field validators
 */
const titleStringValidation = body('title')
	.trim()
	.custom((value) => customStringValidator(value, 'Title'))
	.isString()
	.withMessage('Title must be a string');

const titleLengthValidation = body('title')
	.trim()
	.isLength({ max })
	.withMessage(`Max length of title: ${max} symbols!`);

export const titleValidators = [titleStringValidation, titleLengthValidation];
