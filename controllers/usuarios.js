const users=require('../models/usuario.models');

exports.newUser=async(req,res)=>{
    const{nombre_apellido,dni,email,user,password,pin}=req.body;

    try {
        const existeUsuario=await user.finOne({
            where:{
                dni,
                
            }
        });
    } catch (error) {
        
    };

    if (existeUsuario) {
        throw ({ 
            status: 400,
            message: 'El usuario ya existe',
        })
    };
    const nuevoUsuario = new users({
        username,
        email,
        password,
    });
}