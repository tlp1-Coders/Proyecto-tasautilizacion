import {Router} from 'express';
import { getVehicle } from '../controllers/vehicles.controller.js';

const vehiclesRouter = Router();

vehiclesRouter.post('/vehicle',getVehicle);

export default vehiclesRouter;