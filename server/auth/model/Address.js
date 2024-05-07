// Importação do Mongoose
const mongoose = require('mongoose');

//Modelo de endereço
const Address = mongoose.model('Address', {
    cep: {
        type: String,
        required: true
    },
    street: {
        type: String,
        required: true
    },
    neighborhood: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    number: {
        type: String,
        required: true
    }
});

// Exportação do Modelo
module.exports = Address;