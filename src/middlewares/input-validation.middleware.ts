import { NextFunction, Request, Response } from 'express';
import { validationResult } from 'express-validator';
import { generateError } from '../services/error-generator';

export const inputValidationMiddleware = (
	request: Request,
	response: Response,
	next: NextFunction,
) => {
	const errors = validationResult(request);
	if (!errors.isEmpty()) {
		const preparedErrors = {
			errorMessages: errors.array().map(generateError),
		};
		return response.status(400).send(preparedErrors);
	}

	next();
};
