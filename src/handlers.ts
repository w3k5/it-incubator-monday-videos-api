import {Request, Response} from 'express';
import {VideoInterface} from "@interfaces";
import {ResolutionEnum, HttpStatusesEnum} from "./enums";
import {videoGenerator} from "./services/video-generator";

export let MOCK_VIDEOS: VideoInterface[] = [
    {
        id: 1,
        title: 'About JS - 01',
        author: 'it-incubator.eu',
        canBeDownloaded: true,
        minAgeRestriction: 18,
        createdAt: "2022-08-16T02:20:29.750Z",
        publicationDate: "2022-08-16T02:20:29.750Z",
        availableResolutions: [ResolutionEnum.P144, ResolutionEnum.P240]
    },
    {
        id: 2,
        title: 'About JS - 02',
        author: 'it-incubator.eu',
        canBeDownloaded: false,
        minAgeRestriction: 6,
        createdAt: "2022-08-16T02:20:29.750Z",
        publicationDate: "2022-08-16T02:20:29.750Z",
        availableResolutions: [ResolutionEnum.P144, ResolutionEnum.P240, ResolutionEnum.P360, ResolutionEnum.P480]
    },
    {
        id: 3,
        title: 'About JS - 03',
        author: 'it-incubator.eu',
        canBeDownloaded: true,
        minAgeRestriction: 12,
        createdAt: "2022-08-16T02:20:29.750Z",
        publicationDate: "2022-08-16T02:20:29.750Z",
        availableResolutions: [ResolutionEnum.P144, ResolutionEnum.P240, ResolutionEnum.P720, ResolutionEnum.P1080]
    },
    {
        id: 4,
        title: 'About JS - 04',
        author: 'it-incubator.eu',
        canBeDownloaded: true,
        minAgeRestriction: 0,
        createdAt: "2022-08-16T02:20:29.750Z",
        publicationDate: "2022-08-16T02:20:29.750Z",
        availableResolutions: [ResolutionEnum.P144, ResolutionEnum.P240, ResolutionEnum.P1080, ResolutionEnum.P2160]
    },
]

/**
 * Returns all videos from database
 * @param request
 * @param response
 */
export const getAllVideos = (request: Request, response: Response) => {
    return response.send(MOCK_VIDEOS);
}

/**
 * Creates new video in database
 * @param request
 * @param response
 */
export const createVideo = (request: Request, response: Response) => {
    const {title, author, availableResolutions} = request.body;
    const id = MOCK_VIDEOS.length + 1;
    const newVideo = videoGenerator(id, title, author, availableResolutions);
    MOCK_VIDEOS = [...MOCK_VIDEOS, newVideo];
    return response.send(newVideo);
}

/**
 * Returns one video from database
 * @param request
 * @param response
 */
export const getVideoById = (request: Request, response: Response) => {
    const id = +request.params.id;
    const candidate = getOneVideoFromDatabaseById(id);
    return response.send(candidate);
}

/**
 * Return one video by ID
 * @param request
 * @param response
 */
export const updateVideoById = (request: Request, response: Response) => {
}

/**
 * Removes one video by ID
 * @param request
 * @param response
 */
export const removeVideoById = (request: Request, response: Response) => {
    const id = +request.params.id;
    const candidate = getOneVideoFromDatabaseById(id);

    if (!candidate) {
        return response.status(HttpStatusesEnum.NOT_FOUND).send();
    }

    MOCK_VIDEOS = MOCK_VIDEOS.filter((video) => video.id !== id);
    return response.status(HttpStatusesEnum.NO_CONTENT).send();
}

export const getOneVideoFromDatabaseById = (id: number): VideoInterface | null => {
    const candidate = MOCK_VIDEOS.find((video) => video.id === id);
    return candidate || null;
}