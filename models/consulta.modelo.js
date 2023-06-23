const { sequelize, DataTypes } = require("../database/db");


const consulta=sequelize.define('consulta',{
    Dominio:{
        type:DataTypes.STRING,
        allowNull:false
    },
    tipo_vehiculo:{
        type:DataTypes.STRING,
        allowNull:false
    },
    deuda:{
        type:DataTypes.BOOLEAN,
        allowNull:false
    },
    año:{
        type:DataTypes.DATE,
        allowNull:false
    },
    periodo_deuda:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    titular:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
})

consulta.sync();

module.exports= consulta