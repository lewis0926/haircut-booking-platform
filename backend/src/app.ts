import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import logger from "./logger";
import initializeStylistRouter from "./module/stylist/routes/stylist.route";
import cors from 'cors';
import errorHandler from "./middleware/error-handler";
import initializeCustomerRouter from './module/customer/routes/customer.route';
import initializeShopRouter from "./module/shop/routes/shop.route";
import StylistService from "./module/stylist/service/stylist.service";
import ShopService from "./module/shop/service/shop.service";
import StylistController from "./module/stylist/controllers/stylist.controller";
import ShopController from "./module/shop/controllers/shop.controller";
import CustomerController from "./module/customer/controllers/customer.controller";
import CustomerService from "./module/customer/services/customer.service";
import initializeBookingRouter from "./module/booking/routes/booking.route";
import BookingService from "./module/booking/service/booking.service";
import BookingController from "./module/booking/controllers/booking.controller";

const initializeApp = async (): Promise<void> => {
  dotenv.config();

  // Connect to MongoDB
  try {
    await mongoose.connect(process.env.MONGO_CONNECTION_STRING || 'mongodb://localhost:27017/booking-system')
    logger.info('Connected to MongoDB successfully');
  } catch (err) {
    logger.error(`Error in connecting to MongoDB: ${err}`);
    throw err;
  }

  // Initialize express app
  const app = express();
  app.use(express.json());
  app.use(cors());
  const host = process.env.HOST || 'localhost';
  const port = process.env.PORT || 8000;

  // Initialize services and controllers
  const shopService = new ShopService();
  const stylistService = new StylistService(shopService);
  const customerService = new CustomerService();
  const bookingService = new BookingService(customerService, stylistService);

  const shopController = new ShopController(shopService);
  const stylistController = new StylistController(stylistService);
  const customerController = new CustomerController(customerService);
  const bookingController = new BookingController(bookingService);

  // Initialize routers
  app.use('/stylist', initializeStylistRouter(stylistController));
  app.use('/customer', initializeCustomerRouter(customerController));
  app.use('/shop', initializeShopRouter(shopController));
  app.use('/booking', initializeBookingRouter(bookingController));

  // Error handler
  app.use(errorHandler);

  app.listen(port, () => {
    logger.info(`Server is running on ${host}:${port}`);
  });
}

initializeApp();
