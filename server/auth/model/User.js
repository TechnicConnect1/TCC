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
        type: Date,
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
    user_type: {
        type: String,
        enum: ['User', 'Technician'],
        default: 'User'
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
    }
});

const User = mongoose.model('User', userSchema);

// Exportação do Modelo
module.exports = User;
