import { getOneVehicleForUser, updateVehicleForUser } from '../models/vehicles.model.js';
export const vincular = async (dni, id) => {
    try {
        const existingVehicle = await getOneVehicleForUser(dni);
        if (!existingVehicle) {
            return false;
        }
       const updatedVehicle = await updateVehicleForUser(id);
        if (!updatedVehicle){
            return false;
        };
        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
};
