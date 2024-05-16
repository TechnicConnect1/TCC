const User = require('../auth/model/User');
const Technician = require('../auth/model/Technician');

exports.getUsersForSideBar = async (req, res) => {
    try {
        const loggedInUserId = req.technician._id;
        const filteredUsers = await Promise.all([Technician.find({ _id: { $ne: loggedInUserId } }), User.find({ _id: { $ne: loggedInUserId } })]).select('-password');

        res.status(200).json(filteredUsers);
    } catch (error) {
        res.status(500).json({ msg: error.message })
    };
};