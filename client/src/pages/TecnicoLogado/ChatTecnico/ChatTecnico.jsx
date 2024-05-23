import React from 'react'
import "./ChatTecnico.css"
import { Sidebar } from '../../../components/sidebar/Sidebar'

export const ChatTecnico = () => {
    return (
        <main className='page-wrapper'>
            
            <Sidebar />

            {/* lado direito conteudo da página */}
            <div className="content-wrapper">
                <h1>Chat Técnico</h1>
            </div>
        </main>
    )
}
