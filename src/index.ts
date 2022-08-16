import express from 'express';
import cors from 'cors';
import bodyParser from "body-parser";
import { getAllVideos, createVideo, getVideoById, removeVideoById, updateVideoById } from './handlers';

require('dotenv').config();
const app = express();
const port = process.env.PORT || 3000;
const GLOBAL_PREFIX = '/api/videos';

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/**
 * Returns all videos
 * */
app.get(GLOBAL_PREFIX, getAllVideos);

/**
 * Creates new video
 */
app.post(GLOBAL_PREFIX, createVideo);

/**
 * Returns one video by ID
 */
app.get(`${GLOBAL_PREFIX}/:id`, getVideoById);

/**
 * Updates one video by ID
 */
app.put(`${GLOBAL_PREFIX}/:id`, updateVideoById);

/**
 * Removes one video by ID
 */
app.delete(`${GLOBAL_PREFIX}/:id`, removeVideoById);

app.listen(port, () => {
    console.log(`IT-Incubator Video Api has been started at port: ${port}`);
});