// Importações
const express = require('express');
const router = express.Router();
const MessageController = require('../controller/MessageController/MessageController');
const ProtectRoute = require('../../middleware/protectRoute.js');

// Rotas
router.post('/chat/send/:id', ProtectRoute, MessageController.sendMessage);
router.get('/chat/:id', ProtectRoute, MessageController.getMessages);
// router.get('/getUsers', ProtectRoute, MessageController);

// Exportação do Router
module.exports = router;