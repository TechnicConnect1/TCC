import React from 'react'
import "./BaseLayout.scss"
import { Outlet } from 'react-router-dom'
import { Sidebar } from '../../components/sidebar/Sidebar'
export const BaseLayout = () => {
    return (

        <main className='page-wrapper'>
           
            <Sidebar />

            {/* lado direito conteudo da página */}
            <div className="content-wrapper">
                <Outlet />
            </div>
        </main>
    )
}
