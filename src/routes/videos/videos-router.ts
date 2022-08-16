import { NextFunction, Request, Response, Router } from 'express';
import {
	createVideo,
	dropDatabase,
	getAllVideos,
	getVideoById,
	removeVideoById,
	updateVideoById,
} from './handlers';
import { createVideoValidations } from '../../validators/video-validators/methods-validators/create-video-validations';
import { updateVideoValidation } from '../../validators/video-validators/methods-validators/update-video-validations';

export const videosRouter = Router();

/**
 * Returns all videos
 * */
videosRouter.get('/', getAllVideos);

/**
 * Creates new video
 */
videosRouter.post('/', createVideoValidations, createVideo);

/**
 * Returns one video by ID
 */
videosRouter.get('/:id', getVideoById);

/**
 * Updates one video by ID
 */
videosRouter.put('/:id', updateVideoValidation, updateVideoById);

/**
 * Drops full database
 */
videosRouter.delete('/', dropDatabase);

/**
 * Removes one video by ID
 */
videosRouter.delete('/:id', removeVideoById);
