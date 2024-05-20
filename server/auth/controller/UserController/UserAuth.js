// Importações
require('dotenv').config();
const User = require('../../model/User');
const bcrypt = require('bcrypt');
const axios = require('axios');
const generateToken = require('../../../utils/generateToken.js');
const { initializeApp } = require('firebase/app');
const { getStorage, ref, getDownloadURL, uploadBytes } = require('firebase/storage');
const moment = require = ('moment');

const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID,
    measurementId: process.env.MEASUREMENT_ID
};

const firebaseApp = initializeApp(firebaseConfig);
const storage = getStorage(firebaseApp);

/* Rota de Registro */
exports.register = async (req, res) => {
    const { name, email, password, confirmPassword, verified, contact, birth_day, user_picture, user_picture_url, address } = req.body;
    const file = req.file;

    // Validação de Dados
    if (!name || !email || !password || !address.cep || !address.number) {
        return res.status(422).json({ msg: 'Por favor, preencha todos os campos obrigatórios!' });
    };

    if (!/^[a-zA-Z ]*$/.test(name)) {
        return res.status(422).json({ msg: 'Por favor, digite um nome válido!' });
    };

    if (!/\S+@\S+\.\S+/.test(email)) {
        return res.status(422).json({ msg: 'Por favor, digite um email válido!' });
    };

    if (!/^(?=.*[A-Z])(?=.*[!#@$%&])(?=.*[0-9])(?=.*[a-z]).{6,15}$/.test(password)) {
        return res.status(422).json({ msg: 'A senha deve conter entre 6 e 15 caracteres e incluir pelo menos uma letra maiúscula, um número e um caractere especial.' });
    };

    if (!/^(?:\+55)?(?:[1-9]{2})?(?:9[1-9]\d{3})\d{4}$/.test(contact)) {
        return res.status(422).json({ msg: 'Insira um número de telefone válido!' });
    };

    const parsedBirthDay = moment(birth_day, 'DD-MM-YYYY', true);
    
    if (!parsedBirthDay.isValid()) {
        return res.status(422).json({ msg: 'Data de nascimento inválida!' });
    };

    if (!/^\d{5}-\d{3}$|^\d{8}$/.test(address.cep)) {
        return res.status(422).json({ msg: 'Por favor, digite um CEP válido!' });
    };

    if (!/^\d{1,5}$/.test(address.number)) {
        return res.status(422).json({ msg: 'Por favor, digite um número válido!' });
    };

    if (password !== confirmPassword) {
        return res.status(422).json({ msg: 'As senhas não coincidem!' });
    };

    // Checar se o Usuário existe
    const userExists = await User.findOne({ email: email });

    if (userExists) {
        return res.status(422).json({ msg: 'Um usuário com este email já existe!' });
    };

    if (!file) {
        return res.status(422).json({ msg: 'Não há imagem!' });
    };

    try {
        const response = await axios.get(`https://brasilapi.com.br/api/cep/v1/${address.cep}`);
        const { data } = response;

        if (!data) {
            return res.status(404).json({ error: 'CEP não encontrado' });
        };

        address.street = data.street;
        address.neighborhood = data.neighborhood;
        address.city = data.city;
        address.state = data.state;

        // Criar a Hash da Senha
        const salt = await bcrypt.genSalt(12);
        const passwordHash = await bcrypt.hash(password, salt);

        //Firebase file
        const fileName = Date.now().toString() + "-" + file.originalname;
        const fileRef = ref(storage, fileName);
        await uploadBytes(fileRef, file.buffer);
        const urlFinal = await getDownloadURL(fileRef);

        // Criar Usuário
        const user = new User({ name, email, password: passwordHash, verified, contact, device, birth_day, user_picture: fileName, user_picture_url: urlFinal, address });
        await user.save(user);

        res.status(201).json({ msg: `O usuário ${user.name} foi cadastrado com sucesso!` });
    } catch (error) {
        console.error('Erro ao cadastrar usuário:', error);
        res.status(500).json({ msg: 'Ocorreu um erro ao cadastrar o usuário.' });
    };
};

/* Logar Usuário */
exports.login = async (req, res) => {
    const { email, password } = req.body;

    // Validação de Dados
    if (!email) {
        return res.status(422).json({ msg: 'O email é obrigatório!' });
    };

    if (!password) {
        return res.status(422).json({ msg: 'A senha é obrigatória!' });
    };

    // Checar se Usuário existe
    const user = await User.findOne({ email: email });

    if (!user) {
        return res.status(404).json({ msg: 'Usuário não encontrado!' });
    };

    // Checar se as senhas combinam
    try {
        const match = await bcrypt.compare(password, user.password);
        if (!match) {
            return res.status(422).json({ msg: 'Senha inválida!' });
        };

        // Checar se o usuário é verificado
        if (!user.verified) {
            return res.status(404).json({ msg: 'Usuário não verificado!' });
        };

        // Gerar token JWT
        generateToken(user._id, res);

        res.status(200).json({ msg: 'Autenticação realizada com sucesso!', token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Ocorreu um erro ao tentar fazer login.' });
    };
};