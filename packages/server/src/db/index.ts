import mongoose from "mongoose";

const url = process.env.DB_URL;

export const db = async () => {
  if(url) {
    const client = await mongoose.connect(url);
    return client.connection.db
  }
};
