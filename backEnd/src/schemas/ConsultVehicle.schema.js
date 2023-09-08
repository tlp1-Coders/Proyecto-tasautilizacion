import {body} from 'express-validator';

export const consultVehicleSchema =  [
    body('valor').not().isEmpty().withMessage('El campo es obligatorio').isLength({min: 6},{max: 8}).withMessage('El campo debe tener al menos 6 y maximo 8 caracteres')

]
