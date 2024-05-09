// Importação do Mongoose
const mongoose = require('mongoose');

// Modelo de Verificação de Usuário
const EmailOTP = mongoose.model('UserOTP', {
    userId: {
        type:  mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: false,
        index: true
    },
    techId: {
        type:  mongoose.Schema.Types.ObjectId,
        ref: 'Technician',
        required: false,
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