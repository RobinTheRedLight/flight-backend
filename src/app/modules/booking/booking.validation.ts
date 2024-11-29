import { z } from 'zod';

const bookingCreationValidationSchema = z.object({
  body: z.object({
    flightId: z.string().min(1, { message: 'Flight ID is required.' }),
    numberOfSeats: z
      .number()
      .min(1, { message: 'Number of seats must be at least 1.' }),
  }),
});

export const BookingValidation = {
  bookingCreationValidationSchema,
};
