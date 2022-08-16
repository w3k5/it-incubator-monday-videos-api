import { Router } from "express";
import { createVideo, getAllVideos, getVideoById, removeVideoById, updateVideoById } from "./handlers";

export const videosRouter = Router();

/**
 * Returns all videos
 * */
videosRouter.get('/', getAllVideos);

/**
 * Creates new video
 */
videosRouter.post('/', createVideo);

/**
 * Returns one video by ID
 */
videosRouter.get('/:id', getVideoById);

/**
 * Updates one video by ID
 */
videosRouter.put('/:id', updateVideoById);

/**
 * Removes one video by ID
 */
videosRouter.delete('/:id', removeVideoById);