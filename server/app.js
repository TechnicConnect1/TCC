// Importações
require('dotenv').config();
const app = require('./config/expressConfig');
const mongoose = require('mongoose');
const { server } = require('./chat/socket/socket.js');

//Dados DB
const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASS;

// Confirmação da conexão
mongoose.connect(`mongodb+srv://${dbUser}:${dbPass}@cluster0.gpcdo6p.mongodb.net/`)
    .then(
        server.listen(process.env.API_PORT, () => {
            console.log(`*-------------------------------------*\n    API Inicializada com sucesso!\n           Database Online!    \n*-------------------------------------*`);
        }))
    .catch((error) => {
        console.log(error);
    });