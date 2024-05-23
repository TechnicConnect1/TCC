const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
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
    modeloAparelho: {
        type: String,
        required: true
    },
    telefone:{
        type: String,
        required: true
    },
    profilePicture: {
        type: String,
        default:
            'https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg',
    },
    role: {
        type: String,
        enum: ['user', 'tecnico'],
        default: 'user'
    }
}, { minimize: false });

const userModel = mongoose.models.user || mongoose.model("User", userSchema);

module.exports = userModel;
