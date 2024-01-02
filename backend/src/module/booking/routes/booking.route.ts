import express from 'express';
import BookingController from "../controllers/booking.controller";
import { verifyToken } from "../../../middleware/verify-firebase-token";

const initializeBookingRouter = (bookingController: BookingController): express.Router => {
  const bookingRouter = express.Router();

  bookingRouter.get('/customer', verifyToken,  bookingController.getBookingsByCustomer);
  bookingRouter.get('/stylist', verifyToken, bookingController.getBookingsByStylist);
  bookingRouter.post('/', verifyToken, bookingController.createBooking);
  bookingRouter.delete('/:id', verifyToken, bookingController.cancelBooking);
  bookingRouter.put('/:id', verifyToken, bookingController.updateBooking);
  return bookingRouter;
}

export default initializeBookingRouter;
