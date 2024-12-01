import { z } from 'zod';

const flightCreationSchema = z.object({
  body: z.object({
    flightNumber: z.string().min(1, { message: 'Flight number is required.' }),
    airline: z.string().min(1, { message: 'Airline name is required.' }),
    origin: z.string().min(1, { message: 'Origin is required.' }),
    destination: z.string().min(1, { message: 'Destination is required.' }),
    date: z.string(),
    time: z.string().min(1, { message: 'Time is required.' }),
    price: z.number().min(0, { message: 'Price must be a positive number.' }),
    availableSeats: z.number().min(1, { message: 'At least one seat is required.' }),
  }),
});

const flightUpdateSchema = z.object({
  body: z.object({
    flightNumber: z.string().optional(),
    airline: z.string().optional(),
    origin: z.string().optional(),
    destination: z.string().optional(),
    date: z.string().optional(),
    time: z.string().optional(),
    price: z.number().optional(),
    availableSeats: z.number().optional(),
  }),
});

export const FlightValidation = {
  flightCreationSchema,
  flightUpdateSchema,
};
