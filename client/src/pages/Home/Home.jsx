import React, { useState } from 'react';
import Iphone from "../../assets/iphone.png"
import phone1 from "../../assets/fundo2.png"
import Sobre from "../../assets/sobre.png"
import "./Home.css"
import { Link } from "react-router-dom";
import AnuncioCard from '../Orcamento1/AnuncioCard.jsx';
import Orcamento1 from '../Orcamento1/Orcamento1.jsx'; // Supondo que você tenha o componente Orcamento1


 

export const Home = () => {
    const [anuncios, setAnuncios] = useState([]);

    const adicionarAnuncio = (novoAnuncio) => {
      setAnuncios([...anuncios, novoAnuncio]);
    };

    return (
        <div>
            <section className="home1">
            
                <div className="section-home">
                    <div className="content">
                        <h2>Bem-vindo à</h2>
                        <h1>Technic Connect</h1>
                        <p>O Technic Connect é uma inovadora plataforma de assistência técnica para eletrônicos, projetada para simplificar e agilizar a conexão entre técnicos especializados e clientes em busca de soluções para seus dispositivos. Com o Technic Connect, oferecemos uma experiência conveniente e confiável, garantindo que seus eletrônicos sejam reparados com expertise e rapidez.</p>
                        <button className="btn">
                            <Link to="/Orcamento1">
                                Solicite um orçamento
                            </Link>
                        </button>
                    </div>
                 
                </div>

                <div className="home">
      <Orcamento1 onAdicionarAnuncio={adicionarAnuncio} />
      {anuncios.map(anuncio => (
        <AnuncioCard
          key={anuncio.id}
          titulo={anuncio.titulo}
          descricao={anuncio.descricao}
          contato={anuncio.contato}
          localizacao={anuncio.localizacao}
          imagemUrl={anuncio.imagemUrl}
        />
      ))}
    </div>
            </section>

            <section className="home2">
                <div className="section-home2">
                    <div className="left">
                        <div className="boximg">
                            <img src={phone1} alt="" />
                        </div>
                    </div>

                    <div className="right">
                        <h1>Técnicos especializados ao seu alcance</h1>
                        <p>Conectamos você aos melhores técnicos para tornar os reparos tecnológicos mais fáceis do que nunca. Com uma plataforma intuitiva, oferecemos acesso a técnicos qualificados prontos para resolver qualquer problema com seus dispositivos. </p>
                        <button className="btn">
                            <Link to="/servico">
                                Ver serviços
                            </Link>
                        </button>
                    </div>
                </div>
            </section>

            <section className="home3">
                <div className="circle2"></div>
                <div className="section-home3">
                    <div className="content-home3">
                        <h2>
                            Sobre <span>nós</span>
                        </h2>

                        <p>
                            No <span>Technic Connect</span>, estamos comprometidos em tornar o processo de reparo de dispositivos eletrônicos simples, ágil e confiável. A nossa plataforma é projetada para conectar você aos técnicos especializados que podem cuidar do seu dispositivo com conhecimento e habilidade.
                        </p>

                        <p>Acreditamos em transparência, qualidade e satisfação do cliente. Queremos que você se sinta seguro ao confiar seus dispositivos em nossas mãos.</p>

                        <p>Junte-se a nós hoje e experimente a maneira mais fácil e eficaz de resolver problemas com seus eletrônicos.</p>
                    </div>

                    <div className="img2">
                        <img src={Sobre} alt="" className="img2" />
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


                            <textarea name="
                                " id="" placeholder="Escreva sua mensagem"></textarea>


                            <button className="btn" type="submit">Enviar</button>
                        </form>
                    </div>
                </div>
            </section>
        </div>

    )
}