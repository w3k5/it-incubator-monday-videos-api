import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { config } from 'dotenv';
import { videosRouter } from './routes/videos/videos-router';

config();
export const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

app.use('/api/videos', videosRouter);

app.listen(port, () => {
	console.log(`IT-Incubator Video Api has been started at port: ${port}`);
});
