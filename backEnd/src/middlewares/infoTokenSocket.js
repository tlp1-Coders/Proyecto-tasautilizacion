import { findOneUserbyId } from "../models/users.model.js";
import { verifyJWT } from "../helpers/jwt.js";
import jwt from "jsonwebtoken";

export const socketHandShake = async (socket, next) => {
    try {
        const token = socket.handshake.auth.token;
        if (!token) {
            return next(new Error('Inicie sesión primero'));
        }
        const { id } = await verifyJWT(token);
        if (!id) {
            return next(new Error('Token inválido'));
        }
        const user = await findOneUserbyId(id);
        if (!user) {
            return next(new Error('Usuario no encontrado'));
        }
        socket.user = user;
        next();
    } catch (error) {
        if (error instanceof jwt.TokenExpiredError) {
            return next(new Error('Token expirado, inicie sesión nuevamente'));
        }
        return next(new Error('No se pudo obtener el usuario'));
    }
}