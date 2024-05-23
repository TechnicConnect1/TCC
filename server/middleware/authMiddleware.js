const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");
const tecnicoModel = require("../models/tecnicoModel");
const errorHandler = require("../utils/errorHandler");

const verifyToken = async (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return next(errorHandler(401, 'Você não está autenticado!'));
    }

    const token = authHeader.split(' ')[1];

    jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
        if (err) {
            return next(errorHandler(403, 'Token inválido!'));
        }

        let user = await userModel.findById(decoded.id);
        if (!user) {
            user = await tecnicoModel.findById(decoded.id);
        }

        if (!user) {
            return next(errorHandler(404, 'Usuário não encontrado!'));
        }

        req.user = user;
        next();
    });
};

module.exports = verifyToken;
