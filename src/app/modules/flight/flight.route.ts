import express from 'express';
import { FlightControllers } from './flight.controller';
import validateRequest from '../../middlewares/validateRequest';
import { FlightValidation } from './flight.validation';
import auth from '../../middlewares/auth';
import { USER_ROLE } from '../user/user.constant';

const router = express.Router();

router.get('/', FlightControllers.getAllFlights);
router.get('/:id', FlightControllers.getFlightDetails);

router.post(
  '/',
  auth(USER_ROLE.admin),
  validateRequest(FlightValidation.flightCreationSchema),
  FlightControllers.addFlight,
);
router.put(
  '/:id',
  auth(USER_ROLE.admin),
  validateRequest(FlightValidation.flightUpdateSchema),
  FlightControllers.updateFlight,
);
router.delete('/:id', auth(USER_ROLE.admin), FlightControllers.deleteFlight);

export const FlightRoutes = router;
