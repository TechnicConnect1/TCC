// Importações
const Posts = require('../model/Posts');
const User = require('../../auth/model/User');
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

exports.getTimeline = async (req, res) => {
    try {
        const currentUser = await User.findById(req.headers.id);
        const userPosts = await Posts.find({ author: currentUser._id });
        res.status(200).json(userPosts);
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Falha no servidor' });
    };
};

// Enviar Post
exports.sendPost = async (req, res) => {
    const { author, title } = req.body;
    const file = req.file;
    try {
        // Firebase file
        const fileName = Date.now().toString() + "-" + file.originalname;
        const fileRef = ref(storage, fileName);
        await uploadBytes(fileRef, file.buffer);
        const urlFinal = await getDownloadURL(fileRef);

        // Criar Post
        const post = new Posts({ author, title, picture: fileName, picture_url: urlFinal, likes, comments });

        await post.save(post);

        res.status(201).json({ msg: `O ${author} fez uma publicação bem sucedida` });
    } catch (error) {
        console.error('Erro ao publicar:', error);
        res.status(500).json({ msg: 'Falha no servidor' });
    };
};

// Deletar Post
exports.deletePost = async (req, res) => {
    const id = req.headers.id;
    const post = await Posts.findOne({ _id: id });

    if (!post) {
        return res.status(404).json({ msg: 'Você só pode excluir os seus posts!' });
    };
    try {
        deleteImage(Posts.picture);
        await Posts.deleteOne({ _id: id });
        res.status(200).json({ msg: 'O usuário foi deletado com sucesso!' });
    } catch (error) {
        res.status(500).json({ msg: error });
    };
};

// Curtir Post
exports.likePost = async (req, res) => {
    const id = req.headers.id;
    const post = await Posts.findOne({ _id: id });
    try {
        if (!post.likes.includes(req.body.author)) {
            await post.updateOne({ $push: { likes: req.body.author } });
            return res.status(200).json({ msg: 'O post foi curtido com sucesso!' });
        } else {
            await post.updateOne({ $pull: { likes: req.body.author } });
            return res.status(200).json({ msg: 'O post foi descurtido com sucesso!' });
        };
    } catch (error) {
        res.status(500).json({ msg: error });
    };
};