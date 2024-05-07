//Importações
const express = require('express');
const router = express.Router();
const addressAuth = require('../../controller/AddressController/AddressAuth');

// Rota de Registro
router.post('/auth/register', addressAuth.register);

// Exportação do Router
module.exports = router;