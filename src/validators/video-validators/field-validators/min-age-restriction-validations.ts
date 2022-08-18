import { body } from 'express-validator';

/**
 * Min age restriction field validators
 */
const minAgeRestrictionValidation = body('minAgeRestriction')
	.isInt({ min: 0, max: 18 })
	.toInt()
	.withMessage('Value must be between 0 and 18!');

export const minAgeRestrictionValidators = [
	minAgeRestrictionValidation.optional({ nullable: true }),
];
