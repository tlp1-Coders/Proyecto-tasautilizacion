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
      periodoDeuda: {
        type: DataTypes.STRING,
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
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
      },
      deletedAt: {
        type: DataTypes.DATE,
        allowNull: true
      }
    },
      {
        createdAt: true,
        updatedAt: true,
        deletedAt: true,
        tableName: 'debts'
});

