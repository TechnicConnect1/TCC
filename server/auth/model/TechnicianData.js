// Importação do Mongoose
const mongoose = require('mongoose');

// Modelo de Técnico
const technicianDataSchema = new mongoose.Schema({
    CNPJ: {
        type: String,
        required: true,
        unique: true
    },
    specialization: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    }
});

const Technician = mongoose.model('TechnicianData', technicianDataSchema);

// Exportação do Modelo
module.exports = Technician;