const mongoose = require("mongoose");
const { Schema } = mongoose;

const tecnicoSchema = new Schema({
    nomeTecnico: {
        type: String,
        required: true
    },
    emailTecnico: {
        type: String,
        unique: true,
        required: true
    },
    senhaTecnico: {
        type: String,
        required: true
    },
    cnpj: {
        type: String,
        required: true
    },
    dataNascimento: {
        type: String,
        required: true
    },
    telefoneTecnico: {
        type: String,
        required: true
    },
    nomeNegocio: {
        type: String,
        required: true
    },
    endereco: {
        type: String,
        required: true
    },
    especializacao: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['user', 'tecnico'],
        default: 'tecnico',
        required: true
    },
    profilePicture: {
        type: String,
        default:
            'https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg',
    },
}, { minimize: false });

const Tecnico = mongoose.model("Tecnico", tecnicoSchema);

module.exports = Tecnico;
