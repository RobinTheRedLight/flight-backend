import AppError from '../../errors/AppError';
import { Flight } from './flight.model';
import { StatusCodes } from 'http-status-codes';

const getAllFlights = async () => {
  return Flight.find();
};

const getFlightById = async (flightId: string) => {
  const flight = await Flight.findById(flightId);
  if (!flight) {
    throw new AppError(StatusCodes.NOT_FOUND, 'Flight not found');
  }
  return flight;
};

const addFlight = async (flightData: any) => {
  const newFlight = await Flight.create(flightData);
  return newFlight;
};

const updateFlight = async (flightId: string, flightData: any) => {
  const updatedFlight = await Flight.findByIdAndUpdate(flightId, flightData, {
    new: true,
  });
  if (!updatedFlight) {
    throw new AppError(StatusCodes.NOT_FOUND, 'Flight not found');
  }
  return updatedFlight;
};

const deleteFlight = async (flightId: string) => {
  const deletedFlight = await Flight.findByIdAndDelete(flightId);
  if (!deletedFlight) {
    throw new AppError(StatusCodes.NOT_FOUND, 'Flight not found');
  }
};

export const FlightServices = {
  getAllFlights,
  getFlightById,
  addFlight,
  updateFlight,
  deleteFlight,
};
