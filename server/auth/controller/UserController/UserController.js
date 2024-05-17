// Importações
require('dotenv').config();
const User = require('../../model/User');

// Rota Inicial
exports.publicRoute = (req, res) => {
    res.status(200).json({
        msg: 'API Inicializada com sucesso!'
    });
};

// Rota Privada
exports.privateRoute = async (req, res) => {
    try {
        const userId = req.params.id; 
        const user = await User.findById(userId, '-password');

        if (!user) {
            return res.status(404).json({ msg: 'Usuário não encontrado.' });
        };
        res.status(200).json({ user });
    } catch (error) {
        res.status(500).json({ msg: 'Erro ao buscar o usuário.' });
        console.log(error);
    };
};