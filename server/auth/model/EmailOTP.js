// Importação do Mongoose
const mongoose = require('mongoose');

// Modelo de Verificação de Usuário
const EmailOTP = mongoose.model('UserOTP', {
    email: {
        type: String,
        required: true,
        index: true
    },
    uniqueString: {
        type: String,
        required: true
    },
    createdAt: Date,
    expiresAt: {
        type: Date,
        expires: 3600
    }
});

// Exportação do Modelo
module.exports = EmailOTP;