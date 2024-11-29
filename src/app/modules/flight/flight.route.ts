import express from 'express';
import { FlightControllers } from './flight.controller';
import validateRequest from '../../middlewares/validateRequest';
import { FlightValidation } from './flight.validation';
import auth from '../../middlewares/auth';
import { USER_ROLE } from '../user/user.constant';

const router = express.Router();

router.get('/flights', FlightControllers.getAllFlights);
router.get('/flights/:id', FlightControllers.getFlightDetails);

router.post(
  '/flights',
  auth(USER_ROLE.admin),
  validateRequest(FlightValidation.flightCreationSchema),
  FlightControllers.addFlight,
);
router.put(
  '/flights/:id',
  auth(USER_ROLE.admin),
  validateRequest(FlightValidation.flightUpdateSchema),
  FlightControllers.updateFlight,
);
router.delete(
  '/flights/:id',
  auth(USER_ROLE.admin),
  FlightControllers.deleteFlight,
);

export const FlightRoutes = router;
