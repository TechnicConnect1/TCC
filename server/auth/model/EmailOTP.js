// Importação do Mongoose
const mongoose = require('mongoose');

// Modelo de Verificação de Usuário
const emailOTPSchema = mongoose.Schema({
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

const EmailOTP = mongoose.model('UserOTP', emailOTPSchema);

// Exportação do Modelo
module.exports = EmailOTP;