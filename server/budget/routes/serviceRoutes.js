// Importações
const express = require('express');
const router = express.Router();
const serviceController = require('../controller/serviceSolicitationController.js');
const protectRoute = require('../../middleware/protectRoute.js');

// Rota de Registro de Serviço
router.post('/service/create/', protectRoute, serviceController.createService);

// Rota de Alteração de Serviço
router.patch('/service/update/', protectRoute, serviceController.updateService);

// Rota de Exclusão de Serviço
router.delete('/service/delete/', protectRoute, serviceController.deleteService);

// Exportação do Router
module.exports = router;