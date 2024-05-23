import React from 'react'
import { FaUser, FaHistory } from "react-icons/fa";
import "./Post.css";
import quebrado from "../../assets/images/celularquebrado.jpg";
import { useDispatch, useSelector } from "react-redux";

export const Post = ({ showContactButton }) => {
    const { currentUser } = useSelector((state) => state.user);
    return (
        <div>
            <div className="postagem">
                <div className="postagem-container">
                    <div className="postagem-top">
                        <div className="user-icone-name">
                            {/* <img src={currentUser.profilePicture} alt="" className='iconAvatar'/> */}
                            <p>Usuario</p>
                        </div>

                        <div className="content-text-post">
                            <p>Meu smartphone caiu no chão e acabou quebrando a tela</p>
                        </div>
                    </div>

                    <div className="postagem-img">
                        <div className="imagem">
                            <img src={quebrado} alt="Celular quebrado" className='post-imagem'/>
                        </div>
                    </div>

                    <hr className='hr-style' />

                    <div className="postagem-buttons">
                        <p>Comentários</p>
                        {showContactButton && (
                            <button className="contact-button">Entrar em contato</button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
