import { Router } from 'express';
import { dropDatabase } from './handlers';

export const testingRouter = Router();

/**
 * Drops full database
 */
testingRouter.delete('/all-data', dropDatabase);
