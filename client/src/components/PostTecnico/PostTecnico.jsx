import React from 'react'
import "./PostTecnico.css"
import { FaUser, FaHistory } from "react-icons/fa";
import reparo from "../../assets/images/reparo.jpg";
export const PostTecnico = () => {
    return (
        <div>
             <div className="postagem">
                <div className="postagem-container">
                    <div className="postagem-top">
                        <div className="user-icone-name">
                            <FaUser className='icon' />
                            <p>Rafael Ferreira de Oliveira</p>
                        </div>

                        <div className="content-text-post">
                            <p>Reparo realizado em um Iphone com a tela quebrada após uma queda. A substituição da tela foi concluída com sucesso, e o dispositivo está funcionando perfeitamente.</p>
                        </div>
                    </div>

                    <div className="postagem-img">
                        <div className="imagem">
                            <img src={reparo} alt="Celular quebrado" className='post-imagem'/>
                        </div>
                    </div>

                    <hr className='hr-style' />

                    <div className="postagem-buttons">
                        <p>Comentários</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
