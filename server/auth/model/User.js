// Importação do Mongoose
const mongoose = require('mongoose');

// Modelo de Usuário
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    contact: {
        type: String,
        required: true
    },
    birth_day: {
        type: String,
        required: true
    },
    device: {
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
        default: false
    },
    user_picture: {
        type: String,
        required: true
    },
    user_picture_url: {
        type: String,
        required: true
    },
    address: {
        cep: {
            type: String,
            required: true
        },
        street: {
            type: String,
        },
        neighborhood: {
            type: String,
        },
        city: {
            type: String,
        },
        state: {
            type: String,
        },
        number: {
            type: String,
            required: true
        }
    }
});

const User = mongoose.model('User', userSchema);

// Exportação do Modelo
module.exports = User;