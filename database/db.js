const { Sequelize, Model, DataTypes } = require('sequelize');

const sequelize = new Sequelize('tasa_utilizacion', 'root', '', {
    host: 'localhost',
    dialect: 'mysql' 
});

module.exports = {
    sequelize,
    DataTypes,
    Model
};