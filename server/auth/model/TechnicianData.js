// Importação do Mongoose
const mongoose = require('mongoose');

// Modelo de Técnico
const technicianDataSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        unique: true
    },
    CNPJ: {
        type: String,
        required: true,
        unique: true
    },
    business_name: {
        type: String,
        required: true
    },
    specialization: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        default: 0
    }
});

const TechnicianData = mongoose.model('TechnicianData', technicianDataSchema);

// Exportação do Modelo
module.exports = TechnicianData;