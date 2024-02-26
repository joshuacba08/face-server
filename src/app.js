// Import express
const express = require('express');

// Inicializo express y lo guardo en una constante llamada app
const app = express();

app.use(express.json()); // Middleware que nos permite recibir datos en formato JSON

// Defino mis grupos de rutas
app.use('/api/auth', require('./routes/auth.routes')); // Rutas de autenticación

module.exports = app; // Exporto app para poder usarlo en otros archivos

