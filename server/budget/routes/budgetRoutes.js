const express = require('express');
const router = express.Router();
const budgetController = require('../controller/budgetController.js');
const protectRoute = require('../../middleware/protectRoute.js');
const upload = require('../../helpers/upload/uploadImage.js');

router.post('/create/', protectRoute, budgetController.createBudget)

// Exportação do Router
module.exports = router;