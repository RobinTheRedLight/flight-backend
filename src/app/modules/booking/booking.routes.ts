import express from 'express';
import { BookingControllers } from './booking.controller';
import { BookingValidation } from './booking.validation';
import validateRequest from '../../middlewares/validateRequest';
import auth from '../../middlewares/auth';
import { USER_ROLE } from '../user/user.constant';

const router = express.Router();

router.post(
  '/',
  auth(USER_ROLE.admin, USER_ROLE.user),
  validateRequest(BookingValidation.bookingCreationValidationSchema),
  BookingControllers.createBooking,
);

router.get(
  '/user/:id',
  auth(USER_ROLE.admin, USER_ROLE.user),
  BookingControllers.getBookingsByUser,
);

router.get('/', auth(USER_ROLE.admin), BookingControllers.getAllBookings);

router.put('/:id', auth(USER_ROLE.admin), BookingControllers.updateBooking);

router.delete('/:id', auth(USER_ROLE.admin), BookingControllers.deleteBooking);

export const BookingRoutes = router;
