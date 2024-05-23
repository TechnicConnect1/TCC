import React from 'react'
import './PainelControle.css'

export const PainelControle = () => {
    return (
        <div>
            <div className="painel-controle">
                <div className="painel-controle-container">
                    <div className="painel-item">
                        <h3>Serviços concluídos:</h3>

                        <div className="concluidos">
                            <span className="concluido">10</span>
                        </div>
                    </div>

                    <div className="painel-item">
                        <h3>Serviços pendentes:</h3>

                        <div className="pendentes service-pendente">
                            <span className="pendente color-pendente">3</span>
                        </div>
                    </div>

                    <div className="painel-item">
                        <h3>Ganhos acumulados: </h3>

                        <div className="pendentes service-pendente ganhos">
                            <span className="ganho">R$ 2500,00</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
