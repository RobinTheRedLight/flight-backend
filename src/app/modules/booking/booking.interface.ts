export type TBooking = {
  userId: string;
  flightId: string;
  numberOfSeats: number;
  totalPrice: number;
  status?: 'pending' | 'confirmed' | 'canceled';
};
