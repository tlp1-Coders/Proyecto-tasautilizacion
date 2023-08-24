const { sequelize, DataTypes } = require('../database/db');


const users=sequelize.define('users',{
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
},
  nombreApellido:{
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
    allowNull: true
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
    deletedAt: true,
    tableName: 'users'
});

// Crear tabla si no existe
users.sync({force:false}).then(() => {
  console.log('Tabla de usuarios creada');
});



console.log('users.sync');
module.exports = users;

