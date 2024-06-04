const express = require('express');
const router = express.Router();
const budgetController = require('../controller/budgetController.js');
const protectRoute = require('../../middleware/protectRoute.js');

router.post('/budget/create/', protectRoute, budgetController.createBudget)

// Exportação do Router
module.exports = router;