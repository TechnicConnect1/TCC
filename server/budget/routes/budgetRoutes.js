// Importações
const express = require('express');
const router = express.Router();
const budgetController = require('../controller/budgetController.js');
const protectRoute = require('../../middleware/protectRoute.js');

// Rota de Registro de Orçamento
router.post('/budget/create/', protectRoute, budgetController.createBudget);

// Rota de Alteração de Orçamento
router.patch('/budget/update/', protectRoute, budgetController.updateBudget);

// Rota de Exclusão de Orçamento
router.delete('/budget/delete/', protectRoute, budgetController.deleteBudget);

// Exportação do Router
module.exports = router;