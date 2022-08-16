import request from 'supertest';
import { app } from '../../index';
import { VideoInterface } from '@interfaces';
import { HttpStatusesEnum, ResolutionEnum } from '../../enums';
import { body } from 'express-validator';

describe('/videos', () => {
	beforeAll(async () => {
		await request(app).delete('/api/videos');
	});

	it('Should return 200 and empty array of videos', async () => {
		await request(app).get('/api/videos').expect(HttpStatusesEnum.OK, []);
	});

	it("Shouldn't create new Video with empty data", async () => {
		const { body: errorMessages } = await request(app)
			.post('/api/videos')
			.expect(HttpStatusesEnum.BAD_REQUEST);
		expect(errorMessages).toEqual({
			errorMessages: [
				{
					message: expect.any(String),
					field: 'title',
				},
				{
					message: expect.any(String),
					field: 'author',
				},
			],
		});
		await request(app).get('/api/videos').expect(HttpStatusesEnum.OK, []);
	});

	it("Shouldn't create new Video with empty author", async () => {
		const { body: errorMessages } = await request(app)
			.post('/api/videos')
			.send({ title: 'Title' })
			.expect(HttpStatusesEnum.BAD_REQUEST);

		expect(errorMessages).toEqual({
			errorMessages: [
				{
					message: expect.any(String),
					field: 'author',
				},
			],
		});
		await request(app).get('/api/videos').expect(HttpStatusesEnum.OK, []);
	});

	it("Shouldn't create new Video with empty title", async () => {
		const { body: errorsMessages } = await request(app)
			.post('/api/videos')
			.send({ author: 'Author' })
			.expect(HttpStatusesEnum.BAD_REQUEST);

		expect(errorsMessages).toEqual({
			errorMessages: [
				{
					message: expect.any(String),
					field: 'title',
				},
			],
		});

		await request(app).get('/api/videos').expect(HttpStatusesEnum.OK, []);
	});

	it('Should create new Video with valid data without resolution', async () => {
		const createdVideo = await request(app)
			.post('/api/videos')
			.send({ author: 'Author', title: 'Title' })
			.expect(HttpStatusesEnum.CREATED);

		const expectedCourse: VideoInterface = {
			title: 'Title',
			author: 'Author',
			id: expect.any(Number),
			createdAt: expect.any(String),
			publicationDate: expect.any(String),
			canBeDownloaded: false,
			minAgeRestriction: 18,
			availableResolutions: expect.arrayContaining([]),
		};

		expect(createdVideo.body).toEqual(expectedCourse);
		expect(createdVideo.body.availableResolutions.length).toEqual(0);

		const videos = await request(app).get('/api/videos').expect(200);
		expect(videos.body.length).toEqual(1);
	});

	it('Should create new Video with valid data and resolution', async () => {
		const createdVideo = await request(app)
			.post('/api/videos')
			.send({
				author: 'Author',
				title: 'Title',
				availableResolutions: [ResolutionEnum.P1080, ResolutionEnum.P480],
			})
			.expect(HttpStatusesEnum.CREATED);

		const expectedCourse: VideoInterface = {
			title: 'Title',
			author: 'Author',
			id: expect.any(Number),
			createdAt: expect.any(String),
			publicationDate: expect.any(String),
			canBeDownloaded: false,
			minAgeRestriction: 18,
			availableResolutions: expect.arrayContaining([
				ResolutionEnum.P1080,
				ResolutionEnum.P480,
			]),
		};

		expect(createdVideo.body).toEqual(expectedCourse);

		const videos = await request(app).get('/api/videos').expect(200);
		expect(videos.body.length).toEqual(2);
	});

	it("Shouldn't update not exists video", async () => {
		await request(app)
			.put(`/api/videos/${+new Date() + 12345}`)
			.send({
				author: 'Author Updated',
				title: 'Title Updated',
				availableResolutions: [ResolutionEnum.P720],
			})
			.expect(HttpStatusesEnum.NOT_FOUND);
	});

	it("Shouldn't update video with bad data", async () => {
		const createdVideo = await request(app)
			.post('/api/videos')
			.send({
				author: 'Author',
				title: 'Title',
				availableResolutions: [ResolutionEnum.P1080, ResolutionEnum.P480],
			})
			.expect(HttpStatusesEnum.CREATED);

		const {
			body: { errorMessages },
		} = await request(app)
			.put(`/api/videos/${createdVideo.body.id}`)
			.send({
				author: '',
				title: '',
			})
			.expect(HttpStatusesEnum.BAD_REQUEST);

		expect(errorMessages).toEqual({
			errorMessages: [
				{
					message: expect.any(String),
					field: 'title',
				},
				{
					message: expect.any(String),
					field: 'author',
				},
			],
		});
	});

	it('Should update video', async () => {
		const response = await request(app).get('/api/videos').expect(200);
		const [firstVideo] = response.body;

		await request(app)
			.put(`/api/videos/${firstVideo.id}`)
			.send({
				author: 'Author Updated',
				title: 'Title Updated',
				availableResolutions: [ResolutionEnum.P720],
			})
			.expect(HttpStatusesEnum.NO_CONTENT);

		const updatedVideo = await request(app).get(`/api/videos/${firstVideo.id}`);

		expect(updatedVideo.body.title).toEqual('Title Updated');
		expect(updatedVideo.body.author).toEqual('Author Updated');
		expect(updatedVideo.body.availableResolutions).toEqual([
			ResolutionEnum.P720,
		]);
	});

	it('Should delete video', async () => {
		const response = await request(app).get('/api/videos').expect(200);
		const [firstVideo] = response.body;

		await request(app)
			.delete(`/api/videos/${firstVideo.id}`)
			.expect(HttpStatusesEnum.NO_CONTENT);

		await request(app)
			.get(`/api/videos/${firstVideo.id}`)
			.expect(HttpStatusesEnum.NOT_FOUND);
	});

	it("Shouldn't delete video with bad id", async () => {
		await request(app)
			.delete(`/api/videos/lorem`)
			.expect(HttpStatusesEnum.NOT_FOUND);
	});
});
