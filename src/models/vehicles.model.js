import { sequelize } from "../db.js";
import { DataTypes } from "sequelize";


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
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
    },
    deletedAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    // Other model options go here
    createdAt: true,
    updatedAt: true,
    deletedAt: false,
    tableName: "vehicles",
  }
);

Vehicles.sync({ remplace: true }).then(() => {
  console.log("Vehicles table created");
});

