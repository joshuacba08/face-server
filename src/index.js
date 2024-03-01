const app = require('./app'); // Importo app desde app.js
const { testConnection } = require('./database'); // Importo testConnection desde database.js
testConnection(); // Ejecuto la función testConnection


// Inicializo el servidor en el puerto 3000
app.listen(3000, () => {
    console.log('Servidor corriendo en el puerto 3000');
});


