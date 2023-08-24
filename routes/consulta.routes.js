const { consultaDeuda } = require('../controllers/consultas');

const routes=require('express').Router();

routes.post('/api/consulta', consultaDeuda)


module.exports = routes;