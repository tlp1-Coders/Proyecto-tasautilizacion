const routes=require('express').Router();
const controllers=require('../controllers/controllers');

routes.get('/',controllers.vistaPrincipal);
routes.get('/consultas',controllers.vistaConsulta);
routes.get('/pagos',controllers.vistaPagos);
routes.get('/login',controllers.vistaLogin);
routes.get('/registro',controllers.vistaRegistro);


module.exports = routes;