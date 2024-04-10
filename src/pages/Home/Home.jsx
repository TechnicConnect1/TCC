import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Iphone from "../../assets/iphone1.png";
import phone1 from "../../assets/tecnico.png";
import Sobre from "../../assets/sobre.png";
import { Link } from "react-router-dom";
import "./Home.css";

export const Home = () => {
    const [user, setUser] = useState(null);
    const [selectedFile, setSelectedFile] = useState(null);
    const [postedImages, setPostedImages] = useState([]);
    const [postText, setPostText] = useState('');

    useEffect(() => {
        axios.get('/user')
            .then(response => setUser(response.data))
            .catch(error => console.error('Erro ao obter dados do usuário:', error));
    }, []);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setSelectedFile(file);
        }
    };

    const handlePostImage = () => {
        if (selectedFile) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPostedImages([...postedImages, reader.result]);
            };
            reader.readAsDataURL(selectedFile);
            setSelectedFile(null);
        }
    };

    const handlePost = () => {
        if (selectedFile || postText.trim() !== '') {
            handlePostImage();
            const newPost = {
                image: selectedFile ? URL.createObjectURL(selectedFile) : null,
                text: postText.trim(),
            };
            setPostedImages([...postedImages, newPost]);
            setSelectedFile(null);
            setPostText('');
        }

        
}
 
return (
    <div>
        <section className="home1">
            <div className="circle"></div>
            <div className="section-home">
                <div className="content">
                    <h2>Olá, usuário</h2>
                    <p>Bem-vindo(a) de volta à Technic Connect, onde suas necessidades tecnológicas encontram soluções prontas para atender você. Nosso objetivo é tornar a assistência técnica mais fácil e eficiente para você.</p>
                    <input
                        type="text"
                        className="post-input"
                        placeholder="Digite sua postagem..."
                    />
                    <input
                        type="file"
                        onChange={handleFileChange}
                        className="file-input"
                    />
                    <br />
                    {selectedFile && <img src={URL.createObjectURL(selectedFile)} alt="Selected File" />}
                    <br />
                    <button onClick={handlePostImage}>Publicar / Solicitar Orçamento</button>
                    <br />
                    {postedImages.map((image, index) => (
                        <img key={index} src={image} alt={`Posted Image ${index}`} />
                    ))}


                </div>
                <div className="img">

                </div>
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
export default Home;