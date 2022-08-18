import { body } from 'express-validator';
import { inputValidationMiddleware } from '../../middlewares/input-validation.middleware';
import { titleValidator } from './title-validator';
import { authorValidator } from './author-validator';

export const createVideosValidators = [
	titleValidator(body('title')),
	authorValidator(body('author')).optional(),
	inputValidationMiddleware,
];

export const updateVideosValidators = [
	titleValidator(body('title')).optional(),
	authorValidator(body('author')).optional(),
	inputValidationMiddleware,
];
