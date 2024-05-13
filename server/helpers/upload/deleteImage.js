const {initializeApp} = require("firebase/app");
const {getStorage, ref, deleteObject} = require("firebase/storage");
require("dotenv").config();
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

const deleteImage = (image) => {
    const deleteRef = ref(storage, image);
    try{
        deleteObject(deleteRef);
        console.log("imagem excluida com sucesso");
    }catch(error){
        console.error(error);
    };
};

module.exports = deleteImage;