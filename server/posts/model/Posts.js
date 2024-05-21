// Importação do Mongoose
const mongoose = require('mongoose');

// Modelo de Técnico
const PostsSchema = new mongoose.Schema({
    author: {
        ref: 'User',
        type: String,
        required: true,
        unique: true
    },
    picture: {
        type: String,
        required: true
    },
    picture_url: {
        type: String,
        required: true
    },
    likes: {
        type: Number,
        required: true,
        default: 0
    },
    comments: {
        type: Number,
        required: true,
        default: 0
    }
}, { timestamps: true }
);

const Posts = mongoose.model('Posts', PostsSchema);

// Exportação do Modelo
module.exports = Posts;