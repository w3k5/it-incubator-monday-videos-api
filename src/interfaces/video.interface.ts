import { ResolutionEnum } from '../enums';

export interface VideoInterface {
	id: number;
	title: string;
	author: string | null;
	// canBeDownloaded: boolean;
	// minAgeRestriction: number;
	/**
	 * ISO String
	 */
	// createdAt: string;
	/**
	 * ISO String
	 */
	// publicationDate: string;
	// availableResolutions: ResolutionEnum[];
}
