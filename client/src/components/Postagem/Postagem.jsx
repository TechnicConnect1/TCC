import React from "react";
import "./Postagem.css"
import { FaUser, FaHistory } from "react-icons/fa";
import { FaCamera } from "react-icons/fa";
import { FaVideo } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";

export const Postagem = () => {
    const { currentUser } = useSelector((state) => state.user);
    return (
        <div>
            <div className="cardPost">
                <div className="card-post-container">
                    <div className="post-user">
                        <div className="iconAvatar">
                            <img src={currentUser.profilePicture} alt="" className="iconAvatar" />
                        </div>

                        <span className="name-user">
                            Rafael Ferreira
                        </span>
                    </div>

                    <div className="card-mensagem">
                        <textarea name="" id="" rows={2} placeholder="Descreva o problema do seu smartphone"></textarea>
                    </div>

                    <hr />

                    <div className="card-post-buttons">
                        <div className="buttons-left">
                            <div className="card-post-button">
                                <FaCamera className="card-post-icon" />
                                <span>Imagem</span>
                            </div>

                            <div className="card-post-button">
                                <FaVideo className="card-post-icon" />
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