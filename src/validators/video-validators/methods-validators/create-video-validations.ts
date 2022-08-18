import { body } from 'express-validator';
import { authorValidator } from './author-validator';
import { inputValidationMiddleware } from '../../../middlewares/input-validation.middleware';

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
