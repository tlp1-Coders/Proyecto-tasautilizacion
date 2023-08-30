import express from 'express';
import morgan from 'morgan';
import 'dotenv/config';
import { connectDB } from './db.js';
import { relations } from './models/relations.js';

const app = express();
const port = process.env.PORT || 3000;

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(morgan('dev'));


connectDB();
relations();
app.listen(port, () => {
    console.log(`Server on http://localhost:${port}`);
})
