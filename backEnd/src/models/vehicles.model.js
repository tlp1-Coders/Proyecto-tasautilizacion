import { sequelize } from "../db.js";
import { DataTypes, Op } from "sequelize";
import { Users } from './users.model.js';
import { Debts } from './debts.model.js';

export const Vehicles = sequelize.define("vehicles",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    idUser: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    dniUser: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    tipoVehiculo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dominio: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    detalles: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    timestamps: true,
  },
  {
    // Other model options go here
    createdAt: true,
    updatedAt: true,
    deletedAt: false,
    tableName: "vehicles",
  }
);



export const getOneVehicleForUser = async (dni) => {
  try {
    const existingVehicle = await Vehicles.findOne({
      where: {
        dniUser: dni
      }
    })
    if (!existingVehicle) {
      return false;
    }
    return existingVehicle;
  } catch (error) {
    console.log(error);
    return false;
  }
};
export const updateVehicleForUser = async (existingVehicle,id) => {
  console.log();
  try {
    const newdate= await existingVehicle.update({
      idUser: id
    });
    if (!newdate) {
      return false;
    }
    return true;

  } catch (error) {
    console.log(error);
    return false;
  }
};
export const getVehicleForConsult = async (valor, id) => {
  console.log(valor);
  try {
    const vehicle = await Vehicles.findAll({
      where: {
        [Op.or]: [
          { dominio: valor },
          { dniUser: valor }
        ]
      },
      attributes: ['id',  'idUser', 'tipoVehiculo', 'dominio', 'detalles'],
      include: [
        {
          model: Users,
          attributes: ['nombreApellido', 'usuario', 'dni', 'email'],
        },
        {
          model: Debts,
          where: {
            estadoDeuda: true
          },
          attributes: ['id','periodoDeuda','year', 'montoDeuda', 'estadoDeuda'],
        }
      ]
    });
    if(!vehicle){
      return false
    }
    return vehicle;
  } catch (error) {
    console.log(error);
    return false;
  };
};

export const getVehicleNotUser = async (valor) => {
  try {
    const vehicle = await Vehicles.findOne({
      where: {
        [Op.or]: [
          { dominio: valor },
        ]
      },
      attributes: ['id',  'idUser', 'tipoVehiculo', 'dominio', 'detalles'],
      include: [
        {
          model: Debts,
          attributes: [ 'estadoDeuda'],
        }
      ]
    });
  
    if(!vehicle){
      return false
    }
    return vehicle;
  } catch (error) {
    console.log(error);
    return false;
  }
}