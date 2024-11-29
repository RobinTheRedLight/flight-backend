import { Router } from 'express';
import { AuthRoutes } from '../modules/auth/auth.route';
import { UserRoutes } from '../modules/user/user.route';
import { FlightRoutes } from '../modules/flight/flight.route';

const router = Router();

const moduleRoutes = [
  {
    path: '/',
    route: AuthRoutes,
  },
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/flights',
    route: FlightRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
