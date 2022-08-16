import { VideoInterface } from '@interfaces';
import { CreateVideoType } from '../types/create-video.type';

export const videoGenerator = ({
	title,
	author,
	availableResolutions = [],
}: CreateVideoType): VideoInterface => {
	const date = new Date().toISOString();
	const publicationDate = getDefaultPublicationDate(date);
	const id = +new Date();
	return {
		id,
		author,
		title,
		availableResolutions,
		createdAt: date,
		publicationDate,
		canBeDownloaded: false,
		minAgeRestriction: 18,
	};
};

export const getDefaultPublicationDate = (createdAt: string) => {
	const date = new Date(createdAt);
	date.setDate(date.getDate() + 1);
	return date.toISOString();
};
