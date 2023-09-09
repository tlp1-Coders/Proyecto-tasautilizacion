import  {sequelize}  from '../db.js';
import { DataTypes } from 'sequelize';

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

