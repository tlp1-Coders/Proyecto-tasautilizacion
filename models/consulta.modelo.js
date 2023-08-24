const { sequelize, DataTypes } = require("../database/db");


const deudas=sequelize.define('deudas',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_de_Vehículo:{
        type:DataTypes.STRING,
        allowNull:false
    },
    monto_deuda:{
        type:DataTypes.FLOAT,
        allowNull:false
    },
    Estado_Deuda:{
        type:DataTypes.BOOLEAN,
        allowNull:false
    }
})

deudas.sync({ force: false }).then(() => {
    console.log('Tabla de deudas creada');
});

module.exports= deudas