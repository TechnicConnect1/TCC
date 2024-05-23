import React from 'react'
import "./OrcamentoTecnico.css"
import { Sidebar } from '../../../components/sidebar/Sidebar'

export const OrcamentoTecnico = () => {
    return (

        <main className='page-wrapper'>

            <Sidebar />

            {/* lado direito conteudo da página */}
            <div className="content-wrapper">
               <div className="container-orcamento-tecnico">
                    <h1>Orçamentos solicitados</h1>
               </div>
            </div>
        </main>
    )
}
