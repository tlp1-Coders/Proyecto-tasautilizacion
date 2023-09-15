import { findOneUserbyId } from '../models/users.model.js';
import {verifyJWT} from '../helpers/jwt.js';

export const getUser = async (req, res, next) => {
  const token = req.headers.authorization

  if (!token) {
    return res.sendStatus(404)
  }

  const { id } = await verifyJWT(token);
  const user = await findOneUserbyId(id);
  if (!user) {
    return res.status(404).json({
      message: 'Usuario no encontrado'
    });
  }
  req.user = user
  next()
}
