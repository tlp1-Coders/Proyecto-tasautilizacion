import { createJWT, verifyJWT } from "../helpers/jwt.js";
import { resendEmail } from "../helpers/resend.js";
import { createNewUser, findOneUser, findOneUserbyId, getUserLogin, updateUser } from "../models/users.model.js";
import { vincular } from "./vincular.js";

export const newUser = async (req, res) => {
    try {
        const existingUser = await findOneUser(req.body.dni);
        if (existingUser) {
            return res.status(400).json({
                message: "El usuario ya existe",
            });
        }
        const user = await createNewUser(req.body);
        if (!user) {
            return res.status(400).json({
                message: "No se pudo crear el usuario",
            });
        }
        const token = await createJWT({ id: user.id });
        if (! await vincular(req.body.dni, user.id)) {
            return res.status(400).json({
                message: "No se pudo vincular el usuario",
            });
        };
        return res.status(201).json({
            message: "Usuario creado",
            token
        });


    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: 'No se pudo crear el usuario'
        }, error);
    }
};
export const loginUser = async (req, res) => {
    try {
        const existingUser = await getUserLogin(req.body.usuario, req.body.password);
        if (!existingUser) {
            return res.status(401).json({
                message: 'usuario o contraseña incorrecta',
            });
        }
        console.log(existingUser.id);
        const token = await createJWT({ id: existingUser.id });
        return res.status(200).json({
            message: 'Usuario logueado',
            token: token.token
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: 'No se pudo loguear el usuario'
        });
    }
};

export const getUserInfoByToken = async (req, res, next) => {
    try {
        const token = req.headers.authorization;
    if (!token) {
         return res.status(404).json({
             message: 'No hay token'
         })
        }
    const { id } = await verifyJWT(token);
    const user = await findOneUserbyId(id);
    if (!user) {
        return res.status(404).json({
            message: 'Usuario no encontrado'
        });
    }
    next();
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: 'No se pudo obtener el usuario'
        });
        
    }
}

export const forgotPassword = async (req, res) => {
    const existingUser = await findOneUser(req.body.dni);
    if (!existingUser) {
        return res.status(404).json({
            message: 'Usuario no encontrado'
        });
    }
    else if (existingUser.email != req.body.email) {
        return res.status(400).json({
            message: 'El email no coincide con el email del usuario',
        })
    }

    const token = await createJWT({ id: existingUser.id });
    //send email
    const sendEmail = await resendEmail(req.body.email, token);
    if (!sendEmail) {
        return res.status(400).json({
            message: "No se pudo enviar el email",
        });
    };
    return res.status(200).json({
        message: "Email enviado",
    });
};

export const resetForgotPassword = async (req, res) => {
    try {
        const { id } = await verifyJWT(req.params.token);
        const updatePasswod = await updateUser(id, req.body.password);
        if (!updatePasswod) {
            return res.status(400).json({
                message: "No se pudo actualizar la contraseña",
            });
        };
        return res.status(200).json({
            message: "Contraseña actualizada",
        });


    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: 'Error: No se pudo restablecer la contraseña'
        })

    };
}; 