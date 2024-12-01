import mongoose, { Schema } from 'mongoose';
import { TFlight } from './flight.interface';

const FlightSchema = new Schema<TFlight>({
  flightNumber: {
    type: String,
    required: true,
    unique: true,
  },
  airline: {
    type: String,
    required: true,
  },
  origin: {
    type: String,
    required: true,
  },
  destination: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  availableSeats: {
    type: Number,
    required: true,
  },
});

const Flight = mongoose.model<TFlight>('Flight', FlightSchema);

export { Flight };
