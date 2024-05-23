import React from 'react'
import "./Historicoservico.css"

export const HistoricoServico = () => {
    return (
        <div>
            <div className="historico-servico">
                <div className="historico-item">
                    <span className="data">Data:  <span className="dataServico">09/05/2024</span> </span>
                </div>


                <div className="historico-item">
                    <span className="desc">Descriçao:  <span className="descText">Substituição de tela de smartphone</span> </span>
                </div>

                <div className="historico-item">
                    <span className="status">Status:  <span className="statusName">Concluído</span></span>
                </div>
            </div>
        </div>
    )
}
