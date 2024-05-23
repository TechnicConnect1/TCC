const userModel = require("../models/userModel");
const tecnicoModel = require("../models/tecnicoModel");
const bcrypt = require("bcrypt");

const getUserModel = async (id) => {
    let user = await userModel.findById(id);
    if (!user) {
        user = await tecnicoModel.findById(id);
    }
    return user;
};

const updateUser = async (req, res, next) => {
    if (req.user.id !== req.params.id) {
        return res.status(401).json({ success: false, message: 'Você só pode atualizar sua própria conta!' });
    }

    try {
        if (req.body.password) {
            req.body.password = await bcrypt.hash(req.body.password, 10);
        }

        const user = await getUserModel(req.params.id);
        if (!user) {
            return res.status(404).json({ success: false, message: 'Usuário não encontrado' });
        }

        const updatedUser = await user.constructor.findByIdAndUpdate(
            req.params.id,
            {
                $set: {
                    name: req.body.name,
                    email: req.body.email,
                    password: req.body.password,
                    telefone: req.body.telefone,
                    profilePicture: req.body.profilePicture
                }
            },
            { new: true }
        );

        const { password, ...rest } = updatedUser._doc;
        res.status(200).json(rest);
    } catch (error) {
        next(error);
    }
};

module.exports = {
    updateUser,
};
