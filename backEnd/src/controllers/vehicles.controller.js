import { Debts } from '../models/debts.model.js';
import { Users } from '../models/users.model.js';
import { Vehicles } from '../models/vehicles.model.js';
import {Op} from 'sequelize';
export const getVehicle = async (req, res) => {
    const { valor } = req.body;
    try {
    const vehicle = await Vehicles.findOne({
        where: {
            [Op.or]: [
            {dominio:valor},
            {dniUser:valor}
        ]
        },
        include:[
            {
                model: Users,
                attributes: ['nombreApellido', 'usuario', 'dni', 'email'],   
            },
            {
                model: Debts,
                attributes: ['periodoDeuda', 'montoDeuda', 'estadoDeuda'],
            }
        ]
    });
    if (!vehicle) {
        return res.status(404).json({
            message: 'El vehiculo no existe'
        });
    }
    return res.status(200).json({
        vehicle
    })


    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Error'
        })
    }
};