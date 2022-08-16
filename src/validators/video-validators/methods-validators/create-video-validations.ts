import { inputValidationMiddleware } from '../../../middlewares/input-validation.middleware';
import { titleValidators } from '../field-validators/title-validations';
import { authorValidators } from '../field-validators/author-validations';
import { resolutionValidations } from '../field-validators/resolution-validations';

/**
 * Create video validators
 */
export const createVideoValidations = [
	titleValidators.titleStringValidation,
	titleValidators.titleLengthValidation,
	authorValidators.authorStringValidation,
	authorValidators.authorLengthValidation,
	resolutionValidations,
	inputValidationMiddleware,
];
