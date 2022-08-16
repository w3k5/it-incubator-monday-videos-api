import { inputValidationMiddleware } from '../../../middlewares/input-validation.middleware';
import { titleStringValidation } from '../field-validators/title-validations';
import { authorStringValidation } from '../field-validators/author-validations';
import { resolutionValidations } from '../field-validators/resolution-validations';
import { body } from 'express-validator';
import { requiredValidator } from '../../custom-validators/required-validator';

/**
 * Create video validators
 */
export const createVideoValidations = [
	titleStringValidation,
	body('title').custom(requiredValidator),
	authorStringValidation,
	body('author').custom(requiredValidator),
	resolutionValidations,
	inputValidationMiddleware,
];
