import { findOneUserbyId } from '../models/users.model.js';
import {verifyJWT} from '../helpers/jwt.js';
import  jwt  from 'jsonwebtoken';

export const getUserInfoToken = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(404).json({
            message: 'Inicie sesión primero'
        })
    }else{
        
        const { id } = await verifyJWT(token);
        if (!id) {
            return res.status(400).json({
                message: 'Token inválido'
            })
        }
        const user = await findOneUserbyId(id);
        if (!user) {
            return res.status(404).json({
                message: 'Usuario no encontrado'
            });
        }
        req.user = user
        next();
    }

} catch (error) {
  if (error instanceof jwt.TokenExpiredError) {
    return res.status(401).json({
      message: "Token expirado, inicie sesión nuevamente",
    });
  }
  return res.status(500).json({
    message: "No se pudo obtener el usuario",
  });
}
}
