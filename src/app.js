import express from 'express';
import morgan from 'morgan';
import 'dotenv/config';
import { connectDB } from './db.js';
import { relations } from './models/relations.js';
import usersRouter from './routes/users.routes.js';

const app = express();
const port = process.env.PORT || 3000;

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(morgan('dev'));


app.use('/api',usersRouter);
const bbdd =async()=>{
    
    await connectDB();
    relations();
}
bbdd();

app.listen(port, () => {
    console.log(`Server on http://localhost:${port}`);
})
