import { Schema, model } from 'mongoose';

const bookingSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    flightId: {
      type: Schema.Types.ObjectId,
      ref: 'Flight',
      required: true,
    },
    numberOfSeats: {
      type: Number,
      required: true,
    },
    totalPrice: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      enum: ['pending', 'confirmed', 'canceled'],
      default: 'pending',
    },
  },
  {
    timestamps: true,
  }
);

export const Booking = model('Booking', bookingSchema);
