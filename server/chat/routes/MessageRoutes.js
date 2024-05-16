// Importações
const express = require('express');
const router = express.Router();
const MessageController = require('../controller/MessageController/MessageController');
const ProtectRoute = require('../middleware/protectRoute');

// Rotas
router.post('/send/:id', ProtectRoute.protectRoute, MessageController.sendMessage);
router.get('/:id', ProtectRoute.protectRoute, MessageController.getMessages);
router.get('/getUsers', ProtectRoute.protectRoute, MessageController);

// Exportação do Router
module.exports = router;