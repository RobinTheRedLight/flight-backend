import { Booking } from './booking.model';
import { User } from '../user/user.model';
import { Flight } from '../flight/flight.model';
import AppError from '../../errors/AppError';
import { StatusCodes } from 'http-status-codes';

const createBooking = async (bookingData: any) => {
  const { userId, flightId, numberOfSeats } = bookingData;

  const user = await User.findById(userId);
  if (!user) throw new AppError(StatusCodes.NOT_FOUND, 'User not found');

  const flight = await Flight.findById(flightId);
  if (!flight) throw new AppError(StatusCodes.NOT_FOUND, 'Flight not found');

  if (flight.availableSeats < numberOfSeats) {
    throw new AppError(StatusCodes.BAD_REQUEST, 'Not enough seats available');
  }


  const booking = await Booking.create({
    userId,
    flightId,
    numberOfSeats,
    totalPrice: flight.price * numberOfSeats,
  });

  flight.availableSeats -= numberOfSeats;
  await flight.save();

  return booking;
};

const getBookingsByUser = async (userId: string) => {
  const bookings = await Booking.find({ userId });
  return bookings;
};

const getAllBookings = async () => {
  const bookings = await Booking.find();
  return bookings;
};

const updateBooking = async (bookingId: string, updateData: any) => {
  const booking = await Booking.findByIdAndUpdate(bookingId, updateData, {
    new: true,
  });

  if (!booking) throw new AppError(StatusCodes.NOT_FOUND, 'Booking not found');

  return booking;
};

const deleteBooking = async (bookingId: string) => {
  const booking = await Booking.findByIdAndDelete(bookingId);

  if (!booking) throw new AppError(StatusCodes.NOT_FOUND, 'Booking not found');

  return booking;
};

export const BookingServices = {
  createBooking,
  getBookingsByUser,
  getAllBookings,
  updateBooking,
  deleteBooking,
};
