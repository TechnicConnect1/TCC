const express = require('express');
const router = express.Router();
const postsController = require('../controller/postsController.js');
const protectRoute = require('../../middleware/protectRoute.js');
const upload = require('../../helpers/upload/uploadImage.js');

// Rota Pública
router.get('/posts/timeline/', postsController.getTimeline);

// Rota Privada
router.post('/posts/add/', protectRoute, upload.single('file'), postsController.sendPost);

// Rota para Curtir Post
router.post('/posts/like/', protectRoute, postsController.likePost);

// Rota para Deletar Post
router.delete('/posts/delete/', protectRoute, postsController.deletePost);

// Exportação do Router
module.exports = router;