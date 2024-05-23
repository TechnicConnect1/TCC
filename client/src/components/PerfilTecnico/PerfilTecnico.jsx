import React, { useContext, useState } from 'react';
import axios from "axios"
import { Sidebar } from '../sidebar/Sidebar';
import nouser from "../../assets/images/user-icon.png";
import { StoreContext } from '../../context/StoreContext';
import "./PerfilTecnico.css"
const PerfilTecnico = () => {
    const { userData, setUserData, setUserContextData } = useContext(StoreContext);
    const [userImage, setUserImage] = useState(null);

    const handleImageUpload = async (file) => {
        try {
            const formData = new FormData();
            formData.append('file', file);

            const response = await axios.post('/api/user/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            if (response.data) {
                const updatedData = { ...userData, imagemProfile: response.data.imagemPerfil };
                setUserData(updatedData);
                setUserContextData(updatedData);
            }
        } catch (error) {
            console.error("Erro ao fazer upload da imagem:", error);
        }
    };

    return (
        <main className='page-wrapper'>
            <Sidebar />
            <div className="content-wrapper">
                <div className="perfil-tecnico">
                    <h1>Perfil do <span>Técnico</span></h1>
                    <div className="perfil-tecnico-container">
                        <div className="profileDiv"
                            onClick={() => {
                                const input = document.createElement("input");
                                input.type = "file";
                                input.accept = "image/*";
                                input.style.display = "none";
                                input.addEventListener("change", (e) => {
                                    setUserImage(e.target.files[0]);
                                    handleImageUpload(e.target.files[0]);
                                });
                                input.click();
                            }}>
                            {userImage ? (
                                <img src={URL.createObjectURL(userImage)} alt="userimage" width={100} height={100} />
                            ) : (
                                <img src={nouser} alt="nouser" width={150} height={150} />
                            )}
                        </div>
                        <div className="dados-tecnico">
                            <div className="dado-tecnico">
                                <span className="label">Rafael Ferreira de Oliveira</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default PerfilTecnico;
