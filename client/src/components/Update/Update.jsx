import React, { useRef, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    getDownloadURL,
    getStorage,
    ref,
    uploadBytesResumable,
} from 'firebase/storage';
import { app } from "../../firebase";
import {
    updateUserStart,
    updateUserSuccess,
    updateUserFailure,
} from '../../redux/user/userSlice';
import "./Update.css";

export const Update = ({ onCancel }) => {
    const dispatch = useDispatch();
    const fileRef = useRef(null);
    const [image, setImage] = useState(undefined);
    const [formData, setFormData] = useState({});
    const [imagePercent, setImagePercent] = useState(0);
    const [imageError, setImageError] = useState(false);
    const [updateSuccess, setUpdateSuccess] = useState(false);
    const { currentUser, loading, error } = useSelector((state) => state.user);

    useEffect(() => {
        if (image) {
            handleFileUpload(image);
        }
    }, [image]);

    const handleFileUpload = async (image) => {
        const storage = getStorage(app);
        const fileName = new Date().getTime() + image.name;
        const storageRef = ref(storage, fileName);
        const uploadTask = uploadBytesResumable(storageRef, image);

        uploadTask.on(
            'state_changed',
            (snapshot) => {
                const progress =
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                setImagePercent(Math.round(progress));
            },
            (error) => {
                setImageError(true);
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) =>
                    setFormData({ ...formData, profilePicture: downloadURL })
                );
            }
        )
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            dispatch(updateUserStart());

            const token = localStorage.getItem('token')

            const res = await fetch(`http://localhost:4000/api/user/update/${currentUser._id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(formData),
            });
            const data = await res.json();
            if (data.success === false) {
                dispatch(updateUserFailure(data));
                return;
            }
            dispatch(updateUserSuccess(data));
            setUpdateSuccess(true);
        } catch (error) {
            dispatch(updateUserFailure(error));
        }
    };

    return (
        <div className="modal">
            <div className="modal-content">
                <h2>Atualizando Perfil</h2>

                <form onSubmit={handleSubmit} className="profile-form">
                    <input
                        type="file"
                        ref={fileRef}
                        hidden
                        accept="image/*"
                        onChange={(e) => setImage(e.target.files[0])}
                    />

                    <img
                        src={formData.profilePicture || currentUser.profilePicture}
                        alt="profile"
                        className="divPicture"
                        onClick={() => fileRef.current.click()}
                    />

                    <p className='statusUpload'>
                        {imageError ? (
                            <span className=''>
                                Error uploading image (file size must be less than 2 MB)
                            </span>
                        ) : imagePercent > 0 && imagePercent < 100 ? (
                            <span className=''>{`Uploading: ${imagePercent} %`}</span>
                        ) : imagePercent === 100 ? (
                            <span className=''>Imagem atualizada com sucesso</span>
                        ) : (
                            ''
                        )}
                    </p>

                    <input
                        defaultValue={currentUser.name}
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Nome"
                    />
                    <input
                        defaultValue={currentUser.email}
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email"
                    />
                    <input
                        defaultValue={currentUser.telefone}
                        type="tel"
                        id="telefone"
                        value={formData.telefone}
                        onChange={handleChange}
                        placeholder="Telefone"
                    />
                    <div className="form-buttons">
                        <button type="submit">Salvar</button>
                        <button type="button" className="cancelar" onClick={onCancel}>Cancelar</button>
                    </div>
                </form>
            </div>
        </div>
    );
};
