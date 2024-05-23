import React, { useContext, useRef, useState } from "react";
import imagem from "../../../assets/images/Group 90.png";
import { FaUser } from "react-icons/fa";
import Carrossel from "../../../components/Carrossel/Carrossel";
import "./User.css";
import { HistoricoServico } from "../../../components/Card-servico/HistoricoServico";
import { CardOrcamento } from "../../../components/Card-orcamento/CardOrcamento";
import { MdAdd } from "react-icons/md";
import StarRating from "../../../components/Stars/StarRating";
import { NewCarrossel } from "../../../components/NewCarrossel/NewCarrossel";
import { Orcamento } from "../../../components/Orcamento/Orcamento";

export const User = () => {
    const user_data = JSON.parse(localStorage.getItem("user_data"));


    const containerRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(null);
    const [scrollLeft, setScrollLeft] = useState(null);

    const handleMouseDown = (event) => {
        setIsDragging(true);
        setStartX(event.pageX - containerRef.current.offsetLeft);
        setScrollLeft(containerRef.current.scrollLeft);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseMove = (event) => {
        if (!isDragging) return;
        event.preventDefault();
        const x = event.pageX - containerRef.current.offsetLeft;
        const walk = (x - startX) * 2; // Ajuste o valor multiplicador conforme necessário
        containerRef.current.scrollLeft = scrollLeft - walk;
    };
    return (
        <div>
            <section className="userSection">
                <div className="container-home-user">
                    {/* <h1>Olá, {user_data.name}</h1> */}
                    <h1>Olá, Rafael Ferreira de Oliveira</h1>
                    <p>
                        Bem-vindo(a) de volta à Technic Connect, onde suas necessidades tecnológicas encontram soluções prontas para atender você. É um prazer tê-lo(a) conosco novamente. Como sempre, estamos aqui para tornar a assistência técnica mais fácil e eficiente para você.


                        <br />
                        <br />

                        Explore sua conta, acompanhe o histórico de serviços e fique por dentro das últimas atualizações em tecnologia. Se precisar de assistência ou desejar solicitar um novo serviço, estamos à disposição para ajudar.
                    </p>

                    <button>Solicite um orçamento</button>
                </div>

                <div className="user-home-imagem">
                    <img src={imagem} alt="" />
                </div>
            </section>

            <section className="userSection-2">
                <h1>Solicitando <span>Orçamento</span></h1>
                
                <div className="container-home-user-2">
                    <NewCarrossel />
                </div>

                <Orcamento />
            </section>

            <section className="userSection-3">
                <div className="container-home-user-3">
                    <h1>Histórico de <span>serviços</span></h1>

                    <p>Mantenha-se informado sobre os serviços que você solicitou e acompanhe seu progresso aqui. Se precisar de mais detalhes ou tiver perguntas sobre um serviço específico, estamos prontos para ajudar. Agradecemos por confiar em nós para suas necessidades de assistência técnica.</p>

                    <div
                        ref={containerRef}
                        className="container"
                        onMouseDown={handleMouseDown}
                        onMouseUp={handleMouseUp}
                        onMouseLeave={handleMouseUp}
                        onMouseMove={handleMouseMove}
                    >
                        <div className="cards">
                            <HistoricoServico />
                            <HistoricoServico />
                        </div>
                    </div>

                    <button>Solicitar novo serviço</button>
                </div>
            </section>

            <section className="userSection-4">
                <div className="container-home-user-4">
                    <div className="content-text-home-user-4">
                        <h1>Suas <span>avaliações</span></h1>

                        <p>Valorizamos a transparência e a confiabilidade, e suas avaliações desempenham um papel fundamental nisso. Elas nos ajudam a manter altos padrões de serviço na Tecnic Connect e aprimorar continuamente nossos serviços para garantir que você receba a assistência técnica de que precisa. Sua opinião é importante, e agradecemos por contribuir para a melhoria constante da nossa plataforma</p>
                    </div>

                    <div className="avaliacaoCard">
                        <div className="card-avaliacao">
                            <div className="top-card">
                                <div className="user-avatar-icone">
                                    <FaUser className="user-avatar-icon" />
                                </div>

                                <div className="name-stars">
                                    <span className="name-user">Rafael Ferreira</span>

                                    <StarRating totalStars={5} />

                                </div>
                            </div>

                            <div className="bottom-card-avaliacao">
                                <p>Encontrei um técnico competente que solucionou os problemas de desempenho do meu dispositivo. A Technic Connect tornou o processo de encontrar um técnico confiável simples e eficiente.</p>
                            </div>
                        </div>


                        <div className="card-avaliacao-add">
                            <div className="add-more">
                                <MdAdd className="add-icon" />
                            </div>
                        </div>


                    </div>

                </div>
            </section>

            <section className="userSection-5">
                <div className="container-home-user-5">
                    <div className="content-text-home-user-5">
                        <h1>Histórico de <span>Orçamentos</span></h1>

                        <p>Tenha o controle total das suas solicitações e dos orçamentos anteriores em um único lugar. Nosso histórico de orçamentos proporciona uma visão organizada e clara de todas as suas interações com os técnicos na Technic Connect. Consulte, siga e gerencie seus orçamentos passados a qualquer momento.</p>
                    </div>

                    <div
                        ref={containerRef}
                        className="container"
                        onMouseDown={handleMouseDown}
                        onMouseUp={handleMouseUp}
                        onMouseLeave={handleMouseUp}
                        onMouseMove={handleMouseMove}
                    >
                        <div className="cards-orcamento">
                            <CardOrcamento />
                        </div>
                    </div>
                </div>
            </section>

            <section className="home4">
                <div className="section-home4">
                    <div className="content-home4">
                        <h2>Fale <span>Conosco!</span></h2>
                        <p>Ficamos felizes em ouvir você! Preencha os campos ao lado e envie-nos sua mensagem. Estamos aqui para ajudar e responder a todas as suas perguntas.</p>

                        <p>Sua opinião é importante para nós. Estamos aqui para ouvir suas dúvidas, responder as suas preocupações e ajudá-lo no que for necessário. Não hesite em nos contar como podemos tornar sua experiência melhor.</p>
                    </div>

                    <div className="form">
                        <form action="">
                            <div className="input-box2">
                                <input type="text" placeholder="Nome Completo" />
                            </div>

                            <div className="input-box2">
                                <input type="email" placeholder="E-mail" />
                            </div>

                            <div className="input-box2">
                                <input type="tel" placeholder="Telefone" />
                            </div>


                            <textarea name="" id="" placeholder="Escreva sua mensagem"></textarea>


                            <button className="btn" type="submit">Enviar</button>
                        </form>
                    </div>
                </div>
            </section>
        </div>


    );
};

