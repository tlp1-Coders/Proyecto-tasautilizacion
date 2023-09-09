import { Router } from 'express';
import {createOrder, failure, pending, receiveWebhook, success} from '../controllers/payment.controllers.js';
const payMentRoutes = Router();
//routes para mercadoPago
payMentRoutes.post('/createOrder',createOrder );
payMentRoutes.get('/success', success);
payMentRoutes.get('/failure', failure);
payMentRoutes.get('/pending', pending);
payMentRoutes.post('/webhook', receiveWebhook );


export { payMentRoutes };   