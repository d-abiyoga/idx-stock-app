import { Secret } from 'jsonwebtoken';
const isProduction = process.env.NODE_ENV === 'production';

export const jwtSecret = isProduction
  ? (process.env.JWT_SECRET_PROD as Secret)
  : (process.env.JWT_SECRET_DEV as Secret);

export const dbUrl = isProduction ? (process.env.DB_URL_PROD as string) : (process.env.DB_URL_DEV as string);
