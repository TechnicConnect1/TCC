const Conversation = require('../../model/Conversation');
const Message = require('../../model/Message');

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
                participants: { $all: [senderId, receiverId] }
            });
        };

        const newMessage = new Message({ senderId, receiverId, message });

        if (newMessage) {
            conversation.message.push(newMessage._id);
        };

        //Socket.io 

        await Promise.all([conversation.save(conversation), newMessage.save(newMessage)])

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

        if(!conversation){
            return res.status(200).json([]);
        };

        const messages = conversation.messages;

        res.status(200).json(messages);

    } catch (error) {
        res.status(500).json({ msg: error.message });
    };
};