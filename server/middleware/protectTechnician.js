const jwt = require('jsonwebtoken');
require('dotenv').config();
const Technician = require('../auth/model/Technician');

const protectTechnician = async (req, res, next) => {
    try {
        const token = req.cookies.jwt;

        if(!token){
            return res.status(401).json({ msg: 'Não Autorizado - Token inexistente' });
        };

        const decoded = jwt.verify(token, process.env.SECRET);
        
        if(!decoded){
            return res.status(401).json({ msg: 'Não Autorizado - Token inválido' });
        };

        const technician = await Technician.findById(decoded.userId).select('-password');

        if(!technician){
            return res.status(404).json({ msg: 'Técnico inexistente' });
        };

        req.technician = technician;
        next();

    } catch (error) {
        res.status(500).json({ msg: error.message });
    };
};

module.exports = protectTechnician;