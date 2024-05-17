// Importações
const express = require('express');
const router = express.Router();
const UserController = require('../../controller/UserController/UserController');
const protectRoute = require('../../../middleware/protectRoute.js');

// Rota Pública
router.get('/', UserController.publicRoute);

// Rota Privada
router.get('/:id', protectRoute,UserController.privateRoute);

// Exportação do Router
module.exports = router;