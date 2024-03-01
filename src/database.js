const { Sequelize } = require('sequelize');

const sequelize = new Sequelize( 'face-server', 'root', '', {
    host: 'localhost',
    dialect: 'mariadb',
})

const testConnection = async () => {
    try{    
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    }catch(err){
        console.log(err)
    }
}



module.exports = {sequelize, testConnection};