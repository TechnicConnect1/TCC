// Importação do Mongoose
const mongoose = require('mongoose');

// Modelo de Usuário
const Technician = mongoose.model('Technician', {
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    verified: {
        type: Boolean,
        defaultd: false
    }
});

// Exportação do Modelo Usuário
module.exports = Technician;