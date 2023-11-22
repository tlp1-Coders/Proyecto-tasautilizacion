import {body} from 'express-validator';

export const commentSchema =  [ 
    body('comentario').not().isEmpty().withMessage('El campo no puede estar vacio').isLength({min: 1},{max: 255}).withMessage('El campo debe tener al menos 1 y maximo 255 caracteres')]
