import { body } from 'express-validator';
import { ResolutionEnum } from '../../../enums';

export const resolutionValidations = body('availableResolutions').custom(
	(value: string[]) => {
		if (!Array.isArray(value)) {
			throw new Error('availableResolutions must be an array!');
		}

		const resolutionEnumArray = Object.values(ResolutionEnum);
		const isSomeOfValuesNotInEnum = value.some(
			(resolution) => !(resolution in ResolutionEnum),
		);
		if (isSomeOfValuesNotInEnum) {
			throw new Error(`Possible resolutions: ${resolutionEnumArray}`);
		}
		return true;
	},
);
