import { Router } from 'express';
import {createOrder, failure, pending, receiveWebhook, success} from '../controllers/payment.controllers.js';
import { getUserInfoToken } from '../middlewares/getUser.js';
const payMentRoutes = Router();

payMentRoutes.use(getUserInfoToken);

//routes para mercadoPago
payMentRoutes.post('/createOrder',createOrder );
payMentRoutes.get('/success', success);
payMentRoutes.get('/failure', failure);
payMentRoutes.get('/pending', pending);
payMentRoutes.post('/webhook', receiveWebhook );


export { payMentRoutes };   