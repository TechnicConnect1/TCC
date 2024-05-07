// Importações
require('dotenv').config();
const Address = require('../../model/Address');

/* Rota de Registro */
exports.register = async (req, res) => {
    const { cep, street, neighborhood, city, state, number } = req.body;

    // Validação de Dados
    if (!cep || !number) {
        return res.status(422).json({ msg: 'Por favor, preencha todos os campos obrigatórios!' });
    };

    if (!/^\d{5}-\d{3}$|^\d{8}$/.test(cep)) {
        return res.status(422).json({ msg: 'Por favor, digite um CEP válido!' });
    };

    if (!/^\d{1,5}$/.test(number)) {
        return res.status(422).json({ msg: 'Por favor, digite um número válido!' });
    };

    const address = new Address({ cep, street, neighborhood, city, state, number });

    try {
        await address.save(address);
        res.status(201).json({ msg: `O endereço foi cadastrado com sucesso!` });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Ocorreu um erro ao cadastrar o endereço.' });
    };
};