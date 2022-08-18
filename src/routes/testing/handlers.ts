import { Request, Response } from 'express';
import { HttpStatusesEnum } from '../../enums';
import { videosRepository } from '../../index';

/**
 * Drops full database
 * @param request
 * @param response
 */
export const dropDatabase = async (request: Request, response: Response) => {
	await videosRepository.drop();
	return response.status(HttpStatusesEnum.NO_CONTENT).send();
};
