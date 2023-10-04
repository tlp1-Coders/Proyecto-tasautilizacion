import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import 'dotenv/config';
import { connectDB } from './db.js';
import { relations } from './models/relations.js';
import authRouter from './routes/auth.routes.js';
import vehiclesRouter from './routes/vehicles.routes.js';
import { payMentRoutes } from './routes/payment.routes.js';
import debtsRoutes from './routes/debts.routes.js';


const app = express();
const port = process.env.PORT || 3000;

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(morgan('dev'));
app.use(cors());


app.use('/api/auth', authRouter);
app.use('/api/vehicles', vehiclesRouter);
app.use('/api/debts', debtsRoutes);
// app.use('/mp',payMentRoutes)
connectDB();
relations();


app.listen(port, () => {
    console.log(`Server on http://localhost:${port}`);
})
