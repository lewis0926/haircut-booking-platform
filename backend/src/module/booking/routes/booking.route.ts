import express from 'express';
import BookingController from "../controllers/booking.controller";

const initializeBookingRouter = (bookingController: BookingController): express.Router => {
  const bookingRouter = express.Router();

  bookingRouter.get('/customer/:id', bookingController.getBookingsByCustomer);
  bookingRouter.get('/stylist/:id', bookingController.getBookingsByStylist);
  bookingRouter.post('/', bookingController.createBooking);
  bookingRouter.delete('/:id', bookingController.cancelBooking);
  bookingRouter.put('/:id', bookingController.updateBooking);
  return bookingRouter;
}

export default initializeBookingRouter;
