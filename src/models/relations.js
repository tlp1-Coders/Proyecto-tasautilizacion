import { Debts } from "./debts.model.js";
import { Users } from "./users.model.js";
import { Vehicles } from "./Vehicules.model.js";

export const relations=()=>{
    Users.hasMany(Vehicles,{
        foreignKey: 'dniUser'
    });
    Vehicles.belongsTo(Users,{
        foreignKey: 'dniUser'
    });
    
    Vehicles.hasMany(Debts,{
        foreignKey: 'idVehiculo'
    });
    Debts.belongsTo(Vehicles,{
        foreignKey: 'idVehiculo'
    });
};
