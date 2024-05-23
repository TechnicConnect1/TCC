import React from 'react'
import "./Servicos.css"
import { Sidebar } from '../../../components/sidebar/Sidebar'
import { Table } from '../../../components/Table/Table'
import StarRating from '../../../components/Stars/StarRating'
import nouser from "../../../assets/images/usuario.png";
import { Grafico } from '../../../components/grafico-tecnico/Grafico'

export const ServicosTecnico = () => {
  return (

    <main className='page-wrapper page-color'>

      <Sidebar />

      {/* lado direito conteudo da página */}
      <div className="content-wrapper servico-tecnico">
        <div className="cards-servicos-2">
          <div className="cards-2">
            <div className="div-cards">
              <div className="card-servico-2">
                <p>Serviços concluídos</p>

                <span className="valor">50</span>
              </div>

              <div className="card-servico-2 card-pendente">
                <p>Serviços pendentes</p>

                <span className="valor">50</span>
              </div>

              <div className="card-servico-2 card-ganhos">
                <p>Ganho acumulado</p>

                <span className="valor">10.584</span>
              </div>
            </div>

            <div className="grafico-div">
              <Grafico />
            </div>

          </div>

          <div className="card-perfil-2">
            <div className="card-perfil-container-2">
              <div className="tecnico-perfil-profile">
                <img src={nouser} alt="" />
              </div>

              <div className="nome-tecnico">
                <h3>Rafael Ferreira de Oliveira</h3>
              </div>

              <div className="tecnico-avaliacao-2">
                <p>Com base em <span>55</span> avaliações</p>
                <StarRating totalStars={5} readOnly={true} initialRating={5} />
              </div>
            </div>
          </div>

        </div>

        <div className="container-tecnico-historico-servico">
          <Table />
        </div>


      </div>
    </main>
  )
}
