import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const uri = process.env.MONGO_URI;

console.log("URI", uri);

export const connect = (url = uri, opts = {}) => {
  return mongoose.connect(url, { ...opts, useNewUrlParser: true });
};
