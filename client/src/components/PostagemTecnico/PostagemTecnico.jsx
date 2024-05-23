import React from 'react'
import "./PostagemTecnico.css"
import { FaUser, FaHistory } from "react-icons/fa";
import { FaCamera } from "react-icons/fa";
import { FaVideo } from "react-icons/fa6";

export const PostagemTecnico = () => {
    // Verifica se os dados do usuário estão presentes no localStorage
    const user_data = JSON.parse(localStorage.getItem("user_data"));
    // Verifica se os dados do técnico estão presentes no localStorage
    const tecnico_data = JSON.parse(localStorage.getItem("tecnico_data"));

    // Define os dados do usuário a serem usados com base na disponibilidade
    const userDataToUse = user_data || tecnico_data;

    return (
        <div>
            <div className="postagem-tecnico">
                <div className="postagem-tecnico-container">
                    <div className="postagem-tecnico-top">
                        <div className="tecnico-informacoes">
                            <div className="profileTecnico">
                                <FaUser className='icon-avatar'/>
                            </div>

                            {/* <span className="name-tecnico">{userDataToUse?.nomeTecnico || userDataToUse?.name}</span> */}
                            <span className="name-tecnico">Rafael Ferreira de Oliveira</span>
                        </div>
                    </div>

                    <div className="textareaDiv">
                        <textarea name="" id="" placeholder='Escreva algo'></textarea>
                    </div>

                    <div className="card-post-buttons">
                        <div className="buttons-left">
                            <div className="card-post-button">
                                <FaCamera className="card-post-icon" />
                                <span>Imagem</span>
                            </div>

                            <div className="card-post-button">
                                <FaVideo className="card-post-icon icon-color" />
                                <span>Vídeo</span>
                            </div>
                        </div>



                        <div className="card-button-submit">
                            <button>Postar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
