import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import logger from "./logger";
import initializeStylistRouter from "./module/stylist/routes/stylist.route";
import cors from 'cors';
import errorHandler from "./middleware/error-handler";

const initializeApp = async (): Promise<void> => {
  dotenv.config();

  try {
    await mongoose.connect(process.env.MONGO_CONNECTION_STRING || 'mongodb://localhost:27017/booking-system')
  } catch (err) {
    logger.error(`Error in connecting to MongoDB: ${err}`);
    throw err;
  }

  logger.info('Connected to MongoDB successfully');

  const app = express();
  app.use(express.json());
  app.use(cors());
  const host = process.env.HOST || 'localhost';
  const port = process.env.PORT || 8000;

  app.use('/stylist', initializeStylistRouter());

  app.use(errorHandler);

  app.listen(port, () => {
    logger.info(`Server is running on ${host}:${port}`);
  });
}

initializeApp();
