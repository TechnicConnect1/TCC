import React from 'react'
import "./Pagamento.css"
import { Sidebar } from '../../../components/sidebar/Sidebar'

export const Pagamento = () => {
  return (
    
    <main className='page-wrapper'>

      <Sidebar />

      {/* lado direito conteudo da página */}
      <div className="content-wrapper">
          <h1>Pagamento</h1>
      </div>
    </main>
  )
}
