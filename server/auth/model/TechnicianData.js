// Importação do Mongoose
const mongoose = require('mongoose');

// Modelo de Técnico
const technicianDataSchema = new mongoose.Schema({
    CNPJ: {
        ref: 'User',
        type: String,
        unique: true
    },
    specialization: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true,
        default: 0
    }
});

const TechnicianData = mongoose.model('TechnicianData', technicianDataSchema);

// Exportação do Modelo
module.exports = TechnicianData;