import React from 'react'
import "./CardOrcamento.css"

export const CardOrcamento = () => {
    return (
        <div>
            <div className="card-orcamento">
                <div className="historico-item">
                    <span className="label">Número: <span className="resposta">12345</span></span>
                </div>

                <div className="historico-item">
                    <span className="label">Técnico: <span className="resposta">João Silva</span></span>
                </div>

                <div className="historico-item">
                    <span className="label">Data de solicitação: <span className="resposta">Substituição de tela do smartphone</span></span>
                </div>


                <div className="bottom-orcamento">
                    <div className="left-card">
                        <div className="historico-item">
                            <span className="label">Preço: <span className="resposta">R$250,00</span></span>
                        </div>

                        <div className="historico-item">
                            <span className="status">Status:  <span className="statusName">Concluído</span></span>
                        </div>
                    </div>

                    <div className="right-card">
                        <button>Ver detalhes</button>
                    </div>

                </div>
            </div>
        </div>
    )
}
