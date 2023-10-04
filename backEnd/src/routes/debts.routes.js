import { Router } from 'express';
import { getDebtbyid } from '../controllers/debts.controllers.js';

const debtsRoutes = Router();


debtsRoutes.get('/:id', getDebtbyid)


export default debtsRoutes