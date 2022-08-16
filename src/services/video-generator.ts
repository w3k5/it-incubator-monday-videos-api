import {VideoInterface} from "@interfaces";
import {CreateVideoType} from "../types/create-video.type";

export const videoGenerator = ({title, author, availableResolutions}: CreateVideoType): VideoInterface => {
    const date = new Date().toISOString();
    const id = +(new Date());
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