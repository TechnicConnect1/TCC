const express = require("express");
const dotenv = require('dotenv').config();
const cors = require('cors');
const connectDB = require("./utils/database");
const cookieParser = require("cookie-parser");
const path = require('path');
const userRouter = require("./routes/authRoute");

const app = express();
connectDB();

// Middlewares
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

app.get("/", (req, res) => {
    res.send("API está funcionando");
});

app.use("/api/user", userRouter);

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Servidor está rodando na porta ${port}`));
