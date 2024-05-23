import React from "react";
import girl from "../../../assets/images/feed-girl.png";
import feedSobre from "../../../assets/images/feed-sobre.png";
import blog1 from "../../../assets/images/blog01.png";
import blog2 from "../../../assets/images/blog02.png";
import blog3 from "../../../assets/images/blog03.png";
import blog4 from "../../../assets/images/blog04.png";
import "./Feed.css"
export const Feed = () => {
    return (
        <>
            <section className="feed-1">
                <div className="circle"></div>
                <div className="circle5"></div>
                <div className="container-feed">
                    <div className="content-feed">
                        <h1><span className="underline">B</span>e<span className="underline">m-</span>vindo ao nosso feed!</h1>

                        <p>Fique por dentro das novidades, mantenha-se informado sobre os lançamentos de novos recursos, integrações, melhorias que estamos implementando em nossa plataforma. Aqui compartilhamos histórias de sucesso de nossos usuários. Leia depoimentos inspiradores sobre pessoas que alcançaram seus objetivos com o auxílio da nossa plataforma.</p>

                        <button className="btn-feed">
                            Solicite um orçamento
                        </button>
                    </div>

                    <img src={girl} alt="" className="feed-girl" />
                </div>
            </section>

            <section className="feed-2">
                <h1><span>Technic Connect </span>Blogs</h1>
                <div className="container-feed-2">
                    <div className="blog-1" id="blog-1">
                        <div className="blog-box">
                            <span className="blog-title">Dicas</span>
                            <p className="blog-text">Como escolher um técnico confiável para o reparo do seu aparelho?</p>
                            <p className="data">12.08.2023</p>
                        </div>
                    </div>

                    <div className="content-feed-2">
                        <div className="blog-2" id="blog-2">
                            <div className="blog-box">
                                <span className="blog-title">Dicas</span>
                                <p className="blog-text">Como realizar um orçamento?</p>
                                <p className="data">15.10.2023</p>
                            </div>
                        </div>
                        <div className="blog-3" id="blog-3">
                            <div className="blog-box">
                                <span className="blog-title">Dicas</span>
                                <p className="blog-text">Como trabalhar pela plataforma?</p>
                                <p className="data">21.10.2023</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="feed-3">
                <h1><span className="underline">Ultimas </span>notícias</h1>
                <div className="container-feed-3">
                    <div className="blog-4" id="blog-4">
                        <div className="blog-box">
                            <span className="blog-title">Dicas</span>
                            <p className="blog-text">Estenda a vida útil do seu dispositivo com manutenção preventiva.</p>
                            <p className="data">12.08.2023</p>
                        </div>
                    </div>

                    <div className="content-feed-3">
                        <div className="content-text-3">
                            <h3>Sobre nós</h3>
                            <div>
                                <img src={feedSobre} alt="" />
                            </div>

                            <p>No <span>Technic Connect</span>, estamos comprometidos em tornar o processo de reparo de dispositivos eletrônicos simples, ágil e confiável. A nossa plataforma é projetada para conectar você aos técnicos especializados que podem cuidar do seu dispositivo com conhecimento e habilidade.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="feed-4">
                <div className="container-feed-4">
                    <div className="comentarios">
                        <h2>Comentários de usuários</h2>
                        <div className="users-comentarios">
                            Ainda não há comentários


                            <span className="btn-avaliar">Avaliar a plataforma</span>
                        </div>
                    </div>

                    <div className="content-feed-4">
                        <div className="blog-box-1">
                            <img src={blog1} alt="" />
                            <p>Descubra como ajustar as configurações para economizar energia e aproveitar mais o seu smartphone.</p>
                        </div>

                        <div className="blog-box-1">
                            <img src={blog2} alt="" />
                            <p>Faça backup dos seus dados importantes regularmente para manter suas informações seguras e acessíveis</p>
                        </div>

                        <div className="blog-box-1">
                            <img src={blog3} alt="" />
                            <p>Fique por dentro das últimas atualizações e recursos que tornam a solicitação de assistência técnica ainda mais fácil.</p>
                        </div>

                        <div className="blog-box-1">
                            <img src={blog4} alt="" />
                            <p>Limpeza é essencial: Saiba como manter seu dispositivo eletrônico em ótimo estado com nossas dicas de limpeza simples.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}