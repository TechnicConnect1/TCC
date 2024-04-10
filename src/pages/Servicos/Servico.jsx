import React from "react";
import Samsung from "../../assets/Samsung_Logo.svg.png"
import Iphone from "../../assets/apple.png"
import motorola from "../../assets/motorola.png"
import xiaomi from "../../assets/xiaomi.png"
import servico from "../../assets/image 1.png";
import bateria from "../../assets/bateria.png"
import gota from "../../assets/gotas.png";
import limpar from "../../assets/clear.png"
import phone from "../../assets/phone.png"
import "./Servico.css"

export const Servico = () => {
    return (
        <>
            <section className="servico">
                <div className="container-servico">
                    <h1>Serviços</h1>

                    <p>Nossos técnicos altamente especializados realizam diagnósticos precisos para identificar e resolver os problemas do seu smartphone. Além disso, oferecemos reparos transparentes a preços justos, para que você saiba exatamente o que esperar em termos de qualidade e custo.</p>

                    <div className="botoes">
                        <button>Solicitar orçamento</button>
                        <button>Ver serviços</button>
                    </div>
                </div>
            </section>

            <section className="servico2">
                <div className="container-servico2">
                    <div className="carrossel">
                        <div className="item">
                            <div className="image">
                                {/* <img src={phone} alt="" className="img-carrossel"/> */}
                            </div>

                            <div className="info">
                                <span className="name">Troca de Tela</span>
                                <span className="price">Fazer orçamento</span>
                            </div>
                        </div>

                        <div className="item">
                            <div className="image">
                                {/* <img src={bateria} alt="" className="img-carrossel2"/> */}
                            </div>

                            <div className="info">
                                <span className="name">Troca de Bateria</span>
                                <span className="price">Fazer orçamento</span>
                            </div>
                        </div>

                        <div className="item">
                            <div className="image">
                                {/* <img src={limpar} alt="" className="img-carrossel2"/> */}
                            </div>

                            <div className="info">
                                <span className="name">Limpeza</span>
                                <span className="price">Fazer orçamento</span>
                            </div>
                        </div>

                        <div className="item">
                            <div className="image">
                                {/* <img src={gota} alt="" className="img-carrossel2"/> */}
                            </div>

                            <div className="info">
                                <span className="name">Desoxidação</span>
                                <span className="price">Fazer orçamento</span>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            <section className="servico3">
                <h1><span class="underline">Tec</span>h<span className="underline">n</span>ic Connect</h1>


                <div className="container-servico3">
                    <div className="content-servico3">
                        <div className="box-img">
                            <img src={servico} alt="" className="img-section" />
                        </div>


                        <div className="circle4"></div>
                        <div className="circle3"></div>

                        <div className="content-text-servico3">
                            <p>A plataforma conecta os clientes a técnicos qualificados prontos para resolver os problemas do seu smartphones, como reparo de tela quebrada, troca de bateria, solução de problemas de software e muito mais. O compromisso da Technic Connect é oferecer um serviço confiável e eficiente que permita que os clientes voltem a usar seus smartphones rapidamente.</p>

                            <button className="btn">
                                Saiba mais
                            </button>
                        </div>
                    </div>


                </div>
            </section>

            <section className="servico4">
                <div className="container-servico4">
                    <h2>A Plataforma trabalha com todas as marcas de celulares</h2>
                    <p>De Samsung a iPhone, de Xiaomi a Huawei atendemos a todas as marcas, garantindo que você nunca fique de fora da revolução móvel.</p>
                    <div className="imagens">
                        <img src={Iphone} alt="" className="img2-s" />
                        <img src={Samsung} alt="" className="img1" />

                        <img src={xiaomi} alt="" className="img3" />

                        <img src={motorola} alt="" className="img4" />
                    </div>
                </div>
            </section>
        </>
    )
}