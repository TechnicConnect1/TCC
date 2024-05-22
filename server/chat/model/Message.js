const mongoose = require('mongoose');

const messageSchema = mongoose.Schema({
    senderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        ref: 'Technician',
        required: true
    },
    receiverId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        ref: 'Technician',
        required: true
    },
    message: {
        type: String,
        required: true
    }
}, { timestamps: true }
);

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;