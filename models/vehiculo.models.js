const { sequelize, DataTypes } = require("../database/db");

const users = require('./usuario.models');

const Vehiculos = sequelize.define("vehiculos", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  ID_de_Contribuyente: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  Tipo_de_Vehículo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Dominio: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  detalles: {
    type: DataTypes.STRING,
    allowNull: false,
  }
});

Vehiculos.sync({ force: false }).then(() => {
  console.log("Tabla de Vehiculos creada");
});


// users.hasMany(Vehiculos);
// Vehiculos.belongsTo(users);

console.log('Vehiculos.sync');
module.exports = Vehiculos;
