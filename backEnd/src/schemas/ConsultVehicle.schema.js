import {body} from 'express-validator';

export const consultVehicleSchema =  [
    body('valor').optional().isLength({min: 6},{max: 8}).withMessage('El campo debe tener al menos 6 y maximo 8 caracteres')

]
