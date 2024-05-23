const express = require("express");
const { loginUser, registerUser, registerTecnico} = require("../controllers/authController");
const { updateUser } = require('../controllers/userController')
const multer = require('multer');
const authenticateUser = require("../middleware/authMiddleware");
const storage = multer.memoryStorage();
const upload = multer({ storage });

const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.post("/register-tecnico", registerTecnico);


// userRouter.post("/upload", upload.single('file'), uploadProfileImage);
userRouter.post('/update/:id', authenticateUser, updateUser)

module.exports = userRouter;
