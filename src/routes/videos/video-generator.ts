import { ResolutionEnum } from "@enums";
import { VideoInterface } from "@interfaces";

export const videoGenerator = (title: string, author: string, availableResolutions: ResolutionEnum[]): VideoInterface => {
    const date = new Date().toISOString();
    const id = +(new Date())
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