import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { config } from 'dotenv';
import { videosRouter } from './routes/videos/videos-router';
import { Repository } from './repositories/repository';
import { VideoInterface } from '@interfaces';
import { testingRouter } from './routes/testing/testing-router';

config();
export const app = express();
const port = process.env.PORT || 3000;

export const videosRepository = new Repository<VideoInterface>([]);

app.use(cors());
app.use(bodyParser.json());

app.use('/videos', videosRouter);
app.use('/testing', testingRouter);

app.listen(port, () => {
	console.log(`IT-Incubator Video Api has been started at port: ${port}`);
});
