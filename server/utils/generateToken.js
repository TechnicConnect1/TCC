// Importações
const jwt = require('jsonwebtoken');
require('dotenv').config();

// Gerador de Token
const generateToken = async (userId, res) => {
    token = jwt.sign({ userId }, process.env.SECRET, { expiresIn: '15d' });

    res.cookie('jwt', token, { maxAge: 15 * 24 * 60 * 60 * 1000, httpOnly: true, sameSite: 'strict', secure: process.env.NODE_ENV !== 'development' });
};

//Exportações
module.exports = generateToken;