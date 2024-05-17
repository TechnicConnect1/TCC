// Importações
require('dotenv').config();
const Technician = require('../../model/Technician');

// Rota Inicial
exports.publicRoute = (req, res) => {
    res.status(200).json({
        msg: 'API Inicializada com sucesso!'
    });
};

// Rota Privada
exports.privateRoute = async (req, res) => {
    try {
        const id = req.params.id;
        const technician = await Technician.findById(id, '-password');

        if (!technician) {
            return res.status(404).json({ msg: 'Usuário não encontrado.' });
        };
        res.status(200).json({ technician });
    } catch (error) {
        res.status(500).json({ msg: 'Erro ao buscar o usuário.' });
        console.log(error);
    };
};