const users=require('../models/usuario.models');
const bcrypt = require('bcrypt');
const { Op } = require("sequelize");    
exports.newUser=async(req,res)=>{
    const{ nombreApellido,
        dni,
        email,
        usuario,
        password,
        pin,}=req.body;
    try {
        // Se verifica si el usuario ya existe
        const existeUsuario = await users.findOne({
            where: {
                email,
                dni
            }
        });


        if (existeUsuario) {
            throw ({ // throw siempre debe ejecutarse dentro de un try catch
                status: 400,
                message: 'El usuario ya existe',
            })
        };

        const nuevoUsuario = new users({
            nombreApellido,
            dni,
            email,
            usuario,
            password,
            pin,
        });

        // Encriptar contraseña
        const salt = await bcrypt.genSalt(10);
        nuevoUsuario.password = await bcrypt.hash(password, salt);

        // Guardar usuario en la base de datos
        const usuarioCreado = await nuevoUsuario.save();

        if (!usuarioCreado) {
            throw ({
                message: 'Error al crear el usuario',
            })
        }

        // Se retorna la respuesta al cliente
        return res.status(201).json({
            message: 'Usuario creado exitosamente',
        });
    } catch (error) {
        console.log(error);
        return res.status(error.status || 500).json({
            message: error.message || 'Error al crear el usuario',
        });
    }
};

exports.login=async(req,res)=>{
    const {usuario, password } = req.body;

    try {
        // Verificar si el email existe
        const existeUsuario = await users.findOne({
            where:{
                    [Op.or]:[
                        {usuario},
                        {email:usuario}
                    ]
             }
        });
        
        if(!existeUsuario) {
            return res.status(400).json({
                message: 'El Usuario no existe',
            });
        }

        // Verificar si el usuario está activo
        // if(!existeUsuario.estado) {
        //     return res.status(400).json({
        //         message: 'El usuario no está activo',
        //     });
        // }

        // Verificar la contraseña
        const passwordValido = bcrypt.compareSync(password, existeUsuario.password);

        if(!passwordValido) {
            return res.status(400).json({
                message: 'La contraseña no es válida',
            });
        }
        res.json({
            message: 'Login correcto',
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Error al iniciar sesión',
        });
    }
}

