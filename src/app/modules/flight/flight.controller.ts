/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { FlightServices } from './flight.service';

const getAllFlights = catchAsync(async (req, res) => {
  const flights = await FlightServices.getAllFlights();
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Flights retrieved successfully!',
    data: flights,
  });
});

const getFlightDetails = catchAsync(async (req, res) => {
  const flightId = req.params.id;
  const flight = await FlightServices.getFlightById(flightId);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Flight details retrieved successfully!',
    data: flight,
  });
});

const addFlight = catchAsync(async (req, res) => {
  const flightData = req.body;
  const flight = await FlightServices.addFlight(flightData);
  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    success: true,
    message: 'Flight added successfully!',
    data: flight,
  });
});

const updateFlight = catchAsync(async (req, res) => {
  const flightId = req.params.id;
  const flightData = req.body;
  const updatedFlight = await FlightServices.updateFlight(flightId, flightData);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Flight updated successfully!',
    data: updatedFlight,
  });
});

const deleteFlight = catchAsync(async (req, res) => {
  const flightId = req.params.id;
  await FlightServices.deleteFlight(flightId);
  sendResponse(res, {
    statusCode: StatusCodes.NO_CONTENT,
    success: true,
    message: 'Flight deleted successfully!',
    data: [],
  });
});

export const FlightControllers = {
  getAllFlights,
  getFlightDetails,
  addFlight,
  updateFlight,
  deleteFlight,
};
