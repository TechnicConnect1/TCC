// Importação do Mongoose
const mongoose = require('mongoose');

// Modelo de Verificação de Usuário
const EmailOTP = mongoose.model('UserOTP', {
    email: {
        type:  mongoose.Schema.Types.ObjectId,
        required: true,
        index: true
    },
    uniqueString: {
        type: String,
        required: true
    },
    createdAt: Date,
    expiresAt: Date
});

// Exportação do Modelo
module.exports = EmailOTP;