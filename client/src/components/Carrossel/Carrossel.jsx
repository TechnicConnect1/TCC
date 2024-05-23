import React from "react";
import "./Carrossel.css";
import image1 from "../../assets/images/1.png"
import image2 from "../../assets/images/2.png"
import image3 from "../../assets/images/3.png"
import image4 from "../../assets/images/4.png"
import image5 from "../../assets/images/5.png"
import image6 from "../../assets/images/6.png"
import image7 from "../../assets/images/7.png"
import image8 from "../../assets/images/8.png"
import image9 from "../../assets/images/9.png"

function Carrossel() {
    return (
        <div>
            <div className="servicos-wrap">
                <div className="wrap-card">
                    <div className="imagem-wrap">
                        <img src={image1} alt="" />
                    </div>

                    <span className="name-service">Troca de Tela</span>

                </div>

                <div className="wrap-card">
                    <div className="imagem-wrap">
                        <img src={image2} alt="" />
                    </div>

                    <span className="name-service">Troca de Bateria</span>

                </div>

                <div className="wrap-card">
                    <div className="imagem-wrap">
                        <img src={image3} alt="" />
                    </div>

                    <span className="name-service">Limpeza</span>

                </div>

                <div className="wrap-card">
                    <div className="imagem-wrap">
                        <img src={image4} alt="" />
                    </div>

                    <span className="name-service">Desoxidação</span>

                </div>

                <div className="wrap-card">
                    <div className="imagem-wrap">
                        <img src={image6} alt="" />
                    </div>

                    <span className="name-service">Conectores</span>

                </div>

                <div className="wrap-card">
                    <div className="imagem-wrap">
                        <img src={image7} alt="" />
                    </div>

                    <span className="name-service">Câmera</span>

                </div>

                <div className="wrap-card">
                    <div className="imagem-wrap">
                        <img src={image8} alt="" />
                    </div>

                    <span className="name-service">Periféricos</span>

                </div>

                <div className="wrap-card">
                    <div className="imagem-wrap">
                        <img src={image9} alt="" />
                    </div>

                    <span className="name-service">Outros</span>

                </div>
            </div>


        </div>

    );
}

export default Carrossel;
