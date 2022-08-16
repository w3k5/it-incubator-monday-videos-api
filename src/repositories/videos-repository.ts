import { VideoInterface } from '@interfaces';
import { ResolutionEnum } from '../enums';
import { videoGenerator } from '../services/video-generator';
import { CreateVideoType, UpdateVideoType } from '@types';

const MOCK_VIDEOS: VideoInterface[] = [
	{
		id: 1,
		title: 'About JS - 01',
		author: 'it-incubator.eu',
		canBeDownloaded: true,
		minAgeRestriction: 18,
		createdAt: '2022-08-16T02:20:29.750Z',
		publicationDate: '2022-08-16T02:20:29.750Z',
		availableResolutions: [ResolutionEnum.P144, ResolutionEnum.P240],
	},
	{
		id: 2,
		title: 'About JS - 02',
		author: 'it-incubator.eu',
		canBeDownloaded: false,
		minAgeRestriction: 6,
		createdAt: '2022-08-16T02:20:29.750Z',
		publicationDate: '2022-08-16T02:20:29.750Z',
		availableResolutions: [
			ResolutionEnum.P144,
			ResolutionEnum.P240,
			ResolutionEnum.P360,
			ResolutionEnum.P480,
		],
	},
	{
		id: 3,
		title: 'About JS - 03',
		author: 'it-incubator.eu',
		canBeDownloaded: true,
		minAgeRestriction: 12,
		createdAt: '2022-08-16T02:20:29.750Z',
		publicationDate: '2022-08-16T02:20:29.750Z',
		availableResolutions: [
			ResolutionEnum.P144,
			ResolutionEnum.P240,
			ResolutionEnum.P720,
			ResolutionEnum.P1080,
		],
	},
	{
		id: 4,
		title: 'About JS - 04',
		author: 'it-incubator.eu',
		canBeDownloaded: true,
		minAgeRestriction: 0,
		createdAt: '2022-08-16T02:20:29.750Z',
		publicationDate: '2022-08-16T02:20:29.750Z',
		availableResolutions: [
			ResolutionEnum.P144,
			ResolutionEnum.P240,
			ResolutionEnum.P1080,
			ResolutionEnum.P2160,
		],
	},
];

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

		if (!data.publicationDate) {
			console.log('DATE', candidate.createdAt);
		}
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
