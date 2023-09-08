import { createNewUser, findOneUser, getUserLogin } from "../models/users.model.js";
import { vincular } from "./vincular.js";

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
        if(! await vincular(req.body.dni, user.id)){
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
        }, error);
    }
};
export const loginUser = async (req, res) => {
try {
    const existingUser= await getUserLogin(req.body.usuario, req.body.password);
    if (!existingUser){
        return res.status(400).json({
            message: 'usuario o contraseña incorrecta',
        });
    }
    return res.status(200).json({
        message: 'Usuario logueado',
    });
} catch (error) {
    console.log(error);
    return res.status(500).json({
        message: 'No se pudo loguear el usuario'
    }, error);
}
};