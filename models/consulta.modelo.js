const { sequelize, DataTypes } = require("../database/db");
const users = require('./usuario.models');
const vehiculos = require('./vehiculo.models');

const deudas = sequelize.define('deudas', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  id_de_Vehiculo: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  monto_deuda: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  Estado_Deuda: {
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
    // Other model options go here
    createdAt: true,
    updatedAt: true,
    deletedAt: true,
    tableName: 'deudas'
  })

deudas.sync({ force: false }).then(() => {
  console.log('Tabla de deudas creada');
});

// Relación uno a muchos con el modelo de Vehiculos
users.hasMany(vehiculos, {
  foreignKey: 'ID_de_Contribuyente'
});


vehiculos.belongsTo(users, {
  foreignKey: 'ID_de_Contribuyente'
});

// Relación uno a muchos con el modelo de Deudas
vehiculos.hasMany(deudas, {
  foreignKey: 'id_de_Vehiculo'
})

deudas.belongsTo(vehiculos, {
  foreignKey: 'id_de_Vehiculo'
});


module.exports = deudas;