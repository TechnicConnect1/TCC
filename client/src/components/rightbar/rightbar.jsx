import React from 'react'
import "./rightbar.css"
import blog1 from "../../assets/images/blog01.png";
import blog2 from "../../assets/images/blog02.png";
import blog3 from "../../assets/images/blog03.png";
import blog4 from "../../assets/images/blog04.png";
import { FaUser, FaHistory } from "react-icons/fa";

export const Rightbar = () => {
    return (
        <div>
            <div className="right-bar">
                <div className="right-bar-content">

                    <div className="right-bar-blogs">
                        <div className="blog-item">
                            <div className="imagem-blog">
                                <img src={blog1} alt="" className='img-blog' />
                            </div>

                            <div className="title-blog">
                               <p>Como escolher um técnico confiável para o reparo do seu aparelho?</p>
                            </div>
                        </div>

                        <div className="blog-item">
                            <div className="imagem-blog">
                                <img src={blog2} alt="" className='img-blog' />
                            </div>

                            <div className="title-blog">
                               <p>Como escolher um técnico confiável para o reparo do seu aparelho?</p>
                            </div>
                        </div>

                        <div className="blog-item">
                            <div className="imagem-blog">
                                <img src={blog4} alt="" className='img-blog' />
                            </div>

                            <div className="title-blog">
                               <p>Como escolher um técnico confiável para o reparo do seu aparelho?</p>
                            </div>
                        </div>

                        <div className="blog-item">
                            <div className="imagem-blog">
                                <img src={blog3} alt="" className='img-blog' />
                            </div>

                            <div className="title-blog">
                               <p>Como escolher um técnico confiável para o reparo do seu aparelho?</p>
                            </div>
                        </div>

                    </div>

                    

                </div>

                <div className="comentarios">
                    <h2>Comentários de usuários</h2>
                    <div className="comentarios-content">
                        <div className="comentario-item">
                            <div className="user-icon-avatar">
                                <FaUser className='icon'/>
                                <p>Rafael Ferreira</p>
                            </div>

                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, praesentium numquam ipsum necessitatibus ex non officia voluptatum</p>
                        </div>

                        <div className="comentario-item">
                            <div className="user-icon-avatar">
                                <FaUser className='icon'/>
                                <p>Rafael Ferreira</p>
                            </div>

                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, praesentium numquam ipsum necessitatibus ex non officia voluptatum</p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
