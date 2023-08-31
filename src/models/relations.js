import { Debts } from "./debts.model.js";
import { Users } from "./users.model.js";
import { Vehicles } from "./vehicles.model.js";

export const relations=()=>{
    Users.hasMany(Vehicles,{
        foreignKey: 'idUser'
    })
    Vehicles.belongsTo(Users,{
        foreignKey: 'idUser'
    })
    
    Vehicles.hasMany(Debts,{
        foreignKey: 'idVehiculo'
    });
    Debts.belongsTo(Vehicles,{
        foreignKey: 'idVehiculo'
    });
};
