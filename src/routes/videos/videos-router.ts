import { Router } from 'express';
import {
	createVideo,
	getAllVideos,
	getVideoById,
	removeVideoById,
	updateVideoById,
} from './handlers';
import {
	createVideosValidators,
	updateVideosValidators,
} from '../../validators/video-validators/methods-validators/create-video-validations';

export const videosRouter = Router();

/**
 * Returns all videos
 * */
videosRouter.get('/', getAllVideos);

/**
 * Creates new video
 */
videosRouter.post('/', createVideosValidators, createVideo);

/**
 * Returns one video by ID
 */
videosRouter.get('/:id', getVideoById);

/**
 * Updates one video by ID
 */
videosRouter.put('/:id', updateVideosValidators, updateVideoById);

/**
 * Removes one video by ID
 */
videosRouter.delete('/:id', removeVideoById);
