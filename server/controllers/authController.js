const userModel = require("../models/userModel");
const tecnicoModel = require("../models/tecnicoModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const validator = require("validator");

const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        let user = await userModel.findOne({ email });
        let userType = "user"; // Por padrão, assume-se que é um usuário comum

        // Se não encontrar um usuário comum, verifica se é um técnico
        if (!user) {
            user = await tecnicoModel.findOne({ emailTecnico: email });
            userType = "tecnico"; // Se encontrar um técnico, atualiza o tipo de usuário
        }

        if (!user) {
            return res.json({ success: false, message: "Credenciais inválidas" });
        }

        const isMatch = await bcrypt.compare(password, user.password || user.senhaTecnico);
        if (!isMatch) {
            return res.json({ success: false, message: "Credenciais inválidas" });
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET)

        res.json({ success: true, token, user, userType });
        console.log("Dados do usuário:", user);
        console.log("Tipo de usuário:", userType);
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Erro no servidor" });
    }
};


const registerUser = async (req, res) => {
    const { name, password, email, telefone, modeloAparelho } = req.body;
    try {
        const exists = await userModel.findOne({ email });
        if (exists) {
            return res.json({ success: false, message: "Usuário já existe" });
        }

        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "Por favor insira um email válido" });
        }

        if (password.length < 8) {
            return res.json({ success: false, message: "Por favor insira uma senha forte" });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new userModel({
            name,
            email,
            password: hashedPassword,
            telefone,
            modeloAparelho,
            profilePicture: req.body.photo
        });

        const user = await newUser.save();
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET)
        res.json({ success: true, token, user });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Erro no servidor" });
    }
};

const registerTecnico = async (req, res) => {
    const { nomeTecnico, emailTecnico, senhaTecnico, telefoneTecnico, dataNascimento, nomeNegocio, cnpj, endereco, especializacao } = req.body;
    try {
        const exists = await tecnicoModel.findOne({ emailTecnico });
        if (exists) {
            return res.json({ success: false, message: "O técnico já está registrado" });
        }

        if (!validator.isEmail(emailTecnico)) {
            return res.json({ success: false, message: "Por favor, insira um email válido" });
        }

        if (senhaTecnico.length < 8) {
            return res.json({ success: false, message: "Por favor, insira uma senha forte (mínimo de 8 caracteres)" });
        }

        if (!validator.isMobilePhone(telefoneTecnico, "any", { strictMode: false })) {
            return res.json({ success: false, message: "Por favor, insira um número de telefone válido" });
        }

        if (!validator.isNumeric(cnpj) || cnpj.length !== 14) {
            return res.json({ success: false, message: "Por favor, insira um CNPJ válido" });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(senhaTecnico, salt);

        const newTecnico = new tecnicoModel({
            nomeTecnico,
            emailTecnico,
            senhaTecnico: hashedPassword,
            telefoneTecnico,
            nomeNegocio,
            dataNascimento,
            cnpj,
            endereco,
            especializacao,
            profilePicture: req.body.photo
        });

        const tecnico = await newTecnico.save();

        const token = jwt.sign({ id: tecnico._id }, process.env.JWT_SECRET)

        res.json({ success: true, token, tecnico });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Erro ao registrar o técnico" });
    }
};

// const updateProfile = async (req, res, next) => {
//     const { id } = req.user; // Assume-se que o middleware de autenticação preenche req.user
//     const { profilePicture } = req.body;

//     try {
//         let user = await userModel.findById(id);
//         if (!user) {
//             user = await tecnicoModel.findById(id);
//         }

//         if (!user) {
//             return next(errorHandler(404, 'Usuário não encontrado!'));
//         }

//         user.profilePicture = profilePicture || user.profilePicture;
//         await user.save();

//         const { password, ...rest } = user._doc;
//         res.status(200).json(rest);
//     } catch (error) {
//         next(error);
//     }
// };


module.exports = {
    loginUser,
    registerUser,
    registerTecnico,
    // updateProfile,
};
