import { ResolutionEnum } from "../enums";
import { VideoInterface } from "../interfaces";

export const videoGenerator = (id: number, title: string, author: string, availableResolutions: ResolutionEnum[]): VideoInterface => {
    const date = new Date().toISOString();
    return {
        id,
        author,
        title,
        availableResolutions,
        createdAt: date,
        publicationDate: date,
        canBeDownloaded: true,
        minAgeRestriction: 18,
    }
}