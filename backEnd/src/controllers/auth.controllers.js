import { createJWT, verifyJWT } from "../helpers/jwt.js";
import { createNewUser, findOneUser, findOneUserbyId, getUserLogin } from "../models/users.model.js";
import { vincular } from "./vincular.js";
import jwt from 'jsonwebtoken';

export const newUser = async (req, res) => {
    try {
        const existingUser= await findOneUser(req.body.dni);
        if (existingUser){
            return res.status(400).json({
                message: "El usuario ya existe",
            });
        }
        const user = await createNewUser(req.body);
        if  (!user){
            return res.status(400).json({
                message: "No se pudo crear el usuario",
            });
        }
        const token = await createJWT({id: user.id});
        if(! await vincular(req.body.dni, user.id)){
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
    const existingUser= await getUserLogin(req.body.usuario, req.body.password);
    if (!existingUser){
        return res.status(401).json({
            message: 'usuario o contraseña incorrecta',
        });
    }
    console.log(existingUser.id);
    const token = await createJWT({id: existingUser.id});
    return res.status(200).json({
        message: 'Usuario logueado',
        token:token.token
    });
} catch (error) {
    console.log(error);
    return res.status(500).json({
        message: 'No se pudo loguear el usuario'
    });
}
};

export const getUserInfoByToken = async (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
        return res.sendStatus(404);
    }
    const { id } = await verifyJWT(token);
    const user = await findOneUserbyId(id);
    if (!user) {
        return res.status(404).json({
            message: 'Usuario no encontrado'
        });
    }
    next();
}