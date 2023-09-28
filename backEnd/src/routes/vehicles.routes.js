import {Router} from 'express';
import { getVehicle } from '../controllers/vehicles.controller.js';
import { consultVehicleSchema } from '../schemas/ConsultVehicle.schema.js';
import { validateFields } from '../middlewares/validator.js';
import { getUserInfoByToken } from '../controllers/auth.controllers.js';

const vehiclesRouter = Router();

vehiclesRouter.post('/',getUserInfoByToken,consultVehicleSchema,validateFields,getVehicle);


export default vehiclesRouter;