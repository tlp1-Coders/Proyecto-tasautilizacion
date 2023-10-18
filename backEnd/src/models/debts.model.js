import  {sequelize}  from '../db.js';
import { DataTypes } from 'sequelize';
import { Vehicles } from './vehicles.model.js';

export const Debts = sequelize.define('debts', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      idVehiculo: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      year: {
        type: DataTypes.INTEGER,
        allowNull: false  
      },
      periodoDeuda: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      montoDeuda: {
        type: DataTypes.FLOAT,
        allowNull: false
      },
      estadoDeuda: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      },

    },
    {
      timestamps: true
    },
      {
        createdAt: true,
        updatedAt: true,
        deletedAt: true,
        tableName: 'debts'
});

export const getDebt=async(id)=>{
    try {
        const existingDebt = await Debts.findByPk(id, {
          where:{
            estadoDeuda:true
          },
          include: [
            {
              model: Vehicles,
              attributes: ['tipoVehiculo', 'dominio', 'detalles'],
            }
          ]
        });
        if (!existingDebt) {
            return false;
        }
        return existingDebt;
    } catch (error) {
        console.log(error);
        return false;
    }
};

export const upDateDebt=async(id, debt)=>{
    try {
        const updatedDebt = await Debts.update({...debt}, {
            where: {
                id
            }
        });
        if (!updatedDebt) {
            return false;
        }
        return updatedDebt;
    } catch (error) {
        console.log(error);
        return false;
    }       
}