const routes=require('express').Router();
const controllers=require('../controllers/controllers');

routes.get('/',controllers.vistaGet);
routes.post('/',controllers.vistaPost);
routes.put('/',controllers.vistaPut);
routes.delete('/',controllers.vistaDelete);

module.exports = routes;