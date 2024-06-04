// Importações
const express = require('express');
const router = express.Router();
const postsController = require('../controller/postsController.js');
const protectRoute = require('../../middleware/protectRoute.js');
const upload = require('../../helpers/upload/uploadImage.js');

// Rota Pública
router.get('/timeline/', postsController.getTimeline);

// Rota Privada
router.post('add/:id/', protectRoute, upload.single('file'), postsController.sendPost);

// Rota para Deletar Post
router.put('/delete/:id/', protectRoute, postsController.deletePost);

// Exportação do Router
module.exports = router;