import {  getVehicleForConsult } from '../models/vehicles.model.js';
export const getVehicle = async (req, res) => {
    try {
        const vehicle= await getVehicleForConsult(req.body.valor||req.user.dni);
        if (!vehicle){
            return res.status(404).json({
                message: 'No se encontro el vehiculo',
            });
        };
        return res.status(200).json({vehicle})
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: `No se pudo obtener el vehiculo, ${error.message}`
        });
    };       
};
