const Conversation = require('../../model/Conversation');
const User = require('../../../auth/model/User');
const Message = require('../../model/Message');
const { getReceiverSocketId, io } = require('../../socket/socket');

exports.sendMessage = async (req, res) => {
    try {
        const { message } = req.body;
        const { id: receiverId } = req.params;
        const senderId = req.user._id;

        let conversation = await Conversation.findOne({
            participants: { $all: [senderId, receiverId] },
        });

        if (!conversation) {
            conversation = await Conversation.create({
                participants: [senderId, receiverId],
                messages: []
            });
        };

        const newMessage = new Message({ senderId, receiverId, message });

        if (newMessage) {
            conversation.message.push(newMessage._id);
        };

        await Promise.all([conversation.save(), newMessage.save()]);

        const receiverSocketId = getReceiverSocketId(receiverId);
        if (receiverSocketId) {
            io.to(receiverSocketId).emit('newMessage', newMessage);
        };

        res.status(201).json({ newMessage });

    } catch (error) {
        res.status(500).json({ msg: error.message });
    };
};

exports.getMessages = async (req, res) => {
    try {
        const { id: userToChatId } = req.params;
        const senderId = req.user._id;

        const conversation = await Conversation.findOne({
            participants: { $all: [senderId, userToChatId] }
        }).populate('messages');

        if (!conversation) {
            return res.status(200).json([]);
        };

        const messages = conversation.messages;

        res.status(200).json(messages);

    } catch (error) {
        res.status(500).json({ msg: error.message });
    };
};

exports.getUsersFilter = async (req, res) => {
    try {
        const loggedInUser = req.user._id;
        const filteredUsers = User.find({ _id: { $ne: loggedInUser} }).select('-password');

        res.status(200).json({ filteredUsers })
    } catch (error) {
        res.status(500).json({ msg: error.message });
    };
};