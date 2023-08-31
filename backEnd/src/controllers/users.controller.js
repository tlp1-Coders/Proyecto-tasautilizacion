import {Users} from '../models/users.model.js';
import bcrypt from 'bcrypt';
import { vincular } from './vincular.js';

export const createUser = async (req, res) => {
    const{
        nombreApellido,
        usuario,
        dni,
        email,
        password,
        pin
    }=req.body;
    try {
      const existingUser = await Users.findOne({
        where: {
          dni,
        },
      });
      if (existingUser) {
        return res.status(400).json({
          message: "El usuario ya existe",
        });
      }
      const passwordHash = await bcrypt.hash(password, 10);
      const user = await Users.create({
        nombreApellido,
        usuario,
        dni,
        email,
        password: passwordHash,
        pin,
      });
      if (!user) {
        return res.status(400).json({
          message: "No se pudo crear el usuario",
        });
      }
      if (! await vincular(dni, user.id)){
        return res.status(400).json({
          message: "No se pudo vincular el usuario",
        });
      };
      
      return res.status(201).json({
        message: "Usuario creado",
      });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: 'No se pudo crear el usuario'
        })
    }
};



export const loginUser = async (req, res) => {
    const{
        usuario,
        password
    }=req.body;
    try {
        const user = await Users.findOne({
            where: {
                usuario
            }
        });
        if(!user){
            return res.status(400).json({
                message: 'El usuario no existe'
            });
        };
        const match = await bcrypt.compare(password, user.passwordHash);
        if(!match){
            return res.status(400).json({
                message: 'Contraseña incorrecta'
            });
        };
        return res.status(200).json({
            message: 'Usuario logueado'
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: 'No se pudo loguear el usuario'
        });
    }
};

