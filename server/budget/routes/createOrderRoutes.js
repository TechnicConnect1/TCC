// Importações
const express = require('express');
const router = express.Router();
const createOrderController = require('../controller/createOrderController.js');
const protectRoute = require('../../middleware/protectRoute.js');

// Rota de Registro de Pagamento
router.post('/order/create/', protectRoute, createOrderController.createOrder);

// Rota de Captura de Pagamento
router.post('/order/capture/', protectRoute, createOrderController.capturePayment);

// Exportação do Router
module.exports = router;