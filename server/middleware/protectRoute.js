const jwt = require('jsonwebtoken');
require('dotenv').config();
const User = require('../auth/model/User');

const protectRoute = async (req, res, next) => {
    try {
        const token = req.cookies.jwt;

        if(!token){
            return res.status(401).json({ msg: 'Não Autorizado - Token inexistente' });
        };

        const decoded = jwt.verify(token, process.env.SECRET);
        
        if(!decoded){
            return res.status(401).json({ msg: 'Não Autorizado - Token inválido' });
        };

        const user = await User.findById(decoded.userId).select('-password');

        if(!user){
            return res.status(404).json({ msg: 'Usuário inexistente' });
        };

        req.user = user;
        next();

    } catch (error) {
        res.status(500).json({ msg: error.message });
    };
};

module.exports = protectRoute;