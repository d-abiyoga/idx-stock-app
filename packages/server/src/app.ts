import 'dotenv/config';
import express from 'express';
import { authRouter } from './routes/auth';
import { companyRouter } from './routes/company';
import { userRouter } from './routes/user';

import setupMiddlewares from './config/middlewares';
import setupPassport from './config/passport';

export function createApp(database: any) {
  database();
  const app = express();

  setupMiddlewares(app);
  setupPassport();

  // Router
  app.use('/auth', authRouter);
  app.use('/company', companyRouter);
  app.use('/user', userRouter);

  return app;
}
