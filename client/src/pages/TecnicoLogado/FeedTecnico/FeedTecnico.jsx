import React from 'react'
import "./FeedTecnico.css"
import { Sidebar } from '../../../components/sidebar/Sidebar'
import { Outlet } from 'react-router-dom'
import { PostagemTecnico } from '../../../components/PostagemTecnico/PostagemTecnico'
import { Post } from '../../../components/Post/Post'
import blog1 from "../../../assets/images/blog01.png";
import blog2 from "../../../assets/images/blog02.png";
import blog3 from "../../../assets/images/blog03.png";
import blog4 from "../../../assets/images/blog04.png";
import { FaUser, FaHistory } from "react-icons/fa";
import { PostTecnico } from '../../../components/PostTecnico/PostTecnico'
export const FeedTecnico = () => {
  return (

    <main className='page-wrapper'>

      <Sidebar />

      {/* lado direito conteudo da página */}
      <div className="content-wrapper feed-tecnico">
        <div className="feed-tecnico-container">
          <PostagemTecnico />

          <Post showContactButton={true} />
          <PostTecnico />
        </div>

        <div className="feed-tecnico-right">
          <div className="right-bar">
            <div className="right-bar-content">

              <div className="right-bar-blogs">
                <h2><span class="underline">Ultim</span>as nóticias</h2>
                <div className="blog-item">
                  <div className="imagem-blog">
                    <img src={blog1} alt="" className='img-blog' />
                  </div>

                  <div className="title-blog">
                    <p>Ferramentas essenciais que todo técnico de reparo deve ter.</p>
                  </div>
                </div>

                <div className="blog-item">
                  <div className="imagem-blog">
                    <img src={blog2} alt="" className='img-blog' />
                  </div>

                  <div className="title-blog">
                    <p>Dicas para diagnosticar problemas comuns em smartphones.</p>
                  </div>
                </div>

                <div className="blog-item">
                  <div className="imagem-blog">
                    <img src={blog4} alt="" className='img-blog' />
                  </div>

                  <div className="title-blog">
                    <p>Como aprimorar suas habilidades de soldagem em placas-mãe.</p>
                  </div>
                </div>

                <div className="blog-item">
                  <div className="imagem-blog">
                    <img src={blog3} alt="" className='img-blog' />
                  </div>

                  <div className="title-blog">
                    <p>Os segredos para uma substituição de tela perfeita.</p>
                  </div>
                </div>

              </div>



            </div>

            <div className="comentarios">
              <h2>Avaliações de usuários</h2>
              <div className="comentarios-content">
                <div className="comentario-item">
                  <div className="user-icon-avatar">
                    <FaUser className='icon' />
                    <p>Amanda</p>
                  </div>

                  <p>Excelente serviço! Meu smartphone foi consertado rapidamente e está funcionando perfeitamente.</p>
                </div>

                <div className="comentario-item">
                  <div className="user-icon-avatar">
                    <FaUser className='icon' />
                    <p>Lucas Oliveira</p>
                  </div>

                  <p>Profissional de confiança! Recomendo para todos que precisam de reparos em eletrônicos.</p>
                </div>

                <div className="comentario-item">
                  <div className="user-icon-avatar">
                    <FaUser className='icon' />
                    <p>Fernanda Costa</p>
                  </div>

                  <p>Atendimento excelente e preço justo. Fiquei muito satisfeita com o reparo do meu celular.</p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
