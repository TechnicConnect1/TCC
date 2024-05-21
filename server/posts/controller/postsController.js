// Importações
const Posts = require('../model/Posts');
const { initializeApp } = require('firebase/app');
const { getStorage, ref, getDownloadURL, uploadBytes } = require('firebase/storage');

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

exports.getPosts = async (req, res) => {
    res.status(200).json({
        msg: 'Teste Posts'
    });
};

exports.sendPost = async (req, res) => {
    const { author } = req.body;
    const file = req.file;
    try {
        //Firebase file
        const fileName = Date.now().toString() + "-" + file.originalname;
        const fileRef = ref(storage, fileName);
        await uploadBytes(fileRef, file.buffer);
        const urlFinal = await getDownloadURL(fileRef);

        // Criar Usuário
        const post = new Posts({ author, picture: fileName, picture_url: urlFinal });

        await post.save(post);

        res.status(201).json({ msg: `O ${author} fez uma publicação bem sucedida` });
    } catch (error) {
        console.error('Erro ao publicar:', error);
        res.status(500).json({ msg: 'Falha no servidor' });
    };
};

