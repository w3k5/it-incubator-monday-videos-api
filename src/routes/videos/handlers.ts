import { Request, Response } from 'express';
import { HttpStatusesEnum } from '../../enums';
import { videosRepository } from '../../repositories/videos-repository';
import { validationResult } from 'express-validator';

/**
 * Returns all videos from database
 * @param request
 * @param response
 */
export const getAllVideos = (request: Request, response: Response) => {
	const videos = videosRepository.findVideos();
	return response.send(videos);
};

/**
 * Creates new video in database
 * @param request
 * @param response
 */
export const createVideo = (request: Request, response: Response) => {
	const newVideo = videosRepository.createVideo(request.body);
	return response.send(newVideo);
};

/**
 * Returns one video from database
 * @param request
 * @param response
 */
export const getVideoById = (request: Request, response: Response) => {
	const id = +request.params.id;
	const candidate = videosRepository.findVideoById(id);
	if (candidate) {
		return response.send(candidate);
	} else {
		return response.status(404).send();
	}
};

/**
 * Return one video by ID
 * @param request
 * @param response
 */
export const updateVideoById = (request: Request, response: Response) => {
	const id = +request.params.id;
	const isVideoUpdated = videosRepository.updateVideoById(id, request.body);
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
export const removeVideoById = (request: Request, response: Response) => {
	const id = +request.params.id;
	const candidate = videosRepository.findVideoById(id);

	if (!candidate) {
		return response.status(HttpStatusesEnum.NOT_FOUND).send();
	}

	videosRepository.removeVideoById(id);

	return response.status(HttpStatusesEnum.NO_CONTENT).send();
};
