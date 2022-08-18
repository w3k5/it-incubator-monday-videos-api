import { body } from 'express-validator';

/**
 * Can be downloaded filed validators
 */
const canBeDownloadedValidation = body('canBeDownloaded')
	.isBoolean()
	.toBoolean()
	.default(false)
	.optional({ nullable: true });

export const canBeDownloadValidators = [canBeDownloadedValidation];
