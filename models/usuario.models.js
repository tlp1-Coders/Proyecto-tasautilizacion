const { sequelize, DataTypes } = require('../database/db');


const users=sequelize.define('users',{
  nombre_apellido:{
    type:DataTypes.STRING,
    allowNull: false
  },
  usuario:{
    type:DataTypes.STRING,
    allowNull: false
  },
  dni:{
    type:DataTypes.NUMBER,
    allowNull: false
  },
  email:{
    type:DataTypes.STRING,
    allowNull: false
  },
  password:{
    type:DataTypes.STRING,
    allowNull: false
  },
  pin:{
    type:DataTypes.NUMBER,
    allowNull: false
  },
  foto:{
    type:DataTypes.BLOB,
    allowNull: false
  },
},{
    // Other model options go here
    createdAt: true,
    updatedAt: true,
    deletedAt: true,
    tableName: 'users'
});

// Crear tabla si no existe
users.sync();

module.exports = users;

