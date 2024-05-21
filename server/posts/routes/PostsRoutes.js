const express = require('express');
const router = express.Router();
const postsController = require('../controller/postsController.js');
const protectRoute = require('../../middleware/protectRoute.js');
const upload = require('../../helpers/upload/uploadImage.js');

// Rota Pública
router.get('/', postsController.getPosts);

// Rota Privada
router.post('/:id', protectRoute, upload.single('file'), postsController.sendPost);

// Exportação do Router
module.exports = router;