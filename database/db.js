const { Sequelize, Model, DataTypes } = require('sequelize');

const sequelize = new Sequelize('tareadb', 'root', '', {
    host: 'localhost',
    dialect: 'mysql' 
});

module.exports = {
    sequelize,
    DataTypes,
    Model
};