const User = require('../auth/model/User');

exports.getUsersForSideBar = async (req, res) => {
    try {
        const loggedInUserId = req.user._id;
        const filteredUsers = await Promise.all([User.find({ _id: { $ne: loggedInUserId } })]).select('-password');

        res.status(200).json(filteredUsers);
    } catch (error) {
        res.status(500).json({ msg: error.message })
    };
};