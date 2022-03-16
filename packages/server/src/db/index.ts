import mongoose from 'mongoose';
import { dbUrl } from '../config/constants';

export const db = async () => {
  const client = await mongoose.connect(dbUrl);
  return client.connection.db;
};
