const express=require('express');
const morgan=require('morgan');
const cors=require('cors');
const helmet=require('helmet');
const dotenv=require('dotenv');
const{sequelize}=require('./database/db');

const app=express();
//variables de entorno
dotenv.config({path:'./.env'});
const port=process.env.PORT|| 5000;

// Middlewares
app.use(cors());
app.use(helmet({
    contentSecurityPolicy: false
}));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Archivos estáticos
app.use(express.static(__dirname + '/public'));
// Configuración de motor de plantillas EJS
app.set('view engine', 'ejs');

// Conexión a base de datos
sequelize.authenticate()
    .then(() => console.log('Conexión a base de datos exitosa'))
    .catch((error) => console.log('Error al conectar a base de datos', error));


//routes
app.use('/',require('./routes/app.routes'));

app.listen(port,()=>{console.log(`servidor corriendo en http://localhost:${port}`)});