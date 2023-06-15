const express=require('express');
const morgan=require('morgan');
const cors=require('cors');
const helmet=require('helmet');
const dotenv=require('dotenv');

const app=express();
//variables de entorno
dotenv.config({path:'./.env'});
const port=process.env.PORT;

// Middlewares
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Archivos estáticos
app.use(express.static(__dirname + '/public'));
// Configuración de motor de plantillas EJS
app.set('view engine', 'ejs');


//routes
app.use('/',require('./routes/app.routes'));

app.listen(port || 5000,()=>{console.log(`servidor corriendo en http://localhost:${port}`)});