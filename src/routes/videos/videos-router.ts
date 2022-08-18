import { Router } from 'express';
import {
	createVideo,
	dropDatabase,
	getAllVideos,
	getVideoById,
	removeVideoById,
	updateVideoById,
} from './handlers';
import {
	createVideosValidators,
	updateVideosValidators,
} from '../../validators/video-validators/create.validator';

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
 * Drops full database
 */
videosRouter.delete('/', dropDatabase);

/**
 * Removes one video by ID
 */
videosRouter.delete('/:id', removeVideoById);
