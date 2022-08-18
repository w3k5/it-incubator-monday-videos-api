import { body } from 'express-validator';
import { authorValidator } from './author-validator';
import { inputValidationMiddleware } from '../../../middlewares/input-validation.middleware';
import { titleValidator } from './title-validator';
import { resolutionValidations } from '../field-validators/resolution-validations';
import { canBeDownloadValidators } from '../field-validators/can-be-download-validations';
import { publicationDateValidators } from '../field-validators/publication-date-validations';
import { minAgeRestrictionValidators } from '../field-validators/min-age-restriction-validations';

export const createVideosValidators = [
	titleValidator(body('title')),
	authorValidator(body('author')),
	resolutionValidations.optional(),
	inputValidationMiddleware,
];

export const updateVideosValidators = [
	titleValidator(body('title')).optional(),
	authorValidator(body('author')).optional(),
	resolutionValidations.optional(),
	...canBeDownloadValidators,
	...minAgeRestrictionValidators,
	...publicationDateValidators,
	inputValidationMiddleware,
];
