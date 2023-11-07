import {Router} from 'express';
import { NotUserGetVehicle, getVehicle } from '../controllers/vehicles.controller.js';
import { consultVehicleSchema } from '../schemas/ConsultVehicle.schema.js';
import { validateFields } from '../middlewares/validator.js';
import { getUserInfoToken } from '../middlewares/getUser.js';

const vehiclesRouter = Router();

vehiclesRouter.post('/',getUserInfoToken,consultVehicleSchema,validateFields,getVehicle);
vehiclesRouter.post('/vehicleNotUser',consultVehicleSchema,validateFields,NotUserGetVehicle);



export default vehiclesRouter;