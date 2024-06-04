// Importações
require('dotenv').config();
const User = require('../../model/User');

// Rota Pública
exports.publicRoute = (req, res) => {
    res.status(200).json({
        msg: 'API: Hello World!'
    });
};

// Rota Privada
exports.privateRoute = async (req, res) => {
    try {
        const id = req.headers.id; 
        const user = await User.findById(id, '-password');

        if (!user) {
            return res.status(404).json({ msg: 'Usuário não encontrado.' });
        };
        res.status(200).json({ user });
    } catch (error) {
        res.status(500).json({ msg: 'Erro ao buscar o usuário.' });
        console.log(error);
    };
};