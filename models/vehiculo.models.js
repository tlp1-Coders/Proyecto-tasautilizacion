const { sequelize, DataTypes } = require("../database/db");


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
  Tipo_de_Vehiculo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Dominio: {
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
},{
  // Other model options go here
  createdAt: true,
  updatedAt: true,
  deletedAt: false,
  tableName: 'vehiculos'
});

Vehiculos.sync({ force: false }).then(() => {
  console.log("Tabla de Vehiculos creada");
});


// users.hasMany(Vehiculos);
// Vehiculos.belongsTo(users);

module.exports = Vehiculos;
