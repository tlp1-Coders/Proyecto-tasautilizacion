import { Vehicles } from '../models/vehicles.model.js';
export const vincular = async (dni, id) => {
    try {
        const existingVehicle = await Vehicles.findOne({
            where: {
                dniUser: dni
            }
        });
        if (!existingVehicle) {
            return false;
        }
        await existingVehicle.update({
            idUser: id
        });
        return true; 
    } catch (error) {
        console.log(error);
        return false;
    }
};
