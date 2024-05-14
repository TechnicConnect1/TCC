const mongoose = require('mongoose');

const messageSchema = mongoose.Schema({
    senderId: {

    },
    receiverId: {

    },
    message: {

    }
}, { timestamps: true }
);

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;