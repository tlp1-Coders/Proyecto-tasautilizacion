import {body} from 'express-validator';

export const userSchema = [

    body('nombreApellido').not().isEmpty().withMessage('El nombre es obligatorio'),
    body('usuario').not().isEmpty().withMessage('El usuario es obligatorio'),
    body('dni').not().isEmpty().withMessage('El dni es obligatorio'),
    body('email').isEmail().withMessage('El email es obligatorio'),
    body('password').not().isEmpty().withMessage('La contraseña es obligatoria').isLength(8).withMessage('La contraseña debe tener al menos 8 caracteres'),
    body('pin').not().isEmpty().withMessage('El pin es obligatorio').isLength(4).withMessage('El pin debe tener al menos 4 caracteres'),
]


export const loginUserSchema =[
    body('password').not().isEmpty().withMessage('La contraseña es obligatoria'),
    body('usuario').not().isEmpty().withMessage('El usuario es obligatorio'),

]
