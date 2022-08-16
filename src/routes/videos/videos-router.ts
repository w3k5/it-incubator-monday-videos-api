import { Router } from 'express';
import {
	createVideo,
	getAllVideos,
	getVideoById,
	removeVideoById,
	updateVideoById,
} from './handlers';
import { createVideoValidations } from '../../validators/video-validators/methods-validators/create-video-validations';
import { updateVideoValidation } from '../../validators/video-validators/methods-validators/update-video-validations';
import { inputValidationMiddleware } from '../../middlewares/input-validation.middleware';

export const videosRouter = Router();

/**
 * Returns all videos
 * */
videosRouter.get('/', getAllVideos);

/**
 * Creates new video
 */
videosRouter.post('/', ...createVideoValidations, createVideo);

/**
 * Returns one video by ID
 */
videosRouter.get('/:id', getVideoById);

/**
 * Updates one video by ID
 */
videosRouter.put('/:id', updateVideoValidation, updateVideoById);

/**
 * Removes one video by ID
 */
videosRouter.delete('/:id', removeVideoById);
