import { body } from 'express-validator';
import { customIsoDateValidator } from '../../custom-validators/iso-date-validator';

/**
 * Publication date filed validations
 */
const publicationDateValidation = body('publicationDate')
	.trim()
	.isString()
	.custom(customIsoDateValidator)
	.isISO8601()
	.toDate()
	.optional({ nullable: true });

export const publicationDateValidators = [publicationDateValidation];
