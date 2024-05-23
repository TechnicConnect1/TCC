const mongoose = require('mongoose')
const dotenv = require('dotenv').config();

// DATABASE CONEXÃO
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Banco de dados conectado");
    } catch (error) {
        console.error("Banco de dados não conectado", err);
    }
}

module.exports = connectDB