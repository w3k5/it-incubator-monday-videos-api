import { param } from 'express-validator';

export const checkParam = param('id')
	.isInt()
	.toInt()
	.withMessage('Id must be a number!');
