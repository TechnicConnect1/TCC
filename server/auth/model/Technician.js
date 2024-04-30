// Importação do Mongoose
const mongoose = require('mongoose');

// Modelo de Técnico
const Technician = mongoose.model('Technician', {
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
    specialization: {
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
    },
    user_picture: {
        type: String,
        required: true
    },
    user_picture_url: {
        type: String,
        required: true
    },
    Address: {
        type:  mongoose.Schema.Types.ObjectId,
        ref: 'Address',
        required: true,
    }
});

// Exportação do Modelo
module.exports = Technician;