import { VideoInterface } from '@interfaces';
import { videoGenerator } from '../services/video-generator';
import { CreateVideoType, UpdateVideoType } from '@types';

const MOCK_VIDEOS: VideoInterface[] = [];

/**
 * Repository for working with Videos
 */
export const videosRepository = {
	/**
	 * Finds all videos from Mock Database
	 */
	findVideos(): VideoInterface[] {
		return MOCK_VIDEOS;
	},

	/**
	 * Creates new Video in Mock Database
	 * @param data
	 */
	createVideo(data: CreateVideoType): VideoInterface {
		const newVideo = videoGenerator(data);
		MOCK_VIDEOS.push(newVideo);
		return newVideo;
	},

	/**
	 * Finds one Video by ID from Mock Database
	 * @param id
	 */
	findVideoById(id: number): VideoInterface | null {
		const candidate = MOCK_VIDEOS.find((video) => video.id === id);
		return candidate || null;
	},

	/**
	 * Update one Video by ID in Mock Database
	 * @param id
	 * @param data
	 */
	updateVideoById(id: number, data: UpdateVideoType): boolean {
		const candidate = this.findVideoById(id);
		if (!candidate) {
			return false;
		}

		Object.assign(candidate, data);

		return true;
	},

	/**
	 * Remove one Video by ID from Mock Database
	 * @param id
	 */
	removeVideoById(id: number) {
		const candidateIndex = MOCK_VIDEOS.findIndex((video) => video.id === id);
		MOCK_VIDEOS.splice(candidateIndex, 1);
	},
};
