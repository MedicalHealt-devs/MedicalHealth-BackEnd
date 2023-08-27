//* Configuracion de express
const express = require('express');
const { dbConnection } = require('./database/config');
const cors = require('cors');
const routes = require('./routes')
require('dotenv').config();

//* Crear el servidor de express 
const app = express();

//* Base de datos
dbConnection();

//* configuration CORS
app.use(cors())

//* Directorio publico
app.use( express.static('public') )

//* Lectura y parceo del body
app.use(express.json())

//* Rutas
app.use('/api/v1/', routes)

// TODO: crud: eventos

//* Escuchar peticiones
app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en el puerto ${4000}`);
})