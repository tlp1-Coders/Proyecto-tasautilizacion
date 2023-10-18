import { Router } from 'express';
import { debtUpdate, getDebtbyid } from '../controllers/debts.controllers.js';

const debtsRoutes = Router();


debtsRoutes.get('/:id', getDebtbyid)
debtsRoutes.put('/', debtUpdate);


export default debtsRoutes