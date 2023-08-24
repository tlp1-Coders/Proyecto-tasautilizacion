const Vehiculos = require('../models/vehiculo.models');
const Contribuyente=require('../models/usuario.models');
const  Deudas= require('../models/consulta.modelo');
const { Op } = require("sequelize"); 

exports.consultaDeuda= async(req,res) =>{
    const valorBusqueda = req.body.valor;

  try {
    const vehiculo = await Vehiculos.findOne({
      where: {
        [Op.or]: [
          { Dominio: valorBusqueda }, // Cambia al atributo correcto si es un número
          { '$Contribuyente.dni$': valorBusqueda }
        ]
      },
    });
    console.log(vehiculo)
    if (vehiculo) {
      res.json(vehiculo.toJSON());
    } else {
      res.status(404).json({ mensaje: 'No se encontró ningún resultado.' });
    }
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al realizar la consulta.' });
  }
};