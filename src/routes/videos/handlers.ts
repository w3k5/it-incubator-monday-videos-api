import { Request, Response } from 'express';
import { VideoInterface } from '@interfaces';
import { HttpStatusesEnum } from '../../enums';
import { Repository } from '../../repositories/repository';
import { videoGenerator } from '../../services/video-generator';

const videosRepository = new Repository<VideoInterface>([]);
/**
 * Returns all videos from database
 * @param request
 * @param response
 */
export const getAllVideos = async (request: Request, response: Response) => {
	const videos = await videosRepository.getAll();
	return response.status(HttpStatusesEnum.OK).send(videos);
};

/**
 * Creates new video in database
 * @param request
 * @param response
 */
export const createVideo = async (request: Request, response: Response) => {
	const newVideo = await videosRepository.create(videoGenerator(request.body));
	return response.status(HttpStatusesEnum.CREATED).send(newVideo);
};

/**
 * Returns one video from database
 * @param request
 * @param response
 */
export const getVideoById = async (request: Request, response: Response) => {
	const id = +request.params.id;
	const candidate = await videosRepository.getById(id);
	if (candidate) {
		return response.status(HttpStatusesEnum.OK).send(candidate);
	} else {
		return response.status(HttpStatusesEnum.NOT_FOUND).send();
	}
};

/**
 * Return one video by ID
 * @param request
 * @param response
 */
export const updateVideoById = async (request: Request, response: Response) => {
	const id = +request.params.id;
	const isVideoUpdated = await videosRepository.update(id, request.body);
	return response
		.status(
			isVideoUpdated ? HttpStatusesEnum.NO_CONTENT : HttpStatusesEnum.NOT_FOUND,
		)
		.send();
};

/**
 * Removes one video by ID
 * @param request
 * @param response
 */
export const removeVideoById = async (request: Request, response: Response) => {
	const id = +request.params.id;
	const candidate = await videosRepository.getById(id);

	if (!candidate) {
		return response.status(HttpStatusesEnum.NOT_FOUND).send();
	}

	await videosRepository.removeById(id);

	return response.status(HttpStatusesEnum.NO_CONTENT).send();
};

/**
 * Drops full database
 * @param request
 * @param response
 */
export const dropDatabase = async (request: Request, response: Response) => {
	await videosRepository.drop();
	return response.status(HttpStatusesEnum.NO_CONTENT).send();
};
